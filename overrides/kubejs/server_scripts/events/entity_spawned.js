// priority: 1	
EntityEvents.spawned(event => {
    if (data.entity.banned.includes(event.entity.type))
        event.cancel()
})
