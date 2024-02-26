ServerEvents.recipes(event => {
//recipes replaced
//


//recipe items tag fix
event.replaceInput({ output: '#exoticbirds:birdcages'},'minecraft:oak_slab','#minecraft:wooden_slabs')
event.replaceInput({ input: '#ironberry:tables'},'minecraft:crafting_table','#ironberry:tables')
event.replaceInput({ input: 'cyclic:compressed_cobblestone' },'cyclic:compressed_cobblestone','quark:sturdy_stone')



//sophisticated unify
event.replaceInput({ mod: 'sophisticatedstorage'},'#minecraft:wooden_slabs','#minecraft:wooden_slabs')
event.replaceInput({ mod: 'sophisticatedstorage'},'#minecraft:planks','#minecraft:planks')

//silicon saw change
event.replaceInput({ input: 'bluepower:diamond_saw' },'bluepower:diamond_saw','bluepower:iron_saw')

// cooking_pot
event.replaceInput({ output: 'farmersdelight:cooking_pot'},'minecraft:water_bucket','reactive:crucible')

//rootsclassic
event.replaceInput({ output: 'rootsclassic:attuned_standing_stone'},'minecraft:diamond','rootsclassic:mundane_standing_stone')
event.replaceInput({ output: 'rootsclassic:attuned_standing_stone'},'minecraft:nether_brick','#rootsclassic:berries')
event.replaceInput({ output: 'rootsclassic:altar'},'minecraft:gold_block','rootsclassic:attuned_standing_stone')

//stonecutter hard
event.replaceInput({ output: 'minecraft:stonecutter'},'minecraft:stone','#forge:storage_blocks/copper')

//project_table easier
event.replaceInput({ output: 'bluepower:project_table'},'#forge:stone','#forge:ingots/iron')

//exoticbirds glass to iron bars
event.replaceInput({ output: 'exoticbirds:egg_identifier'},'minecraft:glass','minecraft:iron_bars')
event.replaceInput({ output: 'exoticbirds:egg_incubator'},'minecraft:glass','minecraft:iron_bars')

//ankh_of_pray gold to copper
event.replaceInput({ output: 'tombstone:ankh_of_pray'},'minecraft:gold_ingot','#forge:ingots/copper')

//strange_scroll to null scroll and tablets
event.replaceOutput({ output: 'tombstone:strange_scroll'},'tombstone:strange_scroll','kubejs:scroll')
event.replaceInput({ output: 'kubejs:scroll'},'tombstone:grave_dust','kubejs:omni')

//ender_fishing
event.replaceInput({ output: 'cyclic:ender_fishing'},'minecraft:ender_pearl','tombstone:smoke_ball')

//tombstone_bone
event.replaceInput({ output: 'tombstone:bone_needle'},'minecraft:bone','kubejs:iron_rod')
event.replaceInput({ output: 'tombstone:impregnated_diamond'},'minecraft:diamond','bluepower:ruby_gem')


//tiny tnt
event.replaceInput({ output: 'ae2:tiny_tnt'},'ae2:certus_quartz_dust','minecraft:glowstone_dust')

//sophisticated recipe
event.replaceInput({ output:'sophisticatedstorage:storage_tool'},'minecraft:ender_pearl','minecraft:glowstone_dust')
event.replaceInput({ output:'sophisticatedstorage:packing_tape'},'minecraft:slime_ball','#ironberry:sticky')
event.replaceInput({ output:'sophisticatedstorage:storage_tool'},'minecraft:ender_pearl','minecraft:glowstone_dust')
event.replaceInput({ output:'sophisticatedstorage:storage_tool'},'minecraft:ender_pearl','minecraft:glowstone_dust')
event.replaceInput({ output: 'sophisticatedstorage:stack_upgrade_tier_2'},'minecraft:iron_ingot','minecraft:iron_block')
event.replaceInput({ output: 'sophisticatedstorage:stack_upgrade_tier_3'},'minecraft:gold_ingot','minecraft:iron_block')
event.replaceInput({ output: 'sophisticatedstorage:stack_upgrade_tier_3'},'minecraft:gold_block','minecraft:iron_block')
event.replaceInput({ output: 'sophisticatedstorage:stack_upgrade_tier_4'},'minecraft:diamond','minecraft:iron_block')
event.replaceInput({ output: 'sophisticatedstorage:stack_upgrade_tier_4'},'minecraft:diamond_block','minecraft:iron_block')


//soap made of potato
event.replaceInput({output : 'supplementaries:soap'},'minecraft:porkchop','#ironberry:soap_popera')
//unify sticky
event.replaceInput({input : 'minecraft:slime_ball'},'minecraft:slime_ball','#ironberry:sticky')

//tanzanite
event.replaceInput({input:'bluepower:amethyst_gem'},'bluepower:amethyst_gem','minecraft:amethyst_shard')
event.replaceOutput({output:'bluepower:amethyst_gem'},'bluepower:amethyst_gem','minecraft:amethyst_shard')

event.replaceInput({output:'bluepower:amethyst_block'},'minecraft:amethyst_shard','bluepower:amethyst_gem')
event.replaceOutput({input:'bluepower:amethyst_block'},'minecraft:amethyst_shard','bluepower:amethyst_gem')

//integrateddynamics
event.replaceInput({mod:'integrateddynamics'},'integrateddynamics:variable','kubejs:processor')
event.replaceInput({output:'integrateddynamics:logic_director'},'minecraft:diamond','kubejs:processor')
event.replaceInput({output:'integrateddynamics:variablestore'},'forge:chests/wooden','kubejs:processor')
event.replaceInput({output:'integrateddynamics:energy_battery'},'minecraft:redstone_block','bluepower:battery_block')
event.replaceInput({output:'integrateddynamics:part_extradimensional_reader'},'minecraft:ender_pearl','reactive:stardust')
event.replaceInput({output:'integrateddynamics:part_extradimensional_reader'},'minecraft:ender_eye','reactive:stardust')
event.replaceInput({output:'integrateddynamics:delay'},'minecraft:clock','integrateddynamics:logic_director')
event.replaceInput({output:'integratednbt:nbt_extractor_remote'},'minecraft:ender_pearl','integratednbt:nbt_extractor')
event.replaceInput({output:'integrateddynamics:part_world_reader'},'minecraft:obsidian','minecraft:coarse_dirt')

event.replaceInput({output:'integrateddynamics:enhancement_offset'},'integrateddynamics:variable_transformer_input','integrateddynamics:crystalized_chorus_chunk')
event.replaceInput({output:'integrateddynamics:enhancement_offset'},'integrateddynamics:variable_transformer_output','integrateddynamics:menril_berries')
event.replaceInput({output:'integrateddynamics:enhancement_offset'},'minecraft:diamond','integrateddynamics:cable')



event.replaceInput({output:'integrateddynamics:part_effect_writer'},'minecraft:fire_charge','supplementaries:soap')
event.replaceInput({output:'integrateddynamics:part_entity_reader'},'minecraft:porkchop','#ironberry:sticky')


event.replaceInput({output:'minecraft:observer'},'minecraft:quartz','minecraft:iron_bars')
event.replaceInput({output:'minecraft:comparator'},'minecraft:quartz','minecraft:iron_bars')


event.replaceInput({output:'ars_nouveau:source_berry_pie'},'minecraft:egg','#rootsclassic:berries')

event.replaceInput({output:'ars_nouveau:scryers_crystal'},'minecraft:ender_eye','minecraft:fermented_spider_eye')

event.replaceInput({output:'ars_nouveau:enchanting_apparatus'},'minecraft:diamond','reactive:stardust')

event.replaceInput({output:'minecraft:jukebox'},'minecraft:diamond','#minecraft:music_discs')


//more unify


//copper nugget unify
event.replaceInput({input:'#forge:nuggets/copper'},'#forge:nuggets/copper','homespun:copper_nugget')
event.replaceOutput({output:'#forge:nuggets/copper'},'#forge:nuggets/copper','homespun:copper_nugget')

//other unify
let unify ={
	type:["lead","tin","tungsten","electrum","bronze","silver","zinc","steel"],
	block:['thermal:lead_block', 'thermal:tin_block', 'bluepower:tungsten_block', 'thermal:electrum_block', 'thermal:bronze_block', 'thermal:silver_block', 'bluepower:zinc_block','mekanism:block_steel'],
	ingot:['thermal:lead_ingot', 'thermal:tin_ingot', 'bluepower:tungsten_ingot', 'thermal:electrum_ingot', 'mekanism:ingot_bronze', 'thermal:silver_ingot', 'bluepower:zinc_ingot','mekanism:ingot_steel'],
	nugget:['thermal:lead_nugget', 'thermal:tin_nugget', 'bluepower:tungsten_nugget', 'thermal:electrum_nugget', 'thermal:bronze_nugget', 'thermal:silver_nugget', 'bluepower:zinc_nugget','mekanism:nugget_steel'],
	dust:['thermal:lead_dust', 'thermal:tin_dust', 'bluepower:tungsten_dust', 'thermal:electrum_dust', 'thermal:bronze_dust', 'thermal:silver_dust', 'bluepower:zinc_dust','mekanism:dust_steel']
}

for(let i=0;i<unify.type.length;i++){
event.replaceInput({input:'#forge:nuggets/'+unify.type[i]},'#forge:nuggets/'+unify.type[i],unify.nugget[i])
event.replaceOutput({output:'#forge:nuggets/'+unify.type[i]},'#forge:nuggets/'+unify.type[i],unify.nugget[i])
event.replaceInput({input:'#forge:ingots/'+unify.type[i]},'#forge:ingots/'+unify.type[i],unify.ingot[i])
event.replaceOutput({output:'#forge:ingots/'+unify.type[i]},'#forge:ingots/'+unify.type[i],unify.ingot[i])
event.replaceInput({input:'#forge:storage_blocks/'+unify.type[i]},'#forge:storage_blocks/'+unify.type[i],unify.block[i])
event.replaceOutput({output:'#forge:storage_blocks/'+unify.type[i]},'#forge:storage_blocks/'+unify.type[i],unify.block[i])
event.replaceInput({input:'#forge:dusts/'+unify.type[i]},'#forge:dusts/'+unify.type[i],unify.dust[i])
event.replaceOutput({output:'#forge:dusts/'+unify.type[i]},'#forge:dusts/'+unify.type[i],unify.dust[i])
}

event.replaceInput({input:'twilightforest:raven_feather'},'twilightforest:raven_feather','#forge:feathers')

event.replaceInput({output:'cobblefordays:tier_3'},'minecraft:glass','kubejs:instability')

event.replaceInput({output:'cobblefordays:tier_3'},'minecraft:lava_bucket','thermal:device_rock_gen')
event.replaceInput({output:'cobblefordays:tier_3'},'minecraft:water_bucket','bluepower:block_breaker')

//event.replaceInput({input:'#forge:chests'},'#forge:chests','minecraft:chest')
//event.replaceInput({input:'#forge:chests/trapped'},'#forge:chests/trapped','minecraft:trapped_chest')

event.replaceInput({input:'cyclic:apple_honey'},'cyclic:apple_honey','minecraft:apple')

//event.replaceInput({output:'cyclic:fisher'},'minecraft:cobweb','minecraft:string')

// event.replaceInput({output:'cyclic:structure'},'minecraft:quartz','engineersdecor:factory_placer')
// event.replaceInput({output:'cyclic:structure'},'cyclic:gem_amber','minecraft:painting')

event.replaceInput({output:'cyclic:storage_bag'},'minecraft:diamond','sophisticatedstorage:advanced_hopper_upgrade')


event.replaceInput({output:'cyclic:detector_entity'},'minecraft:diamond','bluepower:blue_alloy_ingot')
event.replaceInput({output:'cyclic:detector_entity'},'minecraft:quartz','bluepower:red_alloy_ingot')
event.replaceInput({output:'cyclic:detector_item'},'minecraft:quartz','bluepower:red_alloy_ingot')


event.replaceInput({output: 'pneumaticcraft:compressed_iron_boots'},'minecraft:leather_boots','minecraft:iron_boots')
event.replaceInput({output: 'pneumaticcraft:compressed_iron_leggings'},'minecraft:leather_leggings','minecraft:iron_leggings')
event.replaceInput({output: 'pneumaticcraft:compressed_iron_chestplate'},'minecraft:leather_chestplate','minecraft:iron_chestplate')
event.replaceInput({output: 'pneumaticcraft:compressed_iron_helmet'},'minecraft:leather_helmet','minecraft:iron_helmet')

event.replaceInput({output:'bluepower:blulectric_cable'},'bluepower:blue_alloy_ingot','bluepower:teslatite_dust')

})
