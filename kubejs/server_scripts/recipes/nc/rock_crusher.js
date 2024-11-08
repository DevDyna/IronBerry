ServerEvents.recipes((event) => {
  function crusher(item_in, icount, item_out, ocount) {
    data.recipes.pulverizer.push([item_in, item_out, ocount])
    let result = [];
    item_out.forEach((element, index) => {
      result.push(ItemAndCount(element, ocount[index]));
    });
    let input = [];
    input.push(ItemAndCount(item_in, icount));
    event
      .custom({
        type: "nuclearcraft:rock_crusher",
        input: input,
        output: result,
        powerModifier: global.nc.energy,
        radiation: global.nc.rad,
        timeModifier: global.nc.speed,
      })
      .id(RegX(item_in + "_" + item_out, "_"));
  }

  crusher(
    "quark:sturdy_stone",
    1,
    [
      "tombstone:white_marble",
      "tombstone:dark_marble",
      "minecraft:cobbled_deepslate",
    ],
    [2, 2, 3]
  );
  crusher(
    "minecraft:deepslate",
    1,
    ["kubejs:lupenio", "minecraft:diamond", "kubejs:crystaltine"],
    [1, 1, 1]
  );

  crusher(
    "thoriumreactors:potassium",
    3,
    [
      "nuclearcraft:shibuichi_dust",
      "nuclearcraft:tough_alloy_dust",
      "kubejs:tiny_platinum_dust",
    ],
    [1, 1, 3]
  );

  crusher(
    "thoriumreactors:uran_three_chloride",
    3,
    [
      "nuclearcraft:thermoconducting_dust",
      "kubejs:solidified_resin",
      "kubejs:tiny_platinum_dust",
    ],
    [1, 1, 3]
  );
  crusher(
    "thoriumreactors:sodium",
    3,
    [
      "mekanism:dust_lithium",
      "kubejs:raw_plastic",
      "kubejs:tiny_platinum_dust",
    ],
    [1, 1, 3]
  );

  crusher(
    "thermal:silver_dust",
    1,
    ["thermal:silver_nugget", "create:zinc_nugget", "minecraft:iron_nugget"],
    [8, 4, 1]
  );
});
