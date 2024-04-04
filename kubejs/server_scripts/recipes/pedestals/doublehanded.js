ServerEvents.recipes(event => {
    ////dualhandedcrafting
    //
    //
	
     event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "tag": "minecraft:logs_that_burn"
        },
        "mainhandTool": {
            "item": "minecraft:stick"
        },
        "offhandTool": {
            "item": "minecraft:stick"
        },
        "result": {
            "item": "minecraft:campfire"
        }
    }) 
    //
    //
    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "item": "minecraft:bricks"
        },
        "mainhandTool": {
            "tag": "forge:pickaxes"
        },
        "offhandTool": {
            "item": "minecraft:iron_ingot"
        },
        "result": {
            "item": "pedestals:block_pedestal"
        }
    })
    //
    //
 /*   event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "item": "minecraft:cobblestone"
        },
        "mainhandTool": {
            "tag": "bluepower:saw"
        },
        "offhandTool": {
            "tag": "forge:pickaxes"
        },
        "result": {
            "item": "minecraft:gravel"
        }
    })*/
    //
    //
    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "item": "kubejs:casing"
        },
        "mainhandTool": {
            "tag": "bluepower:saw"
        },
        "offhandTool": {
            "tag": "forge:pickaxes"
        },
        "result": {
            "item": "kubejs:machine"
        }
    })
    //
    //
	    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "item": "minecraft:lapis_block"
        },
        "mainhandTool": {
            "tag": "bluepower:saw"
        },
        "offhandTool": {
            "tag": "forge:pickaxes"
        },
        "result": {
            "item": "tombstone:grave_dust",
			"count": 16
        }
    })
    //
    //
		    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "item": "minecraft:emerald_block"
        },
        "mainhandTool": {
            "item": "bluepower:ruby_gem"
        },
        "offhandTool": {
            "item": 'bluepower:amethyst_gem'
        },
        "result": {
            "item": "tombstone:merchant_stone",
			"count": 1
        }
    })
    //
    //
	
			    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "tag": 'minecraft:saplings'
        },
        "mainhandTool": {
            "item": "ars_nouveau:dominion_wand"
        },
        "offhandTool": {
            "item": 'bluepower:ruby_gem'
        },
        "result": {
            "item": 'ars_nouveau:red_archwood_sapling',
			"count": 1
        }
    })
    //
    //
	
				    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "tag": 'minecraft:saplings'
        },
        "mainhandTool": {
            "item": "ars_nouveau:dominion_wand"
        },
        "offhandTool": {
            "item": 'bluepower:amethyst_gem'
        },
        "result": {
            "item": 'ars_nouveau:purple_archwood_sapling',
			"count": 1
        }
    })
    //
    //
	
				    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "tag": 'minecraft:saplings'
        },
        "mainhandTool": {
            "item": "ars_nouveau:dominion_wand"
        },
        "offhandTool": {
            "item": 'bluepower:green_sapphire_gem'
        },
        "result": {
            "item": 'ars_nouveau:green_archwood_sapling',
			"count": 1
        }
    })
    //
    //
	
	
				    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "tag": 'minecraft:saplings'
        },
        "mainhandTool": {
            "item": "ars_nouveau:dominion_wand"
        },
        "offhandTool": {
            "item": 'bluepower:sapphire_gem'
        },
        "result": {
            "item": 'ars_nouveau:blue_archwood_sapling',
			"count": 1
        }
    })
    //
    //
	
    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "item": 'minecraft:campfire'
        },
          "mainhandTool": {
            "tag": 'forge:tools/axes'
        },
        "offhandTool": {
            "tag": 'forge:tools/axes'
        },
        "result": {
            "item": 'minecraft:charcoal',
			"count": 2
        }
    })
    //
    //
	
    event.custom({
        "type": "mowlib:dualhandedcrafting",
        "blockTarget": {
            "item": 'create:brass_block'
        },
          "mainhandTool": {
            "item": 'create:electron_tube'
        },
        "offhandTool": {
            "item": 'create:brass_sheet'
        },
        "result": {
            "item": 'create:precision_mechanism',
			"count": 1
        }
    })
    //
    //
	
	
	
	
	
})
