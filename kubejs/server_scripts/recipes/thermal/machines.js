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
      Fluid.of("nuclearcraft:boron_arsenide_solution", 500),
      Fluid.of("nuclearcraft:boron_nitride_solution", 500),
    ],
    Fluid.of("nuclearcraft:boric_acid", 1000)
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
      list.push([Fluid.of(b, e[3][i])]);
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
    ["nuclearcraft:plate_basic"],
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
});
