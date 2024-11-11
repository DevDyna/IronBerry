ServerEvents.recipes((event) => {
  //stone cutter

  function scut(result, input) {
    for (let j = 0; j < input.length; j++) {
      for (let i = 0; i < result.length; i++) {
        event
          .stonecutting(result[i], input[j])
          .id(
            RegX(
              input[j] +
                "_n" +
                i +
                "_" +
                result[i].toString().replace(/[0-9\s]/g, "")
            )
          );
      }
    }
  }

  function switch_scut(io) {
    event.stonecutting(io[0], io[1]);
    event.stonecutting(io[1], io[0]);
  }

  //servos
  scut(
    [
      "thermal:fluid_filter_augment",
      "thermal:item_filter_augment",
      "thermal:energy_limiter_attachment",
      "thermal:turbo_servo_attachment",
      "thermal:filter_attachment",
      "thermal:servo_attachment",
      "thermal:area_radius_augment",
    ],
    ["minecraft:paper", "#ironberry:te_filter"]
  );

  //item devices
  scut(
    [
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
    ],
    ["#ironberry:item_devices", "kubejs:blank"]
  );
  //prettypipes modules
  scut(
    [
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
      "ppfluids:low_fluid_retrieval_module",
      "ppfluids:low_fluid_extraction_module",
      "ppfluids:medium_fluid_extraction_module",
      "ppfluids:high_fluid_extraction_module",
      "ppfluids:low_fluid_filter_module",
      "ppfluids:medium_fluid_filter_module",
      "ppfluids:high_fluid_filter_module",
      "ppfluids:medium_fluid_retrieval_module",
      "ppfluids:high_fluid_retrieval_module",
    ],
    ["prettypipes:blank_module", "#ironberry:module"]
  );

  //tombstone
  scut(
    [
      "tombstone:decorative_grave_cross",
      "tombstone:decorative_grave_normal",
      "tombstone:decorative_grave_original",
      "tombstone:decorative_subaraki_grave",
      "tombstone:decorative_grave_simple",
      "tombstone:decorative_tombstone",
    ],
    ["#ironberry:basic_marbles", "#tombstone:decorative_graves"]
  );

  // scut(
  //   ["thermal:junk_net", "thermal:aquachow", "thermal:deep_aquachow"],
  //   ["#forge:vegetables", "minecraft:wheat", "#ironberry:fish_food"]
  // );

  scut(
    ["16x thermal:fluid_duct", "16x thermal:fluid_duct_windowed"],
    ["thermal:fluid_cell"]
  );

  scut(
    ["thermal:fluid_duct", "thermal:fluid_duct_windowed"],
    ["#thermal:fluid_ducts"]
  );

  scut(["16x thermal:energy_duct"], ["thermal:energy_cell"]);

  scut(["sawmill:sawmill"], ["#minecraft:logs"]);

  //fluid devices
  scut(
    [
      //'thermal:fluid_duct',
      //'thermal:fluid_duct_windowed',
      "cyclic:trash",
      "thermal:device_potion_diffuser",
      "thermal:device_water_gen",
      //'thermal:fluid_cell',
      "thermal:device_hive_extractor",
      "thermal:device_tree_extractor",
      "thermal:device_xp_condenser",
    ],
    ["thermal:fluid_cell_frame", "#ironberry:fluid_devices"]
  );
  //energy devices
  scut(
    [
      "thermal:charge_bench",
      "thermal:tinker_bench",
      "prettypipes:pressurizer",
      //'thermal:energy_duct',
      "bluepower:engine",
      //'thermal:energy_cell',
    ],
    ["thermal:energy_cell_frame", "#ironberry:energy_devices"]
  );

  //wrenches
  scut(
    [
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
      "create:wrench",
    ],
    ["minecraft:stick", "#ironberry:wrench_fix"]
  );

  //saplings
  scut(
    [
      "twilightforest:mining_sapling",
      "twilightforest:sorting_sapling",
      "twilightforest:rainbow_oak_sapling",
      "twilightforest:twilight_oak_sapling",
      "twilightforest:canopy_sapling",
      "twilightforest:time_sapling",
      "twilightforest:darkwood_sapling",
      "twilightforest:hollow_oak_sapling",
      "twilightforest:mangrove_sapling",
      "twilightforest:transformation_sapling",
      "homespun:ironwood_sapling",
      "homespun:olive_sapling",
      "quark:blue_blossom_sapling",
      "quark:lavender_blossom_sapling",
      "quark:orange_blossom_sapling",
      "quark:pink_blossom_sapling",
      "quark:yellow_blossom_sapling",
      "quark:red_blossom_sapling",
      "quark:ancient_sapling",
      "minecraft:dark_oak_sapling",
      "minecraft:acacia_sapling",
      "minecraft:jungle_sapling",
      "minecraft:birch_sapling",
      "minecraft:spruce_sapling",
      "minecraft:oak_sapling",
      "thermal:rubberwood_sapling",
    ],
    ["#minecraft:saplings"]
  );

  //controller to link
  scut(
    ["3x sophisticatedstorage:storage_link"],
    ["sophisticatedstorage:controller"]
  );

  //trash recycle
  switch_scut(["cyclic:trash", "thermal:machine_null_augment"]);

  scut(
    [
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
    ],
    ["pneumaticcraft:ingot_iron_compressed", "#ironberry:pnc_modules"]
  );

  switch_scut([
    "mekanismgenerators:reactor_glass",
    "mekanism:structural_glass",
  ]);

  scut(
    [
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
    ],
    ["#ironberry:pets", "exoticbirds:phoenix_egg"]
  );

  scut(["luggage:luggage"], ["#ironberry:storage_box"]);

  scut(
    [
      "cyclic:location_data",
      "cyclic:blockstate_data",
      "cyclic:settings_data",
      "cyclic:shape_data",
      "cyclic:filter_data",
      "cyclic:entity_data",
      "cyclic:sound_data",
    ],
    ["#ironberry:magic_cards", "cyclic:carbon_paper"]
  );

  scut(["reactive:copper_symbol"], ["minecraft:copper_ingot"]);
  scut(["reactive:iron_symbol"], ["minecraft:iron_ingot"]);
  scut(["reactive:gold_symbol"], ["minecraft:gold_ingot"]);

  scut(["reactive:crystal_iron"], ["minecraft:iron_block"]);

  scut(
    [
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
      "create:nixie_tube",
      "create:redstone_link",
      "create:analog_lever",
      "createaddition:redstone_relay",
      "create:pulse_repeater",
      "create:pulse_extender",
      "create:powered_latch",
      "create:powered_toggle_latch",
    ],
    ["rftoolsbase:machine_base", "#ironberry:rftools_plates"]
  );

  scut(["4x rftoolsbase:machine_base"], ["rftoolsbase:machine_frame"]);

  scut(
    [
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
    ],
    ["#ironberry:rftools_modules", "kubejs:base_module"]
  );

  scut(
    [
      "ae2:me_p2p_tunnel",
      "ae2:redstone_p2p_tunnel",
      "ae2:item_p2p_tunnel",
      "ae2:fluid_p2p_tunnel",
      "ae2:fe_p2p_tunnel",
      "ae2:light_p2p_tunnel",
      "arseng:source_p2p_tunnel",
      "arseng:spell_p2p_tunnel",
      "appmek:chemical_p2p_tunnel",
    ],
    ["#ironberry:p2p"]
  );

  scut(
    [
      "minecraft:rose_bush",
      "minecraft:lilac",
      "minecraft:peony",
      "minecraft:sunflower",
    ],
    [
      "minecraft:rose_bush",
      "minecraft:lilac",
      "minecraft:peony",
      "minecraft:sunflower",
    ]
  );
  let factory_blocks = [
    "thoriumreactors:frameless_black_industrial_block_floor",
    "thoriumreactors:frameless_industrial_block_floor",
    "thoriumreactors:warning_block_lined_white_black_right",
    "thoriumreactors:warning_block_lined_white_black_left",
    "thoriumreactors:warning_block_lined_white_orange_right",
    "thoriumreactors:warning_block_lined_white_orange_left",
    "thoriumreactors:warning_block_lined_black_yellow_right",
    "thoriumreactors:warning_block_lined_black_yellow_left",
    "thoriumreactors:white_industrial_block_smooth",
    "thoriumreactors:white_industrial_block_brick",
    "thoriumreactors:white_industrial_block_paving",
    "thoriumreactors:white_industrial_block_big_tile",
    "thoriumreactors:white_industrial_block",
    "thoriumreactors:black_industrial_block_floor",
    "thoriumreactors:black_industrial_block_smooth",
    "thoriumreactors:black_industrial_block_brick",
    "thoriumreactors:black_industrial_block_paving",
    "thoriumreactors:black_industrial_block_big_tile",
    "thoriumreactors:black_industrial_block",
    "thoriumreactors:industrial_block",
    "thoriumreactors:industrial_block_floor",
    "thoriumreactors:industrial_block_smooth",
    "thoriumreactors:industrial_block_brick",
    "thoriumreactors:industrial_block_paving",
    "thoriumreactors:industrial_block_big_tile",
    "thoriumreactors:black_inverted_factory_block",
    "thoriumreactors:black_factory_block",
    "thoriumreactors:inverted_factory_block",
    "thoriumreactors:factory_block",
  ];
  scut(factory_blocks, ["#ironberry:blast_bricks"]);

  factory_blocks.forEach((element) => {
    scut(["16x " + element], ["thoriumreactors:blasted_stone"]);
  });

  scut(
    [
      "minecraft:iron_bars",
      "thoriumreactors:grate_floor_block",
      "thoriumreactors:grate_wall_block",
    ],
    ["#ironberry:bars"]
  );

  scut(
    [
      "create:rose_quartz_block",
      "create:rose_quartz_tiles",
      "create:small_rose_quartz_tiles",
    ],
    [
      "create:rose_quartz_block",
      "create:rose_quartz_tiles",
      "create:small_rose_quartz_tiles",
    ]
  );

  scut(
    [
      "create:framed_glass_pane",
      "create:horizontal_framed_glass",
      "create:framed_glass_trapdoor",
      "create:tiled_glass_pane",
      "create:framed_glass_door",
      "create:framed_glass",
      "create:vertical_framed_glass",
      "create:horizontal_framed_glass_pane",
      "create:vertical_framed_glass_pane",
      "create:tiled_glass",
    ],
    ["#ironberry:glasses_blockes", "minecraft:glass"]
  );

  scut(
    [
      "create:copycat_step",
      "create:copycat_panel",
      "create:andesite_scaffolding",
      "create:andesite_ladder",
      "create:andesite_door",
      "create:andesite_bars",
    ],
    ["#ironberry:andesite_decor", "create:andesite_alloy"]
  );
  scut(
    [
      "create:copper_bars",
      "create:copper_door",
      "create:copper_ladder",
      "create:copper_scaffolding",
    ],
    ["#ironberry:copper_decor", "minecraft:copper_ingot"]
  );
  scut(
    [
      "create:brass_scaffolding",
      "create:brass_ladder",
      "create:brass_door",
      "create:brass_bars",
    ],
    ["#ironberry:brass_decor", "create:brass_ingot"]
  );
  scut(
    [
      "create:train_door",
      "create:train_trapdoor",
      "createaddition:barbed_wire",
    ],
    ["#ironberry:train_decor", "kubejs:pre_compressed"]
  );

  global.recipes.vanilla_rocks.forEach((item) => {
    global.recipes.variants.forEach((type) => {
      if (item == "dripstone") {
        scut(
          [type.replace("#TYPE#", item)],
          ["minecraft:dripstone_block", "#create:stone_types/" + item]
        );
      } else {
        scut(
          [type.replace("#TYPE#", item)],
          ["minecraft:" + item, "#create:stone_types/" + item]
        );
      }
    });
  });

  global.recipes.create_rocks.forEach((item) => {
    global.recipes.variants.forEach((type) => {
      scut(
        [type.replace("#TYPE#", item)],
        ["create:" + item, "#create:stone_types/" + item]
      );
    });
  });

  scut(
    ["minecraft:chain", "create:minecart_coupling"],
    ["minecraft:chain", "create:minecart_coupling"]
  );

  scut(
    [
      "create:contraption_controls",
      "create:sticker",
      "create:portable_storage_interface",
      "create:redstone_contact",
      "create:gantry_carriage",
      "create:mechanical_plough",
      "create:mechanical_harvester",
    ],
    ["create:andesite_casing", "#ironberry:create_attach"]
  );

  scut(
    [
      "create:radial_chassis",
      "create:linear_chassis",
      "create:secondary_linear_chassis",
    ],
    ["create:radial_chassis", "#ironberry:create_support"]
  );

  scut(
    ["create:cuckoo_clock", "supplementaries:clock_block"],
    ["create:cuckoo_clock", "supplementaries:clock_block"]
  );

  scut(["8x create:turntable"], ["supplementaries:turn_table"]);

  scut(
    ["create:speedometer", "create:stressometer"],
    ["create:speedometer", "create:stressometer"]
  );

  scut(data.item.music_discs, ["#minecraft:music_discs"]);

  scut(
    [
      "minecraft:mojang_banner_pattern",
      "minecraft:flower_banner_pattern",
      "minecraft:skull_banner_pattern",
      "minecraft:creeper_banner_pattern",
      "biomancy:mascot_patterns",
      "minecraft:piglin_banner_pattern",
      "minecraft:globe_banner_pattern",
      "twilightforest:alpha_yeti_banner_pattern",
      "twilightforest:snow_queen_banner_pattern",
      "twilightforest:quest_ram_banner_pattern",
      "twilightforest:ur_ghast_banner_pattern",
      "twilightforest:hydra_banner_pattern",
      "twilightforest:naga_banner_pattern",
      "twilightforest:lich_banner_pattern",
      "twilightforest:minoshroom_banner_pattern",
      "twilightforest:knight_phantom_banner_pattern",
    ],
    ["quark:paper_wall_big", "#ironberry:banner_patterns"]
  );

  scut(
    ["minecraft:bricks", "twilightforest:underbrick"],
    ["minecraft:bricks", "twilightforest:underbrick"]
  );

  scut(
    [
      "minecraft:chiseled_stone_bricks",
      "twilightforest:etched_nagastone",
      "twilightforest:nagastone_head",
      "twilightforest:nagastone",
    ],
    [
      "minecraft:chiseled_stone_bricks",
      "twilightforest:etched_nagastone",
      "twilightforest:nagastone_head",
      "twilightforest:nagastone",
    ]
  );

  scut(
    [
      "thermal:machine_brewer",
      "thermal:machine_bottler",
      "thermal:machine_centrifuge",
      "thermal:machine_press",
      "thermal:machine_insolator",
      "thermal:machine_crystallizer",
      "thermal:machine_pyrolyzer",
      "thermal:machine_smelter",
      "thermal:machine_pulverizer",
      "thermal:machine_crucible",
      "thermal:machine_crafter",
      "thermal:machine_refinery",
      "thermal:machine_furnace",
      "thermal:machine_sawmill",
      "thermal:machine_chiller",
    ],
    ["thermal:machine_frame", "#thermal:machines"]
  );

  scut(
    ["twilightforest:raven_feather", "minecraft:feather"],
    ["twilightforest:raven_feather", "minecraft:feather"]
  );

  scut(
    [
      "kubejs:clump_cast",
      "kubejs:gem_cast",
      "kubejs:crystal_cast",
      "kubejs:dust_cast",
      "thermal:chiller_ball_cast",
      "thermal:chiller_ingot_cast",
      "thermal:chiller_rod_cast",
      "kubejs:shard_cast",
    ],
    ["kubejs:blank_cast", "#thermal:crafting/casts"]
  );
});
