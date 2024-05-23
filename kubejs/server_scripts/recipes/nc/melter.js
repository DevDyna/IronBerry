ServerEvents.recipes((event) => {
  function melter(input, output, count) {
    event.custom({
      type: "nuclearcraft:melter",
      input: [
        {
          item: input,
        },
      ],
      outputFluids: [
        {
          amount: count,
          fluid: output,
        },
      ],
      "powerModifier": (global.nc.energy),
      "radiation": (global.nc.rad),
      "timeModifier": (global.nc.speed)
    });
  }

  melter("minecraft:sugar", "nuclearcraft:sugar", 144);
  melter("nuclearcraft:cocoa_solids", "nuclearcraft:chocolate_liquor", 288);
  melter(
    "nuclearcraft:unsweetened_chocolate",
    "nuclearcraft:unsweetened_chocolate",
    144
  );
  melter("minecraft:coal", "kubejs:coal", 250);

  melter("nuclearcraft:carobbiite_dust", "kubejs:carobbiite", 144);
  melter("nuclearcraft:boron_nitride_dust", "kubejs:boron_nitride", 144);
  melter("nuclearcraft:fluorite_dust", "kubejs:fluorite", 144);
  melter("nuclearcraft:villiaumite_dust", "kubejs:villiaumite", 144);

  melter("minecraft:quartz", "kubejs:quartz", 10);

  melter("minecraft:redstone", "thermal:redstone", 1000);
  melter("minecraft:redstone_block", "thermal:redstone", 9000);
  melter("minecraft:glowstone_dust", "thermal:glowstone", 1000);
  melter("minecraft:glowstone", "thermal:glowstone", 4000);
  //melter('ae2:certus_quartz_crystal',"kubejs:certus",144)

  melter('minecraft:glass','kubejs:glass',1000)
  
  melter('kubejs:raw_plastic','kubejs:crude_plastic',100)
  
});
