ServerEvents.recipes(event => {

  function assembly(input_item, input_count, item_out, count) {
    let ingredient = []
    input_item.forEach((element, index) => {
      ingredient.push(ItemAndCount(element, input_count[index]))
    });
    let output = []
    output.push(ItemAndCount(item_out, count))
    event.custom({
      "type": "nuclearcraft:assembler",
      "input": ingredient,
      "output": output,
      "powerModifier": 500.0,
      "radiation": 0.0,
      "timeModifier": 0.25
    }).id(RegX(input_item + '_' + item_out, '_'))
  }

  function smart_assembly(input, output){
    let count = [];
    input.forEach(a => {
      count.push(1);
    });
    assembly(input, count, output, 1)
  }

  assembly(
    ['pneumaticcraft:transistor', 'pneumaticcraft:capacitor', 'mekanism:block_steel', 'nuclearcraft:steel_frame', 'pneumaticcraft:upgrade_matrix', 'pneumaticcraft:plastic'],
    [2, 2, 1, 1, 1, 1], 'mekanism:steel_casing', 2)

  assembly(['thermal:cured_rubber', 'pneumaticcraft:printed_circuit_board', 'mekanism:basic_control_circuit', 'mekanism:alloy_atomic', 'pipez:universal_pipe'],
    [1, 1, 1, 1, 4], 'nuclearcraft:basic_electric_circuit', 1)

  assembly(['pneumaticcraft:upgrade_matrix', 'pneumaticcraft:transistor', 'pneumaticcraft:plastic'], [1, 4, 2], 'kubejs:upgrade_template', 1)

  smart_assembly(['kubejs:upgrade_template', 'cyclic:soundproofing', 'pneumaticcraft:pressure_gauge'],'mekanism:upgrade_muffling')
  smart_assembly(['kubejs:assembly_plate', 'pneumaticcraft:capacitor', 'pneumaticcraft:pressure_gauge', 'pipez:basic_upgrade'],'nuclearcraft:upgrade_speed')
  smart_assembly(['kubejs:upgrade_template', 'pneumaticcraft:capacitor', 'pneumaticcraft:pressure_gauge', 'pipez:basic_upgrade'],'mekanism:upgrade_speed')
  smart_assembly(['kubejs:upgrade_template', 'pneumaticcraft:transistor', 'pneumaticcraft:pressure_gauge', 'pipez:basic_upgrade'],'mekanism:upgrade_energy')
  smart_assembly(['kubejs:assembly_plate', 'pneumaticcraft:transistor', 'pneumaticcraft:pressure_gauge', 'pipez:basic_upgrade'],'nuclearcraft:upgrade_energy')




















})