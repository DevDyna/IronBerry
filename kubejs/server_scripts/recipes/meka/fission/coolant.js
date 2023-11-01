ServerEvents.recipes(event => {
	
	event.custom({
  "type": "mekanism:fluid_coolant",
  "input": {
    "fluid": "thoriumreactors:heated_molten_salt",
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