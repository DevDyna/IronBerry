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
//fisher(,1,"minecraft:gameplay/fishing/fish")
event.recipes.thermal.fisher_boost('#ironberry:fish_food')




	
})








