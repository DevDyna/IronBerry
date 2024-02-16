ServerEvents.highPriorityData(event => {

    ['assembly_program_drill','assembly_program_drill_laser','assembly_program_laser','diesel_to_emerald','emerald_to_lubricant','emerald_to_oil','gasoline_to_emerald','kerosene_to_emerald','lpg_to_emerald','lubricant_to_emerald','oil_to_emerald','pcb_blueprint',].forEach(data => {
        event.addJson(`pneumaticcraft:recipes/amadron/${data}`, {})
    })


function trade(level_rarity,type_in,input,count_in,type_out,output,count_out,persist){
        event.addJson('pneumaticcraft:recipes/amadron/'+((input+'_'+output).replace(/[^a-zA-Z0-9_ ]/g, '')), {
  "type": "pneumaticcraft:amadron",
  "input": {
    "type": type_in,
    "amount": count_in,
    "id": input
  },
  "level": level_rarity,
  "output": {
    "type": type_out,
    "amount": count_out,
    "id": output
  },
  "static": persist
})
}

function nbt_trade(level_rarity,type_in,input,count_in,type_out,output,count_out,nbt,persist){
  console.log(nbt)
  event.addJson('pneumaticcraft:recipes/amadron/'+((input+'_'+output).replace(/[^a-zA-Z0-9_ ]/g, '')), {
"type": "pneumaticcraft:amadron",
"input": {
"type": type_in,
"amount": count_in,
"id": input
},
"level": level_rarity,
"output": {
"type": type_out,
"amount": count_out,
"id": output,
"nbt": nbt
},
"static": persist
})
}



trade(0,'item','thermal:iron_coin',8,'item','minecraft:dirt',64,true)

let birds = ['exoticbirds:kookaburra_egg', 'exoticbirds:lyrebird_egg', 'exoticbirds:macaw_egg', 'exoticbirds:magpie_egg', 'exoticbirds:ostrich_egg', 'exoticbirds:owl_egg', 'exoticbirds:peafowl_egg', 'exoticbirds:pelican_egg', 'exoticbirds:penguin_egg', 'exoticbirds:bluejay_egg', 'exoticbirds:booby_egg', 'exoticbirds:budgerigar_egg', 'exoticbirds:cardinal_egg', 'exoticbirds:cassowary_egg', 'exoticbirds:cockatoo_egg', 'exoticbirds:crane_egg', 'exoticbirds:duck_egg', 'exoticbirds:heron_egg', 'exoticbirds:flamingo_egg', 'exoticbirds:gouldianfinch_egg', 'exoticbirds:gull_egg', 'exoticbirds:woodpecker_egg', 'exoticbirds:toucan_egg', 'exoticbirds:swan_egg', 'exoticbirds:robin_egg', 'exoticbirds:roadrunner_egg', 'exoticbirds:pigeon_egg', 'exoticbirds:hummingbird_egg', 'exoticbirds:kingfisher_egg', 'exoticbirds:kiwi_egg']

birds.forEach(egg=>{
	trade(3,'item',egg,4,'item','thermal:iron_coin',1,false)
})

trade(3,'item','exoticbirds:phoenix_egg',1,'item','thermal:iron_coin',16,false)
trade(0,'item','thermal:iron_coin',1,'item','minecraft:iron_ingot',4,true)
trade(0,'item','thermal:iron_coin',1,'item','minecraft:coal',8,true)
trade(0,'item','thermal:iron_coin',1,'item','homespun:ironberry_juice_bottle',16,true)
trade(0,'item','thermal:iron_coin',1,'item','minecraft:dirt',64,true)
trade(0,'item','thermal:iron_coin',1,'item','minecraft:clay_ball',64,true)
trade(0,'item','thermal:iron_coin',1,'fluid','homespun:ironberry_juice',4000,true)

function trade_item_item(rarity,input,in_count,output,out_count,bool){
	trade(rarity,'item',input,in_count,'item',output,out_count,bool)
}


trade_item_item(0,'thermal:electrum_coin',1,'thermal:iron_coin',16,true)
trade_item_item(0,'thermal:iron_coin',16,'thermal:electrum_coin',1,true)


function ironC(rarity,coin,output,count_out,bool){
	trade_item_item(rarity,'thermal:iron_coin',coin,output,count_out,bool)
}

function elecC(rarity,coin,output,count_out,bool){
	trade_item_item(rarity,'thermal:electrum_coin',coin,output,count_out,bool)
}


elecC(2,4,'minecraft:enchanted_golden_apple',1,false)
trade_item_item(3,'tombstone:essence_of_undeath',1,'thermal:electrum_coin',1,false)
elecC(2,24,'kubejs:processor',1,false)

ironC(1,1,'inventorypets:windows_xp',1,false)
elecC(1,1,'cyclic:teleport',2,false)

let out = ['sophisticatedstorage:stack_upgrade_tier_4','ironchest:diamond_chest','bluepower:silicon_wafer', 'thermal:energy_cell_frame', 'thermal:fluid_cell_frame', 'reactive:acid_bucket', 'rootsclassic:healer_standing_stone', 'rootsclassic:vacuum_standing_stone', 'rootsclassic:repulsor_standing_stone', 'rootsclassic:accelerator_standing_stone', 'rootsclassic:entangler_standing_stone', 'energymeter:meter', 'rootsclassic:grower_standing_stone', 'rootsclassic:igniter_standing_stone', 'tombstone:lollipop', 'farmersdelight:stove', 'bluepower:cagelamp_rgb', 'exoticbirds:phoenix_egg']
out.forEach(item=>{
	elecC(3,1,item,1,false)
})

elecC(1,4,'tombstone:soul_receptacle',1,false)
elecC(3,8,'prettypipes:pipe',64,false)
elecC(2,1,'supplementaries:soap',4,false)
ironC(1,1,'farmersdelight:chicken_sandwich',2,false)
ironC(1,1,'farmersdelight:hamburger',2,false)
ironC(1,1,'farmersdelight:egg_sandwich',2,false)

ironC(1,1,'cyclic:ender_fishing',1,false)
ironC(1,1,'reactive:displacer',1,false)
ironC(1,1,'quark:forgotten_hat',1,false)

elecC(1,4,'sculktransporting:speed_modifier_tier_4',1,false)
elecC(1,4,'sculktransporting:quantity_modifier_tier_3',1,false)


nbt_trade(1,'item','thermal:iron_coin',10,'item','buildinggadgets:gadget_building',1,'{energy:500000.0d}',true)
nbt_trade(1,'item','thermal:iron_coin',10,'item','buildinggadgets:gadget_exchanging',1,'{energy:500000.0d}',true)
nbt_trade(1,'item','thermal:iron_coin',10,'item','buildinggadgets:gadget_copy_paste',1,'{energy:500000.0d}',true)
nbt_trade(1,'item','thermal:iron_coin',10,'item','buildinggadgets:gadget_destruction',1,'{energy:1000000.0d}',true)
ironC(1,10,'simplemagnets:basicmagnet',1,false)
})
