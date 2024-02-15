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
      "powerModifier": (global.nc.energy/10),
      "radiation": (global.nc.rad),
      "timeModifier": (global.nc.speed*2)
    }).id(RegX(input_item + '_' + item_out, '_'))
  }

  function tiny_assembly(input,output,result_count){
    let count = [];
    input.forEach(a => {
      count.push(1);
    });
    assembly(input, count, output, result_count)
  }

  function smart_assembly(input, output){
    tiny_assembly(input,output,1)
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


    assembly(['mekanism:block_steel', 'nuclearcraft:steel_frame', 'mekanism:alloy_atomic', 'mekanism:steel_casing'],[8,4,1,1],'nuclearcraft:chassis',1)

    smart_assembly(['bluepower:blulectric_alloyfurnace', 'nuclearcraft:chassis', 'mekanism:chemical_crystallizer'],'nuclearcraft:ingot_former')

    smart_assembly(['bluepower:blulectric_alloyfurnace', 'nuclearcraft:chassis', 'mekanism:electrolytic_separator'],'nuclearcraft:centrifuge')

    smart_assembly(['nuclearcraft:bioplastic','mekanism:ingot_bronze', 'nuclearcraft:plate_basic', 'nuclearcraft:tough_alloy_ingot'],'nuclearcraft:plate_advanced')

    tiny_assembly(['minecraft:egg', 'tombstone:lollipop', 'minecraft:wheat'],'nuclearcraft:graham_cracker',2)

    function nc_food(bread,output){
assembly(['nuclearcraft:milk_chocolate', 'nuclearcraft:marshmallow', 'nuclearcraft:dark_chocolate', bread],[1,1,1,2],output,1)
}

nc_food('nuclearcraft:graham_cracker','nuclearcraft:smore')
nc_food('nuclearcraft:smore','nuclearcraft:moresmore')
nc_food('nuclearcraft:moresmore','nuclearcraft:evenmoresmore')


function nc_machine(input,output){
  assembly([input,'nuclearcraft:basic_electric_circuit', 'nuclearcraft:chassis', 'nuclearcraft:plate_advanced'],[1,1,1,2],output,1)
}

nc_machine('mekanism:electrolytic_separator','nuclearcraft:isotope_separator')
nc_machine('mekanism:chemical_crystallizer','nuclearcraft:fluid_infuser')
nc_machine('mekanism:rotary_condensentrator','nuclearcraft:fluid_enricher')
nc_machine('pneumaticcraft:thermopneumatic_processing_plant','nuclearcraft:chemical_reactor')
nc_machine('mekanism:chemical_oxidizer','nuclearcraft:melter')
nc_machine('cyclic:crusher','nuclearcraft:manufactory')

tiny_assembly(['mekanism:ingot_refined_obsidian', 'nuclearcraft:basic_electric_circuit', 'nuclearcraft:plate_advanced'],'nuclearcraft:plate_du',4)


smart_assembly(['nuclearcraft:plate_du','mekanismgenerators:reactor_glass'],'nuclearcraft:fission_reactor_glass')
smart_assembly(['nuclearcraft:plate_du','mekanism:structural_glass'],'nuclearcraft:fission_reactor_glass')
smart_assembly(['nuclearcraft:plate_du','mekanismgenerators:fission_reactor_casing'],'nuclearcraft:fission_reactor_casing')
smart_assembly(['nuclearcraft:plate_du','mekanismgenerators:fission_fuel_assembly'],'nuclearcraft:fission_reactor_solid_fuel_cell')
assembly(['nuclearcraft:plate_du', 'mekanismgenerators:control_rod_assembly', 'mekanismgenerators:gas_burning_generator'],[4,1,1],'nuclearcraft:fission_reactor_controller',1)
smart_assembly(['nuclearcraft:plate_du','mekanismgenerators:fission_reactor_logic_adapter'],'nuclearcraft:fission_reactor_port')
smart_assembly(['nuclearcraft:plate_du','mekanismgenerators:fission_reactor_port'],'nuclearcraft:fission_reactor_port')



})