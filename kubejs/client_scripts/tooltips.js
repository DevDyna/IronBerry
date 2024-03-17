//priority 10
ItemEvents.tooltip(event => {
    /**
     * 
     * @param {itemstack|itemstack[]} id 
     * @param {string} desc 
     */
    function tipplusplus(id, desc) {
        event.addAdvanced(id, (item, advanced, text) => {
            try {
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
            } catch (error) { }


        })
    }

    let source = [['acid', '§c'], ['body', '§4'], ['mind', '§d'], ['soul', '§b'],['light','§6'],['verdant','§a']]

    source.forEach(essence => {
        

        if (essence[0] == 'acid'){
            tipplusplus('#reactive:caustic_sources', 'Source of ' + essence[1] + essence[0])
            tipplusplus('reactive:' + essence[0] + '_bottle', 'See ' + essence[1] + '$caustic')
        }else{
        tipplusplus('reactive:' + essence[0] + '_bottle', 'See ' + essence[1] + '$' + essence[0])
            tipplusplus('#reactive:' + essence[0] + '_sources', 'Source of ' + essence[1] + essence[0])
        }
    })



    function multitip(ids,tips){
        ids.forEach((item,index)=>{
            tipplusplus(item,tips[index])
        })

    }



    //Ⓧ Ⓨ Ⓩ §c §a §9
    tipplusplus('kubejs:rich_bone_meal', '§8[§fAxis supported : §cⓍ§f §9Ⓩ§8]')
    tipplusplus('kubejs:rich_bone_meal', '§8[§fArea affected : §b3 blocks§8]')
    

    tipplusplus('kubejs:ore_bone_meal', '§8[§fAxis supported : §cⓍ§f §aⓎ§f §9Ⓩ§8]')
    tipplusplus('kubejs:ore_bone_meal', '§8[§fArea affected : §b7 blocks§8]')

    tipplusplus('kubejs:floreal_bone_meal', '§8[§fAxis supported : §cⓍ§f §9Ⓩ§8]')
    tipplusplus('kubejs:floreal_bone_meal', '§8[§fArea affected : §b3 blocks§8]')

    tipplusplus('#ironberry:mechanicalbenchs','§2Autocrafter§f that work without any §acost')
    tipplusplus('minecraft:leather', 'Can be obtained by §9processing§f item from §afishing')
    tipplusplus('minecraft:coal', '§6Early game dont use it as fuel , it will very expensive')
    tipplusplus('minecraft:dirt', '§6Early game dont use too much until you could automate')
    tipplusplus('minecraft:clay_ball', '§6Obtained by crushing dirt on crushing tub')
    tipplusplus('minecraft:campfire', '§6Item form dont require silk touch')
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
    tipplusplus('homespun:ironberry_juice_bottle', 'Minimal fluid amount : §a250mb')
    tipplusplus('homespun:ironberry_juice_bottle', 'Click with a bottle on a tank of §7iron berry §fto fill up')
    tipplusplus('#ironberry:crushing_output', '§6Obtained by crushing berries on crushing tub or on a squeezer')
    tipplusplus('#ironberry:bluealloy', '§6Can be automated by import and export items up and down side')
    tipplusplus('kubejs:instability', '§aA cube of water and lava, what can go wrong?')
    //tipplusplus('#ironberry:rate_32', '§fCan Transfer §a32 §fChannels')
    //tipplusplus('#ironberry:rate_8', '§fCan Transfer §a8 §fChannels')
    //tipplusplus('#ironberry:onlyforge_energy', '§cNo Channel Required!')
    //tipplusplus('ae2:controller', '§fFree §a32 §fChannels for each face')
    //tipplusplus('#ironberry:cpu', '§a1 §fChannel for each CPU with minimal §a1 §fcrafting storage')
    //tipplusplus('#ironberry:req_1', '§a1 §fChannel Required')
    //tipplusplus('#ae2:memory_cards', 'Best friend of §aP2P §fEngineers')
    tipplusplus('#ironberry:blue_slabs', '§6Multibpart block')
    tipplusplus('ironchest:copper_chest', '§645 Slots')
    tipplusplus('ironchest:iron_chest', '§654 Slots')
    tipplusplus('ironchest:gold_chest', '§681 Slots')
    tipplusplus('ironchest:diamond_chest', '§6108 Slots')
    tipplusplus('pneumaticcraft:smart_chest', '§672 Slots with upgrades')
    tipplusplus('pneumaticcraft:reinforced_chest', '§636 Slots')
    //tipplusplus('#ironberry:ae2_chests', '§636 Slots')
    tipplusplus('tombstone:decorative_subaraki_grave', '§6Subaraki confirmed')
    tipplusplus('minecraft:honeycomb', 'You can use a §6Hive Hopper §fto obtain §6honeycomb §fand §6honey §ffull automatic')
    tipplusplus('thermal:device_hive_extractor', 'Extract §6honeycomb §fand §6honey §ffrom §6bee hives §fand §6bee nests')
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
    tipplusplus('#ironberry:fishing', 'Can be obtained by §aFishing')
    tipplusplus('tombstone:lost_tablet', 'Dont §ctravel §fbecause §cisnt spawned')
    tipplusplus('#ironberry:indigo_flowers', 'Bonemeal §agrass block §for use §aFloreal Fertilizer §fon dirt to obtain ')
    tipplusplus('tombstone:white_marble', '§cDue NBT issue you cannot craft white gravestone on stonecutter')
    tipplusplus('kubejs:soul', 'Can be used on a §5Grave §fwith soul to obtain a §dSoul Receptacle')
    tipplusplus('minecraft:ice', 'Drop §bice shards §fwhen broken')
    tipplusplus('kubejs:ice_shard', 'Obtained by break §bice')
    tipplusplus('#ironberry:spore_colony', 'Obtained by placing a mushroom on top of a §2rich soil')
    tipplusplus('minecraft:gold_nugget', 'Obtained by breaking §7ash §fwith a §bshovel§f')
    tipplusplus('#ironberry:drop_sand', 'Obtained by breaking §6red sand')
    tipplusplus('kubejs:rich_bone_meal', 'Right click on §2rich soil §fto spawn random §abushes')
    tipplusplus('kubejs:illuminati', 'Right click give §eextra time §fat your §bTime in a Bottle')
    tipplusplus(['#farmersdelight:wild_crops','farmersdelight:red_mushroom_colony', 'farmersdelight:brown_mushroom_colony', 'supplementaries:wild_flax'], 'Obtained by using §6rich fertilizer §fon §2rich soil')
    tipplusplus('exoticbirds:phoenix_egg', 'A very rare egg obtainable only on §9Egg Analizer §fafter many eggs')
    tipplusplus('kubejs:grave_spawn', 'Spawn a §agrave guardian§f , a §6warrior§f full of §dpotions and cheap trades')
    tipplusplus('alchemygadgetry:potion_flask', 'To §afill §fyou only need to §bclick on gui §fwith any §epotion')
    tipplusplus('alchemygadgetry:potion_flask', 'A huge bottle that can be used to use §9many effects§f')
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
    tipplusplus('#ironberry:boss_drop', '§cAlso can be obtained by killing mobs from the §4Gateway of Bosses')
    tipplusplus('luggage:luggage', 'A cute immortal chest pet')
    tipplusplus('#ironberry:echodrop', 'Drop §9echo shards §fwhen broken')
    tipplusplus('minecraft:echo_shard', 'Obtained by breaking §7sculk blocks')
    tipplusplus('#ironberry:onlyplayer', '§4Only player can use this item!')
    //tipplusplus(Item.of('gateways:gate_pearl', '{gateway:"gateways:battle_gate_large"}'),'§6Obtained by complete a simple gateway')
    tipplusplus('kubejs:patina', 'Obtained by using axes on a §boxidized§f §6copper block')
    tipplusplus('pedestals:upgrade_pedestal_cobblegen', 'Every §680 tick§f rool a §epool')
    tipplusplus(['pneumaticcraft:plastic', 'pneumaticcraft:plastic_bucket'], 'To see the recipe , press §9U §fon §6SmallFluidTank §ffrom §6PNC')
    tipplusplus(global.disabledItem, '§cItem Disabled')
    tipplusplus('#ironberry:bucket_fuel', '§5Fuel §ffor §2liquid §fcompressor')
    tipplusplus('minecraft:obsidian', 'Can be broken using a §1sapphire§f pickaxe or just try to place a §c🔥instability🔥')
    tipplusplus('#ironberry:blue_picks','Tier §1Obsidian')
    tipplusplus('craftingstation:crafting_station','Polymorph recipes dont work here , use a crafting table!')
    tipplusplus('#farmersdelight:straw_harvesters','Can drop §estraw§f when harvested some §avegetable stuff')
    tipplusplus('farmersdelight:straw','Can be obtained by §aharvest grass§f with §bknifes')
    tipplusplus('#rootsclassic:barks','Obtained using a §abark knife§f on a §blog')
    tipplusplus('rootsclassic:bark_knife','Use on a §blog§f to obtain §abarks')
    tipplusplus('#ironberry:sculk_replace','Can be replaced by §9Sculk block')
    tipplusplus('minecraft:moss_block','Obtained using §aon world reaction§f with §6crucible')
    tipplusplus('rootsclassic:verdant_sprig','Obtained by breaking §amature crops')
    tipplusplus('bluepower:deployer','Can be imported and exported using §aNormal Hoppers §for §aGolden Hoppers')
    tipplusplus('goldenhopper:golden_hopper','A simple §afiltered§f hopper')
    tipplusplus('kubejs:floreal_bone_meal','Right click on §aDirt §fit can spawn some §6Flowers')
    tipplusplus('#ironberry:urn_loot','Can be dropped by §6Urns§f when broken')
    tipplusplus(['nuclearcraft:upgrade_energy', 'nuclearcraft:upgrade_speed'],'Dont use §c10 or more§f on a single machines , they can §cbreak§f it!')
    tipplusplus('thoriumreactors:depleted_molten_salt_bucket','Due a issue on §6ThoriumReactor 0.1.6b-all§f cannot be moved using buckets!')
    tipplusplus(['thoriumreactors:steam_bucket', 'thoriumreactors:depleted_molten_salt_bucket'],"Obtained by running §cThermal Evaporator §ffrom §a@Thorium")
    tipplusplus('thoriumreactors:heated_molten_salt_bucket',"Obtained by running §eReactor §ffrom §a@Thorium")
    tipplusplus('thoriumreactors:molten_salt_bucket',"Coolant of §eReactor §ffrom §a@Thorium")
    tipplusplus('thoriumreactors:depleted_uranium','Solid output of §eReactor §ffrom §a@Thorium')
    tipplusplus('thoriumreactors:enriched_uranium','Solid fuel of §eReactor §ffrom §a@Thorium')
    tipplusplus('thoriumreactors:configurator','§bRight-Click §fwith it on hand change state of §a@Thorium §cPorts')
    
    multitip(
        ['thoriumreactors:nickel_block', 'thoriumreactors:niob_block', 'thoriumreactors:molybdenum_block'],
        ['§8[§fModifier : §c1.0§8]','§8[§fModifier : §e1.5§8]','§8[§fModifier : §a2.0§8]']
        )

    multitip(
        ['thoriumreactors:nickel_block', 'thoriumreactors:niob_block', 'thoriumreactors:molybdenum_block'],
        ['§8[§fMax Energy : §c114kFE/t§8]','§8[§fMax Energy : §e171kFE/t§8]','§8[§fMax Energy : §a228kFE/t§8]']
        )
    


    tipplusplus('#ironberry:turbine_moderator','Can be used as §9Turbine Modifier §ffrom §a@Thorium')






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
