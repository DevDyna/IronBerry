//priority -1
ServerEvents.recipes((event) => {
  const { thermal } = event.recipes;

  data.recipes.induction.forEach((e) => {
    //[[item_a, item_b], output, outcount]
    thermal.smelter([Item.of(e[1], e[2])], e[0]);
  });
  let acidize = (input, output) =>
    thermal.bottler(Item.of(output), [
      Fluid.of("biomancy:acid", 25),
      Item.of(input),
    ]);

  acidize(
    "extendedcrafting:ender_ingot",
    "extendedcrafting:enhanced_ender_ingot"
  );
  acidize(
    "extendedcrafting:redstone_ingot",
    "extendedcrafting:enhanced_redstone_ingot"
  );

  data.recipes.pulverizer.forEach((e) => {
    let list = [];
    e[1].forEach((b, i) => {
      list.push(Item.of(b, e[2][i]));
    });
    thermal.pulverizer(list, e[0]);
  });

  data.recipes.centrifuge.forEach((e) => {
    let list = [];
    e[2].forEach((it, i) => {
      list.push(Item.of(it, e[3][i]));
    });
    thermal.centrifuge(list, [Item.of(e[0], e[1])]);
  });

  thermal.pyrolyzer(
    [
      Fluid.of("nuclearcraft:boric_acid", 1000),
      "nuclearcraft:rhodochrosite_gem",
      "nuclearcraft:villiaumite_gem",
      "nuclearcraft:carobbiite_gem",
      "nuclearcraft:fluorite_gem",
    ],
    "kubejs:lupenio"
  );

  thermal.refinery(
    [
      Fluid.of("nuclearcraft:boron_arsenide_solution", 1),
      Fluid.of("nuclearcraft:boron_nitride_solution", 1),
    ],
    Fluid.of("nuclearcraft:boric_acid", 2)
  );
  data.recipes.chiller.forEach((e) => {
    thermal.chiller(e[2], [Fluid.of(e[0], e[1]), e[3]]);
  });
  data.recipes.crucible.forEach((e) => {
    thermal.crucible(Fluid.of(e[1], e[2]), e[0]);
  });

  thermal.chiller("nuclearcraft:boron_arsenide_gem", [
    Fluid.of("nuclearcraft:boron_arsenide_solution", 500),
    "thermal:chiller_ball_cast",
  ]);
  thermal.chiller("nuclearcraft:boron_nitride_gem", [
    Fluid.of("nuclearcraft:boron_nitride_solution", 500),
    "thermal:chiller_ball_cast",
  ]);

  data.recipes.refinery.forEach((e) => {
    let list = [];
    e[2].forEach((b, i) => {
      list.push(Fluid.of(b, e[3][i]));
    });
    thermal.refinery(list, [Fluid.of(e[0], e[1])]);
  });

  data.recipes.bottler.forEach((e) => {
    thermal.bottler([Item.of(e[3], e[4])], [e[0], Fluid.of(e[1], e[2])]);
  });

  data.recipes.brewer.forEach((e) => {
    thermal.brewer([Fluid.of(e[3], e[4])], [e[0], Fluid.of(e[1], e[2])]);
  });

  data.recipes.pyrolizer.forEach((e) => {
    thermal.pyrolyzer([Fluid.of(e[3], e[4]), Item.of(e[1], e[2])], [e[0]]);
  });

  thermal.bottler(
    ["cyclic:peat_fuel_enriched"],
    ["cyclic:peat_fuel", Fluid.of("water", 10)]
  );

  thermal.bottler(
    ["cyclic:biomass"],
    ["#rootsclassic:berries", Fluid.of("water", 10)]
  );

  thermal.bottler(
    ["8x nuclearcraft:plate_basic"],
    ["kubejs:silicon_plated", Fluid.of("kubejs:liquid_silicon", 20)]
  );

  thermal.smelter(
    ["nuclearcraft:empty_sink"],
    [
      "pneumaticcraft:plastic",
      "kubejs:printed_plate",
      "pneumaticcraft:module_expansion_card",
    ]
  );

  thermal.smelter(
    ["2x nuclearcraft:steel_frame"],
    [
      "nuclearcraft:plate_basic",
      "nuclearcraft:empty_sink",
      "nuclearcraft:bioplastic",
    ]
  );

  thermal.pyrolyzer(
    [Fluid.of("pneumaticcraft:vegetable_oil", 100)],
    ["tombstone:bag_of_seeds"]
  );

  thermal.bottler(
    ["quark:sturdy_stone"],
    ["minecraft:cobblestone", Fluid.of("water", 100)]
  );

  thermal.pulverizer(["gravel"], ["#forge:cobblestone"]);
  thermal.pulverizer(["sand"], ["gravel"]);

  thermal.pulverizer(
    [Item.of("kubejs:biofuel").withChance(0.95)],
    ["#ironberry:bio_vegetables"]
  );

  thermal.smelter(["dirt"], ["kubejs:biofuel", "sand"]);

  thermal.insolator(
    ["sugar_cane", Item.of("sugar_cane").withChance(0.85)],
    ["sugar_cane"]
  );

  thermal.insolator(
    ["2x bamboo", Item.of("bamboo").withChance(0.85)],
    ["bamboo"]
  );

  thermal.insolator(
    [
      "bluepower:indigo_flower",
      Item.of("bluepower:indigo_flower").withChance(0.25),
    ],
    ["bluepower:indigo_flower"]
  );

  thermal.insolator(
    [
      Item.of("minecraft:chorus_flower").withChance(0.95),
      Item.of("minecraft:chorus_fruit").withChance(0.75),
      Item.of("quark:chorus_fruit_block").withChance(0.05),
    ],
    ["minecraft:chorus_flower"]
  );

  thermal.bottler(
    ["4x copper_ingot"],
    ["iron_ingot", Fluid.of("thermal:glowstone", 100)]
  );

  thermal.pyrolyzer(["thermal:silver_ingot"], ["iron_ingot"]);
  thermal.pyrolyzer(["thermal:lead_ingot"], ["thermal:silver_ingot"]);
  thermal.pyrolyzer(
    ["nuclearcraft:manganese_ingot"],
    ["nuclearcraft:manganese_oxide_ingot"]
  );
  thermal.pyrolyzer(
    ["nuclearcraft:manganese_oxide_dust"],
    ["nuclearcraft:rhodochrosite_dust"]
  );

  thermal.crucible(
    [Fluid.of("nuclearcraft:condensate_water", 1000)],
    ["ae2:quantum_entangled_singularity"]
  );

  thermal.bottler(
    ["ae2:singularity"],
    ["64x ae2:matter_ball", Fluid.of("nuclearcraft:condensate_water", 10)]
  );

  thermal.bottler(
    ["2x ae2:quantum_entangled_singularity"],
    [Fluid.of("thermal:ender", 25), "ae2:singularity"]
  );

  thermal.bottler("2x create:zinc_ingot", [
    "minecraft:copper_ingot",
    Fluid.of("thermal:glowstone", 100),
  ]);

  thermal.crucible([Fluid.of("nuclearcraft:zinc", 1000)], "create:zinc_ingot");
  thermal.brewer(
    [Fluid.of("nuclearcraft:zirconium", 1000)],
    ["kubejs:mini_pellet", Fluid.of("nuclearcraft:zinc", 1000)]
  );

  thermal.brewer(
    [Fluid.of("nuclearcraft:zirconium_molybdenum", 1000)],
    [
      "thoriumreactors:molybdenum_ingot",
      Fluid.of("nuclearcraft:zirconium", 1000),
    ]
  );

  thermal.bottler(
    ["ten3:powered_tin_ingot"],
    ["ten3:tin_ingot", Fluid.of("nuclearcraft:zirconium_molybdenum", 1000)]
  );

  let sources = ["caustic", "body", "light", "mind", "verdant"];
  let fluids = ["acid", "stock", "light", "magic", "verdant"];

  let ItemResultChem = [
    "biomancy:bone_fragments",
    "biomancy:gem_fragments",
    "biomancy:bio_lumens",
    "biomancy:exotic_dust",
    "biomancy:organic_matter",
  ];

  thermal.pyrolyzer(
    [
      Fluid.of("kubejs:soul", 125),
      Item.of("biomancy:mineral_fragment").withChance(0.25),
      Item.of("biomancy:mineral_fragment").withChance(0.12),
    ],
    ["#ironberry:soul_fixed"]
  );

  thermal.pyrolyzer(
    [
      Fluid.of("kubejs:soul", 125),
      "reactive:quartz",
      Item.of("biomancy:mineral_fragment").withChance(0.25),
      Item.of("biomancy:mineral_fragment").withChance(0.12),
    ],
    ["minecraft:echo_shard"]
  );

  sources.forEach((sr, i) => {
    thermal.pyrolyzer(
      [
        Fluid.of("kubejs:" + fluids[i], 125),
        Item.of(ItemResultChem[i]).withChance(0.25),
        Item.of(ItemResultChem[i]).withChance(0.12),
      ],
      ["#reactive:" + sr + "_sources"]
    );
  });

  thermal.pyrolyzer(["reactive:quartz"], ["minecraft:amethyst_shard"]);

  thermal.bottler(
    ["reactive:quartz"],
    ["minecraft:quartz", Fluid.of("kubejs:acid", 125)]
  );

  thermal.smelter("reactive:acid_bottle", [
    "minecraft:ghast_tear",
    "reactive:quartz_bottle",
    "twilightforest:borer_essence",
  ]);

  thermal.pyrolyzer(
    [
      Fluid.of("kubejs:acid", 125),
      Item.of("kubejs:alpha").withChance(2.5),
      Item.of("kubejs:beta").withChance(2.5),
    ],
    ["reactive:acid_bottle"]
  );

  thermal.pyrolyzer(
    [
      Fluid.of("kubejs:acid", 125),
      Item.of("bluepower:amethyst_gem").withChance(2.5),
      Item.of("bluepower:sapphire_gem").withChance(2.5),

      Item.of("minecraft:amethyst_shard").withChance(0.25),
    ],
    ["kubejs:beta"]
  );

  thermal.pyrolyzer(
    [
      Fluid.of("kubejs:acid", 125),
      Item.of("bluepower:green_sapphire_gem").withChance(2.5),
      Item.of("bluepower:ruby_gem").withChance(0.06),
      Item.of("minecraft:emerald").withChance(0.25),
    ],
    ["kubejs:alpha"]
  );

  thermal.refinery(
    [Fluid.of("kubejs:pertio", 25), Fluid.of("kubejs:alchemio", 25)],
    [Fluid.of("kubejs:methane", 50)]
  );

  thermal.refinery(
    [Fluid.of("kubejs:densio", 25), Fluid.of("kubejs:prosperitio", 25)],
    [Fluid.of("kubejs:pertio", 50)]
  );

  thermal.refinery(
    [Fluid.of("kubejs:meltio", 25), Fluid.of("kubejs:ainiotzio", 25)],
    [Fluid.of("kubejs:alchemio", 50)]
  );

  thermal.centrifuge(
    [
      Item.of("kubejs:boron_shard").withChance(1.75),
      Item.of("kubejs:thorium_shard").withChance(1.75),
      Item.of("kubejs:uranium_shard").withChance(1.75),
    ],
    [Item.of("kubejs:meltio_clump")]
  );
  thermal.centrifuge(
    [
      Item.of("minecraft:redstone").withChance(1.5),
      Item.of("minecraft:glowstone_dust").withChance(1.5),
    ],
    [Item.of("kubejs:ainiotzio_crystal")]
  );
  thermal.centrifuge(
    [
      Item.of("kubejs:magnesium_shard").withChance(1.75),
      Item.of("kubejs:tin_shard").withChance(1.75),
      Item.of("kubejs:osmium_shard").withChance(1.75),
    ],
    [Item.of("kubejs:densio_clump")]
  );
  thermal.centrifuge(
    [
      Item.of("bluepower:teslatite_dust").withChance(1.5),
      Item.of("thermal:quartz_dust").withChance(1.5),
    ],
    [Item.of("kubejs:prosperitio_crystal")]
  );

  thermal.chiller("kubejs:meltio_clump", [
    Fluid.of("kubejs:meltio", 250),
    "kubejs:clump_cast",
  ]);

  thermal.chiller("kubejs:densio_clump", [
    Fluid.of("kubejs:densio", 250),
    "kubejs:clump_cast",
  ]);

  thermal.chiller("kubejs:ainiotzio_crystal", [
    Fluid.of("kubejs:ainiotzio", 250),
    "kubejs:crystal_cast",
  ]);

  thermal.chiller("kubejs:prosperitio_crystal", [
    Fluid.of("kubejs:prosperitio", 250),
    "kubejs:crystal_cast",
  ]);

  let ingots = ["tin", "osmium", "thorium", "boron", "uranium", "magnesium"];

  ingots.forEach((e) => {
    thermal.crucible(
      [Fluid.of("kubejs:" + e, 250)],
      ["kubejs:" + e + "_shard"]
    );
  });

  thermal.smelter("2x nuclearcraft:plate_advanced", [
    "nuclearcraft:bioplastic",
    "nuclearcraft:tough_alloy_dust",
    "nuclearcraft:plate_basic",
  ]);

  thermal.smelter("8x thoriumreactors:thermal_conductor", [
    "ten3:redstone_conductor",
    "thoriumreactors:machine_casing",
    "thoriumreactors:chromium_ingot",
  ]);
  thermal.smelter("8x thoriumreactors:reactor_casing", [
    "ten3:redstone_storer",
    "thoriumreactors:machine_casing",
    "minecraft:netherite_ingot",
  ]);
  thermal.smelter("8x thoriumreactors:turbine_casing", [
    "ten3:redstone_converter",
    "thoriumreactors:machine_casing",
    "thoriumreactors:titanium_ingot",
  ]);

  thermal.smelter("4x thoriumreactors:redstone_processor", [
    "ae2:printed_silicon",
    "minecraft:redstone",
    "kubejs:processor",
  ]);

  thermal.smelter("4x nuclearcraft:plate_elite", [
    "nuclearcraft:boron_arsenide_dust",
    "nuclearcraft:plate_du",
    "mekanism:teleportation_core",
  ]);

  thermal.smelter("3x nuclearcraft:extreme_ingot", [
    "nuclearcraft:crystal_binder_dust",
    "nuclearcraft:hard_carbon_ingot",
    "nuclearcraft:super_alloy_ingot",
  ]);
  thermal.smelter("3x nuclearcraft:thermoconducting_ingot", [
    "minecraft:copper_ingot",
    "nuclearcraft:magnesium_ingot",
    "nuclearcraft:graphite_ingot",
  ]);

  thermal.bottler("ars_nouveau:source_gem", [
    "#ironberry:source_gems",
    Fluid.of("kubejs:magic", 125),
  ]);

  let rods = [
    "minecraft:blaze_rod",
    "thermal:blizz_rod",
    "thermal:basalz_rod",
    "thermal:blitz_rod",
  ];
  let rod_powder = [
    "minecraft:blaze_powder",
    "thermal:blizz_powder",
    "thermal:basalz_powder",
    "thermal:blitz_powder",
  ];
  rods.forEach((e, i) => {
    thermal.pulverizer("4x " + rod_powder[i], e);
  });

  thermal.smelter("2x nuclearcraft:actuator", [
    "mekanism:ingot_osmium",
    "nuclearcraft:plate_basic",
    "nuclearcraft:ferroboron_ingot",
  ]);

  thermal.smelter("mekanism:upgrade_speed", [
    "pneumaticcraft:capacitor",
    "kubejs:upgrade_template",
    "pipez:basic_upgrade",
  ]);
  thermal.smelter("mekanism:upgrade_energy", [
    "pneumaticcraft:transistor",
    "kubejs:upgrade_template",
    "pipez:basic_upgrade",
  ]);

  let INDrecipes = [
    [
      "thermal:energy_cell",
      "mekanism:basic_control_circuit",
      "mekanism:induction_casing",
    ],
    [
      "thermal:energy_cell",
      "mekanism:advanced_control_circuit",
      "mekanism:basic_induction_provider",
    ],
    [
      "thermal:energy_cell",
      "mekanism:elite_control_circuit",
      "mekanism:advanced_induction_provider",
    ],
    [
      "thermal:energy_cell",
      "mekanism:ultimate_control_circuit",
      "mekanism:elite_induction_provider",
    ],
    [
      "thermal:energy_cell",
      "mekanism:basic_control_circuit",
      "mekanism:induction_casing",
    ],
    [
      "thermal:energy_cell",
      "mekanism:advanced_control_circuit",
      "mekanism:basic_induction_cell",
    ],
    [
      "thermal:energy_cell",
      "mekanism:elite_control_circuit",
      "mekanism:advanced_induction_cell",
    ],
    [
      "thermal:energy_cell",
      "mekanism:ultimate_control_circuit",
      "mekanism:elite_induction_cell",
    ],
  ];
  let INDresult = [
    "mekanism:basic_induction_provider",
    "mekanism:advanced_induction_provider",
    "mekanism:elite_induction_provider",
    "mekanism:ultimate_induction_provider",
    "mekanism:basic_induction_cell",
    "mekanism:advanced_induction_cell",
    "mekanism:elite_induction_cell",
    "mekanism:ultimate_induction_cell",
  ];

  INDresult.forEach((e, i) => {
    thermal.smelter(e, INDrecipes[i]);
  });

  thermal.smelter("2x nuclearcraft:servo", [
    "mekanism:advanced_control_circuit",
    "nuclearcraft:graphite_ingot",
    "nuclearcraft:plate_basic",
  ]);

  thermal.smelter("nuclearcraft:upgrade_energy", [
    "pneumaticcraft:transistor",
    "kubejs:assembly_plate",
    "pipez:basic_upgrade",
  ]);
  thermal.smelter("nuclearcraft:upgrade_speed", [
    "pneumaticcraft:capacitor",
    "kubejs:assembly_plate",
    "pipez:basic_upgrade",
  ]);
  thermal.smelter("2x nuclearcraft:motor", [
    "nuclearcraft:boron_ingot",
    "nuclearcraft:plate_basic",
    "mekanism:alloy_reinforced",
  ]);

  thermal.press("2x nuclearcraft:chassis", [
    "nuclearcraft:steel_frame",
    "mekanism:steel_casing",
  ]);

  thermal.press("2x nuclearcraft:basic_electric_circuit", [
    "pneumaticcraft:printed_circuit_board",
    "mekanism:alloy_atomic",
  ]);

  thermal.press("4x mekanism:steel_casing", [
    "nuclearcraft:basic_electric_circuit",
    "mekanismgenerators:fission_reactor_casing",
  ]);

  thermal.press("2x bluepower:tungsten_ingot", [
    "twilightforest:fiery_ingot",
    "kubejs:pre_compressed",
  ]);

  thermal.bottler("4x bluepower:tungsten_carbide", [
    Fluid.of("kubejs:coal", 500),
    "bluepower:tungsten_ingot",
  ]);

  thermal.pulverizer("thermal:sulfur_dust", "thermal:sulfur");
  thermal.crucible(Fluid.of("nuclearcraft:sulfur", 250), "thermal:sulfur_dust");

  thermal.bottler("4x thermal:cured_rubber", [
    Fluid.of("nuclearcraft:sulfur", 125),
    "thermal:rubber",
  ]);

  thermal.press("2x kubejs:silicon_plated", [
    "nuclearcraft:silicon_gem",
    "pneumaticcraft:plastic",
  ]);

  thermal.smelter("4x pneumaticcraft:upgrade_matrix", [
    "pneumaticcraft:printed_circuit_board",
    "bluepower:teslatite_dust",
    "pneumaticcraft:plastic",
  ]);

  thermal.press("6x pneumaticcraft:capacitor", [
    "2x minecraft:redstone_torch",
    "bluepower:teslatite_dust",
  ]);
  thermal.press("6x pneumaticcraft:transistor", [
    "3x minecraft:redstone_torch",
    "bluepower:tungsten_ingot",
  ]);

  thermal.press("2x pneumaticcraft:ingot_iron_compressed", [
    "kubejs:pre_compressed",
    "minecraft:iron_ingot",
  ]);

  thermal.press("2x kubejs:quartz_mixture", [
    "thermal:quartz_dust",
    "ae2:certus_quartz_dust",
  ]);

  thermal.smelter("4x ae2:fluix_smart_cable", [
    "4x ae2:fluix_covered_cable",
    "ae2:fluix_crystal",
    "kubejs:quartz_mixture",
  ]);

  thermal.pulverizer(
    [Item.of("minecraft:glow_ink_sac").withChance(0.5), "2x minecraft:ink_sac"],
    "supplementaries:antique_ink"
  );

  thermal.press("8x minecraft:podzol", ["minecraft:mud", "minecraft:dirt"]);

  thermal.insolator(
    "farmersdelight:rich_soil",
    "farmersdelight:organic_compost"
  );
  thermal.insolator("cyclic:peat_baked", "cyclic:peat_unbaked");

  thermal.sawmill(
    [
      Item.of("kubejs:bee_unknown_variant").withChance(0.5),
      Item.of("kubejs:bee_unknown_common").withChance(0.5),
    ],
    "kubejs:bee"
  );

  /**
   *
   * @param {string} bee1
   * @param {item} flower
   * @param {string} bee2
   * @param {item} out1
   * @param {item} out2
   */
  function BreedBee(bee1, flower, bee2, out1, out2) {
    let out = Item.exists("kubejs:bee_" + bee1 + "_" + bee2 + "_unknown")
      ? "kubejs:bee_" + bee1 + "_" + bee2 + "_unknown"
      : "kubejs:bee_" + bee2 + "_" + bee1 + "_unknown";
    thermal.smelter(
      [
        Item.of(out).withChance(0.5),
        Item.of("kubejs:bee_unknown_" + bee1).withChance(0.25),
        Item.of("kubejs:bee_unknown_" + bee2).withChance(0.25),
      ],
      ["#ironberry:bee/" + bee1, flower, "#ironberry:bee/" + bee2]
    );
    thermal.insolator(
      [Item.of(out1).withChance(0.5), Item.of(out2).withChance(0.5)],
      out
    );
  }

  //"kubejs:bee_" + name + "_drone"
  //"kubejs:bee_" + name + "_queen"
  //"kubejs:bee_unknown_" + name
  //"kubejs:bee_" + name + "_" + subname + "_unknown"
  // let dename = global.bee.name;

  let bee_drop = [];

  global.bee.name.forEach((name) => {
    thermal.sawmill(
      [
        Item.of("kubejs:bee_" + name + "_queen").withChance(0.15),
        Item.of("kubejs:bee_" + name + "_drone").withChance(0.85),
      ],
      "kubejs:bee_unknown_" + name
    );

    thermal.insolator(
      [
        Item.of("kubejs:bee_" + name + "_queen").withChance(0.95),
        Item.of("kubejs:bee_" + name + "_drone").withChance(0.5),
        Item.of("kubejs:" + name + "_beewax").withChance(0.25),
      ],
      ["kubejs:bee_" + name + "_queen"]
    );

    thermal.bottler(
      [Item.of("kubejs:bee_unknown_" + name).withChance(0.75)],
      [
        Fluid.of("pneumaticcraft:vegetable_oil", 50),
        "kubejs:bee_" + name + "_drone",
      ]
    );

    // dename.forEach((subname) => {
    //   if (Item.exists("kubejs:bee_" + name + "_" + subname + "_unknown")) {
    //     thermal.sawmill(
    //       [
    //         Item.of("kubejs:bee_unknown_" + name).withChance(0.5),
    //         Item.of("kubejs:bee_unknown_" + subname).withChance(0.5),
    //       ],
    //       "kubejs:bee_" + name + "_" + subname + "_unknown"
    //     );
    //   }
    // });
  });

  BreedBee(
    "variant",
    "#ironberry:indigo_flowers",
    "common",
    "kubejs:bee_unknown_cultivated",
    "kubejs:bee_unknown_rebel"
  );
});
