ServerEvents.recipes(event => {
//-----------------------------------------------------------------------------------------------------------//
    event.custom({
        "type": "pneumaticcraft:assembly_drill",
        "input": {
            "item": "supplementaries:present"
        },
        "program": "drill",
        "result": {
            "item": "tombstone:gift",
            "nbt": {
				Items:[
				{Count:1,id:"tombstone:gift",tag:{
					Items:[
					{Count:1,id:"tombstone:gift",tag:{
						Items:[
						{Count:1,id:"tombstone:gift",tag:{
							Items:[
							{Count:1,id:"tombstone:gift",tag:{
								Items:[
								{Count:1,id:"tombstone:gift",tag:{
									Items:[
									{Count:1,id:"tombstone:gift",tag:{
										Items:[
										{Count:1,id:"tombstone:gift",tag:{
											Items:[
											{Count:1,id:"tombstone:gift",tag:{
												Items:[
												{Count:1,id:"tombstone:gift",tag:{
													Items:[
													{Count:1,id:"tombstone:gift",tag:{
														Items:[
														{Count:1,id:"minecraft:player_head",tag:{SkullOwner:"DevDyna"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}
        }
    })
//-----------------------------------------------------------------------------------------------------------//
	    event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
            "tag": 'minecraft:logs_that_burn'
        },
        "program": "laser",
        "result": {
            "item": "supplementaries:ash",
			"count":16
			}
    })
//-----------------------------------------------------------------------------------------------------------//
	    event.custom({
        "type": "pneumaticcraft:assembly_drill",
        "input": {
            "item": "supplementaries:ash"
        },
        "program": "drill",
        "result": {
            "item": "minecraft:gold_nugget"
			}
    })
//-----------------------------------------------------------------------------------------------------------//















})
