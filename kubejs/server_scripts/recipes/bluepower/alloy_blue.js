ServerEvents.recipes(event => {
    //alloy_smelting bluepower
    //
    //		WARNING: MORE THAT 1 TYPE CAUSE ISSUES FROM BLUEPOWER
    //
    /*----------------------------------------------------------------------------------------------*/
    function alloy(inputs_name, inputs_count, output_name, output_count) {

		let ingredients = []
		
		for(let i =0;i<inputs_name.length;i++){
		ingredients.push(ItemOrTagAndCount(inputs_name[i],inputs_count[i]))
		}

        event.custom({
            "type": "bluepower:alloy_smelting",
            "ingredients": ingredients,
            "result": {
                "item": output_name,
                "count": output_count
            }
        }).id(RegX(inputs_name + "_" + inputs_count + "_" + output_name + "_" + output_count))

    }
    //------------------------------------//
    alloy(
        ["minecraft:coal", "minecraft:raw_iron"], [2, 4],
        "minecraft:iron_ingot",
        1)

    alloy(
        ["minecraft:iron_block",'minecraft:coal_block'], [1,2],
        "homespun:cast_iron_block", 1)

    alloy(
        ["minecraft:iron_ingot",'#minecraft:planks'], [9,1],
        "ironchest:wood_to_copper_chest_upgrade", 1)

    alloy(
        ["bluepower:teslatite_dust",
            "minecraft:iron_ingot"], [4, 2],
        "bluepower:blue_alloy_ingot", 1)

    alloy(
        ['create:brass_ingot',
            "bluepower:purple_alloy_ingot"], [4, 1],
        'kubejs:pre_compressed', 1)

        alloy(
            ['minecraft:copper_ingot',
                'create:zinc_ingot'], [1, 1],
                'create:brass_ingot', 2)

    alloy([
            "bluepower:blue_doped_wafer",
            "bluepower:red_doped_wafer"], [1, 1],
        "prettypipes:blank_module", 64)

    alloy(
        ["minecraft:glowstone_dust",
        'create:brass_ingot'], [2, 1],
        "thermal:electrum_ingot", 2)

    alloy(
        ["bluepower:infused_teslatite_dust",
            "minecraft:copper_ingot"], [2, 1],
        "thermal:lead_ingot", 4)

    alloy(
        ["#tombstone:magic_tablets"], [1],
        "tombstone:strange_tablet", 1)

    alloy(
        ["minecraft:sugar",
            "minecraft:stick",
            "reactive:stardust"], [4, 1, 1],
        "kubejs:iron_rod", 1)

    alloy(
        ['reactive:quartz_bottle',
            'minecraft:glass_bottle'], [9, 9],
        'alchemygadgetry:potion_flask', 1)

    alloy(
	['minecraft:redstone', 
	'minecraft:coal', 
	'minecraft:emerald', 
	'minecraft:copper_ingot', 
	'minecraft:iron_ingot', 
	'minecraft:gold_ingot',
	'kubejs:rich_bone_meal'],[1,1,1,1,1,1,1], 'kubejs:ore_bone_meal', 1)



	alloy([
	'homespun:ironwood_wood',
	'integrateddynamics:crystalized_menril_chunk',
	'kubejs:processor',
	'integrateddynamics:logic_director',
	],[4,8,1,1],
	'integrateddynamics:menril_wood_stripped'
	,1)


	alloy(['tombstone:voodoo_poppet'],[1],'kubejs:omni',1)



	alloy(
	['minecraft:stick','minecraft:gold_nugget','minecraft:amethyst_shard'],
	[2,1,1],
	'ars_nouveau:dominion_wand',1)

	alloy(['#ironberry:ritual_tablets'],[1],'kubejs:ritual_tablet',1)

	alloy(['#ironberry:ars_arrows'],[1],'minecraft:arrow',16)

	alloy(['pipez:fluid_pipe', 'pipez:item_pipe', 'pipez:energy_pipe', 'pipez:gas_pipe', 'prettypipes:pressurizer'],[2,2,2,2,1],'pipez:universal_pipe',16)

	alloy(['twilightforest:lich_trophy'],[1],'kubejs:boss_trophy',1)
	
	alloy(['#ironberry:miniboss_trophy'],[1],'kubejs:miniboss_trophy',1)

	alloy(['minecraft:bone_block', 'minecraft:sculk'],[3,3],'minecraft:sculk_catalyst',1)
	
	alloy(['#quark:runes_lootable'],[1],'quark:blank_rune',1)
	alloy(['quark:rainbow_rune'],[1],'quark:blank_rune',1)
	
	
	alloy(['kubejs:ritual_tablet', 'kubejs:processor'],[1,1],'hostilenetworks:empty_prediction',16)

	alloy(['minecraft:stone_slab', 'minecraft:smooth_stone_slab', 'quark:blank_rune'],[1,1,1],'kubejs:ritual_tablet',8)


	alloy(['kubejs:patina', 'hostilenetworks:twilight_prediction'],[1,1],'hostilenetworks:empty_prediction',1)

	alloy(['pneumaticcraft:plastic', 'minecraft:redstone', 'pneumaticcraft:capacitor', 'pneumaticcraft:transistor'],[1,1,1,1],'pneumaticcraft:empty_pcb',4)
	
	alloy(['twilightforest:knightmetal_ingot', 'twilightforest:ironwood_ingot'],[1,1],'kubejs:pre_compressed',4)
	
	alloy(['pneumaticcraft:failed_pcb'],[1],'pneumaticcraft:empty_pcb',1)
	
	//alloy([],)
	
	alloy(['thermal:silver_ingot', 'minecraft:gold_ingot'],[1,1],'thermal:electrum_ingot',2)
	
	alloy(['minecraft:glowstone_dust', 'minecraft:grass'],[1,1],'minecraft:glow_lichen',2)

	alloy(['minecraft:coal','bluepower:teslatite_dust','minecraft:redstone'],[1,2,1],'bluepower:battery',2)

    alloy(['mekanism:dust_lithium'],[2],'nuclearcraft:lithium_ingot',1)

    alloy(['bluepower:blue_doped_wafer', 'bluepower:blue_alloy_ingot'],[2,1],'bluepower:solar_panel',4)

    alloy(['pipez:basic_upgrade'],[5],'pipez:improved_upgrade',1)
    alloy(['pipez:improved_upgrade'],[5],'pipez:advanced_upgrade',1)

    alloy(['minecraft:echo_shard'],[4],'minecraft:sculk',1)

    alloy(['minecraft:glow_ink_sac'],[1],'minecraft:ink_sac',1)

    alloy(['rootsclassic:verdant_sprig'],[1],'rootsclassic:old_root',1)

    alloy(['cyclic:carbon_paper', 'reactive:scroll', 'reactive:litmus_paper', 'quark:paper_wall_sakura'],[1,1,1,1],'kubejs:base_augment',2)

    alloy(['ten3:chlorium_dust'],[1],'ten3:chlorium_ingot',1)

        alloy(['minecraft:ender_pearl', 'rftoolsbase:dimensionalshard'],[1,1],'rftoolsbase:infused_enderpearl',1)

        alloy(['kubejs:base_module','rootsclassic:runic_tablet','rftoolsbase:machine_base'],[6,1,1],'rftoolsbase:tablet',1)


        alloy(["#ironberry:rftools_modules",'minecraft:stick'],[1,1],'kubejs:base_module',1)

        alloy(["#ironberry:rftools_machines",'minecraft:stick'],[1,1],'rftoolsbase:machine_frame',1)

        alloy(["#ironberry:rftools_plates",'minecraft:stick'],[1,1],'rftoolsbase:machine_base',1)

        alloy(["ironchest:wood_to_copper_chest_upgrade"],[1],"minecraft:iron_ingot",9)

        alloy(['compressium:cobblestone_1'],[1],'ae2:matter_ball',9)

        alloy(['rftoolsbase:information_screen', 'homespun:cast_iron_block', 'homespun:ceramic_vessel','thermal:tinker_bench'],[1,1,1,1],'ae2:chest',1)
        alloy(['rftoolsbase:information_screen', 'homespun:cast_iron_block', 'homespun:ceramic_vessel','essentials:hopper_filter'],[1,1,1,1],'ae2:cell_workbench',1)

        alloy(['bluepower:red_alloy_ingot', 'minecraft:quartz'],[1,4],'create:rose_quartz',4)
        alloy(['create:rose_quartz', 'bluepower:silicon_wafer'],[16,1],'create:polished_rose_quartz',16)

        alloy(['minecraft:andesite', 'create:zinc_nugget'],[1,1],'create:andesite_alloy',2)
        
    })
