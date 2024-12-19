ServerEvents.recipes((event) => {
  event.custom({
    type: `extendedcrafting:compressor`,
    powerCost: 50000.0,
    inputCount: 16,
    ingredient: {
      item: "kubejs:crystaltine",
    },
    catalyst: {
      item: "extendedcrafting:flux_star",
    },
    result: {
      item: "extendedcrafting:crystaltine_ingot",
    },
  });

  event.custom({
    type: `extendedcrafting:compressor`,
    powerCost: 50000.0,
    inputCount: 16,
    ingredient: {
      item: "extendedcrafting:crystaltine_ingot",
    },
    catalyst: {
      item: "extendedcrafting:flux_star",
    },
    result: {
      item: "extendedcrafting:singularity",
      nbt: '{Id:"extendedcrafting:crystaltine"}',
    },
  });

  function compressor(input, output, rf, incount) {
    event.custom({
      type: `extendedcrafting:compressor`,
      powerCost: rf,
      inputCount: 1,
      ingredient: {
        item: output,
      },
      catalyst: {
        item: "twilightforest:uncrafting_table",
      },
      result: {
        item: input,
        count: 16,
      },
    });

    event.custom({
      type: `extendedcrafting:compressor`,
      powerCost: rf,
      inputCount: 16,
      ingredient: {
        item: input,
      },
      catalyst: {
        item: "minecraft:crafting_table",
      },
      result: { item: output },
    });
  }

  compressor("thermal:iron_coin", "thermal:electrum_coin", 10000);
  compressor("thermal:electrum_coin", "thermal:lead_coin", 10000);
  compressor("thermal:lead_coin", "thermal:enderium_coin", 10000);

});
