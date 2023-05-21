ServerEvents.recipes(event => {
    //stone cutter

    let scut = (result, input) => {
        for (let j = 0; j < input.length; j++) {
            for (let i = 0; i < result.length; i++) {
                event.stonecutting(
                    result[i],
                    input[j])
            }
        }
    }

    //servos
    scut([
            'thermal:energy_limiter_attachment',
            'thermal:turbo_servo_attachment',
            'thermal:filter_attachment',
            'thermal:servo_attachment',
        ],
        ['minecraft:paper', '#thermal:attachment', ])
    //thermal machines
    scut([
            'thermal:machine_bottler',
            'thermal:machine_crafter',
            'thermal:machine_insolator',
            'thermal:machine_chiller',
            'thermal:machine_press',
            'thermal:machine_refinery',
            'thermal:machine_crystallizer',
            'thermal:machine_pyrolyzer',
            'thermal:machine_crucible',
            'thermal:machine_furnace',
            'thermal:machine_sawmill',
            'thermal:machine_pulverizer',
            'thermal:machine_smelter',
            'thermal:machine_brewer',
            'thermal:machine_centrifuge',
        ],
        ['thermal:machine_frame', '#thermal:machines'])
    //thermal devices
    scut([
            'thermal:fluid_duct_windowed',
            'thermal:energy_duct',
            'thermal:fluid_duct',
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
        ],
        ['#thermal:devices', 'kubejs:blank'])
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
        ['kubejs:machine', '#tombstone:decorative_graves', ])
		
		scut(['tombstone:grave_dust'],['minecraft:lapis_lazuli'])
		
		
		
		
})
