ServerEvents.recipes(event => {
    //-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'minecraft:iron_ingot'
            }, {
                "item": 'minecraft:bricks'
            }
        ],
        "pressure": 2.5,
        "results": [{
                "item": 'pedestals:block_pedestal'
            }
        ]
    })
    //-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'bluepower:teslatite_dust'
            }
        ],
        "pressure": 2.5,
        "results": [{
                "item": 'tombstone:grave_dust',
                "count": 4
            }
        ]
    })
    //-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": "minecraft:sand"
            }
        ],
        "pressure": 2.5,
        "results": [{
                "item": 'nuclearcraft:silicon_gem'
            }
        ]
    })
    //-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'kubejs:pre_compressed'
            }
        ],
        "pressure": 2.5,
        "results": [{
                "item": 'pneumaticcraft:ingot_iron_compressed'
            }
        ]
    })
    //-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'bluepower:blue_alloy_ingot'
            }, {
                "type": "pneumaticcraft:stacked_item",
                "count": 4,
                "item": 'kubejs:blank'
            }
        ],
        "pressure": 2.5,
        "results": [{
                "item": 'kubejs:casing',
				"count": 4
            }
        ]
    })
    //-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'thermal:saw_blade'
            }, {
                "type": "pneumaticcraft:stacked_item",
                "count": 4,
                "item": 'kubejs:casing'
            }
        ],
        "pressure": 2.5,
        "results": [{
                "item": 'kubejs:machine',
				"count": 4
            }
        ]
    })
    //-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'pneumaticcraft:small_tank'
            },{
				"item":'minecraft:ice'	
			},{
				"item":'froglins:froglin_egg'
			}, {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": 'kubejs:aquamarine'
            }, {
                "type": "pneumaticcraft:stacked_item",
                "count": 3,
                "item": 'nuclearcraft:silicon_gem'
            }, {
                "type": "pneumaticcraft:stacked_item",
                "count": 4,
                "item": 'kubejs:iolite'
            }, {
                "type": "pneumaticcraft:stacked_item",
                "count": 5,
                "item": 'kubejs:jade'
            }, {
                "type": "pneumaticcraft:stacked_item",
                "count": 6,
                "item": 'twilightforest:borer_essence'
            }, {
                "type": "pneumaticcraft:stacked_item",
                "count": 7,
                "item": 'kubejs:topaz'
            }
        ],
        "pressure": 2.5,
        "results": [{
                "item": 'pneumaticcraft:small_tank',
                "nbt": '{BlockEntityTag:{SavedTanks:{Tank:{Amount:32000,FluidName:"pneumaticcraft:plastic"}}}}'
            }
        ]
    })












})
