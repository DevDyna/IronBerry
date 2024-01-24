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
    function drill_laser(input, middle, middle_count, output, output_count) {
        drill(input, middle, middle_count)
        laser(middle, output, output_count)
    }
    //-----------------------------------------------------------------------------------------------------------//

    laser('#minecraft:logs_that_burn', "supplementaries:ash", 16)
    drill("supplementaries:ash", "minecraft:gold_nugget", 4)

    drill_laser('pneumaticcraft:empty_pcb', 'pneumaticcraft:unassembled_pcb', 1, 'pneumaticcraft:printed_circuit_board', 1)

    laser('pneumaticcraft:upgrade_matrix', 'minecraft:lapis_lazuli', 16)

    drill_laser('homespun:ironberries', 'homespun:tiny_iron_dust', 4, 'minecraft:raw_iron', 4)

    drill_laser('minecraft:raw_copper', 'kubejs:patina', 12, 'homespun:copper_nugget', 3)

    laser('minecraft:sand', 'minecraft:red_sand', 1)

    drill_laser('minecraft:iron_ingot', 'thermal:silver_ingot', 1, 'thermal:lead_ingot', 1)

    laser('kubejs:solidified_resin', 'nuclearcraft:bioplastic', 2)

})
