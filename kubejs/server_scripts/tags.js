//priority 100
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

    event.add('reactive:caustic_sources', 'bluepower:ruby_gem')
    event.add('reactive:verdant_sources', 'bluepower:green_sapphire_gem')
    event.add('reactive:mind_sources', 'bluepower:amethyst_gem')
    event.add('reactive:soul_sources', 'bluepower:sapphire_gem')

	//twilight activator
	event.remove('twilightforest:portal/activator','minecraft:diamond')
	event.add('twilightforest:portal/activator','tombstone:soul_receptacle')
	
    //remove indigo
    event.removeAllTagsFrom('bluepower:indigo_flower')

    //include lost_tablet to magic_tablets
    event.add('tombstone:magic_tablets', 'tombstone:lost_tablet')

    //tablets on var data
    event.get('tombstone:magic_tablets').getObjectIds().forEach(item => {
        data.item.tablet.push(item)
    })

    event.remove('minecraft:saplings', [
            'ars_nouveau:green_archwood_sapling',
            'ars_nouveau:red_archwood_sapling',
            'ars_nouveau:purple_archwood_sapling',
            'ars_nouveau:blue_archwood_sapling'])

    //----------------------------------------------------------------//

    //tombstone tags
    NoTag(event, [
            'tombstone:voodoo_poppet_ingredients',
            'tombstone:voodoo_poppet_ingredient_suffocation',
            'tombstone:voodoo_poppet_ingredient_burn',
            'tombstone:voodoo_poppet_ingredient_lightning',
            'tombstone:voodoo_poppet_ingredient_fall',
            'tombstone:voodoo_poppet_ingredient_cold',
        ])

    event.add('tombstone:voodoo_poppet_ingredients', [
            '#tombstone:voodoo_poppet_ingredient_suffocation',
            '#tombstone:voodoo_poppet_ingredient_burn',
            '#tombstone:voodoo_poppet_ingredient_lightning',
            '#tombstone:voodoo_poppet_ingredient_fall',
            '#tombstone:voodoo_poppet_ingredient_cold',
        ])

    event.add('tombstone:voodoo_poppet_ingredient_suffocation', 'tombstone:tablet_of_cupidity')

    event.add('tombstone:voodoo_poppet_ingredient_burn', 'tombstone:tablet_of_recall')

    event.add('tombstone:voodoo_poppet_ingredient_lightning', 'tombstone:tablet_of_home')

    event.add('tombstone:voodoo_poppet_ingredient_fall', [
            'tombstone:lost_tablet',
            'kubejs:omni'
        ])

    event.add('tombstone:voodoo_poppet_ingredient_cold', 'tombstone:tablet_of_assistance')

    //recipe output side removed (as result)
    event.add('ironberry:output', [
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
	
	'gateways:gate_pearl',
	'sculktransporting:speed_modifier_tier_1', 
	'sculktransporting:speed_modifier_tier_2', 
	'sculktransporting:speed_modifier_tier_3', 
	'sculktransporting:speed_modifier_tier_4', 
	'sculktransporting:quantity_modifier_tier_1', 
	'sculktransporting:quantity_modifier_tier_3', 
	'sculktransporting:quantity_modifier_tier_2',
	'sculktransporting:sculk_emitter', 'sculktransporting:sculk_receiver', 'sculktransporting:sculk_transmitter', 'sculktransporting:sculk_barrel',
	'pipez:item_pipe', 
	'pipez:energy_pipe', 
	'pipez:gas_pipe', 
	'pipez:fluid_pipe', 
	'pipez:universal_pipe',
			'jetboots:armor_core', 
			'ars_nouveau:jump_ring', 
			'jetboots:rocket_boots', 
			'jetboots:shock_absorber_upgrade',
            'ars_nouveau:ritual_brazier',
            'ars_nouveau:potion_melder',
            'ars_nouveau:relay_splitter',
            'ars_nouveau:relay_warp',
            'ars_nouveau:brazier_relay',
            'ars_nouveau:belt_of_levitation',
            'ars_nouveau:drygmy_charm',
            'ars_nouveau:belt_of_unstable_gifts',
            'ars_nouveau:lingering_flask_cannon',
            'ars_nouveau:scryers_oculus',
            'ars_nouveau:potion_flask_extend_time',
            'ars_nouveau:potion_flask_amplify',
            'ars_nouveau:potion_flask',
            'ars_nouveau:worn_notebook',
            'ars_nouveau:dominion_wand',
            'ars_nouveau:storage_lectern',
            'ars_nouveau:magebloom_crop',
            'ars_nouveau:orange_sbed',
            'ars_nouveau:void_jar',
            'ars_nouveau:jar_of_light',
            '#ironberry:gift_loot',
            '#ironberry:ritual_tablets',
            'twilightforest:uncrafting_table',
            'tombstone:voodoo_poppet',
            'integratedtunnels:part_interface_item',
            'integratedtunnels:part_importer_item',
            'integratedtunnels:part_exporter_item',
            'integratedtunnels:part_interface_filter_item',
            'integratedtunnels:part_interface_fluid',
            'integratedtunnels:part_importer_fluid',
            'integratedtunnels:part_exporter_fluid',
            'integratedtunnels:part_interface_filter_fluid',
            'integratedtunnels:part_interface_energy',
            'integratedtunnels:part_importer_energy',
            'integratedtunnels:part_exporter_energy',
            'integratedtunnels:part_interface_filter_energy',
            'integrateddynamics:squeezer',
            'integrateddynamics:drying_basin',
            'integrateddynamics:mechanical_squeezer',
            'integrateddynamics:mechanical_drying_basin',
            'farmersdelight:organic_compost',
            'minecraft:nether_wart',
            'exoticbirds:hummingbird_feeder',
            'cyclic:trash',
            'sophisticatedstorage:advanced_magnet_upgrade',
            'sophisticatedstorage:advanced_compacting_upgrade',
            'sophisticatedstorage:compacting_upgrade',
            'sophisticatedstorage:storage_link',
            'quark:sturdy_stone',
            '#tombstone:grave_marbles',
            'tombstone:fishing_rod_of_misadventure',
            'homespun:salt',
            'minecraft:campfire',
            'ceramicbucket:ceramic_bucket',
            'reactive:scroll',
            'pedestals:upgrade_pedestal_cobblegen',
            '#thermal:machines',
            '#thermal:ducts',
            '#thermal:item_devices',
            '#thermal:attachment',
            'rootsclassic:fruit_salad',
            'homespun:redstone_acid',
            'minecraft:furnace',
            '#ironberry:item_devices',
            '#ironberry:fluid_devices',
            '#ironberry:energy_devices',
            '#ironberry:wrench_fix',
            '#tombstone:magic_books',
            'ae2:entropy_manipulator',
            'integrateddynamics:variablestore',
        ])

    //recipe input side removed (as ingrendient)
    event.add('ironberry:input', [
            'pedestals:upgrade_pedestal_base',
            'homespun:tiny_iron_dust',
            'tombstone:essence_of_undeath',
            'ars_nouveau:blank_parchment',
        ])

    //recipe any side removed
    event.add('ironberry:any', [
            'homespun:crushing_tub',
            'homespun:tiny_iron_dust',
            '#forge:coins',
            'homespun:cast_iron_block',
            '#forge:ores',
        ])

    //JEI hide , recipe any side removed
    event.add('ironberry:disabled', [
			'jetboots:engine_upgrade', 'jetboots:muffled_upgrade', 'jetboots:underwater_upgrade', 'jetboots:thruster_upgrade', 'jetboots:jetboots', 'jetboots:guardian_pants', 'jetboots:guardian_helmet', 'jetboots:guardian_jacket',
			'pipez:improved_upgrade', 'pipez:advanced_upgrade', 'pipez:ultimate_upgrade', 'pipez:infinity_upgrade',
            'ars_nouveau:scribes_table',
            'ars_nouveau:abjuration_essence', 'ars_nouveau:water_essence', 'ars_nouveau:manipulation_essence', 'ars_nouveau:earth_essence', 'ars_nouveau:fire_essence', 'ars_nouveau:conjuration_essence', 'ars_nouveau:air_essence',
            'ars_nouveau:imbuement_chamber',
            'ars_nouveau:glyph_cold_snap', 'ars_nouveau:glyph_summon_decoy', 'ars_nouveau:glyph_projectile', 'ars_nouveau:glyph_infuse', 'ars_nouveau:glyph_hex', 'ars_nouveau:glyph_underfoot', 'ars_nouveau:glyph_linger', 'ars_nouveau:glyph_light', 'ars_nouveau:glyph_dispel', 'ars_nouveau:glyph_delay', 'ars_nouveau:glyph_extract', 'ars_nouveau:glyph_slowfall', 'ars_nouveau:glyph_pierce', 'ars_nouveau:glyph_pull', 'ars_nouveau:glyph_sense_magic', 'ars_nouveau:glyph_wind_shear', 'ars_nouveau:glyph_craft', 'ars_nouveau:glyph_explosion', 'ars_nouveau:glyph_flare', 'ars_nouveau:glyph_rune', 'ars_nouveau:glyph_summon_undead', 'ars_nouveau:glyph_break', 'ars_nouveau:glyph_accelerate', 'ars_nouveau:glyph_orbit', 'ars_nouveau:glyph_extend_time', 'ars_nouveau:glyph_decelerate', 'ars_nouveau:glyph_aoe', 'ars_nouveau:burst', 'ars_nouveau:glyph_self', 'ars_nouveau:glyph_summon_vex', 'ars_nouveau:glyph_summon_steed', 'ars_nouveau:glyph_wall', 'ars_nouveau:glyph_freeze', 'ars_nouveau:glyph_gust', 'ars_nouveau:glyph_harvest', 'ars_nouveau:glyph_place_block',
            'ars_nouveau:glyph_interact', 'ars_nouveau:glyph_ender_inventory', 'ars_nouveau:glyph_intangible', 'ars_nouveau:glyph_duration_down', 'ars_nouveau:glyph_redstone_signal', 'ars_nouveau:glyph_sensitive', 'ars_nouveau:glyph_fell', 'ars_nouveau:glyph_exchange', 'ars_nouveau:glyph_fangs', 'ars_nouveau:glyph_leap', 'ars_nouveau:glyph_glide', 'ars_nouveau:glyph_heal', 'ars_nouveau:glyph_bounce', 'ars_nouveau:glyph_amplify', 'ars_nouveau:glyph_harm', 'ars_nouveau:glyph_ignite', 'ars_nouveau:glyph_animate_block', 'ars_nouveau:glyph_blink', 'ars_nouveau:glyph_rotate', 'ars_nouveau:glyph_launch', 'ars_nouveau:glyph_smelt', 'ars_nouveau:glyph_pickup', 'ars_nouveau:glyph_lightning', 'ars_nouveau:glyph_conjure_water', 'ars_nouveau:glyph_touch', 'ars_nouveau:glyph_evaporate', 'ars_nouveau:glyph_crush', 'ars_nouveau:glyph_snare', 'ars_nouveau:glyph_split', 'ars_nouveau:glyph_firework', 'ars_nouveau:glyph_gravity', 'ars_nouveau:glyph_dampen', 'ars_nouveau:glyph_name', 'ars_nouveau:glyph_summon_wolves', 'ars_nouveau:glyph_grow', 'ars_nouveau:glyph_cut',
            'ars_nouveau:void_prism', 'ars_nouveau:rotating_spell_turret', 'ars_nouveau:magelight_torch', 'ars_nouveau:sky_block', 'ars_nouveau:glyph_invisibility', 'ars_nouveau:glyph_phantom_block', 'ars_nouveau:glyph_fortune', 'ars_nouveau:glyph_wither', 'ars_nouveau:glyph_toss', 'ars_nouveau:ring_of_greater_discount', 'ars_nouveau:spell_parchment', 'ars_nouveau:amulet_of_mana_boost', 'ars_nouveau:amulet_of_mana_regen', 'ars_nouveau:dull_trinket', 'ars_nouveau:whirlisprig_charm', 'ars_nouveau:wand', 'ars_nouveau:wixie_charm', 'ars_nouveau:caster_tome', 'ars_nouveau:wilden_tribute', 'ars_nouveau:summon_focus', 'ars_nouveau:enchanters_mirror', 'ars_nouveau:shapers_focus', 'ars_nouveau:amethyst_golem_charm', 'ars_nouveau:annotated_codex', 'ars_nouveau:enchanters_eye', 'ars_nouveau:mage_block', 'ars_nouveau:wixie_cauldron', 'ars_nouveau:sconce', 'ars_nouveau:timer_spell_turret', 'ars_nouveau:basic_spell_turret', 'ars_nouveau:spell_turret', 'ars_nouveau:archwood_chest', 'ars_nouveau:spell_prism', 'ars_nouveau:whirlisprig_flower', 'ars_nouveau:alteration_table',
            'ars_nouveau:thread_kindling', 'ars_nouveau:thread_wixie', 'ars_nouveau:thread_repairing', 'ars_nouveau:novice_spell_book', 'ars_nouveau:apprentice_spell_book', 'ars_nouveau:archmage_spell_book', 'ars_nouveau:creative_spell_book', 'ars_nouveau:ring_of_potential', 'ars_nouveau:ring_of_lesser_discount', 'ars_nouveau:spell_bow', 'ars_nouveau:spell_crossbow', 'ars_nouveau:familiar_amethyst_golem', 'ars_nouveau:familiar_bookwyrm', 'ars_nouveau:familiar_drygmy', 'ars_nouveau:familiar_whirlisprig', 'ars_nouveau:familiar_wixie', 'ars_nouveau:familiar_starbuncle', 'ars_nouveau:thread_warding', 'ars_nouveau:thread_feather', 'ars_nouveau:thread_undying', 'ars_nouveau:thread_chilling', 'ars_nouveau:thread_starbuncle', 'ars_nouveau:thread_life_drain', 'ars_nouveau:thread_spellpower', 'ars_nouveau:thread_drygmy', 'ars_nouveau:thread_whirlisprig', 'ars_nouveau:thread_heights', 'ars_nouveau:thread_depths', 'ars_nouveau:blank_thread', 'ars_nouveau:thread_gliding', 'ars_nouveau:thread_magic_capacity',
            'mekanism:elite_injecting_factory', 'mekanism:elite_purifying_factory', 'mekanism:elite_combining_factory', 'mekanism:elite_compressing_factory', 'mekanism:elite_crushing_factory', 'mekanism:elite_enriching_factory', 'mekanism:elite_smelting_factory', 'mekanism:advanced_sawing_factory', 'mekanism:advanced_infusing_factory', 'mekanism:advanced_injecting_factory', 'mekanism:advanced_purifying_factory', 'mekanism:advanced_combining_factory', 'mekanism:advanced_compressing_factory', 'mekanism:advanced_crushing_factory', 'mekanism:advanced_enriching_factory', 'mekanism:advanced_smelting_factory', 'mekanism:basic_sawing_factory', 'mekanism:basic_infusing_factory', 'mekanism:basic_injecting_factory', 'mekanism:basic_purifying_factory', 'mekanism:basic_combining_factory', 'mekanism:basic_compressing_factory', 'mekanism:basic_crushing_factory', 'mekanism:basic_enriching_factory', 'mekanism:basic_smelting_factory', 'mekanism:reprocessed_fissile_fragment', 'mekanism:pellet_polonium', 'mekanism:pellet_plutonium', 'mekanism:electrolytic_core', 'mekanism:hdpe_stick', 'mekanism:hdpe_sheet', 'mekanism:hdpe_rod', 'mekanism:hdpe_pellet', 'mekanism:enriched_tin', 'mekanism:enriched_gold', 'mekanism:enriched_refined_obsidian',
            'mekanism:enriched_diamond', 'mekanism:enriched_redstone', 'mekanism:enriched_carbon', 'mekanism:ultimate_tier_installer', 'mekanism:elite_tier_installer', 'mekanism:advanced_tier_installer', 'mekanism:basic_tier_installer', 'mekanism:upgrade_stone_generator', 'mekanism:upgrade_anchor', 'mekanism:upgrade_gas', 'mekanism:upgrade_filter', 'mekanism:upgrade_energy', 'mekanism:upgrade_speed', 'mekanism:module_frost_walker_unit', 'mekanism:module_magnetic_attraction_unit', 'mekanism:module_hydraulic_propulsion_unit', 'mekanism:module_motorized_servo_unit', 'mekanism:module_locomotive_boosting_unit', 'mekanism:module_hydrostatic_repulsor_unit', 'mekanism:module_gyroscopic_stabilization_unit', 'mekanism:module_elytra_unit', 'mekanism:module_gravitational_modulating_unit', 'mekanism:module_charge_distribution_unit', 'mekanism:module_jetpack_unit', 'mekanism:module_dosimeter_unit', 'mekanism:module_nutritional_injection_unit', 'mekanism:module_vision_enhancement_unit', 'mekanism:module_inhalation_purification_unit', 'mekanism:module_electrolytic_breathing_unit', 'mekanism:module_teleportation_unit', 'mekanism:module_vein_mining_unit', 'mekanism:module_blasting_unit', 'mekanism:module_fortune_unit', 'mekanism:module_silk_touch_unit', 'mekanism:module_shearing_unit', 'mekanism:module_farming_unit','mekanism:rotary_condensentrator', 'mekanism:module_attack_amplification_unit', 'mekanism:module_excavation_escalation_unit', 'mekanism:module_radiation_shielding_unit', 'mekanism:module_laser_dissipation_unit', 'mekanism:module_color_modulation_unit', 'mekanism:module_energy_unit', 'mekanism:module_base', 'mekanism:hdpe_elytra', 'mekanism:scuba_mask', 'mekanism:flamethrower', 'mekanism:qio_drive_supermassive', 'mekanism:qio_drive_time_dilating', 'mekanism:qio_drive_hyper_dense', 'mekanism:qio_drive_base', 'mekanism:portable_qio_dashboard', 'mekanism:canteen', 'mekanism:seismic_reader', 'mekanism:crafting_formula', 'mekanism:configuration_card', 'mekanism:portable_teleporter', 'mekanism:dictionary', 'mekanism:network_reader', 'mekanism:energy_tablet', 'mekanism:robit', 'mekanism:electric_bow', 'mekanism:mekasuit_boots', 'mekanism:free_runners_armored', 'mekanism:free_runners', 'mekanism:mekasuit_pants', 'mekanism:mekasuit_bodyarmor', 'mekanism:jetpack_armored', 'mekanism:jetpack', 'mekanism:scuba_tank', 'mekanism:mekasuit_helmet', 'mekanism:meka_tool', 'mekanism:qio_redstone_adapter', 'mekanism:qio_exporter', 'mekanism:qio_importer', 'mekanism:qio_dashboard', 'mekanism:qio_drive_array', 'mekanism:dimensional_stabilizer', 'mekanism:supercharged_coil', 'mekanism:sps_port', 'mekanism:sps_casing', 'mekanism:painting_machine', 'mekanism:pigment_mixer', 'mekanism:pigment_extractor', 'mekanism:antiprotonic_nucleosynthesizer', 'mekanism:modification_station', 'mekanism:fuelwood_heater', 'mekanism:formulaic_assemblicator', 'mekanism:resistive_heater', 'mekanism:oredictionificator', 'mekanism:solar_neutron_activator', 'mekanism:quantum_entangloporter', 'mekanism:laser_tractor_beam', 'mekanism:laser_amplifier', 'mekanism:laser', 'mekanism:nutritional_liquifier', 'mekanism:isotopic_centrifuge', 'mekanism:pressurized_reaction_chamber', 'mekanism:seismic_vibrator', 'mekanism:chemical_crystallizer', 'mekanism:chemical_washer', 'mekanism:chemical_dissolution_chamber', 'mekanism:precision_sawmill', 'mekanism:electrolytic_separator', 'mekanism:chemical_injection_chamber', 'mekanism:chemical_infuser', 'mekanism:chargepad', 'mekanism:personal_chest', 'mekanism:personal_barrel', 'mekanism:electric_pump', 'mekanism:teleporter', 'mekanism:energized_smelter', 'mekanism:purification_chamber', 'mekanism:metallurgic_infuser', 'mekanism:digital_miner', 'mekanism:crusher', 'mekanism:combiner', 'mekanism:osmium_compressor', 'mekanism:enrichment_chamber', 'mekanism:industrial_alarm', 'mekanism:radioactive_waste_barrel', 'mekanism:security_desk', 'mekanism:thermal_evaporation_block', 'mekanism:thermal_evaporation_valve', 'mekanism:thermal_evaporation_controller', 'mekanism:dynamic_valve', 'mekanism:dynamic_tank', 'mekanism:teleporter_frame', 'mekanism:ultimate_bin', 'mekanism:elite_bin', 'mekanism:advanced_bin', 'mekanism:basic_bin', 'mekanism:ultimate_sawing_factory', 'mekanism:ultimate_infusing_factory', 'mekanism:ultimate_injecting_factory', 'mekanism:ultimate_purifying_factory', 'mekanism:ultimate_combining_factory', 'mekanism:ultimate_compressing_factory', 'mekanism:ultimate_crushing_factory', 'mekanism:ultimate_enriching_factory', 'mekanism:ultimate_smelting_factory', 'mekanism:elite_sawing_factory', 'mekanism:elite_infusing_factory', 'mekanism:module_geiger_unit', 'mekanism:salt', 'mekanism:sawdust', 'mekanism:enriched_iron', 'mekanism:chlorine_bucket', 'mekanism:sulfuric_acid_bucket', 'mekanism:sulfur_dioxide_bucket', 'mekanism:sulfur_trioxide_bucket', 'mekanism:lithium_bucket', 'mekanism:brine_bucket', 'mekanism:superheated_sodium_bucket', 'mekanism:module_geiger_unit', 'mekanism:salt', 'mekanism:sawdust', 'mekanism:enriched_iron', 'mekanism:hydrofluoric_acid_bucket', 'mekanism:uranium_oxide_bucket', 'mekanism:steam_bucket', 'mekanism:sodium_bucket', 'mekanism:heavy_water_bucket', 'mekanism:uranium_hexafluoride_bucket', 'mekanism:nutritional_paste_bucket', 'mekanism:cardboard_box', 'mekanism:block_salt', 'mekanism:hydrogen_bucket', 'mekanism:oxygen_bucket', 'mekanism:hydrogen_chloride_bucket', 'mekanism:ethene_bucket', 'mekanismgenerators:laser_focus_matrix', 'mekanismgenerators:fusion_reactor_logic_adapter', 'mekanismgenerators:fusion_reactor_port', 'mekanismgenerators:fusion_reactor_frame', 'mekanismgenerators:fusion_reactor_controller', 'mekanismgenerators:saturating_condenser', 'mekanismgenerators:turbine_vent', 'mekanismgenerators:turbine_valve', 'mekanismgenerators:turbine_casing', 'mekanismgenerators:electromagnetic_coil', 'mekanismgenerators:rotational_complex', 'mekanismgenerators:turbine_rotor', 'mekanismgenerators:wind_generator', 'mekanismgenerators:advanced_solar_generator', 'mekanismgenerators:bio_generator', 'mekanismgenerators:solar_generator', 'mekanismgenerators:heat_generator', 'mekanism:fluidic_plenisher', 'mekanism:boiler_casing', 'mekanism:pressure_disperser', 'mekanism:superheating_element', 'mekanismgenerators:tritium_bucket', 'mekanismgenerators:fusion_fuel_bucket', 'mekanismgenerators:deuterium_bucket', 'mekanismgenerators:bioethanol_bucket', 'mekanismgenerators:module_geothermal_generator_unit', 'mekanismgenerators:module_solar_recharging_unit', 'mekanismgenerators:turbine_blade', 'mekanismgenerators:hohlraum', 'mekanismgenerators:solar_panel', 'ars_nouveau:ghostweave', 'ars_nouveau:falseweave', 'ars_nouveau:mirrorweave', 'ars_nouveau:magebloom_block', 'ars_nouveau:vitalic_sourcelink', 'ars_nouveau:volcanic_sourcelink', 'ars_nouveau:dowsing_rod', 'ars_nouveau:enchanters_shield',
            'mekanism:ultimate_thermodynamic_conductor', 'mekanism:elite_thermodynamic_conductor', 'mekanism:advanced_thermodynamic_conductor', 'mekanism:basic_thermodynamic_conductor',
			'nuclearcraft:bronze_ingot', 'nuclearcraft:zinc_ingot', 'nuclearcraft:bronze_block', 'nuclearcraft:tin_block', 'nuclearcraft:silver_block', 'nuclearcraft:zinc_block', 'mekanism:block_tin', 'mekanism:block_lead', 'mekanism:block_bronze', 'thermal:bronze_ingot', 'bluepower:silver_nugget', 'bluepower:silver_ingot', 'mekanism:nugget_bronze', 'nuclearcraft:electrum_nugget', 'nuclearcraft:lead_nugget', 'nuclearcraft:bronze_nugget', 'nuclearcraft:tin_nugget', 'nuclearcraft:silver_nugget', 'nuclearcraft:zinc_nugget', 'nuclearcraft:tungsten_ingot', 'nuclearcraft:tin_ingot', 'nuclearcraft:lead_block', 'nuclearcraft:electrum_block', 'bluepower:silver_block', 'mekanism:nugget_lead', 'mekanism:nugget_tin', 'mekanism:ingot_lead', 'mekanism:ingot_tin', 'nuclearcraft:lead_ingot', 'nuclearcraft:electrum_ingot', 'nuclearcraft:silver_ingot',
			'nuclearcraft:tin_dust', 'mekanism:dust_tin', 'nuclearcraft:tungsten_dust', 'nuclearcraft:electrum_dust', 'nuclearcraft:bronze_dust', 'bluepower:silver_dust', 'nuclearcraft:silver_dust', 'mekanism:dust_bronze', 'nuclearcraft:zinc_dust', 'mekanism:dust_lead', 'nuclearcraft:lead_dust',
			'ars_nouveau:ritual_gravity', 'ars_nouveau:glyph_randomize', 'ars_nouveau:spell_sensor',
			'nuclearcraft:steel_ingot', 'nuclearcraft:steel_dust', 'nuclearcraft:steel_block', 'nuclearcraft:steel_nugget',
			
			'ars_nouveau:runic_chalk',
            'ars_nouveau:archmage_boots',
            'ars_nouveau:apprentice_boots',
            'ars_nouveau:novice_boots',
            'ars_nouveau:archmage_leggings',
            'ars_nouveau:apprentice_leggings',
            'ars_nouveau:novice_leggings',
            'ars_nouveau:novice_robes',
            'ars_nouveau:novice_hood',
            'ars_nouveau:archmage_robes',
            'ars_nouveau:apprentice_robes',
            'ars_nouveau:archmage_hood',
            'ars_nouveau:apprentice_hood',
            'ars_nouveau:enchanters_sword',
			'mekanism:boiler_valve',
            'integratedtunnels:part_exporter_world_item',
            'integratedtunnels:part_exporter_world_block',
            'integratedtunnels:part_exporter_world_fluid',
            'integratedtunnels:part_importer_world_fluid',
            'integratedtunnels:part_player_simulator',
            'integratedtunnels:part_importer_world_block',
            'integratedtunnels:part_importer_world_item',
            'integratedtunnels:part_importer_world_energy',
            'integratedtunnels:part_exporter_world_energy',

            'integrateddynamics:part_inventory_writer',
            'integrateddynamics:proto_chorus',
            'integrateddynamics:part_machine_writer',
            'integrateddynamics:part_entity_writer',
            'integrateddynamics:on_the_dynamics_of_integration',
            'cyclic:copper_nugget',
            'thermal:copper_nugget',
            'bluepower:copper_nugget',
            'cyclic:netherite_nugget',
            'bluepower:amethyst_sword',
            'bluepower:amethyst_axe',
            'bluepower:amethyst_pickaxe',
            'bluepower:amethyst_hoe',
            'bluepower:amethyst_shovel',
            'bluepower:amethyst_ore',
            'bluepower:amethyst_deepslate',

            'inventorypets:pet_illuminati',
            'inventorypets:pet_meta_peaceful',
            'inventorypets:pet_meta_mob',
            'inventorypets:pet_meta_youtuber',
            'inventorypets:pet_meta_25',
            'inventorypets:pet_meta_special',
            'inventorypets:pet_meta_fan',
            'inventorypets:pet_meta_aoe',
            'inventorypets:pet_meta_utility',
            'inventorypets:pet_meta',
            'inventorypets:pet_meta_50',
            'inventorypets:pet_meta_75',
            'inventorypets:pet_meta_100',
            'inventorypets:pet_ghast',
            'inventorypets:pet_magma_cube',
            'inventorypets:pet_blaze',
            'inventorypets:pet_enderman',
            'inventorypets:pet_ender_chest',
            'inventorypets:pet_nether_portal',
            'inventorypets:pet_juggernaut',
            'inventorypets:pet_end_portal',
            'inventorypets:pet_lead',
            'inventorypets:pet_dirt',
            'inventorypets:pet_cobblestone',
            'inventorypets:pet_sponge',
            'inventorypets:pet_house',
            'inventorypets:pet_apple',
            'inventorypets:pet_moon',
            'inventorypets:pet_siamese',
            'inventorypets:pet_april_fool',
            'inventorypets:pet_politically_correct',
            'inventorypets:pet_sun',
            'inventorypets:pet_christmas_tree',
            'inventorypets:pet_menorah',
            'inventorypets:pet_mishumaa_saba',
            'inventorypets:pet_cloud',
            'inventorypets:pet_black_hole',
            'inventorypets:pet_loot',
            'inventorypets:pet_grave',
            'inventorypets:pet_flying_saddle',
            'inventorypets:pet_qcm',
            'inventorypets:pet_mickerson',
            'inventorypets:pet_pingot',
            'inventorypets:pet_purplicious_cow',
            'inventorypets:pet_biome',
            'inventorypets:pet_biome',
            'inventorypets:pet_wolf',
            'inventorypets:pet_saddle',
            'inventorypets:nugget_diamond',
            'inventorypets:nugget_obsidian',
            'inventorypets:nugget_ender',
            'inventorypets:item_petrifier',
            'inventorypets:holiday_gift',
            'inventorypets:rock_candy',
            'inventorypets:candy_cane',
            'inventorypets:easter_egg',
            'inventorypets:egg_nog',
            'inventorypets:siamese_gift',
            'inventorypets:feed_bag',
            'inventorypets:sand_block',
            'inventorypets:cloud_spawn',
            'inventorypets:sand_spawn',
            'inventorypets:stone_block',
            'inventorypets:stone_spawn',
            'inventorypets:space_spawn',
            'inventorypets:nether_spawn',
            'inventorypets:cloud_block',
            'inventorypets:patreon_head',
            'inventorypets:patreon_shirt',
            'inventorypets:solstice_boots',
            'inventorypets:solstice_leggings',
            'inventorypets:solstice_helmet',
            'inventorypets:solstice_chestplate',
            'inventorypets:solstice_sword',

            'sophisticatedstorage:iron_to_diamond_tier_upgrade',
            'sophisticatedstorage:diamond_to_netherite_tier_upgrade',
            'sophisticatedstorage:gold_to_netherite_tier_upgrade',
            'sophisticatedstorage:iron_to_netherite_tier_upgrade',
            'sophisticatedstorage:gold_to_diamond_tier_upgrade',
            'sophisticatedstorage:iron_to_gold_tier_upgrade',
            'sophisticatedstorage:basic_to_netherite_tier_upgrade',
            'sophisticatedstorage:basic_to_diamond_tier_upgrade',
            'sophisticatedstorage:basic_to_gold_tier_upgrade',
            'sophisticatedstorage:hopper_upgrade',
            'sophisticatedstorage:smelting_upgrade',
            'sophisticatedstorage:void_upgrade',
            'sophisticatedstorage:filter_upgrade',
            'sophisticatedstorage:pump_upgrade',
            'sophisticatedstorage:advanced_pump_upgrade',
            'sophisticatedstorage:blasting_upgrade',
            'sophisticatedstorage:smoking_upgrade',
            'sophisticatedstorage:feeding_upgrade',
            'sophisticatedstorage:pickup_upgrade',
            'sophisticatedstorage:xp_pump_upgrade',

            'sophisticatedstorage:netherite_chest',
            'sophisticatedstorage:gold_chest',
            'sophisticatedstorage:diamond_chest',
            'sophisticatedstorage:iron_chest',
            'sophisticatedstorage:chest',
            'sophisticatedstorage:gold_barrel',
            'sophisticatedstorage:diamond_barrel',
            'sophisticatedstorage:netherite_barrel',
            'sophisticatedstorage:limited_gold_barrel_1',
            'sophisticatedstorage:limited_gold_barrel_2',
            'sophisticatedstorage:limited_gold_barrel_3',
            'sophisticatedstorage:limited_gold_barrel_4',
            'sophisticatedstorage:limited_diamond_barrel_1',
            'sophisticatedstorage:limited_diamond_barrel_2',
            'sophisticatedstorage:limited_diamond_barrel_3',
            'sophisticatedstorage:limited_diamond_barrel_4',
            'sophisticatedstorage:limited_netherite_barrel_1',
            'sophisticatedstorage:limited_netherite_barrel_2',
            'sophisticatedstorage:limited_netherite_barrel_3',
            'sophisticatedstorage:limited_netherite_barrel_4',
            'sophisticatedstorage:shulker_box',
            'sophisticatedstorage:iron_shulker_box',
            'sophisticatedstorage:gold_shulker_box',
            'sophisticatedstorage:diamond_shulker_box',
            'sophisticatedstorage:netherite_shulker_box',

            'integrateddynamics:energy_battery_creative',
            'integrateddynamics:crystalized_menril_brick_slab',
            'integrateddynamics:crystalized_chorus_brick_stairs',
            'integrateddynamics:crystalized_chorus_brick',
            'integrateddynamics:crystalized_chorus_block_stairs',
            'integrateddynamics:crystalized_chorus_brick_slab',
            'integrateddynamics:crystalized_chorus_block_slab',
            'integrateddynamics:menril_log',
            'integrateddynamics:menril_log_stripped',
            'integrateddynamics:menril_log_filled',
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

            'integrateddynamics:menril_door',
            'integrateddynamics:menril_torch',
            'integrateddynamics:menril_torch_stone',
            'integrateddynamics:menril_planks_stairs',
            'integrateddynamics:crystalized_menril_brick_stairs',
            'integrateddynamics:crystalized_menril_block_slab',
            'integrateddynamics:menril_slab',
            'integrateddynamics:menril_fence',
            'integrateddynamics:menril_fence_gate',
            'integrateddynamics:crystalized_menril_block_stairs',
            'integrateddynamics:crystalized_menril_brick',

            'ordinarycrook:bone_crook',
            'ordinarycrook:stone_crook',
            'ordinarycrook:blaze_rod_crook',
            'ordinarycrook:withered_bone_crook',

            'thermal:device_nullifier'
        ])

    //JEI hide item
    event.add('ironberry:hide', [
			'gateways:gate_pearl',
            'mekanism:creative_fluid_tank',
			'mekanism:creative_chemical_tank',
            'cyclic:compressed_cobblestone',
            'angelring:diamond_ring',
            'angelring:resonant_angel_ring',
            'angelring:energetic_angel_ring',
            'angelring:leadstone_angel_ring',
            'angelring:reinforced_angel_ring',
            'angelring:hardened_angel_ring',
            'pneumaticcraft:reinforced_chest_kit',
            'pneumaticcraft:smart_chest_kit',
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
            'bluepower:blulectric_alloyfurnace',
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
    event.add('ironberry:item_devices', [
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
        ])

    //thermal servos uniform
    event.add('thermal:attachment', [
            'thermal:energy_limiter_attachment',
            'thermal:turbo_servo_attachment',
            'thermal:filter_attachment',
            'thermal:servo_attachment',
        ])

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
            'ae2:dense_energy_cell',
            'ae2:condenser',
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
            'ae2:security_station',
            'ae2:io_port',
        ])

    event.add('ironberry:p2p', [
            'ae2:me_p2p_tunnel',
            'ae2:redstone_p2p_tunnel',
            'ae2:item_p2p_tunnel',
            'ae2:fluid_p2p_tunnel',
            'ae2:fe_p2p_tunnel',
            'ae2:light_p2p_tunnel',
        ])

    event.add('ironberry:blue_slabs', [
            'bluepower:half_block',
            'bluepower:cover',
            'bluepower:panel',
        ])

    event.add('ironberry:ae2_chests', [
            'ae2:sky_stone_chest',
            'ae2:smooth_sky_stone_chest',
        ])

    event.add('ironberry:blue_gems', [
            'bluepower:green_sapphire_gem',
            'bluepower:amethyst_gem',
            'bluepower:ruby_gem',
            'bluepower:sapphire_gem',
        ])

    event.add('ironberry:fluid_devices', [
            'thermal:fluid_duct',
            'thermal:fluid_duct_windowed',
            'cyclic:trash',
            'thermal:device_potion_diffuser',
            'thermal:device_water_gen',
            'thermal:fluid_cell',
            'thermal:device_hive_extractor',
            'thermal:device_tree_extractor',
            'thermal:device_xp_condenser',
        ])

    event.add('ironberry:energy_devices', [
            'thermal:charge_bench',
            'thermal:tinker_bench',
            'prettypipes:pressurizer',
            'thermal:energy_duct',
            'bluepower:engine',
            'thermal:energy_cell',
        ])

    event.add('ironberry:wrench_fix', [
			'nuclearcraft:multitool',
            'thermal:wrench',
            'ae2:certus_quartz_wrench',
            'ae2:nether_quartz_wrench',
            'ae2:network_tool',
            'essentials:wrench',
            'integrateddynamics:wrench',
            'pipez:wrench',
            'pneumaticcraft:pneumatic_wrench',
            'cyclic:cable_wrench',
        ])

    event.add('ironberry:ae_workshop', [
            'ae2:chest',
            'ae2:cell_workbench',
        ])

    event.add('ironberry:nosilk', ['minecraft:sculk_catalyst', 'minecraft:sculk_sensor', 'minecraft:sculk_shrieker'])

    event.add('ironberry:ae2_wireless', [
            'ae2wtlib:wireless_universal_terminal',
            'ae2:wireless_crafting_terminal',
            'ae2:wireless_terminal',
            'ae2wtlib:wireless_pattern_access_terminal',
            'ae2wtlib:wireless_pattern_encoding_terminal',
        ])

    event.add('ironberry:tables', [
            'minecraft:crafting_table',
            'craftingstation:crafting_station',
            'craftingstation:crafting_station_slab'
        ])

    event.add('ironberry:ae_outside', [
            'ae2:charger',
            'ae2:chest',
            'ae2:cell_workbench',
            'ae2:inscriber',
            'ae2things:advanced_inscriber',
            'ae2:condenser',
        ])

    event.add('ironberry:ae_charged', [
            'ae2:matter_cannon',
            'ae2:entropy_manipulator',
            'ae2:color_applicator',
            'ae2:charged_staff',
        ])

    event.add('ironberry:fishing', [
            'minecraft:chicken',
            'minecraft:feather',
            'minecraft:nautilus_shell',
            'minecraft:rabbit_foot',
            'minecraft:ghast_tear',
            'minecraft:bamboo',
            'kubejs:soul',
            'minecraft:saddle',
            'minecraft:leather_boots',
            'froglins:froglin_egg',
        ])

    event.add('ironberry:white_stones', [
            'bluepower:marble',
            'minecraft:calcite',
        ])

    event.add('ironberry:dark_stones', [
            'minecraft:cobbled_deepslate',
            'minecraft:smooth_basalt',
        ])

    event.add('ironberry:spore_colony', [
            'farmersdelight:red_mushroom_colony',
            'farmersdelight:brown_mushroom_colony',
        ])

    event.add('ironberry:sticky', [
            'minecraft:slime_ball',
            'minecraft:ink_sac',
            'minecraft:glow_ink_sac',
        ])

    event.add('ironberry:ritual_tablets', [
            'ars_nouveau:ritual_challenge',
            'ars_nouveau:ritual_forestation',
            'ars_nouveau:ritual_binding',
            'ars_nouveau:ritual_awakening',
            'ars_nouveau:ritual_warping',
            'ars_nouveau:ritual_disintegration',
            'ars_nouveau:ritual_moonfall',
            'ars_nouveau:ritual_sunrise',
            'ars_nouveau:ritual_burrowing',
            'ars_nouveau:ritual_containment',
            'ars_nouveau:ritual_scrying',
            'ars_nouveau:ritual_flowering',
            'ars_nouveau:ritual_sanctuary',
            'ars_nouveau:ritual_fertility',
            'ars_nouveau:ritual_overgrowth',
            'ars_nouveau:ritual_cloudshaping',
            'ars_nouveau:ritual_flight',
            'ars_nouveau:ritual_conjure_island_plains',
            'ars_nouveau:ritual_wilden_summon',
            'ars_nouveau:ritual_restoration',
            'ars_nouveau:ritual_harvest',
            'ars_nouveau:ritual_conjure_island_desert',
            'ars_nouveau:ritual_animal_summon',
        ])

    event.add('ironberry:gift_loot', [
            '#ironberry:ritual_tablets',
            'ars_nouveau:starbuncle_charm',
            '#ars_nouveau:magic_shards',
            'ars_nouveau:music_disc_firel_the_wild_hunt',
            'ars_nouveau:music_disc_thistle_the_sound_of_glass',
            'ars_nouveau:music_disc_aria_biblio',
            'ars_nouveau:warp_scroll',
            '#ars_nouveau:wilden_drop',
            'ars_nouveau:source_berry',
            'ars_nouveau:split_arrow',
            'ars_nouveau:source_gem',
            'ars_nouveau:pierce_arrow',
            'ars_nouveau:amplify_arrow',
        ])

    event.add('ironberry:boss_loot', [
            'ars_nouveau:starby_gift',
            'exoticbirds:phoenix_egg',
            'tombstone:soul_receptacle',
            'reactive:stardust',
            'ars_nouveau:greater_experience_gem',
            'ars_nouveau:experience_gem',
            'ars_nouveau:bookwyrm_charm',
            '#quark:runes',
            'twilightforest:steeleaf_ingot',
            'twilightforest:fiery_ingot',
            'kubejs:iolite',
            'kubejs:aquamarine',
            'kubejs:jade',
            'twilightforest:borer_essence',
            'kubejs:topaz',
            'thermaloot:variable_capacitor',
            'twilightforest:ironwood_ingot',
            'twilightforest:knightmetal_ingot',
        ])

    event.add('ironberry:indigo_flowers', [
            'minecraft:lily_of_the_valley',
            'minecraft:cornflower',
            'minecraft:dandelion',
            'minecraft:poppy',
            'minecraft:blue_orchid',
            'minecraft:allium',
            'minecraft:azure_bluet',
            'minecraft:red_tulip',
            'minecraft:orange_tulip',
            'minecraft:white_tulip',
            'minecraft:pink_tulip',
            'minecraft:oxeye_daisy',

        ])

    event.add('ironberry:block_drop', [
            'inventorypets:nugget_emerald',
            'inventorypets:nugget_coal',
            'kubejs:raw_copper_nugget',
            'kubejs:raw_iron_nugget',
            'kubejs:raw_gold_nugget',
        ])

    event.add('ironberry:soils', data.block.soils)

    event.add('ironberry:bundled', [
            'integrateddynamics:crystalized_chorus_chunk',
            'integrateddynamics:crystalized_menril_chunk',
        ])

    event.add('ironberry:storage_box', ['minecraft:chest', 'minecraft:barrel'])

    event.add('ironberry:effigy', [
            'alchemygadgetry:water_effigy',
            'alchemygadgetry:death_effigy',
            'alchemygadgetry:fire_effigy',
            'alchemygadgetry:air_effigy',
        ])
    event.add('ironberry:cure', [
            'alchemygadgetry:elixir',
            'alchemygadgetry:eye_drops',
            'alchemygadgetry:tonic',
            'alchemygadgetry:iron_supplements',
            'alchemygadgetry:black_tea',
            'alchemygadgetry:vitamins',
            'alchemygadgetry:salve',
            'alchemygadgetry:antidote',
        ])

    event.add('ironberry:pets', [
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
        ])

    event.add('ironberry:ars_arrows', ['ars_nouveau:pierce_arrow', 'ars_nouveau:split_arrow', 'ars_nouveau:amplify_arrow'])

    event.add('ironberry:boss_drop', [

            'minecraft:spider_eye', 'minecraft:string', 'minecraft:ender_pearl', 'twilightforest:minoshroom_trophy', 'minecraft:coal', 'minecraft:bone', 'twilightforest:arctic_fur', 'twilightforest:towerwood', 'thermal:blizz_rod', 'thermal:blitz_rod', 'minecraft:blaze_rod', 'thermal:basalz_rod', 'twilightforest:knight_phantom_trophy', 'minecraft:wheat', 'minecraft:gold_nugget', 'twilightforest:torchberries', 'twilightforest:lich_trophy', 'minecraft:iron_ingot', 'minecraft:snowball', 'quark:soul_bead', 'minecraft:arrow', 'ars_nouveau:wilden_spike', 'ars_nouveau:wilden_wing', 'ars_nouveau:wilden_horn', 'twilightforest:armor_shard', 'minecraft:paper', 'twilightforest:magic_map_focus', 'minecraft:book', 'minecraft:glowstone_dust', 'twilightforest:raw_meef', 'twilightforest:maze_map_focus', 'minecraft:leather', 'twilightforest:meef_stroganoff',
        ])


	event.add('ironberry:vanilla_pipe',['minecraft:hopper', 'minecraft:dropper'])
	event.add('ironberry:miniboss_trophy',['twilightforest:minoshroom_trophy', 'twilightforest:knight_phantom_trophy'])
	
	event.add('ironberry:echodrop',['minecraft:sculk', 'minecraft:sculk_vein'])

    event.add('ironberry:onlyplayer',['kubejs:grave_spawn', 'kubejs:ore_bone_meal', 'kubejs:rich_bone_meal', 'tombstone:strange_scroll'])

})

