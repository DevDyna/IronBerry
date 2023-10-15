ServerEvents.recipes(event => {
	
	event.custom({
  "type": "mekanism:fluid_coolant",
  "input": {
    "tag": "forge:water",
    "amount": 1
  },
  "output": {
    "gas": "mekanism:ethene",
    "amount": 99
  },
  "thermalEnthalpy": 10,
  "conductivity": 0.5,
  "efficiency": 1.0,
  "outputEfficiency": 1.0
})
	
	
	
	
})