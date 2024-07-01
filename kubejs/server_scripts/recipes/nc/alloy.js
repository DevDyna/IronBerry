ServerEvents.recipes((event) => {
  function alloy(item_a, item_b, output, outcount) {
    event
      .custom({
        type: "nuclearcraft:alloy_smelter",
        input: [
          {
            item: item_a,
            count: 1,   // DONT WORK ITEM COUNT
          },
          {
            item: item_b,
            count: 1,   // DONT WORK ITEM COUNT
          },
        ],
        output: [
          {
            count: outcount,
            item: output,
          },
        ],
        powerModifier: global.nc.energy / 10,
        radiation: global.nc.rad,
        timeModifier: global.nc.speed * 2,
      })
      .id(RegX(item_a + item_b + "_" + output, "_"));
  }

  alloy(
    "thermal:bitumen",
    "twilightforest:ironwood_ingot",
    "mekanism:ingot_steel",
    2
  );
  alloy(
    "thermal:bitumen_block",
    "twilightforest:ironwood_block",
    "mekanism:block_steel",
    2
  );
  alloy(
    "integrateddynamics:variable",
    "integrateddynamics:enhancement_offset",
    "kubejs:processor",
    1
  );

  function smart_alloy(item_list, output) {
    alloy(item_list[0], item_list[1], output, 1);
  }

  function smart_alloy_with_count(item_list, output, count) {
    alloy(item_list[0], item_list[1], output, count);
  }

  function infusion(ingredient, in_list, out_list) {
    in_list.forEach((element, index) => {
      alloy(ingredient, element, out_list[index], 1);
    });
  }

  infusion(
    "bluepower:red_alloy_ingot",
    ["kubejs:processor", "mekanism:basic_control_circuit"],
    ["mekanism:alloy_infused", "mekanism:advanced_control_circuit"]
  );
  infusion(
    "bluepower:blue_alloy_ingot",
    ["mekanism:alloy_infused", "mekanism:advanced_control_circuit"],
    ["mekanism:alloy_reinforced", "mekanism:elite_control_circuit"]
  );
  infusion(
    "bluepower:purple_alloy_ingot",
    ["mekanism:alloy_reinforced", "mekanism:elite_control_circuit"],
    ["mekanism:alloy_atomic", "mekanism:ultimate_control_circuit"]
  );

  smart_alloy(
    ["nuclearcraft:basic_electric_circuit", "pipez:item_pipe"],
    "mekanism:basic_logistical_transporter"
  );
  smart_alloy(
    ["nuclearcraft:basic_electric_circuit", "pipez:fluid_pipe"],
    "mekanism:basic_mechanical_pipe"
  );
  smart_alloy(
    ["nuclearcraft:basic_electric_circuit", "pipez:energy_pipe"],
    "mekanism:basic_universal_cable"
  );
  smart_alloy(
    ["nuclearcraft:basic_electric_circuit", "pipez:gas_pipe"],
    "mekanism:basic_pressurized_tube"
  );

  alloy(
    "nuclearcraft:boron_ingot",

    "mekanism:ingot_steel",

    "nuclearcraft:ferroboron_ingot",
    2
  );
  alloy(
    "nuclearcraft:ferroboron_ingot",

    "nuclearcraft:lithium_ingot",

    "nuclearcraft:tough_alloy_ingot",
    2
  );
  alloy(
    "mekanism:ingot_osmium",

    "mekanism:dust_refined_obsidian",

    "mekanism:ingot_refined_obsidian",
    1
  );

  smart_alloy_with_count(
    ["nuclearcraft:magnesium_ingot", "thermal:tin_ingot"],
    "nuclearcraft:shibuichi_ingot",
    4
  );
  smart_alloy(
    ["nuclearcraft:ferroboron_ingot", "mekanism:alloy_reinforced"],
    "nuclearcraft:hard_carbon_ingot"
  );

  smart_alloy(
    ["nuclearcraft:manganese_dust", "nuclearcraft:sodium_hydroxide_dust"],
    "nuclearcraft:crystal_binder_dust"
  );

  smart_alloy_with_count(
    ["minecraft:ender_pearl", "ae2:fluix_dust"],
    "ae2:fluix_pearl",
    4
  );

  smart_alloy(
    ["minecraft:ender_pearl", "thermal:tin_ingot"],
    "extendedcrafting:ender_ingot"
  );

  smart_alloy(
    ["ae2:printed_calculation_processor", "thoriumreactors:redstone_processor"],
    "ae2:calculation_processor"
  );
  smart_alloy(
    ["ae2:printed_engineering_processor", "thoriumreactors:redstone_processor"],
    "ae2:engineering_processor"
  );
  smart_alloy(
    ["ae2:printed_logic_processor", "thoriumreactors:redstone_processor"],
    "ae2:logic_processor"
  );

  smart_alloy_with_count(
    ["minecraft:copper_ingot", "thermal:nickel_ingot"],
    "thermal:constantan_ingot",
    2
  );

  function alloyers(input, output, count) {
    alloy("inventorypets:nugget_coal", input, output, count);
  }

  //                    NC:N BREAK AGAIN MY DREAMS !!
  // alloy(
  //   "thermal:tin_ingot",
  //   1,
  //   "minecraft:copper_ingot",
  //   3,
  //   "mekanism:ingot_bronze",
  //   4
  // );

  // alloy(
  //   "minecraft:iron_ingot",
  //   2,
  //   "thermal:nickel_ingot",
  //   1,
  //   "thermal:invar_ingot",
  //   3
  // );

  // alloy(
  //   "bluepower:tungsten_ingot",
  //   1,
  //   "minecraft:coal",
  //   4,
  //   "bluepower:tungsten_carbide",
  //   4
  // );

  // alloy(
  //   "pneumaticcraft:ingot_iron_compressed",
  //   1,
  //   "kubejs:tungsten_plate",
  //   2,
  //   "extendedcrafting:black_iron_ingot",
  //   1
  // );

  alloyers("kubejs:crude_invar", "thermal:invar_ingot", 2);
  alloyers("kubejs:crude_bronze", "mekanism:ingot_bronze", 2);
  alloyers("kubejs:crude_black_iron", "extendedcrafting:black_iron_ingot", 1);
  //alloyers("kubejs:crude_tungsten_carbide", "bluepower:tungsten_carbide", 2);
});
