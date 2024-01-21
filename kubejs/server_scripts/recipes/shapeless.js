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
	less(['9x inventorypets:nugget_emerald'],'minecraft:emerald')
	less(['9x inventorypets:nugget_coal'],'minecraft:coal')
	less(['9x kubejs:raw_copper_nugget'],'minecraft:raw_copper')
	less(['9x kubejs:raw_iron_nugget'],'minecraft:raw_iron')
	less(['9x kubejs:raw_gold_nugget'],'minecraft:raw_gold')
	
	less(['thermal:compost','thermal:phytogro','minecraft:dirt'],'thermal:phytosoil')
	less(['integrateddynamics:logic_director','integrateddynamics:crystalized_menril_block','kubejs:processor'],'integrateddynamics:variablestore')
	
	
	
	
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
	
})
