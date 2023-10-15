ServerEvents.recipes(event => {
    //cooking
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 40,
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
        "cookingtime": 40,
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
        "cookingtime": 40,
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
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 40,
        "experience": 0.0,
        "ingredients": [{
                "item": 'tombstone:tablet_of_home'
            }, {
                "item": 'tombstone:tablet_of_recall'
            }, {
                "item": 'tombstone:tablet_of_assistance'
            }, {
                "item": 'tombstone:tablet_of_cupidity'
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": "kubejs:omni"
        }
    })
    //
    //

    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 40,
        "experience": 0.0,
        "ingredients": [{
                "item": 'bluepower:teslatite_dust'
            }, {
                "item": 'minecraft:bone_meal'
            }, {
                "item": 'minecraft:bone_meal'
            }, {
                "item": 'minecraft:sugar'
            }, {
                "item": 'thermal:compost'
            }, {
                "item": 'thermal:compost'
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": 'thermal:phytogro'
        }
    })
    //
    //
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 40,
        "experience": 0.0,
        "ingredients": [{
                "item": 'thermal:phytosoil'
            }, {
                "item": 'farmersdelight:straw'
            }, {
                "item": 'thermal:compost'
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": 'farmersdelight:organic_compost'
        }
    })
    //
    //


    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 80,
        "experience": 0.0,
        "ingredients": [{
                "item": 'tombstone:scroll_of_frost_resistance'
            }, {
                "item": 'tombstone:scroll_of_true_sight'
            }, {
                "item": 'tombstone:scroll_of_feather_fall'
            }, {
                "item": 'tombstone:scroll_of_preservation'
            }, {
                "item": 'tombstone:scroll_of_purification'
            }, {
                "item": 'tombstone:scroll_of_aquatic_life'
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": 'kubejs:scroll_safety'
        }
    })
    //
    //
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 80,
        "experience": 0.0,
        "ingredients": [{
                "item": 'tombstone:scroll_of_mercy'
            }, {
                "item": 'tombstone:scroll_of_knowledge'
            }, {
                "item": 'tombstone:scroll_of_lightning_resistance'
            }, {
                "item": 'tombstone:scroll_of_unstable_intangibility'
            }, {
                "item": 'tombstone:scroll_of_reach'
            }, {
                "item": 'tombstone:magic_scroll'
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": 'kubejs:scroll_discontinuity'
        }
    })
    //
    //
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 80,
        "experience": 1.0,
        "ingredients": [{
                "item": 'minecraft:cookie'
            }, {
                "item": 'minecraft:blaze_rod'
            }, {
                "item": 'minecraft:cookie'
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": 'inventorypets:holiday_cookie',
            "count": 2
        }
    })
    //
    //
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [{
                "item": 'twilightforest:meef_stroganoff'
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": 'nuclearcraft:dominos',
            "count": 2
        }
    })
    //
    //


})
