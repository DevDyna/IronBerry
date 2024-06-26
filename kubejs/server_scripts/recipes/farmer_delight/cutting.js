ServerEvents.recipes((event) => {
  //cutting
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:smooth_stone",
      },
    ],
    result: [
      {
        item: "minecraft:cobblestone",
      },
    ],
    tool: {
      tag: "bluepower:saw",
    },
  });
  //
  //
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "quark:sturdy_stone",
      },
    ],
    result: [
      {
        chance: 0.5,
        count: 1,
        item: "minecraft:cobbled_deepslate",
      },
      {
        chance: 0.5,
        count: 1,
        item: "bluepower:marble",
      },
      {
        chance: 0.5,
        count: 1,
        item: "minecraft:smooth_basalt",
      },
      {
        chance: 0.5,
        count: 1,
        item: "minecraft:calcite",
      },
    ],
    tool: {
      tag: "forge:pickaxes",
    },
  });
  //
  //
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        tag: "ironberry:dark_stones",
      },
    ],
    result: [
      {
        count: 1,
        item: "tombstone:dark_marble",
      },
    ],
    tool: {
      tag: "forge:pickaxes",
    },
  });
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        tag: "ironberry:white_stones",
      },
    ],
    result: [
      {
        count: 1,
        item: "tombstone:white_marble",
      },
    ],
    tool: {
      tag: "forge:pickaxes",
    },
  });

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "farmersdelight:rich_soil",
      },
    ],
    result: [
      {
        count: 3,
        item: "kubejs:rich_bone_meal",
      },
      {
        chance: 0.5,
        count: 1,
        item: "kubejs:rich_bone_meal",
      },
    ],
    tool: {
      tag: "farmersdelight:tools/knives",
    },
  });

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        tag: "tombstone:decorative_graves",
      },
    ],
    result: [
      {
        chance: 0.75,
        count: 1,
        item: "minecraft:soul_sand",
      },
    ],
    tool: {
      tag: "forge:tools/shovels",
    },
  });

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:soul_sand",
      },
    ],
    result: [
      {
        chance: 0.25,
        count: 2,
        item: "minecraft:nether_wart",
      },
      {
        chance: 0.05,
        count: 1,
        item: "minecraft:nether_wart",
      },
    ],
    tool: {
      tag: "forge:tools/shovels",
    },
  });

  //make sense
  //---------//
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:iron_ingot",
      },
    ],
    result: [
      {
        item: "thermal:drill_head",
      },
    ],
    tool: {
      tag: "forge:tools/pickaxes",
    },
  });

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:iron_ingot",
      },
    ],
    result: [
      {
        item: "thermal:saw_blade",
      },
    ],
    tool: {
      tag: "forge:tools/axes",
    },
  });
  //---------//
  let incopper = [
    "minecraft:oxidized_copper",
    "minecraft:weathered_copper",
    "minecraft:exposed_copper",
  ];
  let outcopper = [
    "minecraft:weathered_copper",
    "minecraft:exposed_copper",
    "minecraft:copper_block",
  ];
  incopper.forEach((element, index) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: element,
        },
      ],
      result: [
        {
          count: 1,
          item: outcopper[index],
        },
        {
          count: 1,
          item: "kubejs:patina",
        },
        {
          chance: 0.5,
          count: 1,
          item: "kubejs:patina",
        },
        {
          chance: 0.25,
          count: 1,
          item: "kubejs:patina",
        },
      ],
      tool: {
        tag: "forge:tools/axes",
      },
    });
  });

  let wood = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"];
  wood.forEach((type) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "minecraft:" + type + "_log",
        },
      ],
      result: [
        {
          item: "minecraft:stripped_" + type + "_log",
        },
        {
          chance: 0.25,
          count: 1,
          item: "rootsclassic:" + type + "_bark",
        },
        {
          chance: 0.25,
          count: 1,
          item: "rootsclassic:" + type + "_bark",
        },
        {
          chance: 0.25,
          count: 1,
          item: "rootsclassic:" + type + "_bark",
        },
      ],
      tool: {
        item: "rootsclassic:bark_knife",
      },
    });
  });

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "create:brass_ingot",
      },
    ],
    result: [
      {
        item: "create:brass_sheet",
      },
    ],
    tool: {
      item: "kubejs:hammer",
    },
  });
  //
  //
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:iron_ingot",
      },
    ],
    result: [
      {
        item: "create:iron_sheet",
      },
    ],
    tool: {
      item: "kubejs:hammer",
    },
  });
  //
  //

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "nuclearcraft:dominos",
      },
    ],
    result: [
      {
        chance: 0.15,
        count: 1,
        item: "twilightforest:maze_map_focus",
      },
      {
        chance: 0.15,
        count: 1,
        item: "twilightforest:maze_map_focus",
      },
      {
        chance: 0.15,
        count: 1,
        item: "twilightforest:maze_map_focus",
      },
      {
        chance: 0.15,
        count: 1,
        item: "twilightforest:maze_map_focus",
      },
    ],
    tool: {
      tag: "ironberry:mino_axes",
    },
  });
  //
  //

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "ae2:fluix_covered_cable",
      },
    ],
    result: [
      {
        item: "ae2:cable_anchor",
        count: 64,
      },
    ],
    tool: {
      tag: "bluepower:saw",
    },
  });
  //
  //
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "thermal:invar_ingot",
      },
    ],
    result: [
      {
        item: "thermal:invar_plate",
      },
    ],
    tool: {
      item: "kubejs:hammer",
    },
  });
  //
  //

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        tag: "ironberry:meats",
      },
    ],
    result: [
      {
        item: "biomancy:flesh_bits",
        chance: 0.25,
      },
      {
        item: "biomancy:elastic_fibers",
        chance: 0.25,
      },
      {
        item: "biomancy:mob_sinew",
        chance: 0.25,
      },
      {
        item: "biomancy:bone_fragments",
        chance: 0.25,
      },
    ],
    tool: {
      tag: "bluepower:saw",
    },
  });
  //
  //

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "biomancy:flesh",
      },
    ],
    result: [
      {
        item: "biomancy:living_flesh",
        chance: 0.25,
      },
      {
        item: "biomancy:living_flesh",
        chance: 0.25,
      },
      {
        item: "biomancy:living_flesh",
        chance: 0.25,
      },
      {
        item: "biomancy:living_flesh",
        chance: 0.25,
      },
    ],
    tool: {
      tag: "bluepower:saw",
    },
  });
  //
  //

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "minecraft:pufferfish",
      },
    ],
    result: [
      {
        item: "biomancy:flesh_bits",
        chance: 0.25,
      },
      {
        item: "biomancy:elastic_fibers",
        chance: 0.25,
      },
      {
        item: "biomancy:mob_sinew",
        chance: 0.25,
      },
      {
        item: "biomancy:mob_claw",
        chance: 0.95,
      },
    ],
    tool: {
      tag: "bluepower:saw",
    },
  });
  //
  //

  

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: 'twilightforest:twisted_stone',
      },
    ],
    result: [
      {
        item: 'twilightforest:twisted_stone_pillar',
        count: 1,
      },
    ],
    tool: {
      tag: "forge:tools/pickaxes",
    },
  });

});
