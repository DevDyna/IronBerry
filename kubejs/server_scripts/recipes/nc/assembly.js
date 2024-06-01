ServerEvents.recipes(event => {

  function assembly(input_item, input_count, item_out, count) {
    let ingredient = []
    input_item.forEach((element, index) => {
      ingredient.push(ItemOrTagAndCount(element, input_count[index]))
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
nc_food('nuclearcraft:moresmore','nuclearcraft:foursmore')
nc_food('nuclearcraft:foursmore','nuclearcraft:evenmoresmore')

function nc_machine_adv(input,output){
  assembly([input,'nuclearcraft:basic_electric_circuit', 'nuclearcraft:chassis', 'nuclearcraft:plate_advanced'],[1,1,1,2],output,1)
}

nc_machine_adv('mekanism:electrolytic_separator','nuclearcraft:isotope_separator')
nc_machine_adv('mekanism:chemical_crystallizer','nuclearcraft:fluid_infuser')
nc_machine_adv('mekanism:rotary_condensentrator','nuclearcraft:fluid_enricher')
nc_machine_adv('pneumaticcraft:thermopneumatic_processing_plant','nuclearcraft:chemical_reactor')
nc_machine_adv('mekanism:chemical_oxidizer','nuclearcraft:melter')
nc_machine_adv('cyclic:crusher','nuclearcraft:manufactory')

tiny_assembly(['mekanism:ingot_refined_obsidian', 'nuclearcraft:basic_electric_circuit', 'nuclearcraft:plate_advanced'],'nuclearcraft:plate_du',4)


assembly(['mekanism:ingot_uranium', 'minecraft:copper_ingot', 'nuclearcraft:magnesium_ingot', 'nuclearcraft:graphite_ingot', 'mekanism:alloy_infused'],[2,1,1,1,1],'nuclearcraft:thermoconducting_ingot',1)
assembly(['nuclearcraft:thermoconducting_ingot', 'nuclearcraft:tough_alloy_ingot', 'nuclearcraft:shibuichi_ingot'],[1,1,1],'nuclearcraft:super_alloy_ingot',3)
assembly(['nuclearcraft:super_alloy_ingot', 'nuclearcraft:hard_carbon_ingot', 'mekanism:teleportation_core', 'nuclearcraft:crystal_binder_dust'],[1,1,1,1],'nuclearcraft:extreme_ingot',3)
assembly(['minecraft:copper_ingot', 'minecraft:iron_ingot', 'nuclearcraft:magnesium_ingot'],[4,1,1],'nuclearcraft:coil_copper',2)
assembly(['nuclearcraft:graphite_ingot', 'thermal:tin_ingot', 'nuclearcraft:plate_basic', 'mekanism:advanced_control_circuit', 'nuclearcraft:silicon_gem'],[1,4,1,1,1],'nuclearcraft:servo',1)
assembly(['minecraft:redstone', 'nuclearcraft:plate_basic', 'mekanism:ingot_osmium', 'nuclearcraft:ferroboron_ingot'],[8,2,2,1],'nuclearcraft:actuator',2)
assembly(['mekanism:alloy_infused', 'nuclearcraft:boron_ingot', 'mekanism:alloy_reinforced', 'nuclearcraft:silicon_gem', 'nuclearcraft:plate_basic'],[4,2,1,1,1],'nuclearcraft:motor',1)


assembly(['nuclearcraft:crystal_binder_dust', 'mekanism:elite_control_circuit'],[1,1],'mekanism:teleportation_core',2)
assembly(['nuclearcraft:tough_alloy_ingot', 'nuclearcraft:magnesium_ingot'],[2,1],'nuclearcraft:coil_magnesium_diboride',1)
assembly(['nuclearcraft:super_alloy_ingot', 'nuclearcraft:shibuichi_ingot'],[1,1],'nuclearcraft:coil_bscco',1)

assembly(['ae2:quartz_fiber','ae2:fluix_crystal'],[4,1],'ae2:fluix_glass_cable',2)
assembly(['ae2:fluix_glass_cable','thermal:cured_rubber'],[4,1],'ae2:fluix_covered_cable',4)

assembly(['ae2:fluix_covered_cable','ae2:charged_certus_quartz_crystal', 'minecraft:quartz', 'ae2:fluix_crystal'],[4,1,1,1,1],'ae2:fluix_smart_cable',4)

tiny_assembly(['nuclearcraft:plate_du', 'kubejs:crystaltine', 'nuclearcraft:boron_arsenide_dust', 'mekanism:teleportation_core'],'nuclearcraft:plate_elite',4)
tiny_assembly(['nuclearcraft:plate_elite', 'nuclearcraft:extreme_ingot','kubejs:arsenic_lupenio'],'nuclearcraft:plate_extreme',2)

function nc_machine_du(input,output){
  assembly([input[0],input[1],'nuclearcraft:plate_du', 'nuclearcraft:empty_frame'],[1,1,2,1],output,1)
}

nc_machine_du(['nuclearcraft:motor','nuclearcraft:ingot_former'],'nuclearcraft:crystallizer')
nc_machine_du(['nuclearcraft:actuator','nuclearcraft:alloy_smelter'],'nuclearcraft:supercooler')
nc_machine_du(['nuclearcraft:servo', 'nuclearcraft:assembler'],'nuclearcraft:rock_crusher')
nc_machine_du(['nuclearcraft:coil_copper', 'nuclearcraft:centrifuge'],'nuclearcraft:fuel_reprocessor')
nc_machine_du(['nuclearcraft:coil_magnesium_diboride','nuclearcraft:alloy_smelter'],'nuclearcraft:electrolyzer')
nc_machine_du(['nuclearcraft:coil_bscco', 'nuclearcraft:isotope_separator'],'nuclearcraft:extractor')


assembly(['nuclearcraft:steel_frame', 'nuclearcraft:empty_sink'],[1,2],'mekanism:induction_casing',2)

smart_assembly(['#ironberry:wrench_fix','bluepower:battery_block'],'mekanism:configurator')

smart_assembly(['mekanism:alloy_infused', 'mekanism:induction_casing', 'thermal:energy_duct'],'mekanism:induction_port')

smart_assembly(['thermal:energy_duct', 'thermal:energy_cell',  'mekanism:basic_control_circuit','mekanism:induction_casing'],'mekanism:basic_induction_provider')
smart_assembly(['thermal:energy_duct', 'thermal:energy_cell',  'mekanism:advanced_control_circuit','mekanism:basic_induction_provider'],'mekanism:advanced_induction_provider')
smart_assembly(['thermal:energy_duct', 'thermal:energy_cell',  'mekanism:elite_control_circuit','mekanism:advanced_induction_provider'],'mekanism:elite_induction_provider')
smart_assembly(['thermal:energy_duct', 'thermal:energy_cell',  'mekanism:ultimate_control_circuit','mekanism:elite_induction_provider'],'mekanism:ultimate_induction_provider')

smart_assembly(['mekanism:alloy_infused', 'thermal:energy_cell',  'mekanism:basic_control_circuit','mekanism:induction_casing'],'mekanism:basic_induction_cell')
smart_assembly(['mekanism:alloy_infused', 'thermal:energy_cell',  'mekanism:advanced_control_circuit','mekanism:basic_induction_cell'],'mekanism:advanced_induction_cell')
smart_assembly(['mekanism:alloy_infused', 'thermal:energy_cell',  'mekanism:elite_control_circuit','mekanism:advanced_induction_cell'],'mekanism:elite_induction_cell')
smart_assembly(['mekanism:alloy_infused', 'thermal:energy_cell',  'mekanism:ultimate_control_circuit','mekanism:elite_induction_cell'],'mekanism:ultimate_induction_cell')


tiny_assembly(['mekanism:basic_control_circuit', 'minecraft:comparator', 'minecraft:repeater', 'kubejs:processor', 'ae2:printed_silicon','thoriumreactors:sodium'],'thoriumreactors:redstone_processor',4)

smart_assembly(['#ironberry:wrench_fix','thoriumreactors:redstone_processor'],'thoriumreactors:configurator')
smart_assembly(['minecraft:glass', 'thoriumreactors:redstone_processor', 'ten3:azure_glass'],'ten3:detector')



smart_assembly(['bluepower:motor', 'minecraft:gold_ingot', 'ten3:detector'],'ten3:redstone_storer')
smart_assembly(['bluepower:motor', 'thermal:silver_ingot', 'ten3:detector'],'ten3:redstone_converter')
smart_assembly(['bluepower:motor', 'minecraft:copper_ingot', 'ten3:detector'],'ten3:redstone_conductor')

tiny_assembly(['thoriumreactors:machine_casing', 'ten3:redstone_storer', 'thoriumreactors:potassium', 'minecraft:netherite_ingot'],'thoriumreactors:reactor_casing',8)
tiny_assembly(['thoriumreactors:machine_casing', 'thoriumreactors:titanium_ingot', 'thoriumreactors:sodium', 'ten3:redstone_converter'],'thoriumreactors:turbine_casing',8)
tiny_assembly(['thoriumreactors:machine_casing', 'thoriumreactors:chromium_ingot', 'thoriumreactors:uran_three_chloride', 'ten3:redstone_conductor'],'thoriumreactors:thermal_conductor',8)

function control(input,out){
smart_assembly([input,'ten3:redstone_ai','laboratoryblocks:iron_screw'],out)
}
control('thoriumreactors:reactor_casing', 'thoriumreactors:reactor_controller')
control('thoriumreactors:turbine_casing', 'thoriumreactors:turbine_controller')
control('thoriumreactors:thermal_conductor', 'thoriumreactors:thermal_controller')


smart_assembly(['thoriumreactors:turbine_casing','minecraft:iron_bars'], 'thoriumreactors:turbine_vent')
smart_assembly(['thoriumreactors:thermal_conductor','minecraft:iron_bars'], 'thoriumreactors:thermal_heat_sink')

smart_assembly(['thoriumreactors:reactor_casing','#ironberry:mek_glass','laboratoryblocks:iron_screw'], 'thoriumreactors:reactor_glass')
smart_assembly(['thoriumreactors:turbine_casing','#ironberry:mek_glass','laboratoryblocks:iron_screw'], 'thoriumreactors:turbine_glass')

smart_assembly(['thoriumreactors:reactor_casing','#ironberry:universal_cable'], 'thoriumreactors:reactor_valve')
smart_assembly(['thoriumreactors:turbine_casing','#ironberry:universal_cable'], 'thoriumreactors:turbine_valve')
smart_assembly(['thoriumreactors:thermal_conductor','#ironberry:universal_cable'], 'thoriumreactors:thermal_valve')

smart_assembly(['thoriumreactors:reactor_casing','laboratoryblocks:iron_screw','mekanismgenerators:control_rod_assembly'], 'thoriumreactors:reactor_rod_controller')
smart_assembly(['thoriumreactors:reactor_casing','laboratoryblocks:iron_screw','mekanismgenerators:fission_fuel_assembly'], 'thoriumreactors:reactor_core')
smart_assembly(['thoriumreactors:turbine_casing','laboratoryblocks:iron_screw','mekanismgenerators:fission_reactor_port'], 'thoriumreactors:turbine_rotation_mount')
smart_assembly(['thoriumreactors:turbine_casing','laboratoryblocks:iron_screw','mekanismgenerators:fission_reactor_logic_adapter'], 'thoriumreactors:turbine_power_port')



})