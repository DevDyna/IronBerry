ServerEvents.recipes((event) => {
  //shaped
  event.shaped("homespun:crushing_tub", ["   ", "P P", "PBP"], {
    B: "minecraft:bowl",
    P: "#minecraft:planks",
  });
  //
  //
  //
  event.shaped("minecraft:raw_iron", ["III", "III", "III"], {
    I: "homespun:tiny_iron_dust",
  });
  //
  //
  //
  event.shaped("reactive:scroll", ["DPG", "RPR", "IPD"], {
    I: "minecraft:ink_sac",
    G: "minecraft:glow_ink_sac",
    D: "minecraft:glowstone_dust",
    R: "minecraft:redstone",
    P: "minecraft:paper",
  });
  //
  //
  //
  event.shaped("pedestals:upgrade_pedestal_cobblegen", ["RGP", "GRP", "PPP"], {
    P: "minecraft:paper",
    G: "minecraft:glowstone_dust",
    R: "minecraft:redstone",
  });
  //
  //
  //
  event.shaped("16x minecraft:scaffolding", ["RSR", "R R", "R R"], {
    S: "minecraft:stick",
    R: "minecraft:string",
  });
  //
  //
  //
  event.shaped("kubejs:blank", ["MMM", "MPM", "MMM"], {
    M: "prettypipes:blank_module",
    P: "prettypipes:pipe",
  });
  //
  //
  //
  event.shaped("32x prettypipes:pipe", ["NNN", "GBG", "NNN"], {
    B: "prettypipes:blank_module",
    G: "reactive:quartz_bottle",
    N: "minecraft:iron_nugget",
  });
  //
  //
  //
  event.shaped("integrateddynamics:squeezer", ["IMI", "IRI", "ITI"], {
    I: "kubejs:pre_compressed",
    M: "kubejs:casing",
    T: "homespun:crushing_tub",
    R: "homespun:redstone_acid",
  });
  //
  //
  //
  event.shaped("integrateddynamics:drying_basin", ["INI", "IRI", "ITI"], {
    N: "kubejs:machine",
    I: "kubejs:pre_compressed",
    T: "homespun:evaporating_basin",
    R: "homespun:redstone_acid",
  });
  //
  //
  //
  event.shaped("ironchest:copper_chest", ["III", "ICI", "III"], {
    I: "minecraft:iron_ingot",
    C: "minecraft:chest",
  });
  //
  //
  //
  event.shaped("ironchest:iron_chest", ["III", "ICI", "III"], {
    I: "minecraft:iron_ingot",
    C: "ironchest:copper_chest",
  });
  //
  //
  //
  event.shaped("ironchest:gold_chest", ["III", "ICI", "III"], {
    I: "minecraft:iron_ingot",
    C: "ironchest:iron_chest",
  });
  //
  //
  //
  event.shaped("ironchest:diamond_chest", ["III", "ICI", "III"], {
    I: "minecraft:iron_ingot",
    C: "ironchest:gold_chest",
  });
  //
  //
  //
  event.shaped(
    "integrateddynamics:mechanical_squeezer",
    ["MBM", "LAL", "CZC"],
    {
      M: "kubejs:machine",
      B: "homespun:cast_iron_block",
      A: "integrateddynamics:squeezer",
      Z: "bluepower:blulectric_alloyfurnace",
      L: "bluepower:blulectric_cable",
      C: "kubejs:casing",
    }
  );
  //
  //
  //
  event.shaped(
    "integrateddynamics:mechanical_drying_basin",
    ["MBM", "LAL", "CZC"],
    {
      M: "kubejs:machine",
      B: "homespun:cast_iron_block",
      A: "integrateddynamics:drying_basin",
      Z: "bluepower:blulectric_alloyfurnace",
      L: "bluepower:blulectric_cable",
      C: "kubejs:casing",
    }
  );
  //
  //
  //
  event.shaped("minecraft:furnace", ["CCC", "CBC", "CCC"], {
    C: "#minecraft:stone_tool_materials",
    B: "bluepower:blulectric_furnace",
  });
  //
  //
  //
  event.shaped(
    "ironchest:copper_to_iron_chest_upgrade",
    ["III", "ICI", "III"],
    {
      I: "minecraft:iron_ingot",
      C: "ironchest:wood_to_copper_chest_upgrade",
    }
  );
  //
  //
  //
  event.shaped("ironchest:iron_to_gold_chest_upgrade", ["III", "ICI", "III"], {
    I: "minecraft:iron_ingot",
    C: "ironchest:copper_to_iron_chest_upgrade",
  });
  //
  //
  //
  event.shaped(
    "ironchest:gold_to_diamond_chest_upgrade",
    ["III", "ICI", "III"],
    {
      I: "minecraft:iron_ingot",
      C: "ironchest:iron_to_gold_chest_upgrade",
    }
  );
  //
  //
  //
  event.shaped("minecraft:composter", ["I I", "I I", "III"], {
    I: "#minecraft:wooden_slabs",
  });
  //
  //
  //
  event.shaped("thermal:fluid_cell_frame", ["CGC", "G G", "CGC"], {
    G: "#forge:nuggets/iron",
    C: "#forge:ingots/copper",
  });
  //
  //
  //
  event.shaped("thermal:energy_cell_frame", ["CGC", "G G", "CGC"], {
    G: "thermal:electrum_ingot",
    C: "thermal:lead_ingot",
  });
  //
  //
  //
  event.shaped("minecraft:chest", ["PPP", "P P", "PPP"], {
    P: "#minecraft:planks",
  });
  //
  //
  //
  event.shaped("4x minecraft:chest", ["PPP", "P P", "PPP"], {
    P: "#minecraft:logs",
  });
  //
  //
  //
  event.shaped("cyclic:hopper", ["W W", "WCW", " W "], {
    W: "#minecraft:planks",
    C: "#forge:chests",
  });
  //
  //
  //
  event.shaped("tombstone:fishing_rod_of_misadventure", ["  F", " BS", "B D"], {
    F: "minecraft:fishing_rod",
    B: "minecraft:stick",
    S: "tombstone:dust_of_vanishing",
    D: "tombstone:dust_of_frost",
  });
  //
  //
  //
  event.shaped("bluepower:lampinverted_rgb", ["GSG", "GSG", "GRG"], {
    G: "minecraft:glass_pane",
    R: "minecraft:redstone_torch",
    S: "reactive:stardust",
  });
  //
  //
  //
  event.shaped("bluepower:lamp_rgb", ["GSG", "GSG", "GRG"], {
    G: "minecraft:glass_pane",
    R: "minecraft:redstone",
    S: "reactive:stardust",
  });
  //
  //
  //
  event.shaped("bluepower:cagelamp_rgb", ["BSB", "GSG", "LRL"], {
    G: "minecraft:glass_pane",
    R: "minecraft:redstone",
    S: "reactive:stardust",
    L: "minecraft:stone_slab",
    B: "minecraft:iron_bars",
  });
  //
  //
  //
  event.shaped("bluepower:cagelampinverted_rgb", ["BSB", "GSG", "LRL"], {
    G: "minecraft:glass_pane",
    R: "minecraft:redstone_torch",
    S: "reactive:stardust",
    L: "minecraft:stone_slab",
    B: "minecraft:iron_bars",
  });
  //
  //
  //
  event.shaped("bluepower:fixtureinverted_rgb", ["GSG", "GSG", "LRL"], {
    G: "minecraft:glass_pane",
    L: "minecraft:stone_slab",
    R: "minecraft:redstone_torch",
    S: "reactive:stardust",
  });
  //
  //
  //
  event.shaped("bluepower:fixture_rgb", ["GSG", "GSG", "LRL"], {
    G: "minecraft:glass_pane",
    R: "minecraft:redstone",
    L: "minecraft:stone_slab",
    S: "reactive:stardust",
  });
  //
  //
  //
  event.shaped("ae2:entropy_manipulator", [" RG", " SR", "T  "], {
    G: "tombstone:impregnated_diamond",
    R: "kubejs:rose",
    S: "kubejs:iron_rod",
    T: "tombstone:bone_needle",
  });
  //
  //
  //
  event.shaped("sophisticatedstorage:controller", ["THT", "HFH", "THT"], {
    T: "supplementaries:timber_frame",
    H: "sophisticatedstorage:advanced_hopper_upgrade",
    F: "sophisticatedstorage:upgrade_base",
  });
  //
  //
  //
  event.shaped("kubejs:illuminati", ["SES", "EPE", "STS"], {
    T: "minecraft:dead_bush",
    S: "tombstone:soul_receptacle",
    E: "supplementaries:soap",
    P: "exoticbirds:phoenix_egg",
  });
  //
  //
  //
  event.shaped("kubejs:grave_spawn", ["SES", "EPE", "STS"], {
    T: "reactive:stardust",
    S: "tombstone:soul_receptacle",
    E: "kubejs:scroll_safety",
    P: "exoticbirds:phoenix_egg",
  });
  //
  //
  //
  event.shaped("alchemygadgetry:potion_slingshot", [" ST", " SS", "S  "], {
    T: "minecraft:glass_bottle",
    S: "minecraft:stick",
  });
  //
  //
  //
  event.shaped("ars_nouveau:orange_sbed", ["SSS", "SWS", "SSS"], {
    W: "#minecraft:wool",
    S: "minecraft:string",
  });
  //
  //
  //
  event.shaped("exoticbirds:hummingbird_feeder", ["RCR", "PFP", "RSR"], {
    R: "minecraft:redstone",
    C: "essentials:animal_feed",
    S: "minecraft:sugar",
    F: "quark:feeding_trough",
    P: "minecraft:red_dye",
  });
  //
  //
  //
  event.shaped("tombstone:christmas_hat", ["SMS", "VRF", "SGS"], {
    S: "reactive:stardust",
    M: "tombstone:merchant_stone",
    V: "tombstone:dust_of_vanishing",
    G: "tombstone:grave_dust",
    R: "tombstone:impregnated_diamond",
    F: "tombstone:dust_of_frost",
  });
  //
  //
  //
  event.shaped("cyclic:crusher", ["SHS", "CFC", "SHS"], {
    S: "minecraft:stone",
    H: "minecraft:hopper",
    C: "minecraft:stonecutter",
    F: "thermal:fluid_cell_frame",
  });
  //
  //
  //
  event.shaped("kubejs:processor", ["OVO", "VPV", "OVO"], {
    P: "integrateddynamics:portable_logic_programmer",
    V: "integrateddynamics:variable",
    O: "integrateddynamics:enhancement_offset",
  });
  //
  //
  //
  event.shaped("cyclic:battery", ["VBB", "BCB", "BBV"], {
    B: "integrateddynamics:energy_battery",
    V: "integrateddynamics:variable",
    C: "integrateddynamics:cable",
  });
  //
  //
  //

  event.shaped("minecraft:barrel", ["PSP", "P P", "PSP"], {
    S: "#minecraft:wooden_slabs",
    P: "#minecraft:planks",
  });
  //
  //
  //

  event.shaped("integrateddynamics:menril_wood", ["CVC", "SLP", "ROR"], {
    C: "thermal:compost",
    V: "thermal:device_collector",
    S: "engineersdecor:small_tree_cutter",
    L: "integrateddynamics:menril_wood_stripped",
    P: "engineersdecor:factory_placer",
    O: "kubejs:ore_bone_meal",
    R: "kubejs:rich_bone_meal",
  });
  //
  //
  //
  event.shaped("twilightforest:uncrafting_table", ["CCC", "WEW", "WWW"], {
    C: "dyenamics:maroon_wool",
    E: "kubejs:grave_spawn",
    W: "homespun:stripped_ironwood_wood",
  });
  //
  //
  //
  event.shaped("minecraft:hopper", ["I I", "ICI", " I "], {
    C: "#forge:chests/wooden",
    I: "minecraft:iron_ingot",
  });

  event.shaped("kubejs:quantity_base", ["EEE", "ESE", "EEE"], {
    E: "minecraft:echo_shard",
    S: "minecraft:sculk",
  });

  event.shaped("kubejs:speed_base", ["EEE", "EBE", "EEE"], {
    E: "minecraft:echo_shard",
    B: "minecraft:sculk_catalyst",
  });

  event.shaped("ars_nouveau:imbuement_chamber", ["ECE", "EBE", "ECE"], {
    E: "ars_nouveau:archwood_planks",
    B: "ars_nouveau:source_gem",
    C: "minecraft:gold_ingot",
  });

  event.shaped(
    Item.of("gateways:gate_pearl", '{gateway:"gateways:battle_gate_large"}'),
    ["AWS", "BDB", "SWA"],
    {
      S: "kubejs:scroll_discontinuity",
      A: "kubejs:scroll_safety",
      B: "tombstone:dark_marble",
      W: "tombstone:white_marble",
      D: "tombstone:voodoo_poppet",
    }
  );

  event.shaped(
    Item.of(
      "hostilenetworks:data_model",
      '{data_model:{data:1,id:"hostilenetworks:grave_guardian"}}'
    ),
    ["ABC", "DEF", "GHI"],
    {
      I: "twilightforest:magic_map_focus",
      A: "kubejs:processor",
      C: "twilightforest:maze_map_focus",
      D: "kubejs:ritual_tablet",
      B: "exoticbirds:phoenix_egg",
      H: "thermaloot:variable_capacitor",
      G: "tombstone:soul_receptacle",
      F: "quark:blank_rune",
      E: Item.of(
        "gateways:gate_pearl",
        '{gateway:"gateways:battle_gate_large"}'
      ).strongNBT(),
    }
  );

  event.shaped(
    Item.of("gateways:gate_pearl", '{gateway:"gateways:battle_gate_large"}'),
    ["PGP", "GSG", "PGP"],
    {
      S: "tombstone:soul_receptacle",
      P: "pneumaticcraft:plastic",
      G: Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:grave_guardian"}}'
      ).strongNBT(),
    }
  );

  /* 	event.shaped('thoriumreactors:white_industrial_block_brick', [
    'EEE',
    'EBE',
    'EEE'
    ], {
    E: 'minecraft:iron_nugget',
    B: 'minecraft:bricks'
    }) */

  let counter = 0;
  /**
   *
   * @param {item[]} items
   * @param {item} result
   */
  function shapex(items, result) {
    counter++;
    event
      .shaped(result, ["ABC", "DEF", "GHI"], {
        A: items[0],
        B: items[1],
        C: items[2],
        D: items[3],
        E: items[4],
        F: items[5],
        G: items[6],
        H: items[7],
        I: items[8],
      })
      .id(RegX(items + "_" + result).replace(/[0-9\s]/g, "") + counter);
  }

  function shaplus(item_input, slot_input, output) {
    let recipe = [[], [], []];
    for (let i = 0; i < slot_input.length; i++) {
      for (let j = 0; j < slot_input[i].length; j++) {
        //set on recipe index of array[[],[],[]] of array[] item_input of index i
        recipe[Math.floor(slot_input[i][j] / 3)][
          slot_input[i][j] - 3 * Math.floor(slot_input[i][j] / 3)
        ] = item_input[i];
      }
    }
    let id = "";
    for (let i = 0; i < item_input.length; i++) {
      id = id + item_input[i] + "_" + slot_input[i].length;
    }
    event.shaped(output, recipe).id(RegX(id + output));
  }

  /*
    012
    345
    678
     */

  //shaplus(['ars_nouveau:archwood_planks','ars_nouveau:archwood_slab'],[[0,2,3,5],[1,4]],'ars_nouveau:repository')
  shaplus(
    ["minecraft:glass_bottle", "#forge:glass"],
    [[4], [3, 5, 6, 7, 8]],
    "supplementaries:jar"
  );
  shapex(
    [
      "kubejs:miniboss_trophy",
      "ars_nouveau:mob_jar",
      "kubejs:miniboss_trophy",
      "kubejs:aquamarine",
      "kubejs:machine_frame",
      "kubejs:jade",
      "kubejs:miniboss_trophy",
      "thermaloot:variable_capacitor",
      "kubejs:miniboss_trophy",
    ],
    "hostilenetworks:sim_chamber"
  );
  shapex(
    [
      "twilightforest:ironwood_ingot",
      "kubejs:processor",
      "twilightforest:knightmetal_ingot",
      "kubejs:topaz",
      "kubejs:machine",
      "kubejs:iolite",
      "twilightforest:knightmetal_ingot",
      "twilightforest:steeleaf_ingot",
      "twilightforest:ironwood_ingot",
    ],
    "kubejs:machine_frame"
  );
  shapex(
    [
      "kubejs:boss_trophy",
      "ars_nouveau:drygmy_charm",
      "kubejs:boss_trophy",
      "twilightforest:fiery_ingot",
      "kubejs:machine_frame",
      "twilightforest:carminite",
      "kubejs:boss_trophy",
      "quark:blank_rune",
      "kubejs:boss_trophy",
    ],
    "hostilenetworks:loot_fabricator"
  );

  shapex(
    [
      "thermal:device_water_gen",
      "minecraft:bucket",
      "thermal:device_water_gen",
      "minecraft:bucket",
      "cyclic:tank",
      "minecraft:bucket",
      "thermal:device_water_gen",
      "minecraft:bucket",
      "thermal:device_water_gen",
    ],
    "thoriumreactors:water_source_block"
  );
  shapex(
    [
      "pneumaticcraft:ingot_iron_compressed",
      "cyclic:tank",
      "pneumaticcraft:ingot_iron_compressed",
    ],
    "2x pneumaticcraft:small_tank"
  );
  shapex(
    [
      "kubejs:pre_compressed",
      "kubejs:pre_compressed",
      "kubejs:pre_compressed",
      "kubejs:pre_compressed",
      "kubejs:blank",
      "kubejs:pre_compressed",
      "kubejs:pre_compressed",
      "kubejs:pre_compressed",
      "kubejs:pre_compressed",
    ],
    "64x pneumaticcraft:pressure_chamber_wall"
  );

  shapex(
    [
      "minecraft:hopper",
      "pneumaticcraft:pressure_chamber_wall",
      "uppers:upper",
    ],
    "2x pneumaticcraft:pressure_chamber_interface"
  );

  shapex(
    [
      "integrateddynamics:cable",
      "thermal:basalz_rod",
      "integrateddynamics:cable",
      "thermal:blitz_rod",
      "kubejs:processor",
      "twilightforest:arctic_fur",
      "integrateddynamics:cable",
      "thermal:blizz_rod",
      "integrateddynamics:cable",
    ],
    "16x pneumaticcraft:reinforced_pressure_tube"
  );

  shapex(
    [
      "pneumaticcraft:pressure_chamber_wall",
      "pneumaticcraft:reinforced_pressure_tube",
    ],
    Item.of(
      "pneumaticcraft:pressure_chamber_valve",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    ["pneumaticcraft:pressure_chamber_valve"],
    Item.of(
      "pneumaticcraft:pressure_chamber_valve",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    ["pneumaticcraft:liquid_compressor"],
    Item.of(
      "pneumaticcraft:liquid_compressor",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    ["pneumaticcraft:thermopneumatic_processing_plant"],
    Item.of(
      "pneumaticcraft:thermopneumatic_processing_plant",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    ["pneumaticcraft:fluid_mixer"],
    Item.of(
      "pneumaticcraft:fluid_mixer",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    [
      "minecraft:air",
      "supplementaries:crank",
      "minecraft:air",
      "minecraft:air",
      "pneumaticcraft:reinforced_pressure_tube",
      "minecraft:air",
      "minecraft:air",
      "kubejs:pre_compressed",
      "minecraft:air",
    ],
    "pneumaticcraft:manual_compressor"
  );
  shapex(
    [
      "pneumaticcraft:reinforced_pressure_tube",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:reinforced_pressure_tube",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:small_tank",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:reinforced_pressure_tube",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:reinforced_pressure_tube",
    ],
    Item.of(
      "pneumaticcraft:liquid_compressor",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    [
      "pneumaticcraft:reinforced_pressure_tube",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:reinforced_pressure_tube",
      "pneumaticcraft:small_tank",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:small_tank",
      "pneumaticcraft:reinforced_pressure_tube",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:reinforced_pressure_tube",
    ],
    Item.of(
      "pneumaticcraft:thermopneumatic_processing_plant",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    [
      "pneumaticcraft:reinforced_pressure_tube",
      "pneumaticcraft:small_tank",
      "pneumaticcraft:reinforced_pressure_tube",
      "pneumaticcraft:small_tank",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:small_tank",
      "pneumaticcraft:reinforced_pressure_tube",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:reinforced_pressure_tube",
    ],
    Item.of(
      "pneumaticcraft:fluid_mixer",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    ["pneumaticcraft:uv_light_box"],
    Item.of(
      "pneumaticcraft:uv_light_box",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    [
      "pneumaticcraft:ingot_iron_compressed",
      "bluepower:cagelamp_rgb",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:reinforced_pressure_tube",
      "kubejs:blank",
      "pneumaticcraft:reinforced_pressure_tube",
      "pneumaticcraft:ingot_iron_compressed",
      "bluepower:cagelamp_rgb",
      "pneumaticcraft:ingot_iron_compressed",
    ],
    Item.of(
      "pneumaticcraft:uv_light_box",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    [
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:small_tank",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
      "kubejs:blank",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
    ],
    "pneumaticcraft:etching_tank"
  );
  shapex(
    [
      "bluepower:quartz_resonator_tile",
      "minecraft:observer",
      "bluepower:tainted_silicon_chip_tile",
    ],
    "minecraft:daylight_detector"
  );
  shapex(
    ["pneumaticcraft:assembly_controller"],
    Item.of(
      "pneumaticcraft:assembly_controller",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );

  shapex(
    [
      "minecraft:air",
      "pneumaticcraft:pressure_gauge",
      "minecraft:air",
      "pneumaticcraft:plastic",
      "pneumaticcraft:module_expansion_card",
      "pneumaticcraft:plastic",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:reinforced_pressure_tube",
      "pneumaticcraft:ingot_iron_compressed",
    ],
    Item.of(
      "pneumaticcraft:assembly_controller",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    [
      "pneumaticcraft:plastic",
      "minecraft:air",
      "pneumaticcraft:plastic",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
    ],
    "pneumaticcraft:assembly_platform"
  );
  shapex(
    [
      "minecraft:air",
      "pneumaticcraft:module_expansion_card",
      "pneumaticcraft:transistor",
      "pneumaticcraft:plastic",
      "pneumaticcraft:module_expansion_card",
      "pneumaticcraft:plastic",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
    ],
    "pneumaticcraft:assembly_laser"
  );
  shapex(
    [
      "minecraft:air",
      "pneumaticcraft:module_expansion_card",
      "pneumaticcraft:capacitor",
      "pneumaticcraft:plastic",
      "pneumaticcraft:module_expansion_card",
      "pneumaticcraft:plastic",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
    ],
    "pneumaticcraft:assembly_drill"
  );
  shapex(
    [
      "minecraft:air",
      "minecraft:hopper",
      "minecraft:air",
      "pneumaticcraft:plastic",
      "pneumaticcraft:module_expansion_card",
      "pneumaticcraft:plastic",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
    ],
    "pneumaticcraft:assembly_io_unit_import"
  );
  shapex(
    [
      "minecraft:air",
      "uppers:upper",
      "minecraft:air",
      "pneumaticcraft:plastic",
      "pneumaticcraft:module_expansion_card",
      "pneumaticcraft:plastic",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
    ],
    "pneumaticcraft:assembly_io_unit_export"
  );

  shapex(
    [
      "minecraft:air",
      "pneumaticcraft:reinforced_pressure_tube",
      "minecraft:air",
      "minecraft:air",
      "minecraft:smooth_stone_slab",
      "minecraft:air",
    ],
    Item.of(
      "pneumaticcraft:charging_station",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );
  shapex(
    ["pneumaticcraft:charging_station"],
    Item.of(
      "pneumaticcraft:charging_station",
      '{BlockEntityTag:{UpgradeInventory:{Items:[{Count:1b,Slot:0,id:"pneumaticcraft:security_upgrade"}],Size:4}}}'
    )
  );

  shapex(
    [
      "sophisticatedstorage:advanced_hopper_upgrade",
      "sophisticatedstorage:advanced_compacting_upgrade",
      "sophisticatedstorage:compression_upgrade",
      "sophisticatedstorage:compacting_upgrade",
      "craftingstation:crafting_station",
      "sophisticatedstorage:compacting_upgrade",
      "sophisticatedstorage:compression_upgrade",
      "sophisticatedstorage:advanced_compacting_upgrade",
      "sophisticatedstorage:advanced_hopper_upgrade",
    ],
    "cyclic:packager"
  );
  shapex(
    [
      "sophisticatedstorage:crafting_upgrade",
      "pneumaticcraft:ingot_iron_compressed",
      "sophisticatedstorage:crafting_upgrade",
      "pneumaticcraft:ingot_iron_compressed",
      "cyclic:packager",
      "pneumaticcraft:ingot_iron_compressed",
      "sophisticatedstorage:crafting_upgrade",
      "pneumaticcraft:ingot_iron_compressed",
      "sophisticatedstorage:crafting_upgrade",
    ],
    "cyclic:crafter"
  );

  shapex(
    [
      "pneumaticcraft:ingot_iron_compressed",
      "integrateddynamics:cable",
      "pneumaticcraft:ingot_iron_compressed",
    ],
    "16x pneumaticcraft:reinforced_pressure_tube"
  );

  shapex(
    [
      "bluepower:reinforced_sapphire_glass",
      "cyclic:gem_obsidian",
      "bluepower:reinforced_sapphire_glass",
      "bluepower:sapphire_glass",
      "pneumaticcraft:medium_tank",
      "bluepower:sapphire_glass",
      "bluepower:sapphire_glass",
      "minecraft:lapis_block",
      "bluepower:sapphire_glass",
    ],
    "cyclic:solidifier"
  );
  shapex(
    [
      "bluepower:reinforced_sapphire_glass",
      "cyclic:gem_obsidian",
      "bluepower:reinforced_sapphire_glass",
      "bluepower:sapphire_glass",
      "pneumaticcraft:medium_tank",
      "bluepower:sapphire_glass",
      "bluepower:sapphire_glass",
      "minecraft:redstone_block",
      "bluepower:sapphire_glass",
    ],
    "cyclic:melter"
  );

  shapex(
    [
      "minecraft:air",
      "minecraft:gold_ingot",
      "homespun:copper_nugget",
      "create:brass_ingot",
      "minecraft:golden_boots",
      "minecraft:gold_ingot",
      "homespun:copper_nugget",
      "create:brass_ingot",
    ],
    "thermal:diving_boots"
  );
  shapex(
    [
      "minecraft:string",
      "minecraft:saddle",
      "minecraft:string",
      "minecraft:phantom_membrane",
      "minecraft:air",
      "minecraft:phantom_membrane",
      "minecraft:phantom_membrane",
      "minecraft:air",
      "minecraft:phantom_membrane",
    ],
    "minecraft:elytra"
  );

  event.shaped(
    Item.of(
      "kubejs:crook",
      '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:blank_rune"}}'
    ).enchant("minecraft:fortune", 10),
    ["SS ", " S ", " S "],
    {
      S: "minecraft:stick",
    }
  );
  //
  //
  //

  shapex(
    [
      "nuclearcraft:plate_basic",
      "nuclearcraft:empty_sink",
      "nuclearcraft:plate_basic",
      "nuclearcraft:empty_sink",
      "nuclearcraft:steel_frame",
      "nuclearcraft:empty_sink",
      "nuclearcraft:plate_basic",
      "bluepower:blulectric_alloyfurnace",
      "nuclearcraft:plate_basic",
    ],
    "nuclearcraft:alloy_smelter"
  );
  shapex(
    [
      "nuclearcraft:empty_sink",
      "nuclearcraft:empty_sink",
      "nuclearcraft:empty_sink",
      "nuclearcraft:empty_sink",
      "bluepower:blulectric_alloyfurnace",
      "nuclearcraft:empty_sink",
      "nuclearcraft:plate_basic",
      "nuclearcraft:steel_frame",
      "nuclearcraft:plate_basic",
    ],
    "nuclearcraft:assembler"
  );

  shapex(
    [
      "nuclearcraft:plate_basic",
      "nuclearcraft:empty_sink",
      "nuclearcraft:plate_basic",
      "nuclearcraft:plate_basic",
      "mekanism:steel_casing",
      "nuclearcraft:empty_sink",
      "nuclearcraft:plate_basic",
      "nuclearcraft:empty_sink",
      "nuclearcraft:plate_basic",
    ],
    "mekanism:electrolytic_separator"
  );
  shapex(
    [
      "nuclearcraft:plate_basic",
      "nuclearcraft:empty_sink",
      "nuclearcraft:plate_basic",
      "kubejs:printed_plate",
      "mekanism:steel_casing",
      "kubejs:printed_plate",
      "nuclearcraft:plate_basic",
      "kubejs:printed_plate",
      "nuclearcraft:plate_basic",
    ],
    "mekanismgenerators:gas_burning_generator"
  );
  shapex(
    [
      "nuclearcraft:plate_basic",
      "nuclearcraft:plate_basic",
      "nuclearcraft:plate_basic",
      "nuclearcraft:empty_sink",
      "mekanism:steel_casing",
      "nuclearcraft:empty_sink",
      "nuclearcraft:plate_basic",
      "nuclearcraft:plate_basic",
      "nuclearcraft:plate_basic",
    ],
    "mekanism:chemical_oxidizer"
  );
  shapex(
    [
      "nuclearcraft:empty_sink",
      "kubejs:printed_plate",
      "nuclearcraft:empty_sink",
      "nuclearcraft:plate_basic",
      "mekanism:steel_casing",
      "nuclearcraft:plate_basic",
      "nuclearcraft:empty_sink",
      "kubejs:printed_plate",
      "nuclearcraft:empty_sink",
    ],
    "mekanism:rotary_condensentrator"
  );
  shapex(
    [
      "nuclearcraft:plate_basic",
      "nuclearcraft:empty_sink",
      "nuclearcraft:plate_basic",
      "kubejs:printed_plate",
      "mekanism:steel_casing",
      "kubejs:printed_plate",
      "nuclearcraft:plate_basic",
      "nuclearcraft:empty_sink",
      "nuclearcraft:plate_basic",
    ],
    "mekanism:chemical_crystallizer"
  );
  shapex(
    [
      "nuclearcraft:steel_frame",
      "nuclearcraft:steel_frame",
      "minecraft:air",
      "nuclearcraft:steel_frame",
      "nuclearcraft:steel_frame",
    ],
    "16x mekanismgenerators:fission_reactor_casing"
  );
  shapex(
    [
      "mekanismgenerators:fission_reactor_casing",
      "minecraft:comparator",
      "mekanismgenerators:fission_reactor_casing",
    ],
    "2x mekanismgenerators:fission_reactor_logic_adapter"
  );
  shapex(
    [
      "mekanismgenerators:fission_reactor_casing",
      "#ironberry:universal_cable",
      "mekanismgenerators:fission_reactor_casing",
    ],
    "2x mekanismgenerators:fission_reactor_port"
  );
  shapex(
    [
      "minecraft:air",
      "mekanismgenerators:fission_reactor_casing",
      "minecraft:air",
      "mekanismgenerators:fission_reactor_casing",
      "bluepower:reinforced_sapphire_glass",
      "mekanismgenerators:fission_reactor_casing",
      "minecraft:air",
      "mekanismgenerators:fission_reactor_casing",
      "minecraft:air",
    ],
    "4x mekanismgenerators:reactor_glass"
  );
  shapex(
    [
      "quark:iron_rod",
      "quark:iron_rod",
      "quark:iron_rod",
      "quark:iron_rod",
      "mekanismgenerators:fission_reactor_casing",
      "quark:iron_rod",
      "quark:iron_rod",
      "quark:iron_rod",
      "quark:iron_rod",
    ],
    "8x mekanismgenerators:fission_fuel_assembly"
  );
  shapex(
    [
      "minecraft:comparator",
      "mekanismgenerators:fission_reactor_casing",
      "minecraft:comparator",
      "quark:iron_rod",
      "mekanismgenerators:fission_fuel_assembly",
      "quark:iron_rod",
      "quark:iron_rod",
      "minecraft:air",
      "quark:iron_rod",
    ],
    "2x mekanismgenerators:control_rod_assembly"
  );
  //shapex(['minecraft:stick','minecraft:air','minecraft:air','minecraft:iron_ingot'],'ae2:crank')
  //shapex(['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:copper_ingot', 'minecraft:air', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot'],'ae2:charger')

  shapex(
    [
      "ppfluids:fluid_pipe",
      "prettypipes:pipe",
      "ppfluids:fluid_pipe",
      "prettypipes:pipe",
      "thermal:energy_cell_frame",
      "ppfluids:fluid_pipe",
      "prettypipes:pipe",
      "ppfluids:fluid_pipe",
      "prettypipes:pipe",
    ],
    "2x thermal:energy_cell"
  );

  shapex(
    [
      "ppfluids:fluid_pipe",
      "prettypipes:pipe",
      "ppfluids:fluid_pipe",
      "prettypipes:pipe",
      "thermal:fluid_cell_frame",
      "ppfluids:fluid_pipe",
      "prettypipes:pipe",
      "ppfluids:fluid_pipe",
      "prettypipes:pipe",
    ],
    "2x thermal:fluid_cell"
  );

  shapex(
    [
      "minecraft:glowstone_dust",
      "minecraft:yellow_dye",
      "minecraft:air",
      "minecraft:gunpowder",
      "minecraft:redstone",
    ],
    "2x bluepower:lumar_yellow"
  );

  shapex(
    [
      "ten3:chlorium_ingot",
      "thermal:device_collector",
      "ten3:chlorium_ingot",
      "bluepower:block_breaker",
      "thermal:item_buffer",
      "bluepower:deployer",
      "kubejs:casing",
      "thermal:device_composter",
      "kubejs:casing",
    ],
    "ten3:machine_farm_manager"
  );

  shapex(
    [
      "cyclic:teleport",
      "minecraft:air",
      "minecraft:air",
      "rftoolsbase:machine_frame",
    ],
    "rftoolsutility:matter_transmitter"
  );

  shapex(
    [
      "minecraft:air",
      "rftoolsbase:infused_enderpearl",
      "minecraft:air",
      "rftoolsbase:infused_enderpearl",
      "ars_nouveau:warp_scroll",
      "rftoolsbase:infused_enderpearl",
      "minecraft:air",
      "rftoolsbase:infused_enderpearl",
    ],
    "rftoolsutility:charged_porter"
  );
  shapex(
    [
      "minecraft:air",
      "rftoolsbase:infused_enderpearl",
      "minecraft:air",
      "rftoolsbase:infused_enderpearl",
      "rftoolsutility:charged_porter",
      "rftoolsbase:infused_enderpearl",
      "minecraft:air",
      "rftoolsbase:infused_enderpearl",
    ],
    "rftoolsutility:advanced_charged_porter"
  );

  shapex(
    [
      "kubejs:blank",
      "kubejs:casing",
      "kubejs:blank",
      "kubejs:casing",
      "rftoolsbase:dimensionalshard",
      "kubejs:casing",
      "kubejs:blank",
      "kubejs:casing",
      "kubejs:blank",
    ],
    "4x rftoolsbase:machine_frame"
  );

  shapex(
    [
      "minecraft:air",
      "kubejs:quantity_base",
      "minecraft:air",
      "kubejs:speed_base",
      "kubejs:base_augment",
      "kubejs:speed_base",
      "minecraft:air",
      "kubejs:quantity_base",
    ],
    "4x kubejs:base_module"
  );

  shapex(
    [
      "nuclearcraft:plate_du",
      "nuclearcraft:plate_du",
      "nuclearcraft:plate_du",
      "nuclearcraft:plate_du",
      "minecraft:air",
      "nuclearcraft:plate_du",
      "nuclearcraft:plate_du",
      "nuclearcraft:plate_du",
      "nuclearcraft:plate_du",
    ],
    "4x nuclearcraft:empty_frame"
  );

  shapex(
    [
      "pneumaticcraft:ingot_iron_compressed",
      "compressium:cobblestone_3",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
      "cobblefordays:tier_3",
      "pneumaticcraft:ingot_iron_compressed",
      "pneumaticcraft:ingot_iron_compressed",
      "cyclic:battery",
      "pneumaticcraft:ingot_iron_compressed",
    ],
    "extremecobblegenerator:generator"
  );

  event.shaped("thermal:satchel", [" L ", "L L", " L "], {
    L: "minecraft:leather",
  });

  event.shaped("exoticbirds:pigeon_backpack", [" L ", "LFL", "   "], {
    L: "minecraft:leather",
    F: "minecraft:feather",
  });

  event.shaped("ae2:color_applicator", [" E ", " IE", "B  "], {
    E: "minecraft:amethyst_shard",
    I: "bluepower:amethyst_gem",
    B: "tombstone:bone_needle",
  });

  event.shaped("ae2:matter_cannon", ["   ", "MSK", " IB"], {
    M: "ae2:matter_ball",
    K: "bluepower:sapphire_gem",
    S: "tombstone:smoke_ball",
    I: "kubejs:iron_rod",
    B: "tombstone:bone_needle",
  });
  event.shaped("ae2:charged_staff", [" ES", " IE", "B  "], {
    E: "minecraft:emerald",
    S: "bluepower:green_sapphire_gem",
    I: "kubejs:iron_rod",
    B: "tombstone:bone_needle",
  });

  shapex(
    [
      "ae2:quartz_vibrant_glass",
      "ae2:quartz_vibrant_glass",
      "ae2:quartz_vibrant_glass",
      "thermal:quartz_dust",
      "thermal:quartz_dust",
      "thermal:quartz_dust",
      "ae2:quartz_vibrant_glass",
      "ae2:quartz_vibrant_glass",
      "ae2:quartz_vibrant_glass",
    ],
    "24x ae2:quartz_fiber"
  );

  event.shaped("8x thoriumreactors:machine_casing", [" A ", "ABA", " A "], {
    A: "thoriumreactors:redstone_processor",
    B: "thoriumreactors:blasted_stone",
  });

  event.shaped("ten3:redstone_ai", [" C ", "RGR", "N N"], {
    C: "thoriumreactors:redstone_processor",
    G: "minecraft:gold_ingot",
    R: "minecraft:redstone",
    N: "minecraft:gold_nugget",
  });

  event.shaped("thoriumreactors:turbine_rotor", [" I ", " I ", " I "], {
    I: "thoriumreactors:blasted_iron_ingot",
  });

  event.shaped("thoriumreactors:turbine_blade", ["   ", "III", "NNN"], {
    I: "thoriumreactors:blasted_iron_ingot",
    N: "thoriumreactors:blasted_iron_nugget",
  });

  shapex(
    [
      "ars_nouveau:magebloom",
      "ars_nouveau:potion_flask_extend_time",
      "ars_nouveau:magebloom",
      "minecraft:book",
      "nuclearcraft:steel_frame",
      "minecraft:book",
      "ars_nouveau:magebloom",
      "ars_nouveau:potion_flask_amplify",
      "ars_nouveau:magebloom",
    ],
    "ten3:machine_enchantment_flusher"
  );

  shapex(
    [
      "create:polished_rose_quartz",
      "minecraft:air",
      "minecraft:air",
      "create:andesite_alloy",
    ],
    "create:electron_tube"
  );

  shapex(
    [
      "minecraft:air",
      "minecraft:iron_ingot",
      "minecraft:iron_nugget",
      "minecraft:air",
      "minecraft:stick",
      "minecraft:iron_ingot",
      "minecraft:stick",
    ],
    "kubejs:hammer"
  );

  shapex(
    [
      "create:andesite_alloy",
      "minecraft:air",
      "minecraft:air",
      "create:andesite_alloy",
    ],
    "16x create:shaft"
  );

  /**
   *
   * @param {item} top
   * @param {item} bottom
   * @param {item} output
   */
  function stick(top, bottom, output) {
    shapex([top, "minecraft:air", "minecraft:air", bottom], output);
  }

  /**
   *
   * @param {item} top
   * @param {item} middle
   * @param {item} bottom
   * @param {item} output
   */
  function bigstick(top, middle, bottom, output) {
    shapex(
      [
        top,
        "minecraft:air",
        "minecraft:air",
        middle,
        "minecraft:air",
        "minecraft:air",
        bottom,
      ],
      output
    );
  }

  stick(
    "create:electron_tube",
    "create:encased_chain_drive",
    "create:gearshift"
  );
  stick("minecraft:repeater", "create:encased_chain_drive", "create:clutch");
  stick(
    "create:precision_mechanism",
    "create:encased_chain_drive",
    "create:adjustable_chain_gearshift"
  );
  bigstick(
    "#minecraft:planks",
    "create:shaft",
    "#minecraft:planks",
    "4x create:piston_extension_pole"
  );

  shapex(["create:shaft", "#minecraft:planks"], "create:cogwheel");
  shapex(
    ["create:shaft", "#minecraft:planks", "#minecraft:planks"],
    "create:large_cogwheel"
  );
  shapex(["create:cogwheel", "#minecraft:planks"], "create:large_cogwheel");

  shapex(["create:gearbox"], "create:vertical_gearbox");
  shapex(["create:vertical_gearbox"], "create:gearbox");

  shapex(["#create:toolboxes", "minecraft:brown_dye"], "create:brown_toolbox");

  global.dye.forEach((dye) => {
    stick(
      "minecraft:" + dye + "_carpet",
      "#minecraft:wooden_slabs",
      "create:" + dye + "_seat"
    );
    shapex(
      ["#create:seats", "minecraft:" + dye + "_dye"],
      "create:" + dye + "_seat"
    );
    shapex(
      [
        "minecraft:" + dye + "_wool",
        "create:andesite_alloy",
        "minecraft:" + dye + "_wool",
        "create:brass_sheet",
        "luggage:luggage",
        "create:brass_sheet",
        "minecraft:" + dye + "_wool",
        "create:andesite_alloy",
        "minecraft:" + dye + "_wool",
      ],
      "2x create:" + dye + "_toolbox"
    );
  });

  shapex(
    ["minecraft:light_blue_dye", "cyclic:carbon_paper"],
    "2x create:empty_schematic"
  );
  shapex(
    ["minecraft:feather", "create:empty_schematic"],
    "create:schematic_and_quill"
  );
  shapex(
    ["create:schematic_and_quill", "minecraft:painting"],
    "create:crafting_blueprint"
  );

  /**
   *
   * @param {item} item 2x2 cube
   * @param {item} result
   */
  function cube(item, result) {
    shapex([item, item, "minecraft:air", item, item], result);
  }

  cube("create:rose_quartz", "4x create:rose_quartz_block");

  shapex(
    [
      "minecraft:air",
      "minecraft:iron_ingot",
      "minecraft:air",
      "minecraft:iron_nugget",
      "minecraft:iron_ingot",
      "minecraft:iron_nugget",
      "minecraft:air",
      "minecraft:iron_ingot",
      "minecraft:air",
    ],
    "16x create:metal_girder"
  );

  stick("minecraft:hopper", "minecraft:iron_ingot", "create:chute");

  shapex(
    ["reactive:quartz", "minecraft:string", "reactive:quartz"],
    "create:goggles"
  );

  shapex(
    [
      "reactive:pure_quartz_block",
      "minecraft:air",
      "minecraft:air",
      "create:brass_block",
      "minecraft:air",
      "minecraft:air",
      "quark:iron_rod",
    ],
    "create:wand_of_symmetry"
  );

  shapex(
    ["minecraft:repeater", "create:brass_casing", "minecraft:observer"],
    "create:content_observer"
  );
  shapex(
    ["minecraft:comparator", "create:brass_casing", "minecraft:observer"],
    "create:stockpile_switch"
  );

  shapex(
    ["minecraft:dropper", "create:brass_casing", "minecraft:dropper"],
    "2x create:brass_tunnel"
  );
  shapex(
    ["minecraft:hopper", "create:brass_casing", "uppers:upper"],
    "2x create:brass_funnel"
  );
  shapex(
    ["minecraft:dropper", "create:andesite_casing", "minecraft:dropper"],
    "2x create:andesite_tunnel"
  );
  shapex(
    ["minecraft:hopper", "create:andesite_casing", "uppers:upper"],
    "2x create:andesite_funnel"
  );

  bigstick(
    "create:brass_sheet",
    "create:chute",
    "create:electron_tube",
    "create:smart_chute"
  );

  global.recipes.woods.forEach((wood) => {
    shapex(
      [
        "minecraft:glass_pane",
        "minecraft:glass_pane",
        "minecraft:glass_pane",
        "minecraft:glass_pane",
        "minecraft:" + wood + "_planks",
        "minecraft:glass_pane",
        "minecraft:glass_pane",
        "minecraft:glass_pane",
        "minecraft:glass_pane",
      ],
      "8x create:" + wood + "_window_pane"
    );
  });

  shapex(
    [
      "minecraft:glass_pane",
      "minecraft:glass_pane",
      "minecraft:glass_pane",
      "minecraft:glass_pane",
      "create:andesite_alloy",
      "minecraft:glass_pane",
      "minecraft:glass_pane",
      "minecraft:glass_pane",
      "minecraft:glass_pane",
    ],
    "8x create:ornate_iron_window_pane"
  );

  shapex(
    [
      "create:piston_extension_pole",
      "create:copper_casing",
      "create:piston_extension_pole",
      "create:piston_extension_pole",
      "minecraft:piston",
      "create:piston_extension_pole",
      "create:piston_extension_pole",
      "minecraft:air",
      "create:piston_extension_pole",
    ],
    "essentials:multi_piston"
  );

  shapex(
    [
      "create:andesite_alloy",
      "create:andesite_casing",
      "create:andesite_alloy",
      "minecraft:oak_planks",
      "create:railway_casing",
      "minecraft:oak_planks",
      "create:andesite_alloy",
      "create:andesite_casing",
      "create:andesite_alloy",
    ],
    "4x create:radial_chassis"
  );

  stick(
    "create:precision_mechanism",
    "create:brass_casing",
    "create:rotation_speed_controller"
  );

  stick(
    "#minecraft:wooden_slabs",
    "create:metal_girder",
    "create:schematic_table"
  );

  stick("create:andesite_alloy", "create:andesite_casing", "create:depot");

  shapex(
    [
      "create:redstone_link",
      "create:turntable",
      "create:redstone_link",
      "create:redstone_link",
      "create:placard",
      "create:redstone_link",
      "create:redstone_link",
      "minecraft:redstone",
      "create:redstone_link",
    ],
    "create:linked_controller"
  );

  shapex(
    [
      "create:large_cogwheel",
      "create:precision_mechanism",
      "create:cogwheel",
      "create:shaft",
      "energymeter:meter",
      "create:shaft",
    ],
    "create:speedometer"
  );

  shapex(
    ["supplementaries:rope", "create:cogwheel", "create:turntable"],
    "supplementaries:pulley_block"
  );

  shapex(
    [
      "create:andesite_alloy",
      "create:andesite_alloy",
      "create:andesite_alloy",
      "create:andesite_alloy",
      "create:cogwheel",
      "create:andesite_alloy",
      "create:andesite_alloy",
      "create:shaft",
      "create:andesite_alloy",
    ],
    "create:millstone"
  );
  shapex(
    [
      "create:andesite_alloy",
      "create:andesite_alloy",
      "create:andesite_alloy",
      "create:andesite_alloy",
      "create:large_cogwheel",
      "create:andesite_alloy",
      "create:andesite_alloy",
      "create:shaft",
      "create:andesite_alloy",
    ],
    "create:crushing_wheel"
  );
  shapex(
    ["minecraft:dried_kelp", "create:iron_sheet", "minecraft:dried_kelp"],
    "create:belt_connector"
  );

  shapex(
    [
      "bluepower:redstone_pointer_tile",
      "bluepower:stone_bundle",
      "bluepower:redstone_wire_tile",
    ],
    "logicchips:gate_frame"
  );

  shapex(
    [
      "bluepower:redstone_wire_tile",
      "bluepower:redstone_wire_tile",
      "bluepower:redstone_wire_tile",
      "bluepower:redstone_wire_tile",
      "mekanism:dye_base",
      "bluepower:bluestone_wire_tile",
      "bluepower:bluestone_wire_tile",
      "bluepower:bluestone_wire_tile",
      "bluepower:bluestone_wire_tile",
    ],
    "8x bluepower:stone_bundle"
  );

  shapex(
    [
      "#ironberry:dyes_no_indigo",
      "#ironberry:dyes_no_indigo",
      "#ironberry:dyes_no_indigo",
      "#ironberry:dyes_no_indigo",
      "bluepower:indigo_dye",
      "#ironberry:dyes_no_indigo",
      "#ironberry:dyes_no_indigo",
      "#ironberry:dyes_no_indigo",
      "#ironberry:dyes_no_indigo",
    ],
    "mekanism:dye_base"
  );

  shapex(
    [
      "thermal:invar_plate",
      "thermal:invar_nugget",
      "thermal:invar_plate",
      "thermal:invar_nugget",
      "thermal:constantan_ingot",
      "thermal:invar_nugget",
      "thermal:invar_plate",
      "thermal:invar_nugget",
      "thermal:invar_plate",
    ],
    "kubejs:holder"
  );

  function star(cover, center, result) {
    shapex(
      [
        "minecraft:air",
        cover,
        "minecraft:air",
        cover,
        center,
        cover,
        "minecraft:air",
        cover,
        "minecraft:air",
      ],
      result
    );
  }

  star("kubejs:manganese_nugget", "kubejs:holder", "ae2:annihilation_core");
  star("thermal:constantan_nugget", "kubejs:holder", "ae2:formation_core");

  shapex(
    [
      "nuclearcraft:hard_carbon_ingot",
      "ae2:cell_component_256k",
      "nuclearcraft:hard_carbon_ingot",
      "ae2:cell_component_256k",
      "kubejs:pure_gem",
      "ae2:cell_component_256k",
      "nuclearcraft:hard_carbon_ingot",
      "ae2:cell_component_256k",
      "nuclearcraft:hard_carbon_ingot",
    ],
    "kubejs:cell_base"
  );

  shapex(
    [
      "ae2:logic_processor",
      "ae2:calculation_processor",
      "ae2:logic_processor",
      "ae2:calculation_processor",
      "ae2:engineering_processor",
      "ae2:calculation_processor",
      "ae2:logic_processor",
      "ae2:calculation_processor",
      "ae2:logic_processor",
    ],
    "ae2:cell_component_1k"
  );

  let store = [
    "ae2:cell_component_1k",
    "ae2:cell_component_4k",
    "ae2:cell_component_16k",
    "ae2:cell_component_64k",
    "ae2:cell_component_256k",
  ];

  store.forEach((element, index) => {
    if (element == "ae2:cell_component_256k") return;
    shapex(
      [
        "ae2:formation_core",
        "ae2:annihilation_core",
        "ae2:formation_core",
        "ae2:annihilation_core",
        element,
        "ae2:annihilation_core",
        "ae2:formation_core",
        "ae2:annihilation_core",
        "ae2:formation_core",
      ],
      store[index + 1]
    );
  });

  shapex(
    [
      "ten3:powered_tin_nugget",
      "ae2:formation_core",
      "ten3:powered_tin_nugget",
      "ae2:formation_core",
      "ae2:engineering_processor",
      "ae2:formation_core",
      "ten3:powered_tin_nugget",
      "ae2:formation_core",
      "ten3:powered_tin_nugget",
    ],
    "ae2:pattern_provider"
  );
  shapex(
    [
      "thoriumreactors:chromium_nugget",
      "ae2:annihilation_core",
      "thoriumreactors:chromium_nugget",
      "ae2:annihilation_core",
      "ae2:engineering_processor",
      "ae2:annihilation_core",
      "thoriumreactors:chromium_nugget",
      "ae2:annihilation_core",
      "thoriumreactors:chromium_nugget",
    ],
    "ae2:interface"
  );

  shapex(
    [
      "ae2:formation_core",
      "ae2:quartz_vibrant_glass",
      "ae2:annihilation_core",
      "ae2:quartz_vibrant_glass",
      "rftoolsutility:crafter3",
      "ae2:quartz_vibrant_glass",
      "ae2:annihilation_core",
      "ae2:quartz_vibrant_glass",
      "ae2:formation_core",
    ],
    "ae2:molecular_assembler"
  );

  shapex(
    [
      "minecraft:gold_ingot",
      "ae2:quartz_vibrant_glass",
      "minecraft:gold_ingot",
      "ae2:quartz_vibrant_glass",
      "ars_nouveau:source_gem",
      "ae2:quartz_vibrant_glass",
      "minecraft:gold_ingot",
      "ae2:quartz_vibrant_glass",
      "minecraft:gold_ingot",
    ],
    "arseng:source_acceptor"
  );

  shapex(
    [
      "ae2:sky_dust",
      "pneumaticcraft:assembly_io_unit_import",
      "ae2:sky_dust",
      "ae2:sky_dust",
      "pneumaticcraft:assembly_controller",
      "ae2:sky_dust",
      "ae2:sky_dust",
      "pneumaticcraft:assembly_io_unit_export",
      "ae2:sky_dust",
    ],
    "ae2:crafting_unit"
  );

  shapex(
    ["ae2:crafting_unit", "ae2:molecular_assembler"],
    "expatternprovider:ingredient_buffer"
  );

  shapex(
    [
      "minecraft:air",
      "ae2:fluix_crystal",
      "minecraft:air",
      "minecraft:iron_nugget",
      "laboratoryblocks:iron_screw",
      "minecraft:iron_nugget",
    ],
    "ae2:wireless_receiver"
  );

  bigstick(
    "ae2:wireless_receiver",
    "ae2:pattern_encoding_terminal",
    "ae2:dense_energy_cell",
    "ae2wtlib:wireless_pattern_encoding_terminal"
  );

  bigstick(
    "ae2:wireless_receiver",
    "ae2:pattern_access_terminal",
    "ae2:dense_energy_cell",

    "ae2wtlib:wireless_pattern_access_terminal"
  );

  shapex(
    [
      "ae2:sky_dust",
      "create:andesite_tunnel",
      "ae2:sky_dust",
      "create:brass_tunnel",
      "ae2:interface",
      "create:brass_tunnel",
      "ae2:sky_dust",
      "create:andesite_tunnel",
      "ae2:sky_dust",
    ],
    "4x ae2:me_p2p_tunnel"
  );

  shapex(
    [
      "thermal:invar_nugget",
      "thermal:invar_nugget",
      "thermal:invar_nugget",
      "ten3:powered_tin_nugget",
      "create:clipboard",
      "thermal:invar_nugget",
      "thermal:invar_nugget",
      "thermal:invar_nugget",
      "thermal:invar_nugget",
    ],
    "ae2:blank_pattern"
  );

  function holding(ingot, block, middle, output) {
    shapex(
      [ingot, block, ingot, ingot, middle, ingot, ingot, block, ingot],
      output
    );
  }
  holding(
    "minecraft:iron_ingot",
    "ars_nouveau:repository",
    "ae2:blank_pattern",
    "ae2:item_cell_housing"
  );
  holding(
    "mekanism:ingot_refined_obsidian",
    "create:item_vault",
    "ae2:item_cell_housing",
    "ae2things:disk_housing"
  );
  holding(
    "minecraft:copper_ingot",
    "cyclic:tank",
    "ae2:blank_pattern",
    "ae2:fluid_cell_housing"
  );
  holding(
    "mekanism:ingot_osmium",
    "kubejs:base_tank",
    "ae2:blank_pattern",
    "appmek:chemical_cell_housing"
  );
  holding(
    "minecraft:gold_ingot",
    "ars_nouveau:source_jar",
    "ae2:blank_pattern",
    "arseng:source_cell_housing"
  );

  shapex(
    [
      "ae2:crafting_unit",
      "ae2:crafting_unit",
      "ae2:crafting_unit",
      "ae2:crafting_unit",
      "ten3:powered_tin_nugget",
      "ae2:crafting_unit",
      "ae2:crafting_unit",
      "ae2:crafting_unit",
      "ae2:crafting_unit",
    ],
    "ae2:quantum_ring"
  );
  shapex(
    [
      "ae2:quartz_vibrant_glass",
      "ae2:quartz_vibrant_glass",
      "ae2:quartz_vibrant_glass",
      "ae2:quartz_vibrant_glass",
      "ae2:fluix_pearl",
      "ae2:quartz_vibrant_glass",
      "ae2:quartz_vibrant_glass",
      "ae2:quartz_vibrant_glass",
      "ae2:quartz_vibrant_glass",
    ],
    "ae2:quantum_link"
  );

  shapex(
    [
      "ae2:sky_dust",
      "ae2:annihilation_core",
      "ae2:sky_dust",
      "ae2:formation_core",
      "ae2:energy_acceptor",
      "ae2:formation_core",
      "ae2:sky_dust",
      "ae2:annihilation_core",
      "ae2:sky_dust",
    ],
    "ae2:controller"
  );

  shapex(
    [
      "biomancy:flesh_bits",
      "biomancy:flesh_bits",
      "biomancy:flesh_bits",
      "biomancy:flesh_bits",
      "minecraft:air",
      "biomancy:flesh_bits",
      "biomancy:flesh_bits",
      "biomancy:flesh_bits",
      "biomancy:flesh_bits",
    ],
    "biomancy:flesh"
  );

  shapex(
    [
      "kubejs:tungsten_plate",
      "ten3:azure_glass",
      "kubejs:tungsten_plate",
      "ten3:azure_glass",
      "extendedcrafting:black_iron_block",
      "ten3:azure_glass",
      "kubejs:tungsten_plate",
      "ten3:azure_glass",
      "kubejs:tungsten_plate",
    ],
    "4x extendedcrafting:frame"
  );

  function pedestal(top, corner, core, base, item) {
    shapex(
      [
        "minecraft:air",
        top,
        "minecraft:air",
        corner,
        base,
        corner,
        base,
        core,
        base,
      ],
      '4x '+item
    );
  }

  pedestal(
    "rftoolsbase:infused_enderpearl",
    "minecraft:air",
    "extendedcrafting:ender_ingot_block",
    "extendedcrafting:ender_ingot",'extendedcrafting:ender_alternator'
  );

shapex(['rftoolsbase:infused_enderpearl', 'extendedcrafting:ender_ingot', 'rftoolsbase:infused_enderpearl', 'extendedcrafting:ender_ingot', 'extendedcrafting:ender_ingot_block', 'extendedcrafting:ender_ingot', 'rftoolsbase:infused_enderpearl', 'extendedcrafting:ender_ingot', 'rftoolsbase:infused_enderpearl'],'extendedcrafting:auto_ender_crafter')


shapex(['#minecraft:wooden_slabs','#minecraft:wooden_slabs','#minecraft:wooden_slabs','minecraft:air','#forge:bookshelves','minecraft:air','minecraft:air','#minecraft:wooden_slabs'],'minecraft:lectern')


pedestal('ten3:redstone_ai', 'kubejs:redstone_circuit',  'extendedcrafting:redstone_ingot_block','extendedcrafting:redstone_ingot', 'extendedcrafting:flux_alternator')

shapex(['kubejs:redstone_circuit', 'extendedcrafting:redstone_ingot', 'kubejs:redstone_circuit', 'extendedcrafting:redstone_ingot', 'extendedcrafting:redstone_ingot_block', 'extendedcrafting:redstone_ingot', 'kubejs:redstone_circuit', 'extendedcrafting:redstone_ingot', 'kubejs:redstone_circuit'],'extendedcrafting:auto_flux_crafter')

shapex(['extendedcrafting:black_iron_block', 'extendedcrafting:pedestal', 'extendedcrafting:black_iron_block', 'extendedcrafting:black_iron_block', 'extendedcrafting:crystaltine_block', 'extendedcrafting:black_iron_block', 'extendedcrafting:black_iron_block', 'extendedcrafting:black_iron_block', 'extendedcrafting:black_iron_block'],'extendedcrafting:compressor')

event.shaped('extendedcrafting:compressor', ["ABA", "ACA", "AAA"], {
  A: 'extendedcrafting:black_iron_block',
  B: 'extendedcrafting:pedestal',
  C: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:crystaltine"}').strongNBT()
});

pedestal('thoriumreactors:redstone_processor', 'minecraft:air', 'extendedcrafting:frame', 'extendedcrafting:black_iron_ingot', 'extendedcrafting:pedestal')

shapex(['#minecraft:planks','#minecraft:planks','minecraft:air','#minecraft:planks','#minecraft:planks'],'minecraft:crafting_table')

});
