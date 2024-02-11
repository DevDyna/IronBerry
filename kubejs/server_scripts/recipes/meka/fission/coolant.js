ServerEvents.recipes(event => {
	
	event.custom({
  "type": "mekanism:fluid_coolant",
  "input": {
    "fluid": "minecraft:water",
    "amount": 1
  },
  "output": {
    "gas": "mekanism:steam",
    "amount": 1
  },
  "thermalEnthalpy": 1.0,
  "conductivity": 1.0,
  "efficiency": 1.0,
  "outputEfficiency": 1.0
})
	
	
})