ServerEvents.tags('block', event => {
    //tombstone graves on data.block.tombstone value
    event.get('tombstone:decorative_graves').getObjectIds().forEach(block => {
        data.block.tombstone.push(block)
    })
    //crops on data.block.crops value
    event.get('minecraft:crops').getObjectIds().forEach(block => {
        data.block.crops.push(block)
    })
    //leaves on data.block.leaves value
    event.get('minecraft:leaves').getObjectIds().forEach(block => {
        data.block.leaves.push(block)
    })

    //colony added
    event.add('farmersdelight:wild_crops', 'farmersdelight:red_mushroom_colony')
    event.add('farmersdelight:wild_crops', 'farmersdelight:brown_mushroom_colony')

    //flax added
    event.add('farmersdelight:wild_crops', 'supplementaries:wild_flax')

    //blacklisted rice
    event.remove('farmersdelight:wild_crops', 'farmersdelight:wild_rice')

    //farmersdelight wild_crops on data.block.wild_crops value
    event.get('farmersdelight:wild_crops').getObjectIds().forEach(block => {
        data.block.wild_crops.push(block)
    })

    //compost plus
    event.get('farmersdelight:compost_activators').removeAll()
    event.add('farmersdelight:compost_activators', data.block.soils)

})

ServerEvents.tags('fluid', event => {

    event.add('ironberry:disabled', [
            'mekanism:hydrogen',
            'mekanism:oxygen',
            'mekanism:chlorine',
            'mekanism:sulfur_dioxide',
            'mekanism:sulfur_trioxide',
            'mekanism:sulfuric_acid',
            'mekanism:hydrogen_chloride',
            'mekanism:hydrofluoric_acid',
            'mekanism:uranium_oxide',
            'mekanism:uranium_hexafluoride',
            'mekanism:ethene',
            'mekanism:sodium',
        ])

})
