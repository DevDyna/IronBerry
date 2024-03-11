StartupEvents.registry('item', event => {

    event.create('scaffoldingdelta')
    .texture('ironberry:item/sd')

    event.create('vanillaexpansion')
    .texture('ironberry:item/ve')

    ////staff only
    event.create('wip')
    .texture('cofh_core:gui/icons/icon_cancel')
    .displayName('WorkInProgress')

    event.create('rose')
    .texture('ironberry:item/rose')
    .displayName('Rose')
    .glow(true)

    event.create('lore')
    .texture('ironberry:item/lore')
    .displayName('The LORE')

    event.create('raw_plastic')
    .texture('ironberry:item/raw_plastic')
    .displayName('Raw Plastic')

    //gems
    event.create('alpha')
    .texture('ironberry:item/gems/alpha')
    .displayName('Alpha')

    event.create('beta')
    .texture('ironberry:item/gems/beta')
    .displayName('Beta')

    event.create('aquamarine')
    .texture('ironberry:item/gems/aquamarine')
    .displayName('Aquamarine')

    event.create('jade')
    .texture('ironberry:item/gems/jade')
    .displayName('Jade')

    event.create('iolite')
    .texture('ironberry:item/gems/iolite')
    .displayName('Iolite')

    event.create('topaz')
    .texture('ironberry:item/gems/topaz')
    .displayName('Topaz')

    //grave guardian spawn
    event.create('grave_spawn')
    .texture('ironberry:item/grave_spawn_egg')
    .displayName('Grave Guardian Spawn Egg')
    .glow(true)

    event.create('scroll')
    .texture('ironberry:item/scroll')
    .displayName('Null Scroll')

    event.create('omni')
    .texture('ironberry:item/omni')
    .displayName('OmniTablet')
    .glow(true)

    event.create('iron_rod')
    .texture('ironberry:item/iron_rod')
    .displayName('Iron Rod')

    event.create('soul')
    .texture('ironberry:item/soul')
    .displayName('Soul jar')

    event.create('ice_shard')
    .texture('ironberry:item/ice_shard')
    .displayName('Ice Shard')

    event.create('ore_bone_meal')
    .texture('ironberry:item/ore_bone_meal')
    .displayName('§eMineral Fertilizer')

    event.create('rich_bone_meal')
    .texture('ironberry:item/rich_bone_meal')
    .displayName('§aRich Fertilizer')

    //temporarly added , maybe on a future will removed if added https://github.com/capnkirok/Inventory-Pets/issues/555
    event.create('illuminati')
    .texture('inventorypets:item/illuminati_new')
    .displayName('§dIlluminati Yota')
    .glow(true)

    event.create('pre_compressed')
    .texture('ironberry:item/pre_compressed')
    .displayName('Precompressed Iron Ingot')

    event.create('scroll_safety')
    .texture('ironberry:item/scroll_a')
    .displayName('Scroll of Safety')
    .glow(true)

    event.create('scroll_discontinuity')
    .texture('ironberry:item/scroll_b')
    .displayName('Scroll of Discontinuity')
    .glow(true)

    event.create('raw_iron_nugget')
    .texture('ironberry:item/raw_iron_nugget')
    .displayName('Raw Iron Nugget')

    event.create('raw_gold_nugget')
    .texture('ironberry:item/raw_gold_nugget')
    .displayName('Raw Gold Nugget')

    event.create('raw_copper_nugget')
    .texture('ironberry:item/raw_copper_nugget')
    .displayName('Raw Copper Nugget')

    event.create('processor')
    .texture('ironberry:item/processor')
    .displayName('Menril MicroProcessor Chip')

    event.create('ritual_tablet')
    .texture('ironberry:item/ritual_tablet')
    .displayName(' Empty Ritual Tablet')

    event.create('boss_trophy')
    .texture('ironberry:item/boss_trophy')
    .displayName('Boss Trophy')

    event.create('miniboss_trophy')
    .texture('ironberry:item/miniboss_trophy')
    .displayName('MiniBoss Trophy')

    event.create('speed_base')
    .texture('ironberry:item/speed_base')
    .displayName('Speed Upgrade Base')

    event.create('quantity_base')
    .texture('ironberry:item/quantity_base')
    .displayName('Quantity Upgrade Base')

    event.create('silicon_plated')
    .texture('ironberry:item/silicon_plate')
    .displayName('Siliconed Plastic Plate')

    event.create('patina')
    .texture('ironberry:item/patina')
    .displayName('Patina')

    event.create('assembly_plate')
    .texture('ironberry:item/assembly_plate')
    .displayName('Programmable Printed Plate')

    event.create('printed_plate')
    .texture('ironberry:item/printed_plate')
    .displayName('Printed Plate')

    event.create('crook', 'hoe')
    .parentModel('ironberry:item/crook')
    .unstackable()
    .texture('ironberry:item/crook')
    .displayName('Wooden Crook')
    .tier('iron')
    .tag('forge:shears')
    .maxDamage(2048)

    event.create('paxel', 'paxel')
    .parentModel('ironberry:item/paxel')
    .unstackable()
    .texture('ironberry:item/paxel')
    .displayName('Pick-axe')
    .tier('iron')
    .maxDamage(16384)
    .tag('bookshelf:pickaxes')
    .tag('forge:tools/axes')
    .tag("forge:tools/pickaxes")
    .tag("forge:pickaxes")

    event.create('solidified_resin')
    .texture('ironberry:item/solidified_resin')
    .displayName('Solidified Refined Resin')

    event.create('plastic_mixture')
    .texture('ironberry:item/plastic_mixture')
    .displayName('Plastic Mixture')

    event.create('explosion')
    .texture('pneumaticcraft:gui/jei/explosion')

    event.create('upgrade_template')
    .texture('ironberry:item/upgrade_template')
    .displayName('Upgrade Base')

    event.create('uranium')
    .texture('ironberry:item/uranium')
    .displayName('Radioactive Uranium')

    event.create('thorium')
    .texture('ironberry:item/thorium')
    .displayName('Radioactive Thorium')

    event.create('base_augment')
    .texture('ironberry:item/base_augment')
    .displayName('Base Augment')

    event.create('base_module')
    .texture('ironberry:item/base_module')
    .displayName('Base Module')

    event.create('floreal_bone_meal')
    .texture('ironberry:item/floreal_bone_meal')
    .displayName('§dFloreal Fertilizer')

    event.create('lupenio')
    .texture('ironberry:item/lupenio')
    .displayName('§aLupenio')

    event.create('crystaltine')
    .texture('ironberry:item/crystaltine')
    .displayName('Crystaltine')
    .glow(true)

    event.create('cell_base')
    .texture("expatternprovider:item/infinity_cell")
    .displayName('Infinity Cell Holder')

    event.create('arsenic_lupenio')
    .texture('ironberry:item/arsenic_lupenio')
    .displayName('Arsenic Lupenio')

    event.create('garbage')
    .texture('ironberry:item/garbage')
    .displayName('Garbage')
    
})
