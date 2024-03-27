ServerEvents.recipes(event => {
	
  function charger(input,output){
    event.custom({  
      "type": "ae2:charger",
      "ingredient": {
        "item": input
      },
      "result": {
        "item": output
      }
      }).id(RegX(input + "_" + output))
  }
charger("minecraft:ice","minecraft:blue_ice")

  
})