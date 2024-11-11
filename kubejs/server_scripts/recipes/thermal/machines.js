//priority -1
ServerEvents.recipes((event) => {
  data.recipes.induction.forEach((e) => {
    //[[item_a, item_b], output, outcount]
    event.recipes.thermal.smelter([Item.of(e[1], e[2])], e[0]);
  });
  let acidize = (input, output) =>
    event.recipes.thermal.bottler(Item.of(output), [
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
    event.recipes.thermal.pulverizer(list, e[0]);
  });

  data.recipes.centrifuge.forEach((e) => {
    let list = [];
    e[2].forEach((it, i) => {
      list.push(Item.of(it, e[3][i]));
    });
    event.recipes.thermal.centrifuge(list, [Item.of(e[0], e[1])]);
  });

  event.recipes.thermal.pyrolyzer(
    [
      Fluid.of("nuclearcraft:boric_acid", 1000),
      "nuclearcraft:rhodochrosite_gem",
      "nuclearcraft:villiaumite_gem",
      "nuclearcraft:carobbiite_gem",
      "nuclearcraft:fluorite_gem",
    ],
    "kubejs:lupenio"
  );

  event.recipes.thermal.refinery(
    [
      Fluid.of("nuclearcraft:boron_arsenide_solution", 1),
      Fluid.of("nuclearcraft:boron_nitride_solution", 1),
    ],
    Fluid.of("nuclearcraft:boric_acid", 2)
  );
  data.recipes.chiller.forEach((e) => {
    event.recipes.thermal.chiller(e[2], [Fluid.of(e[0], e[1]), e[3]]);
  });
  data.recipes.crucible.forEach((e) => {
    event.recipes.thermal.crucible(Fluid.of(e[1], e[2]), e[0]);
  });

  event.recipes.thermal.chiller("nuclearcraft:boron_arsenide_gem", [
    Fluid.of("nuclearcraft:boron_arsenide_solution", 500),
    "thermal:chiller_ball_cast",
  ]);
  event.recipes.thermal.chiller("nuclearcraft:boron_nitride_gem", [
    Fluid.of("nuclearcraft:boron_nitride_solution", 500),
    "thermal:chiller_ball_cast",
  ]);

  data.recipes.refinery.forEach((e) => {
    let list = [];
    e[2].forEach((b, i) => {
      list.push(Fluid.of(b, e[3][i]));
    });
    event.recipes.thermal.refinery(list, [Fluid.of(e[0], e[1])]);
  });

  data.recipes.bottler.forEach((e) => {
    event.recipes.thermal.bottler(
      [Item.of(e[3], e[4])],
      [e[0], Fluid.of(e[1], e[2])]
    );
  });

  data.recipes.brewer.forEach((e) => {
    event.recipes.thermal.brewer(
      [Fluid.of(e[3], e[4])],
      [e[0], Fluid.of(e[1], e[2])]
    );
  });

  data.recipes.pyrolizer.forEach((e) => {
    event.recipes.thermal.pyrolyzer(
      [Fluid.of(e[3], e[4]), Item.of(e[1], e[2])],
      [e[0]]
    );
  });

  event.recipes.thermal.bottler(
    ["cyclic:peat_fuel_enriched"],
    ["cyclic:peat_fuel", Fluid.of("water", 10)]
  );

  event.recipes.thermal.bottler(
    ["cyclic:biomass"],
    ["#rootsclassic:berries", Fluid.of("water", 10)]
  );

  event.recipes.thermal.bottler(
    ["8x nuclearcraft:plate_basic"],
    ["kubejs:silicon_plated", Fluid.of("kubejs:liquid_silicon", 20)]
  );

  event.recipes.thermal.smelter(
    ["nuclearcraft:empty_sink"],
    [
      "pneumaticcraft:plastic",
      "kubejs:printed_plate",
      "pneumaticcraft:module_expansion_card",
    ]
  );

  event.recipes.thermal.smelter(
    ["nuclearcraft:steel_frame"],
    [
      "nuclearcraft:plate_basic",
      "nuclearcraft:empty_sink",
      "nuclearcraft:bioplastic",
    ]
  );

  event.recipes.thermal.pyrolyzer(
    [Fluid.of("pneumaticcraft:vegetable_oil", 100)],
    ["tombstone:bag_of_seeds"]
  );

  event.recipes.thermal.insolator(
    [
      Item.of("kubejs:bee_queen").withChance(0.95),
      Item.of("kubejs:bee_drone").withChance(0.5),
      Item.of("kubejs:beewax").withChance(0.25),
    ],
    ["kubejs:bee_queen"]
  );

  event.recipes.thermal.bottler(
    ["kubejs:bee_unknown"],
    [Fluid.of("pneumaticcraft:vegetable_oil", 50), "kubejs:bee_drone"]
  );

  event.recipes.thermal.sawmill(
    [
      Item.of("kubejs:bee_drone").withChance(0.85),
      Item.of("kubejs:bee_queen").withChance(0.05),
    ],
    ["kubejs:bee_unknown"]
  );
  event.recipes.thermal.bottler(
    ["quark:sturdy_stone"],
    ["minecraft:cobblestone", Fluid.of("water", 100)]
  );

  event.recipes.thermal.pulverizer(["gravel"], ["#forge:cobblestone"]);
  event.recipes.thermal.pulverizer(["sand"], ["gravel"]);

  event.recipes.thermal.pulverizer(
    [Item.of("kubejs:biofuel").withChance(0.95)],
    ["#ironberry:bio_vegetables"]
  );

  event.recipes.thermal.smelter(["dirt"], ["kubejs:biofuel", "sand"]);

  event.recipes.thermal.insolator(
    ["sugar_cane", Item.of("sugar_cane").withChance(0.85)],
    ["sugar_cane"]
  );

  event.recipes.thermal.insolator(
    ["2x bamboo", Item.of("bamboo").withChance(0.85)],
    ["bamboo"]
  );

  event.recipes.thermal.insolator(
    [
      "bluepower:indigo_flower",
      Item.of("bluepower:indigo_flower").withChance(0.25),
    ],
    ["bluepower:indigo_flower"]
  );

  event.recipes.thermal.bottler(
    ["4x copper_ingot"],
    ["iron_ingot", Fluid.of("thermal:glowstone", 100)]
  );

  event.recipes.thermal.pyrolyzer(["thermal:silver_ingot"], ["iron_ingot"]);
  event.recipes.thermal.pyrolyzer(
    ["thermal:lead_ingot"],
    ["thermal:silver_ingot"]
  );
  event.recipes.thermal.pyrolyzer(
    ["nuclearcraft:manganese_ingot"],
    ["nuclearcraft:manganese_oxide_ingot"]
  );
  event.recipes.thermal.pyrolyzer(
    ["nuclearcraft:manganese_oxide_dust"],
    ["nuclearcraft:rhodochrosite_dust"]
  );

  event.recipes.thermal.crucible(
    [Fluid.of("nuclearcraft:condensate_water", 1000)],
    ["ae2:quantum_entangled_singularity"]
  );

  event.recipes.thermal.bottler(
    ["ae2:singularity"],
    ["64x ae2:matter_ball", Fluid.of("nuclearcraft:condensate_water", 10)]
  );

  event.recipes.thermal.bottler(
    ["2x ae2:quantum_entangled_singularity"],
    [Fluid.of("thermal:ender", 25), "ae2:singularity"]
  );

  event.recipes.thermal.bottler("2x create:zinc_ingot", [
    "minecraft:copper_ingot",
    Fluid.of("thermal:glowstone", 100),
  ]);

  event.recipes.thermal.crucible(
    [Fluid.of("nuclearcraft:zinc", 1000)],
    "create:zinc_ingot"
  );
  event.recipes.thermal.brewer(
    [Fluid.of("nuclearcraft:zirconium", 1000)],
    ["kubejs:mini_pellet", Fluid.of("nuclearcraft:zinc", 1000)]
  );

  event.recipes.thermal.brewer(
    [Fluid.of("nuclearcraft:zirconium_molybdenum", 1000)],
    [
      "thoriumreactors:molybdenum_ingot",
      Fluid.of("nuclearcraft:zirconium", 1000),
    ]
  );

  event.recipes.thermal.bottler(
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

  event.recipes.thermal.pyrolyzer(
    [
      Fluid.of("kubejs:soul", 125),
      Item.of("biomancy:mineral_fragment").withChance(0.25),
      Item.of("biomancy:mineral_fragment").withChance(0.12),
    ],
    ["#ironberry:soul_fixed"]
  );

  event.recipes.thermal.pyrolyzer(
    [
      Fluid.of("kubejs:soul", 125),
      "reactive:quartz",
      Item.of("biomancy:mineral_fragment").withChance(0.25),
      Item.of("biomancy:mineral_fragment").withChance(0.12),
    ],
    ["minecraft:echo_shard"]
  );

  sources.forEach((sr, i) => {
    event.recipes.thermal.pyrolyzer(
      [
        Fluid.of("kubejs:" + fluids[i], 125),
        Item.of(ItemResultChem[i]).withChance(0.25),
        Item.of(ItemResultChem[i]).withChance(0.12),
      ],
      ["#reactive:" + sr + "_sources"]
    );
  });

  event.recipes.thermal.pyrolyzer(
    ["reactive:quartz"],
    ["minecraft:amethyst_shard"]
  );

  event.recipes.thermal.bottler(
    ["reactive:quartz"],
    ["minecraft:quartz", Fluid.of("kubejs:acid", 125)]
  );

  event.recipes.thermal.smelter("reactive:acid_bottle", [
    "minecraft:ghast_tear",
    "reactive:quartz_bottle",
    "twilightforest:borer_essence",
  ]);

  event.recipes.thermal.pyrolyzer(
    [
      Fluid.of("kubejs:acid", 125),
      Item.of("kubejs:alpha").withChance(2.5),
      Item.of("kubejs:beta").withChance(2.5),
    ],
    ["reactive:acid_bottle"]
  );

  event.recipes.thermal.pyrolyzer(
    [
      Fluid.of("kubejs:acid", 125),
      Item.of("bluepower:amethyst_gem").withChance(2.5),
      Item.of("bluepower:sapphire_gem").withChance(2.5),

      Item.of("minecraft:amethyst_shard").withChance(0.25),
    ],
    ["kubejs:beta"]
  );

  event.recipes.thermal.pyrolyzer(
    [
      Fluid.of("kubejs:acid", 125),
      Item.of("bluepower:green_sapphire_gem").withChance(2.5),
      Item.of("bluepower:ruby_gem").withChance(0.06),
      Item.of("minecraft:emerald").withChance(0.25),
    ],
    ["kubejs:alpha"]
  );

  event.recipes.thermal.refinery(
    [Fluid.of("kubejs:pertio", 25), Fluid.of("kubejs:alchemio", 25)],
    [Fluid.of("kubejs:methane", 50)]
  );

  event.recipes.thermal.refinery(
    [Fluid.of("kubejs:densio", 25), Fluid.of("kubejs:prosperitio", 25)],
    [Fluid.of("kubejs:pertio", 50)]
  );

  event.recipes.thermal.refinery(
    [Fluid.of("kubejs:meltio", 25), Fluid.of("kubejs:ainiotzio", 25)],
    [Fluid.of("kubejs:alchemio", 50)]
  );

  event.recipes.thermal.centrifuge(
    [
      Item.of("kubejs:boron_shard").withChance(1.75),
      Item.of("kubejs:thorium_shard").withChance(1.75),
      Item.of("kubejs:uranium_shard").withChance(1.75),
    ],
    [Item.of("kubejs:meltio_clump")]
  );
  event.recipes.thermal.centrifuge(
    [
      Item.of("minecraft:redstone").withChance(1.5),
      Item.of("minecraft:glowstone_dust").withChance(1.5),
    ],
    [Item.of("kubejs:ainiotzio_crystal")]
  );
  event.recipes.thermal.centrifuge(
    [
      Item.of("kubejs:magnesium_shard").withChance(1.75),
      Item.of("kubejs:tin_shard").withChance(1.75),
      Item.of("kubejs:osmium_shard").withChance(1.75),
    ],
    [Item.of("kubejs:densio_clump")]
  );
  event.recipes.thermal.centrifuge(
    [
      Item.of("bluepower:teslatite_dust").withChance(1.5),
      Item.of("thermal:quartz_dust").withChance(1.5),
    ],
    [Item.of("kubejs:prosperitio_crystal")]
  );

  event.recipes.thermal.chiller("kubejs:meltio_clump", [
    Fluid.of("kubejs:meltio", 250),
    "kubejs:clump_cast",
  ]);

  event.recipes.thermal.chiller("kubejs:densio_clump", [
    Fluid.of("kubejs:densio", 250),
    "kubejs:clump_cast",
  ]);

  event.recipes.thermal.chiller("kubejs:ainiotzio_crystal", [
    Fluid.of("kubejs:ainiotzio", 250),
    "kubejs:crystal_cast",
  ]);

  event.recipes.thermal.chiller("kubejs:prosperitio_crystal", [
    Fluid.of("kubejs:prosperitio", 250),
    "kubejs:crystal_cast",
  ]);

  let ingots = ["tin", "osmium", "thorium", "boron", "uranium", "magnesium"];

  ingots.forEach((e) => {
    event.recipes.thermal.crucible(
      [Fluid.of("kubejs:" + e, 250)],
      ["kubejs:" + e + "_shard"]
    );
  });
});
