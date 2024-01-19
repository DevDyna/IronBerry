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
                "item": 'reactive:stardust'
            },{
				"item":'twilightforest:steeleaf_ingot'
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
                "item": 'kubejs:raw_plastic'}
        ]
    })
//-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'pneumaticcraft:small_tank'
            },{
				"item":'kubejs:raw_plastic'
			}
        ],
        "pressure": 2.5,
        "results": [{
                "item": 'pneumaticcraft:small_tank',
                "nbt": '{BlockEntityTag:{SavedTanks:{Tank:{Amount:32000,FluidName:"pneumaticcraft:plastic"}}}}'
            }
        ]
    })

//-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'kubejs:assembly_plate'
            },{
				"item":'reactive:stardust'
			}
        ],
        "pressure": 2.5,
        "results": [{
                "item": 'pneumaticcraft:assembly_program_laser'
            }
        ]
    })

//-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'kubejs:assembly_plate'
            },{
				"item":'thermal:drill_head'
			}
        ],
        "pressure": 2.5,
        "results": [{
                "item": 'pneumaticcraft:assembly_program_drill'
            }
        ]
    })

//-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'pneumaticcraft:assembly_program_drill'
            },{
				"item":'pneumaticcraft:assembly_program_laser'
			}
        ],
        "pressure": 2.5,
        "results": [{
                "item": 'pneumaticcraft:assembly_program_drill_laser'
            }
        ]
    })
//-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'kubejs:printed_plate'
            },{
				"type": "pneumaticcraft:stacked_item",
                "count": 5,
				"tag":'rootsclassic:berries'
			},{
				"item": 'ars_nouveau:starby_gift'
			}
        ],
        "pressure": -0.5,
        "results": [{
                "item": 'minecraft:paper'
            },{
                "item": 'minecraft:glowstone_dust'
            },{
                "item": 'minecraft:ink_sac'
            },{
                "item": 'minecraft:glow_ink_sac'
            },{
                "item": 'minecraft:redstone'
            },{
                "item": 'kubejs:printed_plate'
            }
        ]
    })

//-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'quark:soul_bead'
            },{
				"item":'twilightforest:maze_map_focus'
			},{
				"item":'pneumaticcraft:pressure_gauge'
			},{
				"item":'twilightforest:magic_map_focus'
			},{
				"item":'pneumaticcraft:plastic'
			}
        ],
        "pressure": 2.0,
        "results": [{
                "item": 'kubejs:printed_plate'
            }
        ]
    })
//-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'bluepower:teslatite_dust'
            },{
				"item":'pneumaticcraft:plastic'
			},{
				"item":'pneumaticcraft:printed_circuit_board'
			}
        ],
        "pressure": 2.0,
        "results": [{
				"type": "pneumaticcraft:stacked_item",
                "count": 4,
                "item": 'pneumaticcraft:upgrade_matrix'
            }
        ]
    })
	//-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'bluepower:teslatite_dust'
            },{
				"type": "pneumaticcraft:stacked_item",
                "count": 2,
				"item":'minecraft:redstone_torch'
			}
        ],
        "pressure": 2.0,
        "results": [{
				"type": "pneumaticcraft:stacked_item",
                "count": 6,
                "item": 'pneumaticcraft:capacitor'
            }
        ]
    })
		//-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'bluepower:tungsten_ingot'
            },{
				"type": "pneumaticcraft:stacked_item",
                "count": 3,
				"item":'minecraft:redstone_torch'
			}
        ],
        "pressure": 2.0,
        "results": [{
				"type": "pneumaticcraft:stacked_item",
                "count": 6,
                "item": 'pneumaticcraft:transistor'
            }
        ]
    })
		//-------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{
                "item": 'twilightforest:fiery_ingot'
            },{
				"item":'kubejs:pre_compressed'
			}
        ],
        "pressure": 2.0,
        "results": [{
				"type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": 'bluepower:tungsten_ingot'
            }
        ]
    })	
	
	
	
	
	
	
	
	
})
