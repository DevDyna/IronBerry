ServerEvents.recipes(event => {
//------------------------------------------------------------//	
	function fisher(item,chance){
event.custom({
  "type": "thermal:fisher_boost",
  "ingredient": {
    "item": item
  },
  "loot_table": "gameplay/fishing/junk",
  "use_chance": chance
})
}
//------------------------------------------------------------//
fisher('thermal:aquachow',0.1)
fisher('thermal:junk_net',0.1)
fisher('thermal:deep_aquachow',0.1)





	
})








