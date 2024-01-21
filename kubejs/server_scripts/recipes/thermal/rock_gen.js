ServerEvents.recipes(event => {
//------------------------------------------------------------//	
	function rock(cold,base,output){
event.custom({
  "type": "thermal:rock_gen",
  "adjacent": cold,
  "below": base,
  "result": {
    "item": output
  }
})
}
//------------------------------------------------------------//
rock('minecraft:water','pedestals:block_pedestal','minecraft:cobblestone')





	
})








