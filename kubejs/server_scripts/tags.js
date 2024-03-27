//priority 100
ServerEvents.tags("item", (event) => {
  //integrateddynamics remove all tags to prevent show as #minecraft:logs and more
  event.removeAllTagsFrom("integrateddynamics:menril_log");
  event.removeAllTagsFrom("integrateddynamics:menril_log_stripped");
  event.removeAllTagsFrom("integrateddynamics:menril_log_filled");
  event.removeAllTagsFrom("integrateddynamics:menril_wood");
  event.removeAllTagsFrom("integrateddynamics:menril_wood_stripped");
  event.removeAllTagsFrom("integrateddynamics:menril_leaves");
  event.removeAllTagsFrom("integrateddynamics:menril_sapling");
  event.removeAllTagsFrom("integrateddynamics:menril_planks");
  event.removeAllTagsFrom("thermal:sapphire");
  event.removeAllTagsFrom("pneumaticcraft:smart_chest");
  event.removeAllTagsFrom("pneumaticcraft:reinforced_chest");
  event.remove;
  //reactive sources
  event.get("reactive:body_sources").removeAll();
  event.get("reactive:caustic_sources").removeAll();
  event.get("reactive:verdant_sources").removeAll();
  event.get("reactive:mind_sources").removeAll();
  event.removeAllTagsFrom("minecraft:fermented_spider_eye");
  event.add("reactive:body_sources", "reactive:quartz");
  event.add("reactive:caustic_sources", "bluepower:indigo_dye");
  event.add("reactive:verdant_sources", "#tombstone:seeds");
  event.add("reactive:mind_sources", "minecraft:redstone");

  event.add("reactive:caustic_sources", "bluepower:ruby_gem");
  event.add("reactive:verdant_sources", "bluepower:green_sapphire_gem");
  event.add("reactive:mind_sources", "bluepower:amethyst_gem");
  event.add("reactive:soul_sources", "bluepower:sapphire_gem");

  //remove indigo
  event.removeAllTagsFrom("bluepower:indigo_flower");

  //include lost_tablet to magic_tablets
  event.add("tombstone:magic_tablets", "tombstone:lost_tablet");

  //tablets on var data
  event
    .get("tombstone:magic_tablets")
    .getObjectIds()
    .forEach((item) => {
      data.item.tablet.push(item);
    });

  event.remove("minecraft:saplings", [
    "ars_nouveau:green_archwood_sapling",
    "ars_nouveau:red_archwood_sapling",
    "ars_nouveau:purple_archwood_sapling",
    "ars_nouveau:blue_archwood_sapling",
  ]);

  NoTag(event, [
    "twilightforest:armor_shard_cluster",
    "thermal:sapphire",
    "thermal:ruby",
  ]);

  //----------------------------------------------------------------//

  //tombstone tags
  NoTag(event, [
    "tombstone:voodoo_poppet_ingredients",
    "tombstone:voodoo_poppet_ingredient_suffocation",
    "tombstone:voodoo_poppet_ingredient_burn",
    "tombstone:voodoo_poppet_ingredient_lightning",
    "tombstone:voodoo_poppet_ingredient_fall",
    "tombstone:voodoo_poppet_ingredient_cold",
  ]);

  event.add("tombstone:voodoo_poppet_ingredients", [
    "#tombstone:voodoo_poppet_ingredient_suffocation",
    "#tombstone:voodoo_poppet_ingredient_burn",
    "#tombstone:voodoo_poppet_ingredient_lightning",
    "#tombstone:voodoo_poppet_ingredient_fall",
    "#tombstone:voodoo_poppet_ingredient_cold",
  ]);

  event.add(
    "tombstone:voodoo_poppet_ingredient_suffocation",
    "tombstone:tablet_of_cupidity"
  );

  event.add(
    "tombstone:voodoo_poppet_ingredient_burn",
    "tombstone:tablet_of_recall"
  );

  event.add(
    "tombstone:voodoo_poppet_ingredient_lightning",
    "tombstone:tablet_of_home"
  );

  event.add("tombstone:voodoo_poppet_ingredient_fall", [
    "tombstone:lost_tablet",
    "kubejs:omni",
  ]);

  event.add(
    "tombstone:voodoo_poppet_ingredient_cold",
    "tombstone:tablet_of_assistance"
  );
//-----------------------------------------------------------------------------------//
  //recipe output side removed (as result)
  event.add("ironberry:output", [
    'ten3:redstone_storer', 
    'ten3:redstone_conductor',
    'ae2:advanced_card', 
    'ae2:basic_card',
    'ae2:quartz_fiber',
    'ae2:charged_staff', 
    'ae2:matter_cannon', 
    'ae2:color_applicator',
    'nuclearcraft:lithium_ingot',
    'nuclearcraft:thorium_ingot',
    'nuclearcraft:graphite_ingot',
    'extremecobblegenerator:generator',
    'rftoolsbase:tablet',
    "rftoolsutility:charged_porter",
    "rftoolsutility:advanced_charged_porter",
    "rftoolsbase:filter_module",
    "rftoolsbase:machine_frame",
    "rftoolsbase:dimensionalshard",
    "rftoolsbase:infused_enderpearl",
    "#ironberry:rftools_modules",
    "#ironberry:rftools_machines",
    "#ironberry:rftools_plates",
    "rftoolsbase:smartwrench",
    "ten3:chlorium_ingot",
    "ten3:machine_farm_manager",
    "ten3:powered_levelup",
    "ten3:photosyn_levelup",
    "ten3:knowledge_levelup",
    "ten3:relic_levelup",
    "reactive:gold_symbol",
    "reactive:iron_symbol",
    "reactive:crystal_iron",
    "reactive:copper_symbol",
    "pipez:improved_upgrade",
    "pipez:advanced_upgrade",
    "mekanismgenerators:fission_reactor_logic_adapter",
    "mekanismgenerators:fission_reactor_port",
    "cyclic:sprinkler",
    "mekanism:chemical_crystallizer",
    "mekanism:pellet_antimatter",
    "cyclic:apple_chorus",
    "cyclic:apple_sprout",
    "cyclic:apple_sprout_diamond",
    "cyclic:apple_sprout_emerald",
    "cyclic:melter",
    "cyclic:packager",
    "ironchest:diamond_chest",
    "ironchest:gold_chest",
    "ironchest:iron_chest",
    "pneumaticcraft:large_tank",
    "thermal:phytogro",
    "thermal:phytosoil",
    "#ironberry:magic_cards",
    "cyclic:carbon_paper",
    "cyclic:cloud",
    "pneumaticcraft:assembly_program_drill_laser",
    "prettypipes:blank_module",
    "prettypipes:pipe",
    "#ironberry:module",
    "hostilenetworks:empty_prediction",
    "ars_nouveau:imbuement_chamber",
    "inventorypets:pet_wither",
    "inventorypets:pet_slime",
    "inventorypets:pet_pufferfish",
    "inventorypets:pet_shield",
    "inventorypets:pet_heart",
    "inventorypets:pet_dubstep",
    "inventorypets:pet_torch",
    "inventorypets:pet_silverfish",
    "inventorypets:pet_pixie",
    "inventorypets:pet_cheetah",
    "inventorypets:pet_quiver",
    "inventorypets:pet_banana",
    "inventorypets:pet_jukebox",
    "inventorypets:pet_furnace",
    "inventorypets:pet_enchanting_table",
    "inventorypets:pet_double_chest",
    "inventorypets:pet_crafting_table",
    "inventorypets:pet_chest",
    "inventorypets:pet_brewing_stand",
    "inventorypets:pet_bed",
    "inventorypets:pet_anvil",
    "inventorypets:pet_squid",
    "inventorypets:pet_sheep",
    "inventorypets:pet_pig",
    "inventorypets:pet_ocelot",
    "inventorypets:pet_mooshroom",
    "inventorypets:pet_cow",
    "inventorypets:pet_chicken",
    "inventorypets:pet_spider",
    "inventorypets:pet_snow_golem",
    "inventorypets:pet_iron_golem",
    "inventorypets:pet_creeper",
    "inventorypets:pet_pacman",
    "thermal:fluid_cell_frame",
    "thermal:energy_cell_frame",
    "sculktransporting:speed_modifier_tier_1",
    "sculktransporting:speed_modifier_tier_2",
    "sculktransporting:speed_modifier_tier_3",
    "sculktransporting:speed_modifier_tier_4",
    "sculktransporting:quantity_modifier_tier_1",
    "sculktransporting:quantity_modifier_tier_3",
    "sculktransporting:quantity_modifier_tier_2",
    "sculktransporting:sculk_emitter",
    "sculktransporting:sculk_receiver",
    "sculktransporting:sculk_transmitter",
    "sculktransporting:sculk_barrel",
    "pipez:item_pipe",
    "pipez:energy_pipe",
    "pipez:gas_pipe",
    "pipez:fluid_pipe",
    "pipez:universal_pipe",
    "jetboots:armor_core",
    "ars_nouveau:jump_ring",
    "jetboots:rocket_boots",
    "jetboots:shock_absorber_upgrade",

    "ars_nouveau:potion_melder",
    "ars_nouveau:relay_splitter",
    "ars_nouveau:relay_warp",

    "ars_nouveau:belt_of_levitation",
    "ars_nouveau:drygmy_charm",
    "ars_nouveau:belt_of_unstable_gifts",
    "ars_nouveau:lingering_flask_cannon",
    "ars_nouveau:scryers_oculus",
    "ars_nouveau:potion_flask_extend_time",
    "ars_nouveau:potion_flask_amplify",
    "ars_nouveau:potion_flask",
    "ars_nouveau:worn_notebook",
    "ars_nouveau:dominion_wand",
    "ars_nouveau:storage_lectern",
    "ars_nouveau:magebloom_crop",
    "ars_nouveau:orange_sbed",
    "ars_nouveau:void_jar",
    "ars_nouveau:jar_of_light",
    "#ironberry:gift_loot",
    "#ironberry:ritual_tablets",
    "twilightforest:uncrafting_table",
    "tombstone:voodoo_poppet",
    "integratedtunnels:part_interface_item",
    "integratedtunnels:part_importer_item",
    "integratedtunnels:part_exporter_item",
    "integratedtunnels:part_interface_filter_item",
    "integratedtunnels:part_interface_fluid",
    "integratedtunnels:part_importer_fluid",
    "integratedtunnels:part_exporter_fluid",
    "integratedtunnels:part_interface_filter_fluid",
    "integratedtunnels:part_interface_energy",
    "integratedtunnels:part_importer_energy",
    "integratedtunnels:part_exporter_energy",
    "integratedtunnels:part_interface_filter_energy",
    "integrateddynamics:squeezer",
    "integrateddynamics:drying_basin",
    "integrateddynamics:mechanical_squeezer",
    "integrateddynamics:mechanical_drying_basin",
    "farmersdelight:organic_compost",
    "minecraft:nether_wart",
    "exoticbirds:hummingbird_feeder",
    "cyclic:trash",
    "sophisticatedstorage:advanced_magnet_upgrade",
    "sophisticatedstorage:advanced_compacting_upgrade",
    "sophisticatedstorage:compacting_upgrade",
    "sophisticatedstorage:storage_link",
    "quark:sturdy_stone",
    "#tombstone:grave_marbles",
    "tombstone:fishing_rod_of_misadventure",
    "homespun:salt",
    "minecraft:campfire",
    "ceramicbucket:ceramic_bucket",
    "reactive:scroll",
    "pedestals:upgrade_pedestal_cobblegen",
    "#thermal:machines",
    "#thermal:ducts",
    "#thermal:item_devices",
    "#ironberry:te_filter",
    "rootsclassic:fruit_salad",
    "homespun:redstone_acid",
    "minecraft:furnace",
    "#ironberry:item_devices",
    "#ironberry:fluid_devices",
    "#ironberry:energy_devices",
    "#ironberry:wrench_fix",
    "#tombstone:magic_books",
    "ae2:entropy_manipulator",
    "integrateddynamics:variablestore",
    "twilightforest:magic_map",
  ]);

  //recipe input side removed (as ingrendient)
  event.add("ironberry:input", [
    "pneumaticcraft:upgrade_matrix",
    "cyclic:gem_amber",
    "cyclic:gem_obsidian",
    "pneumaticcraft:failed_pcb",
    "hostilenetworks:twilight_prediction",
    "twilightforest:fiery_blood",
    "twilightforest:fiery_tears",
    "pedestals:upgrade_pedestal_base",
    "homespun:tiny_iron_dust",
    "tombstone:essence_of_undeath",
    "ars_nouveau:blank_parchment",
  ]);

  event.add("ironberry:any", global.disabledItem);
  event.add("ironberry:clear_nbt", global.hiddenItems);

  //recipe any side removed
  event.add("ironberry:any", [
    'ae2:chest',
    "mekanism:advanced_control_circuit",
    "mekanism:ultimate_control_circuit",
    "mekanism:elite_control_circuit",
    "thermal:rosin",
    "hostilenetworks:loot_fabricator",
    "hostilenetworks:sim_chamber",
    "homespun:crushing_tub",
    "homespun:tiny_iron_dust",
    "homespun:cast_iron_block",
    "#forge:ores",
  ]);
//-----------------------------------------------------------------------------------//
  //JEI hide , recipe any side removed , literally deleted
  /*     event.add('ironberry:disabled', [
    ]) */

  //JEI hide item
  /*     event.add('ironberry:hide', [

    ]) */

  //crushing output uniform
  event.add("ironberry:crushing_output", [
    "minecraft:glowstone_dust",
    "minecraft:paper",
    "minecraft:redstone",
    "minecraft:ink_sac",
    "minecraft:glow_ink_sac",
  ]);

  //bluepower alloyfurnace uniform
  event.add("ironberry:bluealloy", [
    "bluepower:alloyfurnace",
    "bluepower:blulectric_alloyfurnace",
  ]);

  //cobblefordays uniform
  /*event.add('ironberry:cobblegen', [
            'cobblefordays:tier_1',
            'cobblefordays:tier_2',
            'cobblefordays:tier_3',
            'cobblefordays:tier_4',
            'cobblefordays:tier_5',
        ])*/

  //prettypipes modules
  event.add("ironberry:module", [
    "ppfluids:low_fluid_retrieval_module",
    "ppfluids:low_fluid_extraction_module",
    "ppfluids:medium_fluid_extraction_module",
    "ppfluids:high_fluid_extraction_module",
    "ppfluids:low_fluid_filter_module",
    "ppfluids:medium_fluid_filter_module",
    "ppfluids:high_fluid_filter_module",
    "ppfluids:medium_fluid_retrieval_module",
    "ppfluids:high_fluid_retrieval_module",
    "prettypipes:stack_size_module",
    "prettypipes:redstone_module",
    "prettypipes:filter_increase_modifier",
    "prettypipes:low_extraction_module",
    "prettypipes:medium_extraction_module",
    "prettypipes:high_extraction_module",
    "prettypipes:low_filter_module",
    "prettypipes:medium_filter_module",
    "prettypipes:high_filter_module",
    "prettypipes:low_speed_module",
    "prettypipes:medium_speed_module",
    "prettypipes:high_speed_module",
    "prettypipes:low_low_priority_module",
    "prettypipes:medium_low_priority_module",
    "prettypipes:high_low_priority_module",
    "prettypipes:low_high_priority_module",
    "prettypipes:medium_high_priority_module",
    "prettypipes:high_high_priority_module",
    "prettypipes:low_retrieval_module",
    "prettypipes:medium_retrieval_module",
    "prettypipes:high_retrieval_module",
    "prettypipes:low_crafting_module",
    "prettypipes:medium_crafting_module",
    "prettypipes:high_crafting_module",
    "prettypipes:damage_filter_modifier",
    "prettypipes:nbt_filter_modifier",
    "prettypipes:mod_filter_modifier",
    "prettypipes:tag_filter_modifier",
    "prettypipes:round_robin_sorting_modifier",
    "prettypipes:random_sorting_modifier",
  ]);

  //thermal devices
  event.add("ironberry:item_devices", [
    "thermal:device_fisher",
    "thermal:device_soil_infuser",
    "thermal:device_composter",
    "thermal:device_collector",
    "thermal:device_rock_gen",
    "thermal:item_buffer",
    "bluepower:block_breaker",
    "bluepower:igniter",
    "bluepower:buffer",
    "bluepower:deployer",
    "bluepower:transposer",
    "bluepower:ejector",
    "prettypipes:crafting_terminal",
  ]);

  event.add("ironberry:fish_food", [
    "thermal:junk_net",
    "thermal:aquachow",
    "thermal:deep_aquachow",
  ]);

  //thermal servos uniform
  /* event.add('thermal:attachment', [
            'thermal:energy_limiter_attachment',
            'thermal:turbo_servo_attachment',
            'thermal:filter_attachment',
            'thermal:servo_attachment',
        ])*/

  event.add("ironberry:te_filter", [
    "thermal:fluid_filter_augment",
    "thermal:item_filter_augment",
    "thermal:energy_limiter_attachment",
    "thermal:turbo_servo_attachment",
    "thermal:filter_attachment",
    "thermal:servo_attachment",
    "thermal:area_radius_augment",
  ]);

  //ae2 cable unify
  // event.add("ironberry:rate_8", [
  //   "#ae2:smart_cable",
  //   "#ae2:glass_cable",
  //   "ae2:drive",
  //   "#ae2:covered_cable",
  //   "ae2:chest",
  //   "ae2:spatial_pylon",
  //   "ae2:spatial_io_port",
  //   "#ae2:pattern_provider",
  //   "#ae2:interface",
  // ]);

  //ae2 dense cable unify
  // event.add("ironberry:rate_32", [
  //   "#ae2:covered_dense_cable",
  //   "#ae2:smart_dense_cable",
  //   "ae2:quantum_ring",
  //   "ae2:quantum_link",
  // ]);

  // event.add("ironberry:onlyforge_energy", [
  //   "ae2:inscriber",
  //   "ae2:quartz_fiber",
  //   "ae2things:advanced_inscriber",
  //   "ae2:energy_cell",
  //   "ae2:quartz_growth_accelerator",
  //   "ae2:creative_energy_cell",
  //   "ae2:vibration_chamber",
  //   "ae2:energy_acceptor",
  //   "ae2:molecular_assembler",
  //   "ae2:charger",
  //   "ae2:toggle_bus",
  //   "ae2:inverted_toggle_bus",
  //   "ae2:cable_energy_acceptor",
  //   "ae2:level_emitter",
  //   "ae2:energy_level_emitter",
  //   "#ae2:illuminated_panel",
  //   "ae2:storage_monitor",
  //   "ae2:dense_energy_cell",
  //   "ae2:condenser",
  // ]);

  // event.add("ironberry:cpu", [
  //   "ae2:crafting_unit",
  //   "ae2:crafting_accelerator",
  //   "ae2:1k_crafting_storage",
  //   "ae2:4k_crafting_storage",
  //   "ae2:16k_crafting_storage",
  //   "ae2:64k_crafting_storage",
  //   "ae2:crafting_monitor",
  //   "ae2:256k_crafting_storage",
  // ]);

  // event.add("ironberry:req_1", [
  //   "ae2:chest",
  //   "ae2:wireless_access_point",
  //   "ae2:spatial_pylon",
  //   "ae2:spatial_io_port",
  //   "ae2:drive",
  //   "#ae2:pattern_provider",
  //   "ae2:spatial_anchor",
  //   "#ae2:interface",
  //   "ae2:annihilation_plane",
  //   "ae2:formation_plane",
  //   "ae2:export_bus",
  //   "ae2:import_bus",
  //   "ae2:storage_bus",
  //   "ae2:conversion_monitor",
  //   "#ironberry:p2p",
  //   "ae2:pattern_access_terminal",
  //   "ae2:pattern_encoding_terminal",
  //   "ae2:crafting_terminal",
  //   "ae2:terminal",
  //   "@merequester",
  //   "ae2:security_station",
  //   "ae2:io_port",
  // ]);

  event.add("ironberry:p2p", ['ae2:me_p2p_tunnel', 'ae2:redstone_p2p_tunnel', 'ae2:item_p2p_tunnel', 'ae2:fluid_p2p_tunnel', 'ae2:fe_p2p_tunnel', 'ae2:light_p2p_tunnel', 'arseng:source_p2p_tunnel', 'arseng:spell_p2p_tunnel', 'appmek:chemical_p2p_tunnel']);

  event.add("ironberry:blue_slabs", [
    "bluepower:half_block",
    "bluepower:cover",
    "bluepower:panel",
  ]);

  event.add("ironberry:ae2_chests", [
    "ae2:sky_stone_chest",
    "ae2:smooth_sky_stone_chest",
  ]);

  event.add("ironberry:blue_gems", [
    "bluepower:green_sapphire_gem",
    "bluepower:amethyst_gem",
    "bluepower:ruby_gem",
    "bluepower:sapphire_gem",
  ]);

  event.add("ironberry:fluid_devices", [
    //'thermal:fluid_duct',
    //'thermal:fluid_duct_windowed',
    "cyclic:trash",
    "thermal:device_potion_diffuser",
    "thermal:device_water_gen",
    //'thermal:fluid_cell',
    "thermal:device_hive_extractor",
    "thermal:device_tree_extractor",
    "thermal:device_xp_condenser",
  ]);

  event.add("thermal:fluid_ducts", [
    "thermal:fluid_duct",
    "thermal:fluid_duct_windowed",
  ]);

  event.add("ironberry:energy_devices", [
    "thermal:charge_bench",
    "thermal:tinker_bench",
    "prettypipes:pressurizer",
    //'thermal:energy_duct',
    "bluepower:engine",
    //'thermal:energy_cell',
  ]);

  event.add("ironberry:wrench_fix", [
    "nuclearcraft:multitool",
    "thermal:wrench",
    "ae2:certus_quartz_wrench",
    "ae2:nether_quartz_wrench",
    //"ae2:network_tool",
    "essentials:wrench",
    "integrateddynamics:wrench",
    "pipez:wrench",
    "cyclic:cable_wrench",
    "rftoolsbase:smartwrench",
  ]);

  event.add("ironberry:ae_workshop", ["ae2:chest", "ae2:cell_workbench"]);

  event.add("ironberry:nosilk", [
    "minecraft:sculk_catalyst",
    "minecraft:sculk_sensor",
    "minecraft:sculk_shrieker",
  ]);

  event.add("ironberry:ae2_wireless", [
    "ae2wtlib:wireless_universal_terminal",
    "ae2:wireless_crafting_terminal",
    "ae2:wireless_terminal",
    "ae2wtlib:wireless_pattern_access_terminal",
    "ae2wtlib:wireless_pattern_encoding_terminal",
  ]);

  event.add("ironberry:tables", [
    "minecraft:crafting_table",
    "craftingstation:crafting_station",
    "craftingstation:crafting_station_slab",
  ]);

  event.add("ironberry:ae_outside", [
    "ae2:charger",
    "ae2:chest",
    "ae2:cell_workbench",
    "ae2:inscriber",
    "ae2things:advanced_inscriber",
    "ae2:condenser",
  ]);

  event.add("ironberry:ae_charged", [
    "ae2:matter_cannon",
    "ae2:entropy_manipulator",
    "ae2:color_applicator",
    "ae2:charged_staff",
  ]);

  event.add("ironberry:fishing", [
    "minecraft:phantom_membrane",
    "minecraft:chicken",
    "minecraft:feather",
    "minecraft:nautilus_shell",
    "minecraft:rabbit_foot",
    "minecraft:ghast_tear",
    "minecraft:bamboo",
    "kubejs:soul",
    "minecraft:saddle",
    "minecraft:leather_boots",
    "froglins:froglin_egg",
    "minecraft:prismarine_shard",
  ]);

  event.add("ironberry:white_stones", [
    "bluepower:marble",
    "minecraft:calcite",
  ]);

  event.add("ironberry:dark_stones", [
    "minecraft:cobbled_deepslate",
    "minecraft:smooth_basalt",
  ]);

  event.add("ironberry:spore_colony", [
    "farmersdelight:red_mushroom_colony",
    "farmersdelight:brown_mushroom_colony",
  ]);

  event.add("ironberry:sticky", [
    "minecraft:slime_ball",
    "minecraft:ink_sac",
    "minecraft:glow_ink_sac",
  ]);

  event.add("ironberry:ritual_tablets", [
    "ars_nouveau:ritual_challenge",
    "ars_nouveau:ritual_forestation",
    "ars_nouveau:ritual_binding",
    "ars_nouveau:ritual_awakening",
    "ars_nouveau:ritual_warping",
    "ars_nouveau:ritual_disintegration",
    "ars_nouveau:ritual_moonfall",
    "ars_nouveau:ritual_sunrise",
    "ars_nouveau:ritual_burrowing",
    "ars_nouveau:ritual_containment",
    "ars_nouveau:ritual_scrying",
    "ars_nouveau:ritual_flowering",
    "ars_nouveau:ritual_sanctuary",
    "ars_nouveau:ritual_fertility",
    "ars_nouveau:ritual_overgrowth",
    "ars_nouveau:ritual_cloudshaping",
    "ars_nouveau:ritual_flight",
    "ars_nouveau:ritual_conjure_island_plains",
    "ars_nouveau:ritual_wilden_summon",
    "ars_nouveau:ritual_restoration",
    "ars_nouveau:ritual_harvest",
    "ars_nouveau:ritual_conjure_island_desert",
    "ars_nouveau:ritual_animal_summon",
  ]);

  event.add("ironberry:gift_loot", [
    "#ironberry:ritual_tablets",
    "ars_nouveau:starbuncle_charm",
    "#ars_nouveau:magic_shards",
    "ars_nouveau:music_disc_firel_the_wild_hunt",
    "ars_nouveau:music_disc_thistle_the_sound_of_glass",
    "ars_nouveau:music_disc_aria_biblio",
    "ars_nouveau:warp_scroll",
    "#ars_nouveau:wilden_drop",
    "ars_nouveau:source_berry",
    "ars_nouveau:split_arrow",
    "ars_nouveau:source_gem",
    "ars_nouveau:pierce_arrow",
    "ars_nouveau:amplify_arrow",
  ]);

  event.add("ironberry:boss_loot", [
    "ars_nouveau:starby_gift",
    "exoticbirds:phoenix_egg",
    "tombstone:soul_receptacle",
    "reactive:stardust",
    "ars_nouveau:greater_experience_gem",
    "ars_nouveau:experience_gem",
    "ars_nouveau:bookwyrm_charm",
    "#quark:runes",
    "twilightforest:steeleaf_ingot",
    "twilightforest:fiery_ingot",
    "kubejs:iolite",
    "kubejs:aquamarine",
    "kubejs:jade",
    "twilightforest:borer_essence",
    "kubejs:topaz",
    "thermaloot:variable_capacitor",
    "twilightforest:ironwood_ingot",
    "twilightforest:knightmetal_ingot",
  ]);

  event.add("ironberry:indigo_flowers", [
    "minecraft:lily_of_the_valley",
    "minecraft:cornflower",
    "minecraft:dandelion",
    "minecraft:poppy",
    "minecraft:blue_orchid",
    "minecraft:allium",
    "minecraft:azure_bluet",
    "minecraft:red_tulip",
    "minecraft:orange_tulip",
    "minecraft:white_tulip",
    "minecraft:pink_tulip",
    "minecraft:oxeye_daisy",
  ]);

  event
  .get("ironberry:indigo_flowers")
  .getObjectIds()
  .forEach((block) => {
    data.block.flowers.push(block);
  });

  event.add("ironberry:block_drop", [
    "inventorypets:nugget_emerald",
    "inventorypets:nugget_coal",
    "kubejs:raw_copper_nugget",
    "kubejs:raw_iron_nugget",
    "kubejs:raw_gold_nugget",
  ]);

  event.add("ironberry:soils", data.block.soils);

  event.add("ironberry:bundled", [
    "integrateddynamics:crystalized_chorus_chunk",
    "integrateddynamics:crystalized_menril_chunk",
  ]);

  event.add("ironberry:storage_box", ["minecraft:chest", "minecraft:barrel"]);

  event.add("ironberry:effigy", [
    "alchemygadgetry:water_effigy",
    "alchemygadgetry:death_effigy",
    "alchemygadgetry:fire_effigy",
    "alchemygadgetry:air_effigy",
  ]);
  event.add("ironberry:cure", [
    "alchemygadgetry:elixir",
    "alchemygadgetry:eye_drops",
    "alchemygadgetry:tonic",
    "alchemygadgetry:iron_supplements",
    "alchemygadgetry:black_tea",
    "alchemygadgetry:vitamins",
    "alchemygadgetry:salve",
    "alchemygadgetry:antidote",
  ]);

  event.add("ironberry:pets", [
    "inventorypets:pet_wither",
    "inventorypets:pet_slime",
    "inventorypets:pet_pufferfish",
    "inventorypets:pet_shield",
    "inventorypets:pet_heart",
    "inventorypets:pet_dubstep",
    "inventorypets:pet_torch",
    "inventorypets:pet_silverfish",
    "inventorypets:pet_pixie",
    "inventorypets:pet_cheetah",
    "inventorypets:pet_quiver",
    "inventorypets:pet_banana",
    "inventorypets:pet_jukebox",
    "inventorypets:pet_furnace",
    "inventorypets:pet_enchanting_table",
    "inventorypets:pet_double_chest",
    "inventorypets:pet_crafting_table",
    "inventorypets:pet_chest",
    "inventorypets:pet_brewing_stand",
    "inventorypets:pet_bed",
    "inventorypets:pet_anvil",
    "inventorypets:pet_squid",
    "inventorypets:pet_sheep",
    "inventorypets:pet_pig",
    "inventorypets:pet_ocelot",
    "inventorypets:pet_mooshroom",
    "inventorypets:pet_cow",
    "inventorypets:pet_chicken",
    "inventorypets:pet_spider",
    "inventorypets:pet_snow_golem",
    "inventorypets:pet_iron_golem",
    "inventorypets:pet_creeper",
    "inventorypets:pet_pacman",
  ]);

  event.add("ironberry:ars_arrows", [
    "ars_nouveau:pierce_arrow",
    "ars_nouveau:split_arrow",
    "ars_nouveau:amplify_arrow",
  ]);

  event.add("ironberry:boss_drop", [
    "minecraft:spider_eye",
    "minecraft:string",
    "minecraft:ender_pearl",
    "twilightforest:minoshroom_trophy",
    "minecraft:coal",
    "minecraft:bone",
    "twilightforest:arctic_fur",
    "twilightforest:towerwood",
    "thermal:blizz_rod",
    "thermal:blitz_rod",
    "minecraft:blaze_rod",
    "thermal:basalz_rod",
    "twilightforest:knight_phantom_trophy",
    "minecraft:wheat",
    "minecraft:gold_nugget",
    "twilightforest:torchberries",
    "twilightforest:lich_trophy",
    "minecraft:iron_ingot",
    "minecraft:snowball",
    "quark:soul_bead",
    "minecraft:arrow",
    "ars_nouveau:wilden_spike",
    "ars_nouveau:wilden_wing",
    "ars_nouveau:wilden_horn",
    "twilightforest:armor_shard",
    "minecraft:paper",
    "twilightforest:magic_map_focus",
    "minecraft:book",
    "minecraft:glowstone_dust",
    "twilightforest:raw_meef",
    "twilightforest:maze_map_focus",
    "minecraft:leather",
    "twilightforest:meef_stroganoff",
  ]);

  event.add("ironberry:vanilla_pipe", [
    "minecraft:hopper",
    "minecraft:dropper",
  ]);
  event.add("ironberry:miniboss_trophy", [
    "twilightforest:minoshroom_trophy",
    "twilightforest:knight_phantom_trophy",
  ]);

  event.add("ironberry:echodrop", ["minecraft:sculk", "minecraft:sculk_vein"]);

  event.add("ironberry:onlyplayer", [
    //"kubejs:grave_spawn",
    //"kubejs:ore_bone_meal",
    //"kubejs:rich_bone_meal",
    "tombstone:strange_scroll",
  ]);

  event.add("ironberry:source_gems", [
    "minecraft:lapis_lazuli",
    "minecraft:amethyst_shard",
  ]);

  event.add("ironberry:patina_source", [
    "minecraft:oxidized_copper",
    "minecraft:oxidized_cut_copper",
    "minecraft:oxidized_cut_copper_stairs",
    "minecraft:oxidized_cut_copper_slab",
    "quark:oxidized_cut_copper_vertical_slab",
    "minecraft:weathered_copper",
    "minecraft:weathered_cut_copper",
    "minecraft:weathered_cut_copper_stairs",
    "minecraft:weathered_cut_copper_slab",
    "quark:weathered_cut_copper_vertical_slab",
    "minecraft:exposed_copper",
    "minecraft:exposed_cut_copper",
    "minecraft:exposed_cut_copper_stairs",
    "minecraft:exposed_cut_copper_slab",
    "quark:exposed_cut_copper_vertical_slab",
  ]);

  event.add("ironberry:soap_popera", ["minecraft:potato", "kubejs:patina"]);

  event.add("ironberry:magic_trees", [
    "ars_nouveau:blue_archwood_sapling",
    "ars_nouveau:purple_archwood_sapling",
    "ars_nouveau:green_archwood_sapling",
    "ars_nouveau:red_archwood_sapling",
  ]);

  event.add("ironberry:magic_cards", [
    "cyclic:location_data",
    "cyclic:blockstate_data",
    "cyclic:settings_data",
    "cyclic:shape_data",
    "cyclic:filter_data",
    "cyclic:entity_data",
    "cyclic:sound_data",
  ]);

  event.add("ironberry:drop_sand", [
    "minecraft:lily_pad",
    "minecraft:gold_nugget",
    "minecraft:nautilus_shell",
    "minecraft:bone",
  ]);

  event.add("ironberry:pnc_modules", [
    "pneumaticcraft:logistics_module",
    "pneumaticcraft:regulator_tube_module",
    "pneumaticcraft:air_grate_module",
    "pneumaticcraft:flow_detector_module",
    "pneumaticcraft:pressure_gauge_module",
    "pneumaticcraft:safety_tube_module",
    "pneumaticcraft:vacuum_module",
    "pneumaticcraft:redstone_module",
    "pneumaticcraft:thermostat_module",
    "pneumaticcraft:charging_module",
  ]);

  event.add("ironberry:good_berries", [
    "ars_nouveau:source_berry",
    "homespun:ironberries",
  ]);

  event.add("ironberry:bucket_fuel", [
    "minecraft:water_bucket",
    "pneumaticcraft:biodiesel_bucket",
    "pneumaticcraft:ethanol_bucket",
  ]);

  event.add("ironberry:birds_cooked", [
    "exoticbirds:cooked_birdmeat",
    "minecraft:cooked_chicken",
  ]);

  event.add("ironberry:mid_ingots", [
    "thermal:tin_ingot",
    "mekanism:ingot_osmium",
    "nuclearcraft:thorium_ingot",
    "mekanism:ingot_uranium",
    "nuclearcraft:boron_ingot",
    "nuclearcraft:magnesium_ingot",
  ]);

  event.add('ironberry:universal_cable',['mekanism:basic_logistical_transporter', 'mekanism:basic_universal_cable', 'mekanism:basic_pressurized_tube', 'mekanism:basic_mechanical_pipe'])

  event.add("ironberry:blue_picks", [
    "bluepower:sapphire_pickaxe",
    "bluepower:green_sapphire_pickaxe",
    "bluepower:ruby_pickaxe",
  ]);

  event.add("ironberry:roots_stones", [
    "rootsclassic:accelerator_standing_stone",
    "rootsclassic:vacuum_standing_stone",
    "rootsclassic:repulsor_standing_stone",
    "rootsclassic:healer_standing_stone",
    "rootsclassic:aesthetic_standing_stone",
    "rootsclassic:entangler_standing_stone",
    "rootsclassic:igniter_standing_stone",
    "rootsclassic:grower_standing_stone",
  ]);

  event.add("ironberry:sculk_replace", data.block.sculk);

  event.add("ironberry:rftools_plates", [
    "rftoolsutility:redstone_receiver",
    "rftoolsutility:redstone_transmitter",
    "rftoolsutility:wire",
    "rftoolsutility:timer",
    "rftoolsutility:logic",
    "rftoolsutility:sequencer",
    "rftoolsutility:analog",
    "rftoolsutility:counter",
    "rftoolsutility:digit",
    "rftoolsutility:creative_screen",
    "rftoolsbase:information_screen",
    "rftoolsutility:invchecker",
    "rftoolsutility:sensor",
    "rftoolsutility:simple_dialer",
  ]);

  event.add("ironberry:rftools_machines", [
    "rftoolsutility:crafter2",
    "rftoolsutility:matter_receiver",
    "rftoolsutility:matter_transmitter",
    "rftoolsutility:crafter1",
    "rftoolsutility:crafter3",
    "rftoolsbase:machine_infuser",
    "rftoolsutility:dialing_device",
  ]);

  event.add("ironberry:rftools_modules", [
    "rftoolsutility:fluid_module", 
    "rftoolsutility:fluidplus_module", 
    "rftoolsutility:machineinformation_module", 
    "rftoolsutility:computer_module", 
    "rftoolsutility:button_module", 
    "rftoolsutility:redstone_module", 
    "rftoolsutility:counter_module", 
    "rftoolsutility:counterplus_module", 
    "rftoolsutility:screen_link", 
    "rftoolsutility:inventory_module", 
    "rftoolsutility:energyplus_module", 
    "rftoolsutility:energy_module", 
    "rftoolsutility:text_module", 
    "rftoolsutility:redstone_information", 
    "rftoolsutility:inventoryplus_module", 
    "rftoolsutility:clock_module", 
  ]);


event.add('ironberry:mechanicalbenchs',['bluepower:auto_project_table','essentials:auto_crafter'])

event.add('ironberry:urn_loot',['minecraft:gold_nugget', 'minecraft:bone', 'minecraft:emerald', 'minecraft:amethyst_shard', 'supplementaries:antique_ink', 'minecraft:raw_copper', 'minecraft:lapis_lazuli', 'minecraft:raw_iron', 'supplementaries:bomb_blue', 'minecraft:ender_pearl', 'minecraft:bundle', 'minecraft:skeleton_skull', 'minecraft:zombie_head', 'minecraft:slime_ball', 'supplementaries:bomb', 'minecraft:diamond', 'minecraft:raw_gold', 'minecraft:iron_nugget', 'supplementaries:ash'])

event.add('ironberry:blast_bricks',['thoriumreactors:frameless_black_industrial_block_floor', 'thoriumreactors:frameless_industrial_block_floor', 'thoriumreactors:warning_block_lined_white_black_right', 'thoriumreactors:warning_block_lined_white_black_left', 'thoriumreactors:warning_block_lined_white_orange_right', 'thoriumreactors:warning_block_lined_white_orange_left', 'thoriumreactors:warning_block_lined_black_yellow_right', 'thoriumreactors:warning_block_lined_black_yellow_left', 'thoriumreactors:white_industrial_block_smooth', 'thoriumreactors:white_industrial_block_brick', 'thoriumreactors:white_industrial_block_paving', 'thoriumreactors:white_industrial_block_big_tile', 'thoriumreactors:white_industrial_block', 'thoriumreactors:black_industrial_block_floor', 'thoriumreactors:black_industrial_block_smooth', 'thoriumreactors:black_industrial_block_brick', 'thoriumreactors:black_industrial_block_paving', 'thoriumreactors:black_industrial_block_big_tile', 'thoriumreactors:black_industrial_block', 'thoriumreactors:industrial_block', 'thoriumreactors:industrial_block_floor', 'thoriumreactors:industrial_block_smooth', 'thoriumreactors:industrial_block_brick', 'thoriumreactors:industrial_block_paving', 'thoriumreactors:industrial_block_big_tile', 'thoriumreactors:black_inverted_factory_block', 'thoriumreactors:black_factory_block', 'thoriumreactors:inverted_factory_block', 'thoriumreactors:factory_block'])

event.add('ironberry:bars',['minecraft:iron_bars', 'thoriumreactors:grate_floor_block', 'thoriumreactors:grate_wall_block'])

event.add('ironberry:turbine_moderator',['thoriumreactors:nickel_block', 'thoriumreactors:niob_block', 'thoriumreactors:molybdenum_block'])

event.add('ironberry:sacks',['kubejs:sack_access', 'kubejs:sack_ports', 'kubejs:sack_cards', 'kubejs:sack_misc', 'kubejs:sack_cables'])

event.add('ironberry:mek_glass',['mekanismgenerators:reactor_glass', 'mekanism:structural_glass'])

event.get('ten3:catalyst').removeAll()

event.add('ten3:catalyst','ae2:fluix_crystal')

});

