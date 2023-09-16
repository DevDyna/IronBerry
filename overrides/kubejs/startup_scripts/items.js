StartupEvents.registry('item', event => {

    event.create('1_bit')
    .displayName('1 Bit')

    event.create('2_bit')
    .displayName('2 Bit')

    event.create('4_bit')
    .displayName('4 Bit')

    event.create('8_bit')
    .displayName('8 Bit')

    ////staff only
    event.create('wip')
    .texture('cofh_core:gui/icons/icon_cancel')
    .displayName('WorkInProgress')

    //thermal coins stacks
    event.create('bronze')
    .texture('ironberry:item/icon/bronze')

    event.create('copper')
    .texture('ironberry:item/icon/copper')

    event.create('iron')
    .texture('ironberry:item/icon/iron')

    event.create('lumium')
    .texture('ironberry:item/icon/lumium')

    event.create('signalum')
    .texture('ironberry:item/icon/signalum')

    event.create('tin')
    .texture('ironberry:item/icon/tin')

    event.create('gold')
    .texture('ironberry:item/icon/gold')


    event.create('rose')
    .texture('ironberry:item/rose')
    .displayName('Rose')



   /*  //elements
    let min = 0
        let max = 15
        for (let i = 0; i < 100; i++) {
			let hex = ''
            for (let j = 0; j < 6; j++) {
				
                let result = Math.floor(Math.random() * (max - min + 1)) + min
                    if (result > 9) {
                        switch (result) {
                        case 10:
                            result = 'A'
                                break
                            case 11:
                                result = 'B'
                                break
                            case 12:
                                result = 'C'
                                break
                            case 13:
                                result = 'D'
                                break
                            case 14:
                                result = 'E'
                                break
                            case 15:
                                result = 'F'
                                break
                        }

                    }
					
					hex = hex+result.toString()
            }
		console.log(i+' -> '+hex)
            event.create('element'+i)
            .texture('ironberry:item/essence')
            .displayName('Element '+hex)
            .color(0,parseInt('#'+hex))
        } */

        //gems
        event.create('alpha')
        .texture('ironberry:item/alpha')
        .displayName('Alpha')

        event.create('beta')
        .texture('ironberry:item/beta')
        .displayName('Beta')

        //grave guardian spawn
        event.create('grave_spawn')
        .texture('ironberry:item/grave_spawn_egg')
        .displayName('Grave Guardian Spawn Egg')


	    event.create('scroll')
    .texture('ironberry:item/scroll')
	.displayName('Null Scroll')
	
		    event.create('omni')
    .texture('ironberry:item/omni')
	.displayName('OmniTablet')

		    event.create('iron_rod')
    .texture('ironberry:item/iron_rod')
	.displayName('Iron Rod')
	
			    event.create('soul')
    .texture('ironberry:item/soul')
	.displayName('Soul jar')
					
					
	event.create('ice_shard')
	.texture('ironberry:item/ice_shard')
	.displayName('Ice Shard')
	
	event.create('ore_bone_meal')
	.texture('ironberry:item/ore_bone_meal')
	.displayName('Mineral Fertilizer')
	
	event.create('rich_bone_meal')
	.texture('ironberry:item/rich_bone_meal')
	.displayName('Rich Fertilizer')

	//temporarly added , maybe on a future will removed
	event.create('illuminati')
	.texture('ironberry:item/illuminati_yota')
	.displayName('Illuminati Yota')
	
	event.create('pre_compressed')
	.texture('ironberry:item/pre_compressed')
	.displayName('Precompressed Iron Ingot')
	
	event.create('scroll_safety')
	.texture('ironberry:item/scroll_a')
	.displayName('Scroll of Safety')
	
	event.create('scroll_discontinuity')
	.texture('ironberry:item/scroll_b')
	.displayName('Scroll of Discontinuity')
	
	
	event.create('raw_iron_nugget')
	.texture('ironberry:item/raw_iron_nugget')
	.displayName('Raw Iron Nugget')
	
		event.create('raw_gold_nugget')
	.texture('ironberry:item/raw_gold_nugget')
	.displayName('Raw Gold Nugget')
	
		event.create('raw_copper_nugget')
	.texture('ironberry:item/raw_copper_nugget')
	.displayName('Raw Copper Nugget')
	
	
			event.create('processor')
	.texture('ironberry:item/processor')
	.displayName('Menril MicroProcessor Chip')
	
})
