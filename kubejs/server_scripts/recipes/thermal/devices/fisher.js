ServerEvents.recipes(event => {
//------------------------------------------------------------//	
	function fisher(item,chance,loottable){
event.custom({
  "type": "thermal:fisher_boost",
  "ingredient": {
    "item": item
  },
  "loot_table": loottable,
  "use_chance": chance
})
}
//------------------------------------------------------------//
fisher(global.fish_food[1],0.1,"minecraft:gameplay/fishing/boost")
fisher(global.fish_food[2],0.1,"minecraft:gameplay/fishing/junk")
fisher(global.fish_food[3],0.1,"minecraft:gameplay/fishing/treasure")





	
})








