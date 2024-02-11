ServerEvents.recipes(event => {
	
	event.custom({
  "type": "mekanism:fission",
  "input": {
    "gas": "kubejs:methane",
    "amount": 1
  },
  "output": {
    "gas": "kubejs:micio",
    "amount": 250
  },
  "heat": 0.1
}).id('mekagen_0')
	
event.custom({
  "type": "mekanism:fission",
  "input": {
    "gas": "kubejs:nucleonium",
    "amount": 1
  },
  "output": {
    "gas": "kubejs:superio",
    "amount": 1
  },
  "heat": 0.1
}).id('mekagen_1')
	


})