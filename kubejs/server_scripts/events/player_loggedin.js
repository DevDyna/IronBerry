PlayerEvents.loggedIn(event => {
        event.server.runCommandSilent(`gamerule doMobSpawning false`)
        event.server.runCommandSilent(`gamerule doTraderSpawning false`)
        event.server.runCommandSilent(`gamerule doWeatherCycle false`)
})