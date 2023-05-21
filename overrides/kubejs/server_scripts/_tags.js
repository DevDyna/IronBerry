ServerEvents.tags('item', event => {
    //integrateddynamics remove all tags to prevent show as #minecraft:logs and more
    event.removeAllTagsFrom('integrateddynamics:menril_log')
    event.removeAllTagsFrom('integrateddynamics:menril_log_stripped')
    event.removeAllTagsFrom('integrateddynamics:menril_log_filled')
    event.removeAllTagsFrom('integrateddynamics:menril_wood')
    event.removeAllTagsFrom('integrateddynamics:menril_wood_stripped')
    event.removeAllTagsFrom('integrateddynamics:menril_leaves')
    event.removeAllTagsFrom('integrateddynamics:menril_sapling')
    event.removeAllTagsFrom('integrateddynamics:menril_planks')
    event.removeAllTagsFrom('homespun:ironwood_wood')

    //recipe output side removed (as result)
    event.add('ironberry:output', [
            'homespun:salt',
            'minecraft:campfire',
            'ceramicbucket:ceramic_bucket',
            'reactive:scroll',
            'pedestals:upgrade_pedestal_cobblegen',
            '#thermal:machines',
            '#thermal:devices',
            '#thermal:attachment',
            'angelblockrenewed:angel_block',
            'angelring:angel_ring',
            'rootsclassic:fruit_salad',
            'homespun:redstone_acid',
            'homespun:ironwood_wood',
            'minecraft:furnace',
            '#tombstone:decorative_graves',
        ])

    //recipe input side removed (as ingrendient)
    event.add('ironberry:input', [
            'homespun:tiny_iron_dust',
        ])

    //recipe any side removed
    event.add('ironberry:any', [
            'homespun:crushing_tub',
            'homespun:tiny_iron_dust',
            '#forge:coins',
            'homespun:cast_iron_block',
        ])

    //JEI hide , recipe any side removed
    event.add('ironberry:disabled', [
            'integrateddynamics:bucket_menril_resin',
            'integrateddynamics:menril_log',
            'integrateddynamics:menril_log_stripped',
            'integrateddynamics:menril_log_filled',
            'integrateddynamics:menril_wood',
            'integrateddynamics:menril_wood_stripped',
            'integrateddynamics:menril_leaves',
            'integrateddynamics:menril_sapling',
            'integrateddynamics:menril_planks',
            'ironchest:crystal_chest',
            'ironchest:obsidian_chest',
            'ironchest:trapped_obsidian_chest',
            'ironchest:trapped_iron_chest',
            'ironchest:trapped_gold_chest',
            'ironchest:trapped_dirt_chest',
            'ironchest:trapped_diamond_chest',
            'ironchest:trapped_crystal_chest',
            'ironchest:trapped_copper_chest',
            'integrateddynamics:crystalized_menril_chunk',
            'integrateddynamics:menril_berries',
            'integrateddynamics:menril_door',
            'integrateddynamics:menril_torch',
            'integrateddynamics:menril_torch_stone',
            'integrateddynamics:menril_planks_stairs',
            'integrateddynamics:crystalized_menril_brick_stairs',
            'integrateddynamics:crystalized_menril_block_slab',
            'integrateddynamics:crystalized_menril_brick_slab',
            'integrateddynamics:crystalized_menril_block_stairs',
            'integratedterminals:menril_glass',
            'integrateddynamics:menril_slab',
            'integrateddynamics:menril_fence',
            'integrateddynamics:menril_fence_gate',
            'integrateddynamics:crystalized_menril_block',
            'integrateddynamics:crystalized_menril_brick',
            'integrateddynamics:bucket_menril_resin',
        ])

    //JEI hide item
    event.add('ironberry:hide', [
            'pneumaticcraft:reinforced_chest_kit',
            'pneumaticcraft:smart_chest_kit',
            'bluepower:silver_ingot',
            'bluepower:silver_block',
            'bluepower:half_block',
            'bluepower:cover',
            'bluepower:panel',
            'ironchest:diamond_to_crystal_chest_upgrade',
            'ironchest:wood_to_iron_chest_upgrade',
            'ironchest:diamond_to_obsidian_chest_upgrade',
        ])

    //crushing output uniform
    event.add('ironberry:crushing_output', [
            'minecraft:glowstone_dust',
            'minecraft:paper',
            'minecraft:redstone',
            'minecraft:ink_sac',
            'minecraft:glow_ink_sac'
        ])

    //bluepower alloyfurnace uniform
    event.add('ironberry:bluealloy', [
            'bluepower:alloyfurnace',
            'bluepower:blulectric_alloyfurnace'
        ])

    //cobblefordays uniform
    event.add('ironberry:cobblegen', [
            'cobblefordays:tier_1',
            'cobblefordays:tier_2',
            'cobblefordays:tier_3',
            'cobblefordays:tier_4',
            'cobblefordays:tier_5',
        ])

    //prettypipes modules
    event.add('ironberry:module', [
            'prettypipes:stack_size_module',
            'prettypipes:redstone_module',
            'prettypipes:filter_increase_modifier',
            'prettypipes:low_extraction_module',
            'prettypipes:medium_extraction_module',
            'prettypipes:high_extraction_module',
            'prettypipes:low_filter_module',
            'prettypipes:medium_filter_module',
            'prettypipes:high_filter_module',
            'prettypipes:low_speed_module',
            'prettypipes:medium_speed_module',
            'prettypipes:high_speed_module',
            'prettypipes:low_low_priority_module',
            'prettypipes:medium_low_priority_module',
            'prettypipes:high_low_priority_module',
            'prettypipes:low_high_priority_module',
            'prettypipes:medium_high_priority_module',
            'prettypipes:high_high_priority_module',
            'prettypipes:low_retrieval_module',
            'prettypipes:medium_retrieval_module',
            'prettypipes:high_retrieval_module',
            'prettypipes:low_crafting_module',
            'prettypipes:medium_crafting_module',
            'prettypipes:high_crafting_module',
            'prettypipes:damage_filter_modifier',
            'prettypipes:nbt_filter_modifier',
            'prettypipes:mod_filter_modifier',
            'prettypipes:tag_filter_modifier',
            'prettypipes:round_robin_sorting_modifier',
            'prettypipes:random_sorting_modifier',
        ])

    //thermal devices
    event.add('thermal:devices', [
            '#thermal:ducts',
            'thermal:device_potion_diffuser',
            'thermal:device_fisher',
            'thermal:device_soil_infuser',
            'thermal:device_composter',
            'thermal:device_hive_extractor',
            'thermal:device_tree_extractor',
            'thermal:device_nullifier',
            'thermal:device_water_gen',
            'thermal:device_collector',
            'thermal:device_rock_gen',
            'thermal:charge_bench',
            'thermal:tinker_bench',
            'thermal:item_buffer',
            'bluepower:block_breaker',
            'bluepower:igniter',
            'bluepower:buffer',
            'bluepower:deployer',
            'bluepower:transposer',
            'bluepower:ejector',
            'bluepower:engine',
            'prettypipes:item_terminal',
            'prettypipes:pressurizer',
        ])

    //thermal servos uniform
    event.add('thermal:attachment', [
            'thermal:energy_limiter_attachment',
            'thermal:turbo_servo_attachment',
            'thermal:filter_attachment',
            'thermal:servo_attachment',
        ])

    //reactive sources
    event.get('reactive:body_sources').removeAll()
    event.get('reactive:caustic_sources').removeAll()
    event.get('reactive:verdant_sources').removeAll()
    event.get('reactive:mind_sources').removeAll()
    event.removeAllTagsFrom('minecraft:fermented_spider_eye')
    event.add('reactive:body_sources', 'bluepower:blue_alloy_ingot')
    event.add('reactive:caustic_sources', 'bluepower:indigo_dye')
    event.add('reactive:verdant_sources', '#tombstone:seeds')
    event.add('reactive:mind_sources', 'minecraft:redstone')

    //ae2 cable unify
    event.add('ironberry:rate_8', [
            '#ae2:smart_cable',
            '#ae2:glass_cable',
            'ae2:drive',
            '#ae2:covered_cable',
            'ae2:chest',
            'ae2:spatial_pylon',
            'ae2:spatial_io_port',
            '#ae2:pattern_provider',
            '#ae2:interface',
        ])

    //ae2 dense cable unify
    event.add('ironberry:rate_32', [
            '#ae2:covered_dense_cable',
            '#ae2:smart_dense_cable',
            'ae2:quantum_ring',
            'ae2:quantum_link',
        ])

    event.add('ironberry:onlyforge_energy', [
            'ae2:inscriber',
            'ae2:quartz_fiber',
            'ae2things:advanced_inscriber',
            'ae2:energy_cell',
            'ae2:quartz_growth_accelerator',
            'ae2:creative_energy_cell',
            'ae2:vibration_chamber',
            'ae2:energy_acceptor',
            'ae2:molecular_assembler',
            'ae2:charger',
            'ae2:toggle_bus',
            'ae2:inverted_toggle_bus',
            'ae2:cable_energy_acceptor',
            'ae2:level_emitter',
            'ae2:energy_level_emitter',
            '#ae2:illuminated_panel',
            'ae2:storage_monitor',
        ])

    event.add('ironberry:cpu', [
            'ae2:crafting_unit',
            'ae2:crafting_accelerator',
            'ae2:1k_crafting_storage',
            'ae2:4k_crafting_storage',
            'ae2:16k_crafting_storage',
            'ae2:64k_crafting_storage',
            'ae2:crafting_monitor',
            'ae2:256k_crafting_storage',
        ])

    event.add('ironberry:req_1', [
            'ae2:chest',
            'ae2:wireless_access_point',
            'ae2:spatial_pylon',
            'ae2:spatial_io_port',
            'ae2:drive',
            '#ae2:pattern_provider',
            'ae2:spatial_anchor',
            '#ae2:interface',
            'ae2:annihilation_plane',
            'ae2:formation_plane',
            'ae2:export_bus',
            'ae2:import_bus',
            'ae2:storage_bus',
            'ae2:conversion_monitor',
            '#ironberry:p2p',
            'ae2:pattern_access_terminal',
            'ae2:pattern_encoding_terminal',
            'ae2:crafting_terminal',
            'ae2:terminal',
            '@merequester',
        ])

    event.add('ironberry:p2p', [
            'ae2:me_p2p_tunnel',
            'ae2:redstone_p2p_tunnel',
            'ae2:item_p2p_tunnel',
            'ae2:fluid_p2p_tunnel',
            'ae2:fe_p2p_tunnel',
            'ae2:light_p2p_tunnel'
        ])

    event.add('ironberry:blue_slabs', [
            'bluepower:half_block',
            'bluepower:cover',
            'bluepower:panel',
        ])

    event.add('ironberry:ae2_chests', [
            'ae2:sky_stone_chest',
            'ae2:smooth_sky_stone_chest'
        ])

    event.add('ironberry:blue_gems', [
            'bluepower:green_sapphire_gem',
            'bluepower:amethyst_gem',
            'bluepower:ruby_gem',
            'bluepower:sapphire_gem'
        ])

})

/* ServerEvents.tags('fluid', event => {

event.add('ironberry:hide', [
'integrateddynamics:menril_resin',
])

event.add('ironberry:disabled', [
])

}) */
