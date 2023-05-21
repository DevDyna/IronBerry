//instability placement
BlockEvents.placed(event => {

    let ray = event.player.rayTrace(5).block
        let x = ray.x
        let y = ray.y
        let z = ray.z

        if (event.getBlock() == 'kubejs:instability') {
            let block = event.getBlock()
                let player = event.getPlayer()
                let pos = block.getPos()
                Utils.server.runCommandSilent(`/execute at ${event.player.uuid} run setblock ${x} ${y} ${z} obsidian`)
                block.createExplosion().explode()
        }

})
//grave_guardian
ItemEvents.rightClicked(event => {
    let item = event.getItem()
        let inv = event.player.inventory

        if (item == 'kubejs:grave_spawn'
             && inv.count(item)) {
            if (!event.player.isCreative()) {
                inv.extractItem(inv.find('kubejs:grave_spawn'), 1, false)
            }

            try {
                let ray = event.player.rayTrace(5)
                    let x = ray.block.x
                    let y = ray.block.y + 1
                    let z = ray.block.z
                    Utils.server.runCommandSilent(`/execute at ${event.player.uuid} run summon tombstone:grave_guardian ${x} ${y} ${z}`)
            } catch (error) {}

        }

})
