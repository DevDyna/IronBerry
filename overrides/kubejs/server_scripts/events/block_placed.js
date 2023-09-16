//instability placement
BlockEvents.placed('kubejs:instability', event => {
        event.block.set('minecraft:obsidian')
		event.block.createExplosion().explode()
})
