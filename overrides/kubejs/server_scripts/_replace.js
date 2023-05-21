ServerEvents.recipes(event => {
//recipes replaced
//
event.replaceInput({ input: 'bluepower:diamond_saw' },'bluepower:diamond_saw','bluepower:iron_saw')
event.replaceInput({ input: 'bluepower:silver_block'},'bluepower:silver_block','thermal:silver_block')
event.replaceInput({ input: 'bluepower:silver_ingot'},'bluepower:silver_ingot','thermal:silver_ingot')
event.replaceInput({ output: 'farmersdelight:cooking_pot'},'minecraft:water_bucket','reactive:crucible')


event.replaceOutput({ output: 'bluepower:silver_block'},'bluepower:silver_block','thermal:silver_block')
event.replaceOutput({ output: 'bluepower:silver_ingot'},'bluepower:silver_ingot','thermal:silver_ingot')

event.replaceInput({ output: 'rootsclassic:attuned_standing_stone'},'minecraft:diamond','rootsclassic:mundane_standing_stone')
event.replaceInput({ output: 'rootsclassic:attuned_standing_stone'},'minecraft:nether_brick','#rootsclassic:berries')

event.replaceInput({ output: 'rootsclassic:altar'},'minecraft:gold_block','rootsclassic:attuned_standing_stone')
})