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

    event.create('ancient_cobblestone')
    .material('stone')
    .hardness(1.0)
    .displayName('Ancient Cobblestone')
    .textureAll('ironberry:block/ancient_cobblestone')

    event.create('instability')
    .material('honey')
    .hardness(0.0)
    .displayName('🔥Instability🔥')
    .model('ironberry:block/instability')
    .noDrops()

	event.create('machine_frame')
    .material('lantern')
    .hardness(1.0)
    .displayName('Machine Frame')
    .model('ironberry:block/machine_frame')

})
