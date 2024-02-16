ServerEvents.recipes(event => {
    //stone cutter

    function scut(result, input){
        for (let j = 0; j < input.length; j++) {
            for (let i = 0; i < result.length; i++) {
                event.stonecutting(
                    result[i],
                    input[j]).id(RegX(input[j]+'_n'+i))
            }
        }
    }

	function switch_scut(io){
                event.stonecutting(io[0],io[1])
                event.stonecutting(io[1],io[0])
	}


    //servos
    scut([
            'thermal:energy_limiter_attachment',
            'thermal:turbo_servo_attachment',
            'thermal:filter_attachment',
            'thermal:servo_attachment',
        ],
        ['minecraft:paper', '#thermal:attachment', ])
    //item devices
    scut([
            'thermal:device_fisher',
            'thermal:device_soil_infuser',
            'thermal:device_composter',
            'thermal:device_collector',
            'thermal:device_rock_gen',
            'thermal:item_buffer',
            'bluepower:block_breaker',
            'bluepower:igniter',
            'bluepower:buffer',
            'bluepower:deployer',
            'bluepower:transposer',
            'bluepower:ejector',
        ],
        ['#ironberry:item_devices', 'kubejs:blank'])
    //prettypipes modules
    scut([
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
			'ppfluids:low_fluid_retrieval_module', 
			'ppfluids:low_fluid_extraction_module', 
			'ppfluids:medium_fluid_extraction_module', 
			'ppfluids:high_fluid_extraction_module', 
			'ppfluids:low_fluid_filter_module', 
			'ppfluids:medium_fluid_filter_module', 
			'ppfluids:high_fluid_filter_module', 
			'ppfluids:medium_fluid_retrieval_module', 
			'ppfluids:high_fluid_retrieval_module',
        ],
        ['prettypipes:blank_module', '#ironberry:module'])

    //tombstone
    scut([
            'tombstone:decorative_grave_cross',
            'tombstone:decorative_grave_normal',
            'tombstone:decorative_grave_original',
            'tombstone:decorative_subaraki_grave',
            'tombstone:decorative_grave_simple',
            'tombstone:decorative_tombstone',
        ],
        ['tombstone:dark_marble', '#tombstone:decorative_graves', ])

    //fluid devices
    scut([
            'thermal:fluid_duct',
            'thermal:fluid_duct_windowed',
            'cyclic:trash',
            'thermal:device_potion_diffuser',
            'thermal:device_water_gen',
            'thermal:fluid_cell',
            'thermal:device_hive_extractor',
            'thermal:device_tree_extractor',
			'thermal:device_xp_condenser',
        ],
        ['thermal:fluid_cell_frame', '#ironberry:fluid_devices', ])
    //energy devices
    scut([
            'thermal:charge_bench',
            'thermal:tinker_bench',
            'prettypipes:pressurizer',
            'thermal:energy_duct',
            'bluepower:engine',
            'thermal:energy_cell',
        ],
        ['thermal:energy_cell_frame', '#ironberry:energy_devices', ])

    //wrenches
    scut([
            'nuclearcraft:multitool',
            'thermal:wrench',
            'ae2:certus_quartz_wrench',
            'ae2:nether_quartz_wrench',
            'ae2:network_tool',
            'essentials:wrench',
            'integrateddynamics:wrench',
            'pipez:wrench',
            'cyclic:cable_wrench',

        ], ['minecraft:stick', '#ironberry:wrench_fix'])

    //saplings
    scut([
            'homespun:ironwood_sapling',
            'homespun:olive_sapling',
            'quark:blue_blossom_sapling',
            'quark:lavender_blossom_sapling',
            'quark:orange_blossom_sapling',
            'quark:pink_blossom_sapling',
            'quark:yellow_blossom_sapling',
            'quark:red_blossom_sapling',
            'quark:ancient_sapling',
            'minecraft:dark_oak_sapling',
            'minecraft:acacia_sapling',
            'minecraft:jungle_sapling',
            'minecraft:birch_sapling',
            'minecraft:spruce_sapling',
            'minecraft:oak_sapling',
			'thermal:rubberwood_sapling',
        ], ['#minecraft:saplings'])

//controller to link
	scut(['3x sophisticatedstorage:storage_link'],['sophisticatedstorage:controller'])

//trash recycle
	switch_scut(['cyclic:trash','thermal:machine_null_augment'])

	scut(['pneumaticcraft:logistics_module', 'pneumaticcraft:regulator_tube_module', 'pneumaticcraft:air_grate_module', 'pneumaticcraft:flow_detector_module', 'pneumaticcraft:pressure_gauge_module', 'pneumaticcraft:safety_tube_module', 'pneumaticcraft:vacuum_module', 'pneumaticcraft:redstone_module', 'pneumaticcraft:thermostat_module', 'pneumaticcraft:charging_module'],
	['pneumaticcraft:ingot_iron_compressed','#ironberry:pnc_modules'])


    switch_scut(['mekanismgenerators:reactor_glass', 'mekanism:structural_glass'])

scut([
	'inventorypets:pet_wither',
	'inventorypets:pet_slime',
	'inventorypets:pet_pufferfish',
	'inventorypets:pet_shield',
	'inventorypets:pet_heart',
	'inventorypets:pet_dubstep',
	'inventorypets:pet_torch',
	'inventorypets:pet_silverfish',
	'inventorypets:pet_pixie',
	'inventorypets:pet_cheetah',
	'inventorypets:pet_quiver',
	'inventorypets:pet_banana',
	'inventorypets:pet_jukebox',
	'inventorypets:pet_furnace',
	'inventorypets:pet_enchanting_table',
	'inventorypets:pet_double_chest',
	'inventorypets:pet_crafting_table',
	'inventorypets:pet_chest',
	'inventorypets:pet_brewing_stand',
	'inventorypets:pet_bed',
	'inventorypets:pet_anvil',
	'inventorypets:pet_squid',
	'inventorypets:pet_sheep',
	'inventorypets:pet_pig',
	'inventorypets:pet_ocelot',
	'inventorypets:pet_mooshroom',
	'inventorypets:pet_cow',
	'inventorypets:pet_chicken',
	'inventorypets:pet_spider',
	'inventorypets:pet_snow_golem',
	'inventorypets:pet_iron_golem',
	'inventorypets:pet_creeper',
	'inventorypets:pet_pacman',
],['#ironberry:pets','exoticbirds:phoenix_egg'])




scut(['luggage:luggage'],['#ironberry:storage_box'])

scut(['cyclic:location_data', 'cyclic:blockstate_data', 'cyclic:settings_data', 'cyclic:shape_data','cyclic:filter_data', 'cyclic:entity_data', 'cyclic:sound_data'],['#ironberry:magic_cards','cyclic:carbon_paper'])



scut(['nuclearcraft:glowstone_heat_sink', 'nuclearcraft:netherite_heat_sink', 'nuclearcraft:slime_heat_sink', 'nuclearcraft:gold_heat_sink', 'nuclearcraft:liquid_nitrogen_heat_sink', 'nuclearcraft:lithium_heat_sink', 'nuclearcraft:carobbiite_heat_sink', 'nuclearcraft:enderium_heat_sink', 'nuclearcraft:end_stone_heat_sink', 'nuclearcraft:redstone_heat_sink', 'nuclearcraft:emerald_heat_sink', 'nuclearcraft:nether_brick_heat_sink', 'nuclearcraft:fluorite_heat_sink', 'nuclearcraft:lapis_heat_sink', 'nuclearcraft:obsidian_heat_sink', 'nuclearcraft:purpur_heat_sink', 'nuclearcraft:cryotheum_heat_sink', 'nuclearcraft:liquid_helium_heat_sink', 'nuclearcraft:arsenic_heat_sink', 'nuclearcraft:quartz_heat_sink', 'nuclearcraft:magnesium_heat_sink', 'nuclearcraft:villiaumite_heat_sink', 'nuclearcraft:boron_heat_sink', 'nuclearcraft:silver_heat_sink', 'nuclearcraft:iron_heat_sink', 'nuclearcraft:diamond_heat_sink', 'nuclearcraft:lead_heat_sink', 'nuclearcraft:water_heat_sink', 'nuclearcraft:copper_heat_sink', 'nuclearcraft:tin_heat_sink', 'nuclearcraft:prismarine_heat_sink', 'nuclearcraft:aluminum_heat_sink', 'nuclearcraft:manganese_heat_sink'],
['nuclearcraft:empty_heat_sink','#ironberry:heat_coolers'])



})
