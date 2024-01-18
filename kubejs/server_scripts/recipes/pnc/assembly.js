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
            "nbt": '{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"minecraft:player_head",tag:{SkullOwner:"DevDyna"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}'
        }
    })
    //-----------------------------------------------------------------------------------------------------------//
    //-----------------------------------------------------------------------------------------------------------//
    function drill(input, output, count) {
        //drill recipe with sequential laser recipe will automatly unified as drill input = laser output!
        event.custom({
            "type": "pneumaticcraft:assembly_drill",
            "input": ItemOrTag(input),
            "program": "drill",
            "result": ItemAndCount(output, count)
        }).id(RegX(input + "_" + output + "_" + count))
    }
    function laser(input, output, count) {
        event.custom({
            "type": "pneumaticcraft:assembly_laser",
            "input": ItemOrTag(input),
            "program": "laser",
            "result": ItemAndCount(output, count)
        }).id(RegX(input + "_" + output + "_" + count))
    }
	//-----------------------------------------------------------------------------------------------------------//
	
	laser('#minecraft:logs_that_burn',"supplementaries:ash",16)
	drill("supplementaries:ash","minecraft:gold_nugget",1)
	


    })
