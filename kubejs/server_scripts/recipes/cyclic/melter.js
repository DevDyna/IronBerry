ServerEvents.recipes(event => {
	
	event.custom({
	"type": "cyclic:melter",
	"ingredients": [
		{
			"item": 'nuclearcraft:silicon_gem'
		}
	],
	"energy": {
		"rfpertick": 80,
		"ticks": 60
	},
	"result": {
		"fluid": "kubejs:liquid_silicon",
		"count": 100
	}
})
  
event.custom({
	"type": "cyclic:melter",
	"ingredients": [
		{
			"item": 'nuclearcraft:silicon_gem'
		},		{
			"item": 'nuclearcraft:silicon_gem'
		}
	],
	"energy": {
		"rfpertick": 80,
		"ticks": 60
	},
	"result": {
		"fluid": "kubejs:liquid_silicon",
		"count": 200
	}
})
  
})