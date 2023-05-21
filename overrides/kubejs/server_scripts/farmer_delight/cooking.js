ServerEvents.recipes(event => {
    //cooking
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 20,
        "experience": 0.0,
        "ingredients": [{
                "item": "minecraft:paper"
            }, {
                "tag": "rootsclassic:berries"
            }, {
                "tag": "rootsclassic:berries"
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": "minecraft:sugar"
        }
    })
    //
    //
	    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 20,
        "experience": 0.0,
        "ingredients": [{
                "item": "minecraft:sugar"
            }, {
                "item": "minecraft:sugar"
            }, {
                "item": "minecraft:stick"
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": "tombstone:lollipop"
        }
    })
    //
    //
		    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 20,
        "experience": 0.0,
        "ingredients": [{
                "tag": "forge:seeds"
            }, {
                "tag": "forge:seeds"
            }, {
                "tag": "forge:seeds"
            }, {
                "tag": "forge:seeds"
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": "tombstone:bag_of_seeds"
        }
    })
    //
    //

	
	
	
	
	
	
	
})
