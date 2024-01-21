ServerEvents.recipes(event => {
	//------------------------------------------------------//
	event.custom({
  "type": "pneumaticcraft:fluid_mixer",
  "input1": {
	"type": "pneumaticcraft:fluid",
    "tag": "ironberry:chad_water",
    "amount": 1000
  },
  "input2": {
    "type": "pneumaticcraft:fluid",
    "tag": "minecraft:lava",
    "amount": 1000
  },
  "item_output": {
    "item": 'kubejs:instability'
  },
  "pressure": 2.0,
  "time": 40
})


//------------------------------------------------------//
	})

