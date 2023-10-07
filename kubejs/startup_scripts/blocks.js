StartupEvents.registry('block', event => {

	//blank block
	event.create('blank')
	.material('lantern')
	.hardness(1.0)
	.displayName('Plated Casing')
	.textureAll('ironberry:block/blank')
	
	event.create('casing')
	.material('lantern')
	.hardness(1.0)
	.displayName('Rustic Core')
	.textureAll('ironberry:block/casing')
	
	event.create('machine')
	.material('lantern')
	.hardness(1.0)
	.displayName('Dark Casing')
	.textureAll('ironberry:block/machine')
	
	event.create('instability')
	.material('honey')
	.hardness(0.0)
	.displayName('🔥Instability🔥')
	.model('ironberry:block/instability')
	.noDrops()
	
})