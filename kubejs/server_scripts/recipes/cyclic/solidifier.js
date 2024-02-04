ServerEvents.recipes(event => {
	//------------------------------//
	event.custom({
  "type": "cyclic:solidifier",
  "ingredients":[ {
    "item": 'kubejs:silicon_plated'
  }
  ],
  "mix": {
    "fluid": "kubejs:liquid_silicon",
    "count": 200
  },
	"energy": {
		"rfpertick": 100,
		"ticks": 120
	},
  "result": {
    "item": 'nuclearcraft:plate_basic',
	"count": 8
  }
})

//------------------------------//
	event.custom({
  "type": "cyclic:solidifier",
    "ingredients":[ {
    "tag": 'rootsclassic:berries'
  }
  ],
  "mix": {
    "fluid": "minecraft:water",
    "count": 100
  },
	"energy": {
		"rfpertick": 10,
		"ticks": 20
	},
  "result": {
    "item": 'cyclic:biomass',
	"count": 1
  }
})
//------------------------------//
	event.custom({
  "type": "cyclic:solidifier",
  "ingredients":[ {
    "item": 'cyclic:peat_fuel'
  },{
    "item": 'cyclic:peat_fuel'
  }
  ],
  "mix": {
    "fluid": "minecraft:water",
    "count": 200
  },
	"energy": {
		"rfpertick": 10,
		"ticks": 120
	},
  "result": {
    "item": 'cyclic:peat_fuel_enriched',
	"count": 2
  }
})
//------------------------------//

	event.custom({
  "type": "cyclic:solidifier",
  "ingredients":[ {
    "item": 'cyclic:wireless_item'
  },{
    "item": 'cyclic:battery'
  },{
	  "item": 'cyclic:structure'
  }
  ],
  "mix": {
    "fluid": "minecraft:water",
    "count": 150
  },
	"energy": {
		"rfpertick": 10,
		"ticks": 120
	},
  "result": {
    "item": 'cyclic:peat_farm',
	"count": 1
  }
})
//------------------------------//
	event.custom({
  "type": "cyclic:solidifier",
  "ingredients":[ {
    "item": 'cyclic:peat_fuel_enriched'
  },{
	  "item": 'cyclic:battery'
  },{
    "item": 'cyclic:peat_fuel_enriched'
  }
  ],
  "mix": {
    "fluid": "minecraft:water",
    "count": 1000
  },
	"energy": {
		"rfpertick": 10,
		"ticks": 120
	},
  "result": {
    "item": 'cyclic:structure',
	"count": 1
  }
})
//------------------------------//

















})