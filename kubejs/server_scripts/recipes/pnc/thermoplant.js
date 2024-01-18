ServerEvents.recipes(event => {
	//------------------------------------------------------//
	event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "tag": "ironberry:chad_water",
    "amount": 1000
  },
  "item_input": {
    "item": 'minecraft:cobblestone'
  },
  "temperature": {
    "min_temp": 272
  },
  "fluid_output": {
    "fluid": "minecraft:lava",
    "amount": 100
  }
})


//------------------------------------------------------//
	event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "tag": "ironberry:chad_water",
    "amount": 1000
  },
  "item_input": {
    "item": 'kubejs:rich_bone_meal'
  },
  "temperature": {
    "min_temp": 272
  },
  "fluid_output": {
    "fluid": "pneumaticcraft:etching_acid",
    "amount": 100
  }
})
//------------------------------------------------------//
	event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "tag": "pneumaticcraft:plastic",
    "amount": 100
  },
  "temperature": {
    "min_temp": 272
  },  "item_output": {
    "item": "pneumaticcraft:plastic"
  }
})





















	})

