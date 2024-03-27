StartupEvents.registry('block', event => {

    //blank block
    event.create('blank')
    .soundType('chain')
    .hardness(1.0)
    .displayName('Plated Casing')
    .textureAll('ironberry:block/blank')

    event.create('casing')
    .soundType('chain')
    .hardness(1.1)
    .displayName('Rustic Core')
    .textureAll('ironberry:block/casing')

    event.create('machine')
    .soundType('chain')
    .hardness(0.95)
    .displayName('Dark Casing')
    .textureAll('ironberry:block/machine')

    event.create('ancient_cobblestone')
    .soundType('stone')
    .hardness(1.0)
    .displayName('Ancient Cobblestone')
    .textureAll('ironberry:block/ancient_cobblestone')

    event.create('instability')
    .soundType('honey_block')
    .hardness(0.0)
    .displayName('🔥Instability🔥')
    .model('ironberry:block/instability')
    .noDrops()

    event.create('machine_frame')
    .soundType('chain')
    .hardness(1.25)
    .displayName('Machine Frame')
    .model('ironberry:block/deep_machine_frame')

    event.create('incompleted_machine_frame')
    .renderType('cutout')
    .defaultCutout()
    .soundType('chain')
    .hardness(0.75)
    .displayName('Machine Frame Mold')
    .model('ironberry:block/te_machine_frame')

})
