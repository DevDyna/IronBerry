ServerEvents.recipes((event) => {
  event.custom({
    type: "extendedcrafting:shaped_ender_crafter",
    pattern: ["ABA", "CDC", "ABA"],
    key: {
      A: {
        item: "minecraft:redstone",
      },
      B: {
        item: "bluepower:red_alloy_ingot",
      },
      C: {
        item: "morered:red_alloy_ingot",
      },
      D: {
        item: "bluepower:red_doped_wafer",
      },
    },
    result: {
      item: "extendedcrafting:redstone_ingot",
      count: 4,
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_ender_crafter",
    pattern: ["ABA", "BCB", "ABA"],
    key: {
      A: {
        item: "ars_nouveau:starbuncle_shards",
      },
      B: {
        item: "reactive:stardust",
      },
      C: {
        item: "ae2:quantum_entangled_singularity",
      },
    },
    result: {
      item: "minecraft:nether_star",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_flux_crafter",
    powerRequired: 10000,
    powerRate: 400,
    pattern: ["ABA", "BCB", "ABA"],
    key: {
      A: {
        item: "minecraft:redstone",
      },
      B: {
        item: "minecraft:gold_ingot",
      },
      C: {
        item: "minecraft:nether_star",
      },
    },
    result: {
      item: "extendedcrafting:flux_star",
    },
  });

  event.custom({
    type: "extendedcrafting:shaped_flux_crafter",
    powerRequired: 100000,
    powerRate: 400,
    pattern: ["ABA", "BCB", "ABA"],
    key: {
      A: {
        item: "extendedcrafting:black_iron_block",
      },
      B: {
        item: "thoriumreactors:reactor_casing",
      },
      C: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        count: 1,
        nbt: '{Id:"extendedcrafting:crystaltine"}',
      },
    },
    result: {
      item: "extendedcrafting:crafting_core",
    },
  });
});
