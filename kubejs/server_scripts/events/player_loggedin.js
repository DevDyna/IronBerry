PlayerEvents.loggedIn(e => {
    e.server.schedule(10, c => e.server.runCommandSilent(`execute as ${e.player.name} run kubejs reload client_scripts`))
})