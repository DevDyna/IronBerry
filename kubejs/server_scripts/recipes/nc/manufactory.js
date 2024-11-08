//priority 1
ServerEvents.recipes((event) => {
  function manu(input, out, count) {
    data.recipes.pulverizer.push([input, [out], [count]])
    event.custom({
      type: "nuclearcraft:manufactory",
      input: [
        {
          item: input,
        },
      ],
      output: [
        {
          count: count,
          item: out,
        },
      ],
      powerModifier: global.nc.energy,
      radiation: global.nc.rad,
      timeModifier: global.nc.speed,
    });
  }
  manu("minecraft:cocoa_beans", "nuclearcraft:cocoa_solids", 2);
  manu("minecraft:obsidian", "mekanism:dust_obsidian", 4);

  let keyname = [
    "rhodochrosite",
    "boron_arsenide",
    "villiaumite",
    "carobbiite",
    "boron_nitride",
    "fluorite",
  ];
  keyname.forEach((name) => {
    manu("nuclearcraft:" + name + "_gem", "nuclearcraft:" + name + "_dust", 1);
  });

  manu("nuclearcraft:manganese_ingot", "nuclearcraft:manganese_dust", 1);
  manu("nuclearcraft:graphite_ingot", "thoriumreactors:graphite_tube", 4);
  manu("minecraft:sand", "nuclearcraft:silicon_gem", 2);

  //manu("nuclearcraft:coil_bscco", "nuclearcraft:bscco_dust", 2);
  manu("nuclearcraft:boron_ingot", "nuclearcraft:boron_dust", 1);
  manu("thermal:tin_block", "kubejs:printed_plate", 16);

  manu("nuclearcraft:shibuichi_ingot", "nuclearcraft:shibuichi_dust", 1);
  manu("nuclearcraft:tough_alloy_ingot", "nuclearcraft:tough_alloy_dust", 1);
  manu(
    "nuclearcraft:thermoconducting_ingot",
    "nuclearcraft:thermoconducting_dust",
    1
  );

  manu("thoriumreactors:blasted_stone", "ae2:sky_dust", 2);
  manu('thermal:silver_ingot', 'thermal:silver_dust',1)
  manu('bluepower:silicon_boule', 'bluepower:silicon_wafer',16)
});
