ServerEvents.highPriorityData(event => {

    ['assembly_program_drill','assembly_program_drill_laser','assembly_program_laser','diesel_to_emerald','emerald_to_lubricant','emerald_to_oil','gasoline_to_emerald','kerosene_to_emerald','lpg_to_emerald','lubricant_to_emerald','oil_to_emerald','pcb_blueprint',].forEach(data => {
        event.addJson(`pneumaticcraft:recipes/amadron/${data}`, {})
    })


function trade(level_rarity,type_in,input,count_in,type_out,output,count_out,persist){
        event.addJson('pneumaticcraft:recipes/amadron/'+(input+'_'+output).replace(/[^a-zA-Z0-9_ ]/g, ''), {
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




})
