ServerEvents.recipes(event => {
	
	event.custom({
  "type": "mekanism:fission",
  "input": {
    "gas": "kubejs:methane",
    "amount": 1
  },
  "output": {
    "gas": "mekanism:ethene",
    "amount": 100
  },
  "heat": 0.1
}).id('mekagen')
	
})