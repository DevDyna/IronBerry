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
//------------------------------------------------------//
	event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "fluid_input": {
	  "type": "pneumaticcraft:fluid",
    "tag": "ironberry:chad_steam",
    "amount": 100
  },
      "item_input": {
    "item": 'minecraft:coal'
  },
  "temperature": {
    "min_temp": 272
  },
  "fluid_output": {
    "fluid": "thermal:crude_oil",
  "amount": 100
  }
  })
 //------------------------------------------------------//
	event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "tag": "ironberry:chad_water",
    "amount": 100
  },
    "item_input": {
    "item": 'minecraft:glowstone_dust'
  },
  "temperature": {
    "min_temp": 272
  },  "item_output": {
    "item": 'thermal:rosin'
  }
})
  //------------------------------------------------------//
  	event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "tag": "minecraft:lava",
    "amount": 1000
  },
  "item_input": {
    "item": 'cyclic:gem_amber'
  },
  "temperature": {
    "min_temp": 272
  },
  "item_output": {
    "item": 'cyclic:gem_obsidian'
  }
})
  
    //------------------------------------------------------//
  	event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "tag": "ironberry:chad_glow",
    "amount": 1000
  },
  "item_input": {
    "item": 'minecraft:iron_block'
  },
  "temperature": {
    "min_temp": 272
  },
  "item_output": {
    "item": 'minecraft:raw_copper_block'
  }
})
  
      //------------------------------------------------------//
  	event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "item_input": {
    "item": 'minecraft:glowstone_dust'
  },
  "temperature": {
    "min_temp": 272
  },
  "fluid_output": {
    "fluid": "thermal:glowstone",
  "amount": 250
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
    "item": 'minecraft:redstone'
  },
  "temperature": {
    "min_temp": 272
  },
  "fluid_output": {
    "fluid": "mekanism:steam",
  "amount": 10
  }
  })
  





















	})