ServerEvents.tags("block", (event) => {
  //tombstone graves on data.block.tombstone value
  event
    .get("tombstone:decorative_graves")
    .getObjectIds()
    .forEach((block) => {
      data.block.tombstone.push(block);
    });
  //crops on data.block.crops value
  /*event
    .get("minecraft:crops")
    .getObjectIds()
    .forEach((block) => {
      data.block.crops.push(block);
    });
  //leaves on data.block.leaves value
  event
    .get("minecraft:leaves")
    .getObjectIds()
    .forEach((block) => {
      data.block.leaves.push(block);
    });*/

  //colony added
  event.add("farmersdelight:wild_crops", "farmersdelight:red_mushroom_colony");
  event.add(
    "farmersdelight:wild_crops",
    "farmersdelight:brown_mushroom_colony"
  );

  //flax added
  event.add("farmersdelight:wild_crops", "supplementaries:wild_flax");

  //blacklisted rice
  event.remove("farmersdelight:wild_crops", "farmersdelight:wild_rice");

  //farmersdelight wild_crops on data.block.wild_crops value
  event
    .get("farmersdelight:wild_crops")
    .getObjectIds()
    .forEach((block) => {
      data.block.wild_crops.push(block);
    });

  //compost plus
  event.get("farmersdelight:compost_activators").removeAll();
  event.add("farmersdelight:compost_activators", data.block.soils);

  //carry on fix

  let tags = ["forge:immovable", "forge:relocation_not_supported"];
  let roots_pedestals = [
    "rootsclassic:mundane_standing_stone",
    "rootsclassic:attuned_standing_stone",
    "rootsclassic:vacuum_standing_stone",
    "rootsclassic:repulsor_standing_stone",
    "rootsclassic:accelerator_standing_stone",
    "rootsclassic:aesthetic_standing_stone",
    "rootsclassic:entangler_standing_stone",
    "rootsclassic:igniter_standing_stone",
    "rootsclassic:grower_standing_stone",
    "rootsclassic:healer_standing_stone",
  ];
  tags.forEach((tag) => {
    event.add(tag, roots_pedestals);
  });

  event
    .get("minecraft:sculk_replaceable")
    .getObjectIds()
    .forEach((block) => {
      //console.log(block)
      data.block.sculk.push(block);
    });
});

ServerEvents.tags("fluid", (event) => {
  event.add("ironberry:chad_water", "minecraft:water");
  event.add("ironberry:chad_steam", "mekanism:steam");
  event.add("ironberry:chad_glow", "thermal:glowstone");
  event.add("ironberry:chad_merlin", "integrateddynamics:menril_resin"); // not my fault but i decide it , and now i keep! j.j
  event.add("ironberry:chad_chorus", "integrateddynamics:liquid_chorus");
  event.add("ironberry:chad_diesel", "pneumaticcraft:biodiesel");
  event.add("ironberry:chad_ethanol", "pneumaticcraft:ethanol");
  event.add("ironberry:chad_oil", "pneumaticcraft:oil");
  event.add("ironberry:chad_resin", "thermal:resin");
  event.add("ironberry:chad_refined", "kubejs:refined_resin");
  event.add("ironberry:chad_latex", "thermal:latex");
  event.add("ironberry:chad_sap", "thermal:sap");
  event.add("ironberry:chad_syrup", "thermal:syrup");
  event.add("ironberry:chad_crude_oil", "thermal:crude_oil");
});
