//priority 10
ItemEvents.tooltip(event => {

    function tipplusplus(id, desc) {
        event.addAdvanced(id, (item, advanced, text) => {
			try{
            for (let i = 1; i < 10; i++) {
                if (text.get(i) != null) {
                    if (!event.isShift()) {
							text.add(i, '§8[§fLeft Shift§8]')
						break
                    } else if (event.isShift()) {
                        text.add(i, Text.of(desc)) //.color(0xD8A903)
						break
                    }
                }
            }
			}catch(error){}
			
			
        })
    }

    tipplusplus('minecraft:clay_ball', '§6Obtained by crushing dirt on crushing tub')
    tipplusplus('minecraft:campfire', '§6Item form require silk touch')
    tipplusplus('reactive:scroll', '§6Right click a cauldron to convert into a crucible')
    tipplusplus('minecraft:bone_meal', '§6Obtained by compost stuff on composter')
    tipplusplus('minecraft:string', '§6Obtained by flax plants')
    tipplusplus('bluepower:engine', '§1Volts §finto §cRF/FE')
    tipplusplus('bluepower:solar_panel', 'Generate §1Volts')
    tipplusplus('bluepower:blulectric_alloyfurnace', 'Burn §1Volts §fto alloy')
    tipplusplus('bluepower:blulectric_furnace', 'Burn §1Volts §fto cook')
    tipplusplus('homespun:redstone_acid', 'Deoxide §6copper blocks §fand convert §8cobblestone §finto §7gravel')
    tipplusplus('homespun:ironwood_leaves', 'Can drop §5berries')
    tipplusplus('ae2:facade', '§6You can craft using any solid block with around 4 cable anchor')
    tipplusplus('homespun:ironberry_juice_bottle', 'Click with a bottle on a tank of §7iron berry §fto fill up')
    tipplusplus('#ironberry:crushing_output', '§6Obtained by crushing berries on crushing tub or on a squeezer')
    tipplusplus('#ironberry:bluealloy', '§6Can be automated by import and export items up and down side')
    tipplusplus('kubejs:instability', '§aA cube of water and lava, what can go wrong?')
    tipplusplus('#ironberry:rate_32', '§fCan Transfer §a32 §fChannels')
    tipplusplus('#ironberry:rate_8', '§fCan Transfer §a8 §fChannels')
    tipplusplus('#ironberry:onlyforge_energy', '§cNo Channel Required!')
    tipplusplus('ae2:controller', '§fFree §a32 §fChannels for each face')
    tipplusplus('#ironberry:cpu', '§a1 §fChannel for each CPU with minimal §a1 §fcrafting storage')
    tipplusplus('#ironberry:req_1', '§a1 §fChannel Required')
    tipplusplus('#ae2:memory_cards', 'Best friend of §aP2P §fEngineers')
    tipplusplus('#ironberry:blue_slabs', '§6Multibpart block')
    tipplusplus('ironchest:copper_chest', '§645 Slots')
    tipplusplus('ironchest:iron_chest', '§654 Slots')
    tipplusplus('ironchest:gold_chest', '§681 Slots')
    tipplusplus('ironchest:diamond_chest', '§6108 Slots')
    tipplusplus('pneumaticcraft:smart_chest', '§672 Slots with upgrades')
    tipplusplus('pneumaticcraft:reinforced_chest', '§636 Slots')
    tipplusplus('#ironberry:ae2_chests', '§636 Slots')
    tipplusplus('tombstone:decorative_subaraki_grave', '§6Subaraki confirmed')
    tipplusplus('minecraft:honeycomb', 'You can use a §6Hive Hopper §fto obtain §6honeycomb §fand §6honey §ffull automatic')
    tipplusplus('thermal:device_hive_extractor', 'Extract §6honeycomb §fand §6honey §ffrom §6honey hives §fand §6bee hives')
    tipplusplus('minecraft:lily_pad', '§6You can obtain by placing water around a Growing Standing Stone')
    tipplusplus('kubejs:wood_core', '§6Source of unlimited berries')
    tipplusplus('#ironberry:indigo_flowers', 'Can be used to craft indigo flower')
    tipplusplus('#ironberry:ae_workshop', 'Can be used to open §acells §for configure §atools')
    tipplusplus('#ironberry:ae_outside', 'Can work outside the §anetwork')
    tipplusplus('kubejs:crook', 'Like a §6hoe §fbut better!')
    tipplusplus('#ironberry:nosilk', 'Dont require §bSilk Touch §fto break it')
    tipplusplus('#tombstone:seeds', '§6Obtained by breaking tall grass or using a Bag of Seeds')
    tipplusplus('reactive:crucible', '§6Obtained by clicking a crucible with a scrool of transmutation')
    tipplusplus('#ironberry:ae2_wireless', 'Require to work a §aAccess point §fto work')
    tipplusplus('tombstone:strange_scroll', '§6Right click with it if you have any effect , the effect can be absorbed on the scroll and reused later')
    tipplusplus('#ironberry:ae_charged', 'Can be charged using a §acharger')
    tipplusplus('#ironberry:fishing', 'Can be obtained by a §aFishing')
    tipplusplus('tombstone:lost_tablet', 'Dont §ctravel §fbecause §cisnt spawned')
    tipplusplus('reactive:acid_bottle', 'See §c$acid')
    tipplusplus('reactive:body_bottle', 'See §4$body')
    tipplusplus('reactive:mind_bottle', 'See §d$mind')
    tipplusplus('reactive:soul_bottle', 'See §b$soul')
    tipplusplus('reactive:verdant_bottle', 'See §a$verdant')
    tipplusplus('reactive:light_bottle', 'See §e$light')
    tipplusplus('#ironberry:indigo_flowers', 'Bonemeal §aGrass block §fto obtain')
    tipplusplus('tombstone:white_marble', '§cDue NBT issue you cannot craft white gravestone on stonecutter')
    tipplusplus('kubejs:soul', 'Can be used on a §5Grave §fwith soul to obtain a §dSoul Receptacle')
    tipplusplus('minecraft:ice', 'Drop §bice shards §fwhen broken')
    tipplusplus('kubejs:ice_shard', 'Obtained by break §bice')
    tipplusplus('#ironberry:spore_colony', 'Obtained by placing a mushroom on top of a §2rich soil')
    tipplusplus('minecraft:gold_nugget', 'Obtained by breaking §7ash §fwith a §bshovel§f')
	tipplusplus('#ironberry:drop_sand','Obtained by breaking §6red sand')
    tipplusplus('kubejs:rich_bone_meal', 'Right click on §2rich soil §fto spawn random §abushes')
    tipplusplus('kubejs:illuminati', 'Right click give §eextra time §fat your §bTime in a Bottle')
    tipplusplus('#farmersdelight:wild_crops', 'Obtained by using §6rich bone meal §fon §2rich soil')
    tipplusplus('exoticbirds:phoenix_egg', 'A very rare egg obtainable only on §9Egg Analizer §fafter many eggs')
    tipplusplus('kubejs:grave_spawn', 'Spawn a grave guardian , a warrior full of potions and cheap trades')
    tipplusplus('alchemygadgetry:potion_flask', 'A huge bottle that can be used to use §9many effects§f\nTo §afill §fyou only need to §bclick on gui §fwith any §epotion')
    tipplusplus('alchemygadgetry:potion_slingshot', '§aClick §f, §4Boing §f, §dEffect!')
    tipplusplus('#ironberry:gift_loot', '§eObtained by open a §6Starbuncle Gift')
    tipplusplus('#ironberry:boss_loot', '§cAlso can be obtained by defeating the §4Gateway of Bosses')
    tipplusplus('exoticbirds:nest', 'Place and wait until a §6egg §fspawn')
    tipplusplus('exoticbirds:egg_identifier', 'Using §credstone §fcan identify if mysterious eggs can be bird eggs')
    tipplusplus('exoticbirds:egg_incubator', '§aIncrease chance §fof success to spawn a §bbird §fwhen launched a egg')
    tipplusplus('bluepower:igniter', 'Can start spreading §cFire')
    tipplusplus('#ironberry:block_drop', 'Can be obtained by §bBreaking Deepslate ores')
    tipplusplus('thermal:compost', 'Created by compost stuff on a §aBatch Composter')
    tipplusplus('#farmersdelight:compost_activators', 'Used to §aactive compost reaction')
    tipplusplus('kubejs:ore_bone_meal', 'Right click on §dCobbled Deepslate §fit can convert into §6Ores')
    tipplusplus('minecraft:bundle', 'Can be used on §9Deployer §fto extract item inside of them')
    tipplusplus('#ironberry:bundled', 'To see the recipe , press §9U §fon §6bundle')
    //tipplusplus('#ironberry:disabled', 'IronBerry : §cItem Disabled')
    //tipplusplus('#ironberry:hide', 'IronBerry : §cItem Hidden')
    tipplusplus('farmersdelight:cutting_board', 'Can be automated using a §7Deployer')
	tipplusplus('#ironberry:boss_drop','§cAlso can be obtained by killing mobs from the §4Gateway of Bosses')
	tipplusplus('luggage:luggage','A cute chest pet')
	tipplusplus('#ironberry:echodrop','Drop §9echo shards §fwhen broken')
	tipplusplus('minecraft:echo_shard', 'Obtained by breaking §7sculk blocks')
    tipplusplus('#ironberry:onlyplayer','§4Only player can use this item!')
	//tipplusplus(Item.of('gateways:gate_pearl', '{gateway:"gateways:battle_gate_large"}'),'§6Obtained by complete a simple gateway')
	tipplusplus('kubejs:patina','Obtained by using axes on a §boxidized§f §6copper block')
	tipplusplus('pedestals:upgrade_pedestal_cobblegen','Every §680 tick§f rool a §epool')
	tipplusplus(['pneumaticcraft:plastic', 'pneumaticcraft:plastic_bucket'],'To see the recipe , press §9U §fon §6SmallFluidTank §ffrom §6PNC')
	tipplusplus(global.disabledItem,'§cItem Disabled')


})

/*
Black: §0
Dark Blue: §1
Dark Green: §2
Dark Aqua (Dark Cyan): §3
Dark Red: §4
Dark Purple: §5
Gold: §6
Gray: §7
Dark Gray: §8
Blue: §9
Green: §a
Aqua (Cyan): §b
Red: §c
Light Purple: §d
Yellow: §e
White: §f
*/
