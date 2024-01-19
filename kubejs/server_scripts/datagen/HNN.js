ServerEvents.highPriorityData(event => {

    ['bat', 'blaze', 'chicken', 'cod', 'cow', 'creeper', 'drowned', 'elder_guardian', 'ender_dragon', 'enderman', 'evoker', 'ghast', 'glow_squid', 'guardian', 'hoglin', 'iron_golem', 'magma_cube', 'mooshroom', 'phantom', 'pig', 'polar_bear', 'rabbit', 'sheep', 'shulker', 'skeleton', 'slime', 'snow_golem', 'spider', 'squid', 'vindicator', 'warden', 'witch', 'wither', 'wither_skeleton', 'zombie', 'zombified_piglin', 'allthemodium/piglich', 'ars_nouveau/wilden_mobs', 'artifacts/mimic', 'thermal/basalz', 'thermal/blitz', 'thermal/blizz', 'twilightforest/alpha_yeti', 'twilightforest/carminite_golem', 'twilightforest/death_tome', 'twilightforest/deer', 'twilightforest/fire_beetle', 'twilightforest/giant', 'twilightforest/goblin', 'twilightforest/helmet_crab', 'twilightforest/hydra', 'twilightforest/kobold', 'twilightforest/lich', 'twilightforest/minoshroom', 'twilightforest/minotaur', 'twilightforest/naga', 'twilightforest/raven', 'twilightforest/redcap', 'twilightforest/skeleton_druid', 'twilightforest/snow_queen', 'twilightforest/stable_ice_core', 'twilightforest/towerwood_borer', 'twilightforest/troll', 'twilightforest/ur_ghast', 'twilightforest/winter_wolf', 'twilightforest/wraith', 'twilightforest/yeti', ].forEach(data => {
        event.addJson(`hostilenetworks:data_models/${data}`, {})
    })
    //due priority data ignore any other ways
    let loot_name = [
        'twilightforest:magic_map_focus',
        'quark:soul_bead',
        'ars_nouveau:wilden_wing',
        'ars_nouveau:wilden_spike',
        'ars_nouveau:wilden_horn',
        'twilightforest:knight_phantom_trophy',
        'twilightforest:minoshroom_trophy',
        'twilightforest:lich_trophy',
        'twilightforest:meef_stroganoff',
        'tombstone:soul_receptacle',
        'reactive:stardust',
        'twilightforest:knightmetal_ingot',
        'twilightforest:fiery_ingot',
        'twilightforest:steeleaf_ingot',
        'twilightforest:borer_essence',
        'kubejs:aquamarine',
        'kubejs:jade',
        'kubejs:iolite',
        'kubejs:topaz',
        'quark:blank_rune',
        'ars_nouveau:bookwyrm_charm',
        'ars_nouveau:experience_gem',
        'ars_nouveau:greater_experience_gem',
        'thermal:blizz_rod',
        'thermal:blitz_rod',
        'thermal:basalz_rod',
        'twilightforest:ironwood_ingot',
        'exoticbirds:phoenix_egg',
        'twilightforest:armor_shard',
        'twilightforest:arctic_fur',
        'twilightforest:maze_map_focus',
        'ars_nouveau:starby_gift'
    ]
    let loot_id = [1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 16, 4, 4, 4, 16, 24, 24, 24, 24, 1, 4, 40, 10, 8, 8, 8, 4, 1, 36, 8, 1, 1]
    let objson = []

    let i = 0
        loot_name.forEach(item => {
            objson.push(ItemAndCount(item, loot_id[i]))
            i++
        })

        //made for Ironberry Modpack
        event.addJson(`hostilenetworks:data_models/grave_guardian`, {
            "type": "tombstone:grave_guardian",
            "subtypes": [],
            "name": "entity.tombstone.grave_guardian",
            "name_color": "0x669999",
            "gui_scale": 1.0,
            "gui_x_offset": 0.0,
            "gui_y_offset": 0.0,
            "gui_z_offset": 0.0,
            "sim_cost": 100,
            "input": {
                "item": "hostilenetworks:empty_prediction",
                "count": 1
            },
            "base_drop": {
                "item": "hostilenetworks:twilight_prediction",
                "count": 1
            },
            "trivia": "hostilenetworks.trivia.grave_guardian",
            "fabricator_drops": objson,
            "tier_data": [
                1,
                2001,
                4001,
                8001
            ],
            "data_per_kill": [
                1,
                1,
                1,
                1
            ]
        })

})
