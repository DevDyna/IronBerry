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
      "item": 'kubejs:silicon_plated'
    },{
      "item": 'kubejs:silicon_plated'
    }
    ],
    "mix": {
      "fluid": "kubejs:liquid_silicon",
      "count": 400
    },
    "energy": {
      "rfpertick": 100,
      "ticks": 120
    },
    "result": {
      "item": 'nuclearcraft:plate_basic',
    "count": 16
    }
  })
	//------------------------------//
	event.custom({
    "type": "cyclic:solidifier",
    "ingredients":[ {
      "item": 'kubejs:silicon_plated'
    },{
      "item": 'kubejs:silicon_plated'
    },{
      "item": 'kubejs:silicon_plated'
    }
    ],
    "mix": {
      "fluid": "kubejs:liquid_silicon",
      "count": 600
    },
    "energy": {
      "rfpertick": 100,
      "ticks": 120
    },
    "result": {
      "item": 'nuclearcraft:plate_basic',
    "count": 24
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

event.custom({
  "type": "cyclic:solidifier",
  "ingredients":[ {
    "item": 'pneumaticcraft:module_expansion_card'
  },{
	  "item": 'kubejs:printed_plate'
  },{
    "item": 'pneumaticcraft:plastic'
  }
  ],
  "mix": {
    "fluid": "pneumaticcraft:etching_acid",
    "count": 100
  },
	"energy": {
		"rfpertick": 10,
		"ticks": 60
	},
  "result": {
    "item": 'nuclearcraft:empty_sink',
	"count": 1
  }
})
//------------------------------//
event.custom({
  "type": "cyclic:solidifier",
  "ingredients":[ {
    "item": 'nuclearcraft:empty_sink'
  },{
	  "item": 'nuclearcraft:bioplastic'
  },{
    "item": 'nuclearcraft:plate_basic'
  }
  ],
  "mix": {
    "fluid": "pneumaticcraft:etching_acid",
    "count": 100
  },
	"energy": {
		"rfpertick": 10,
		"ticks": 60
	},
  "result": {
    "item": 'nuclearcraft:steel_frame',
	"count": 1
  }
})
//------------------------------//
//-----------------------------------------PEAT----------------------//
event.custom({
  "type": "cyclic:solidifier",
  "ingredients":[ {
    "item": 'cyclic:peat_fuel'
  }
  ],
  "mix": {
    "fluid": "minecraft:water",
    "count": 100
  },
	"energy": {
		"rfpertick": 10,
		"ticks": 120
	},
  "result": {
    "item": 'cyclic:peat_fuel_enriched',
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
    "item": 'cyclic:peat_fuel'
  },{
    "item": 'cyclic:peat_fuel'
  },{
    "item": 'cyclic:peat_fuel'
  }
  ],
  "mix": {
    "fluid": "minecraft:water",
    "count": 300
  },
	"energy": {
		"rfpertick": 10,
		"ticks": 120
	},
  "result": {
    "item": 'cyclic:peat_fuel_enriched',
	"count": 3
  }
})
//-------------------------------------BIOMASS-----------------------//
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
    "tag": 'rootsclassic:berries'
  },{
    "tag": 'rootsclassic:berries'
  }
  ],
  "mix": {
    "fluid": "minecraft:water",
    "count": 200
  },
	"energy": {
		"rfpertick": 10,
		"ticks": 20
	},
  "result": {
    "item": 'cyclic:biomass',
	"count": 2
  }
})
//------------------------------//
event.custom({
  "type": "cyclic:solidifier",
    "ingredients":[ {
    "tag": 'rootsclassic:berries'
  },{
    "tag": 'rootsclassic:berries'
  },{
    "tag": 'rootsclassic:berries'
  }
  ],
  "mix": {
    "fluid": "minecraft:water",
    "count": 300
  },
	"energy": {
		"rfpertick": 10,
		"ticks": 20
	},
  "result": {
    "item": 'cyclic:biomass',
	"count": 3
  }
})





















})