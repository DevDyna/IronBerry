ServerEvents.recipes(event => {
    //shapeless
//----------------------------------------------//
    let less = (inputs, output) => {
        event.shapeless(
            output, inputs)
    }
//----------------------------------------------//	tombstone marbles
for(let i=0;i<data.block.tombstone.length;i++){
	//dark to white
		less([
	Item.of(data.block.tombstone[i], '{model_texture:0}'),
	'tombstone:white_marble',
	],Item.of(data.block.tombstone[i], '{model_texture:1}'))
	//white to dark
		less([
	Item.of(data.block.tombstone[i], '{model_texture:1}'),
	'tombstone:dark_marble',
	],Item.of(data.block.tombstone[i], '{model_texture:0}'))
}
//----------------------------------------------//
try{
function moless(base,variants){
		variants.forEach(colors=>{
			less([base,colors[1]],colors[0])	//forge:beds+ *dye* = *bed with dye* -> beds[[bed,dye],[bed,dye]]
		})
}
}catch(e){}
//----------------------------------------------//
try{
function supless(base,result,variants){
		
		variants.forEach(ingredient=>{
			less([base,ingredient],result)	//forge:beds+ *dye* = *bed with dye* -> beds[[bed,dye],[bed,dye]]
		})

}
}catch(e){}
//----------------------------------------------//
try{
function emolimix(jump,variants){
		
		for(let i=0;i<variants.length-1;i++){
			less([variants[i],jump],variants[i+1])
		}


}
}catch(e){}
//----------------------------------------------//
    less([
            'minecraft:bowl',
            '3x #rootsclassic:berries'
        ], '3x rootsclassic:fruit_salad')

    less([
            'minecraft:redstone',
            'minecraft:paper'
        ], 'thermal:redprint')

    less([
            '2x #ironberry:tables'
        ], '2x craftingstation:crafting_station_slab')



	less([
		'6x minecraft:hopper','sophisticatedstorage:upgrade_base'
	],'sophisticatedstorage:advanced_hopper_upgrade')

	less(['sophisticatedstorage:upgrade_base','8x #minecraft:wool'],'sophisticatedstorage:advanced_filter_upgrade')

	less(['sophisticatedstorage:upgrade_base','#tombstone:seeds','cyclic:trash'],'sophisticatedstorage:advanced_void_upgrade')
	
	less(['sophisticatedstorage:upgrade_base','minecraft:piston'],'sophisticatedstorage:advanced_pickup_upgrade')
	less(['sophisticatedstorage:upgrade_base','minecraft:ender_pearl'],'sophisticatedstorage:magnet_upgrade')
	less(['sophisticatedstorage:magnet_upgrade','minecraft:ender_pearl'],'sophisticatedstorage:advanced_magnet_upgrade')
	less(['#ironberry:tables','sophisticatedstorage:upgrade_base'],'sophisticatedstorage:crafting_upgrade')
	less(['4x sophisticatedstorage:upgrade_base'],'sophisticatedstorage:compacting_upgrade')
	less(['4x sophisticatedstorage:compacting_upgrade'],'sophisticatedstorage:advanced_compacting_upgrade')

	less(['#rootsclassic:berries','sophisticatedstorage:upgrade_base','exoticbirds:hummingbird_feeder'],'sophisticatedstorage:advanced_feeding_upgrade')
	
	less(['minecraft:furnace','4x minecraft:hopper','3x #minecraft:wool','sophisticatedstorage:upgrade_base'],'sophisticatedstorage:auto_smelting_upgrade')

	less(['4x kubejs:ice_shard'],'minecraft:ice')

	moless('#ars_nouveau:summon_bed',[
	['ars_nouveau:orange_sbed','#forge:dyes/orange'],
	['ars_nouveau:red_sbed','#forge:dyes/red'],
	['ars_nouveau:blue_sbed','#forge:dyes/blue'],
	['ars_nouveau:green_sbed','#forge:dyes/green'],
	['ars_nouveau:yellow_sbed','#forge:dyes/yellow'],
	['ars_nouveau:purple_sbed','#forge:dyes/purple'],
	])
	
	//raw ores and nuggets
	//less(['9x inventorypets:nugget_emerald'],'minecraft:emerald')
	//less(['9x inventorypets:nugget_coal'],'minecraft:coal')
	less(['9x kubejs:raw_copper_nugget'],'minecraft:raw_copper')
	less(['9x kubejs:raw_iron_nugget'],'minecraft:raw_iron')
	less(['9x kubejs:raw_gold_nugget'],'minecraft:raw_gold')
	
	less(['thermal:compost','thermal:phytogro','minecraft:dirt'],'4x thermal:phytosoil')
	less(['integrateddynamics:logic_director','integrateddynamics:crystalized_menril_block','kubejs:processor'],'integrateddynamics:variablestore')
	
	less(['minecraft:mossy_cobblestone', 'minecraft:paper', 'rootsclassic:verdant_sprig'],'rootsclassic:runic_tablet')
	
	
	less(['#ironberry:storage_box','kubejs:processor','integrateddynamics:cable'],'integratedtunnels:part_interface_item')
	less(['integratedtunnels:part_interface_item','kubejs:processor','minecraft:hopper'],'integratedtunnels:part_importer_item')
	less(['integratedtunnels:part_interface_item','kubejs:processor','uppers:upper'],'integratedtunnels:part_exporter_item')
	less(['integratedtunnels:part_interface_item','kubejs:processor','thermal:filter_attachment'],'integratedtunnels:part_interface_filter_item')
	
	less(['cyclic:tank','kubejs:processor','integrateddynamics:cable'],'integratedtunnels:part_interface_fluid')
	less(['integratedtunnels:part_interface_fluid','kubejs:processor','minecraft:hopper'],'integratedtunnels:part_importer_fluid')
	less(['integratedtunnels:part_interface_fluid','kubejs:processor','uppers:upper'],'integratedtunnels:part_exporter_fluid')
	less(['integratedtunnels:part_interface_fluid','kubejs:processor','thermal:filter_attachment'],'integratedtunnels:part_interface_filter_fluid')

	less(['cyclic:battery','kubejs:processor','integrateddynamics:cable'],'integratedtunnels:part_interface_energy')
	less(['integratedtunnels:part_interface_energy','kubejs:processor','minecraft:hopper'],'integratedtunnels:part_importer_energy')
	less(['integratedtunnels:part_interface_energy','kubejs:processor','uppers:upper'],'integratedtunnels:part_exporter_energy')
	less(['integratedtunnels:part_interface_energy','kubejs:processor','thermal:filter_attachment'],'integratedtunnels:part_interface_filter_energy')
	
	less(['tombstone:voodoo_poppet','alchemygadgetry:iron_supplements','alchemygadgetry:black_tea','rootsclassic:whitecurrant'],'alchemygadgetry:air_effigy')
	less(['tombstone:voodoo_poppet','alchemygadgetry:vitamins','alchemygadgetry:tonic','rootsclassic:redcurrant'],'alchemygadgetry:fire_effigy')
	less(['tombstone:voodoo_poppet','alchemygadgetry:elixir','alchemygadgetry:antidote','rootsclassic:elderberry'],'alchemygadgetry:water_effigy')
	less(['tombstone:voodoo_poppet','alchemygadgetry:eye_drops','alchemygadgetry:salve','rootsclassic:nightshade'],'alchemygadgetry:death_effigy')
	
	less(['2x ars_nouveau:allow_scroll'],'2x ars_nouveau:deny_scroll')
	less(['2x ars_nouveau:deny_scroll'],'2x ars_nouveau:allow_scroll')
	
	less(['cyclic:trash','ars_nouveau:blank_parchment'],'ars_nouveau:deny_scroll')
	
	less(['pipez:basic_upgrade','sophisticatedstorage:advanced_filter_upgrade','sophisticatedstorage:advanced_filter_upgrade'],'8x pipez:gas_pipe')
	less(['pipez:basic_upgrade','thermal:energy_duct','thermal:energy_duct'],'8x pipez:energy_pipe')
	less(['pipez:basic_upgrade','minecraft:bucket','minecraft:bucket'],'8x pipez:fluid_pipe')
	less(['pipez:basic_upgrade','#ironberry:vanilla_pipe','#ironberry:vanilla_pipe'],'8x pipez:item_pipe')
	
	
	less(['kubejs:quantity_base', 'minecraft:echo_shard', 'minecraft:sculk_shrieker'],'sculktransporting:quantity_modifier_tier_1')
	less(['sculktransporting:quantity_modifier_tier_1', 'minecraft:echo_shard', 'minecraft:sculk_shrieker'],'sculktransporting:quantity_modifier_tier_2')
	less(['sculktransporting:quantity_modifier_tier_2', 'minecraft:echo_shard', 'minecraft:sculk_shrieker'],'sculktransporting:quantity_modifier_tier_3')
	less(['kubejs:speed_base', 'minecraft:echo_shard', 'minecraft:sculk_sensor'],'sculktransporting:speed_modifier_tier_1')
	less(['sculktransporting:speed_modifier_tier_1', 'minecraft:echo_shard', 'minecraft:sculk_sensor'],'sculktransporting:speed_modifier_tier_2')
	less(['sculktransporting:speed_modifier_tier_2', 'minecraft:echo_shard', 'minecraft:sculk_sensor'],'sculktransporting:speed_modifier_tier_3')
	less(['sculktransporting:speed_modifier_tier_3', 'minecraft:echo_shard', 'minecraft:sculk_sensor'],'sculktransporting:speed_modifier_tier_4')

	less(['9x twilightforest:armor_shard'],'twilightforest:armor_shard_cluster')
	
	
	less(['pneumaticcraft:module_expansion_card', 'kubejs:printed_plate'],'kubejs:assembly_plate')
	less(['minecraft:chest', 'minecraft:minecart'],'minecraft:chest_minecart')
	
	less(['minecraft:hopper', 'minecraft:sculk_sensor', 'minecraft:echo_shard'],'sculktransporting:sculk_emitter')
	less(['essentials:item_chute', 'minecraft:sculk', 'minecraft:echo_shard'],'sculktransporting:sculk_transmitter')
	less(['uppers:upper', 'minecraft:sculk_shrieker', 'minecraft:echo_shard'],'sculktransporting:sculk_receiver')
	less(['minecraft:barrel', 'minecraft:echo_shard', 'minecraft:echo_shard'],'sculktransporting:sculk_barrel')
	less(['minecraft:string', 'quark:bottled_cloud'],'4x cyclic:cloud')
	less(['#ironberry:storage_box','#ironberry:storage_box'],'cyclic:crate')
	less(['ars_nouveau:stable_warp_scroll', 'minecraft:redstone', 'cyclic:battery'],'cyclic:teleport')
	
	less(['minecraft:charcoal', 'minecraft:paper'],'2x cyclic:carbon_paper')
	less(['minecraft:barrel', 'minecraft:string', 'cyclic:ender_fishing'],'cyclic:fisher')
	
	less(['pneumaticcraft:upgrade_matrix','2x minecraft:lever'],'pneumaticcraft:security_upgrade')
	less(['pneumaticcraft:upgrade_matrix','8x pneumaticcraft:reinforced_pressure_tube'],'pneumaticcraft:volume_upgrade')
	less(['pneumaticcraft:upgrade_matrix','4x bluepower:tungsten_carbide'],'pneumaticcraft:speed_upgrade')
	less(['4x pneumaticcraft:reinforced_pressure_tube'],'pneumaticcraft:tube_junction')
	
	less(['2x pneumaticcraft:small_tank'],'pneumaticcraft:medium_tank')
	less(['2x pneumaticcraft:medium_tank'],'pneumaticcraft:large_tank')
	less(['4x pneumaticcraft:large_tank'],'pneumaticcraft:huge_tank')
	
	less(['4x pneumaticcraft:small_tank'],'pneumaticcraft:large_tank')
	less(['8x pneumaticcraft:medium_tank'],'pneumaticcraft:huge_tank')

	less(['pneumaticcraft:upgrade_matrix', 'sophisticatedstorage:advanced_hopper_upgrade'],'pneumaticcraft:dispenser_upgrade')
	less(['pneumaticcraft:upgrade_matrix','essentials:item_chute' ],'pneumaticcraft:range_upgrade')
	less(['pneumaticcraft:upgrade_matrix', 'sophisticatedstorage:advanced_magnet_upgrade'],'pneumaticcraft:magnet_upgrade')
	less(['pneumaticcraft:ingot_iron_compressed', 'minecraft:chest'],'pneumaticcraft:reinforced_chest')
	
	less(['pneumaticcraft:upgrade_matrix', 'pneumaticcraft:upgrade_matrix', 'pneumaticcraft:reinforced_chest', 'pneumaticcraft:upgrade_matrix', 'pneumaticcraft:upgrade_matrix'],'pneumaticcraft:smart_chest')
	
	//less([],)

	moless('pneumaticcraft:upgrade_matrix',[
	['pneumaticcraft:ender_visor_upgrade', 'minecraft:carved_pumpkin'],
	['pneumaticcraft:gilded_upgrade', 'minecraft:gold_ingot'],
	['pneumaticcraft:stomp_upgrade', '#minecraft:wool'],
	['pneumaticcraft:elytra_upgrade', 'minecraft:elytra'],
	['pneumaticcraft:flippers_upgrade', 'thermal:diving_boots'],
	['pneumaticcraft:radiation_shielding_upgrade', 'inventorypets:pet_shield'],
	['pneumaticcraft:scuba_upgrade', 'homespun:fluid_storage'],
	['pneumaticcraft:night_vision_upgrade', 'cyclic:apple_lapis'],
	['pneumaticcraft:armor_upgrade', 'jetboots:armor_core'],
	['pneumaticcraft:charging_upgrade', 'pneumaticcraft:charging_module'],
	['pneumaticcraft:search_upgrade', 'tombstone:tablet_of_cupidity'],
	['pneumaticcraft:coordinate_tracker_upgrade', 'minecraft:clock'],
	['pneumaticcraft:block_tracker_upgrade', 'minecraft:recovery_compass'],
	['pneumaticcraft:item_life_upgrade', 'cyclic:apple_diamond'],
	['pneumaticcraft:entity_tracker_upgrade', 'minecraft:compass'],
	])
	
	emolimix('jetboots:rocket_boots',['pneumaticcraft:upgrade_matrix', 'pneumaticcraft:jet_boots_upgrade_1', 'pneumaticcraft:jet_boots_upgrade_2', 'pneumaticcraft:jet_boots_upgrade_3', 'pneumaticcraft:jet_boots_upgrade_4', 'pneumaticcraft:jet_boots_upgrade_5'])
	emolimix('ars_nouveau:jump_ring',['pneumaticcraft:upgrade_matrix', 'pneumaticcraft:jumping_upgrade_1', 'pneumaticcraft:jumping_upgrade_2', 'pneumaticcraft:jumping_upgrade_3', 'pneumaticcraft:jumping_upgrade_4'])
	
	
	moless('cyclic:apple_sprout',[
	['cyclic:apple_sprout_emerald', 'minecraft:emerald'],
	['cyclic:apple_sprout_diamond', 'minecraft:diamond'],
	
	
	])
	
	moless('minecraft:enchanted_golden_apple',[
	['cyclic:apple_bone', 'minecraft:bone_meal'],
	['cyclic:apple_iron', 'minecraft:iron_ingot'],
	['cyclic:apple_lapis', 'minecraft:lapis_lazuli'],
	['cyclic:apple_chocolate', 'minecraft:cocoa_beans'],
	['cyclic:apple_prismarine', 'minecraft:prismarine_shard'],
	['cyclic:apple_chorus', 'minecraft:chorus_fruit'],
	
	
	])
	
	less(['minecraft:enchanted_golden_apple','minecraft:enchanted_golden_apple'],'2x cyclic:apple_sprout')
	less(['ars_nouveau:starbuncle_shards', 'twilightforest:borer_essence'],'ars_nouveau:starbuncle_charm')
	
	
	less(['farmersdelight:fried_egg', 'minecraft:bread', 'farmersdelight:fried_egg'],'farmersdelight:egg_sandwich')
	less(['minecraft:bread', '#ironberry:birds_cooked', 'farmersdelight:cabbage_leaf'],'farmersdelight:chicken_sandwich')	
	less(['minecraft:bread', 'twilightforest:cooked_meef', 'farmersdelight:cabbage', 'farmersdelight:tomato'],'farmersdelight:hamburger')	
	less(['minecraft:honey_bottle','minecraft:slime_ball'],'2x minecraft:honey_bottle')
	
	
	less(['#ironberry:tables','#ironberry:storage_box'],'bluepower:project_table')
	
	less(['homespun:copper_nugget','homespun:copper_nugget','homespun:copper_nugget','homespun:copper_nugget','homespun:copper_nugget','homespun:copper_nugget','homespun:copper_nugget','homespun:copper_nugget','homespun:copper_nugget'],'minecraft:copper_ingot')

	less(['thermal:bitumen','thermal:bitumen','thermal:bitumen','thermal:bitumen','thermal:bitumen','thermal:bitumen','thermal:bitumen','thermal:bitumen','thermal:bitumen'],'thermal:bitumen_block')

	less(['thermal:bitumen_block'],'9x thermal:bitumen')

	//less(['kubejs:acid_bucket'],'reactive:acid_bucket')

	less(['rootsclassic:verdant_sprig','minecraft:lime_stained_glass'],'cyclic:terra_glass')

	less(['mekanism:block_steel'],'9x mekanism:ingot_steel')
	less(['mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel'],'mekanism:block_steel',1)
	
	less(['mekanism:basic_logistical_transporter','minecraft:repeater'],'mekanism:restrictive_transporter')
	less(['mekanism:basic_logistical_transporter','minecraft:redstone_torch'],'mekanism:diversion_transporter')
	less(['minecraft:copper_block'],'9x minecraft:copper_ingot')
	less(['ppfluids:fluid_pipe'],'prettypipes:pipe')
	less(['minecraft:raw_iron_block'],'9x minecraft:raw_iron')
	less(['bluepower:solar_panel','minecraft:quartz','bluepower:red_alloy_ingot'],'2x engineersdecor:small_solar_panel')
	less(['minecraft:observer','minecraft:quartz','bluepower:red_alloy_ingot'],'2x engineersdecor:small_block_breaker')

	function aug_tec(io){
		less(['kubejs:base_augment',io[0]],io[1])
	}

	aug_tec(['ten3:chlorium_dust', 'ten3:photosyn_levelup'])
	aug_tec(['minecraft:mojang_banner_pattern', 'ten3:knowledge_levelup'])
	aug_tec(['thermal:area_radius_augment', 'ten3:range_levelup'])
	aug_tec(['integrateddynamics:energy_battery','ten3:stream_levelup'])

	function aug_upgrade(io){
		less(['minecraft:repeater', 'bluepower:lumar_yellow',io[0]],io[1])
	}

	aug_upgrade(['ten3:photosyn_levelup', 'ten3:augmented_levelup'])
	aug_upgrade(['ten3:augmented_levelup', 'ten3:powered_levelup'])
	aug_upgrade(['ten3:powered_levelup', 'ten3:relic_levelup'])

	less(['rftoolsutility:matter_transmitter'] , 'rftoolsutility:matter_receiver')
	less(['rftoolsutility:matter_receiver'] , 'rftoolsutility:matter_transmitter')

	less(['#ironberry:te_filter','#ironberry:te_filter','#ironberry:te_filter','#ironberry:te_filter','#ironberry:te_filter','#ironberry:te_filter','#ironberry:te_filter','#ironberry:te_filter','#ironberry:te_filter'],'rftoolsbase:filter_module')

	less(['rftoolsbase:machine_frame','cyclic:crafter','rftoolsbase:crafting_card'],'rftoolsutility:crafter1')
	less(['rftoolsutility:crafter1','rftoolsbase:crafting_card','rftoolsbase:crafting_card'],'rftoolsutility:crafter2')
	less(['rftoolsutility:crafter2','rftoolsbase:crafting_card','rftoolsbase:crafting_card'],'rftoolsutility:crafter3')
	less(['rftoolsbase:machine_frame', 'rftoolsbase:dimensionalshard', 'bluepower:lumar_red', 'bluepower:lumar_green', 'bluepower:lumar_blue'],'rftoolsbase:machine_infuser')
	less(['rftoolsbase:machine_frame', 'rftoolsbase:infused_enderpearl'],'rftoolsutility:dialing_device')

	less(['minecraft:bone_meal', 'bluepower:lumar_white', 'bluepower:lumar_white'],'kubejs:floreal_bone_meal')

	event.shapeless('3x reactive:acid_bottle',['kubejs:acid_bucket','reactive:quartz_bottle','reactive:quartz_bottle','reactive:quartz_bottle']).replaceIngredient({item : 'kubejs:acid_bucket'},'minecraft:bucket')

	event.shapeless(Item.of('supplementaries:urn', '{BlockStateTag:{treasure:"true"},display:{Lore:[\'{"text":"contain one of $urn_loot"}\']}}'),['supplementaries:urn'])

	less(['#ae2:quartz_wrench','luggage:luggage','ae2:certus_quartz_crystal'],'ae2:network_tool')


	/**
	 * 
	 * @param {item|object} nugget when object can replace ingot
	 * @param {item} ingot 
	 */
	function nine_to_one(nugget, ingot) {
    if (typeof ingot == "undefined") {
      less(["9x " + nugget[0]], nugget[1]);
      less([nugget[1]], "9x " + nugget[0]);
    } else {
      less(["9x " + nugget], ingot);
      less([ingot], "9x " + nugget);
    }
  }

  	less('nuclearcraft:magnesium_ingot','nuclearcraft:magnesium_block')
	less('nuclearcraft:boron_ingot','nuclearcraft:boron_block')
	nine_to_one('nuclearcraft:lithium_ingot','nuclearcraft:lithium_block')
	nine_to_one('nuclearcraft:thorium_ingot','nuclearcraft:thorium_block')
	nine_to_one(['thoriumreactors:molybdenum_nugget', 'thoriumreactors:molybdenum_ingot'])
	nine_to_one(['thoriumreactors:niob_nugget', 'thoriumreactors:niob_ingot'])
	nine_to_one(['thoriumreactors:titanium_nugget', 'thoriumreactors:titanium_ingot'])
	nine_to_one(['thoriumreactors:chromium_nugget', 'thoriumreactors:chromium_ingot'])
	nine_to_one(['thermal:nickel_nugget','thermal:nickel_ingot'])
  	nine_to_one(['thoriumreactors:molybdenum_ingot', 'thoriumreactors:molybdenum_block'])
	nine_to_one(['thoriumreactors:niob_ingot', 'thoriumreactors:niob_block'])
  	nine_to_one(['thermal:nickel_ingot', 'thoriumreactors:nickel_block'])
  	nine_to_one(['thermal:netherite_nugget', 'minecraft:netherite_ingot'])
  	nine_to_one('inventorypets:nugget_coal','minecraft:coal')
	less(['rftoolsbase:crafting_card', 'bluepower:motor', 'cyclic:carbon_paper', 'integrateddynamics:variable'],'16x ae2:basic_card')
	less(['rftoolsbase:crafting_card', 'bluepower:motor', 'cyclic:carbon_paper', 'pneumaticcraft:module_expansion_card'],'16x ae2:advanced_card')
  	nine_to_one(['thoriumreactors:blasted_iron_nugget','thoriumreactors:blasted_iron_ingot'])

	less(['luggage:ender_luggage', 'minecraft:bundle'],'cyclic:ender_bag')

  nine_to_one(['create:andesite_alloy', 'create:andesite_alloy_block'])
  nine_to_one(['create:brass_nugget', 'create:brass_ingot'])
  nine_to_one(['create:brass_ingot', 'create:brass_block'])
  nine_to_one(['create:zinc_nugget', 'create:zinc_ingot'])
  nine_to_one(['create:zinc_ingot', 'create:zinc_block'])

})
