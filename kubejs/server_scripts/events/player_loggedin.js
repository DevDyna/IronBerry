PlayerEvents.loggedIn(event => {
        event.server.runCommandSilent(`gamerule doMobSpawning false`)
        event.server.runCommandSilent(`gamerule doTraderSpawning false`)
        event.server.runCommandSilent(`gamerule doFireTick true`)
        //event.server.runCommandSilent(`gamerule doDaylightCycle false`)
        //event.server.runCommandSilent('time set noon')
})