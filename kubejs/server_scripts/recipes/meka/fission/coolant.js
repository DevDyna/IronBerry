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
  "thermalEnthalpy": 10,
  "conductivity": 0.5,
  "efficiency": 10.0,
  "outputEfficiency": 1.0
})
	
	
})