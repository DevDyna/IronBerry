ServerEvents.recipes((event) => {
  function alloy(item_a, count1, item_b, count2, output, outcount) {
    event
      .custom({
        type: "nuclearcraft:alloy_smelter",
        input: [
          {
            item: item_a,
            count: count1,
          },
          {
            item: item_b,
            count: count2,
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
    1,
    "twilightforest:ironwood_ingot",
    1,
    "mekanism:ingot_steel",
    2
  );
  alloy(
    "thermal:bitumen_block",
    1,
    "twilightforest:ironwood_block",
    1,
    "mekanism:block_steel",
    2
  );
  alloy(
    "integrateddynamics:variable",
    1,
    "integrateddynamics:enhancement_offset",
    1,
    "kubejs:processor",
    1
  );

  function smart_alloy(item_list, output) {
    alloy(item_list[0], 1, item_list[1], 1, output, 1);
  }

  function smart_alloy_with_count(item_list, output, count) {
    alloy(item_list[0], 1, item_list[1], 1, output, count);
  }

  function infusion(ingredient, in_list, out_list) {
    in_list.forEach((element, index) => {
      alloy(ingredient, 1, element, 1, out_list[index], 1);
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
    "thermal:tin_ingot",
    1,
    "minecraft:copper_ingot",
    3,
    "mekanism:ingot_bronze",
    4
  );
  alloy(
    "nuclearcraft:boron_ingot",
    1,
    "mekanism:ingot_steel",
    1,
    "nuclearcraft:ferroboron_ingot",
    2
  );
  alloy(
    "nuclearcraft:ferroboron_ingot",
    1,
    "nuclearcraft:lithium_ingot",
    1,
    "nuclearcraft:tough_alloy_ingot",
    2
  );
  alloy(
    "mekanism:ingot_osmium",
    1,
    "mekanism:dust_refined_obsidian",
    1,
    "mekanism:ingot_refined_obsidian",
    1
  );

  smart_alloy_with_count(
    ["nuclearcraft:magnesium_ingot", "thermal:tin_ingot"],
    "nuclearcraft:shibuichi_ingot",
    4
  );
  smart_alloy_with_count(
    ["nuclearcraft:ferroboron_ingot", "mekanism:alloy_reinforced"],
    "nuclearcraft:hard_carbon_ingot",
    1
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
  alloy(
    "minecraft:iron_ingot",
    2,
    "thermal:nickel_ingot",
    1,
    "thermal:invar_ingot",
    3
  );


});
