ServerEvents.highPriorityData((event) => {
  [
    "biodiesel",
    "cofh_creosote",
    "cofh_refined_fuel",
    "cofh_tree_oil",
    "hydrogen",
    "ethylene",
    "crude_oil",
    "diesel",
    "ethanol",
    "gasoline",
    "kerosene",
    "lpg",
  ].forEach((data) => {
    event.addJson(`pneumaticcraft:recipes/pneumaticcraft_fuels/${data}`, {});
  });

  //default x1 | x1
  event.addJson(`pneumaticcraft:recipes/pneumaticcraft_fuels/water`, {
    type: "pneumaticcraft:fuel_quality",
    air_per_bucket: 1000,
    burn_rate: 1.0,
    fluid: {
      type: "pneumaticcraft:fluid",
      amount: 1000,
      tag: "ironberry:chad_water",
    },
  });

  // x4 speed | /4 efficiency
  event.addJson(`pneumaticcraft:recipes/pneumaticcraft_fuels/biodiesel`, {
    type: "pneumaticcraft:fuel_quality",
    air_per_bucket: 500,
    burn_rate: 4.0,
    fluid: {
      type: "pneumaticcraft:fluid",
      amount: 1000,
      tag: "ironberry:chad_diesel",
    },
  });

  // x4 efficiency | /4 speed
  event.addJson(`pneumaticcraft:recipes/pneumaticcraft_fuels/ethanol`, {
    type: "pneumaticcraft:fuel_quality",
    air_per_bucket: 4000,
    burn_rate: 0.25,
    fluid: {
      type: "pneumaticcraft:fluid",
      amount: 1000,
      tag: "ironberry:chad_ethanol",
    },
  });
});
