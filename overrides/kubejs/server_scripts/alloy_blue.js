ServerEvents.recipes(event => {
//alloy_smelting bluepower
//

/*----------------------------------------------------------------------------------------------*/
//111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
/*----------------------------------------------------------------------------------------------*/
let alloy_1 = (slot1,num1,output,outnum) => {event.custom({"type": "bluepower:alloy_smelting","ingredients": [{"item": slot1,"count": num1}],"result": {"item": output,"count": outnum}})//.id(RegN(slot1+'.'+output))
}
/*----------------------------------------------------------------------------------------------*/
//222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
/*----------------------------------------------------------------------------------------------*/
let alloy_2 = (slot1,num1,slot2,num2,	output,outnum) => {event.custom({"type": "bluepower:alloy_smelting","ingredients": [{"item": slot1,"count": num1},{"item": slot2,"count": num2} ],"result": {"item": output,"count": outnum}})//.id(RegN(slot1+slot2+'.'+output)) 
}
/*----------------------------------------------------------------------------------------------*/
//333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
/*----------------------------------------------------------------------------------------------*/
let alloy_3 = (slot1,num1,slot2,num2,slot3,num3,	output,outnum) => {event.custom({"type": "bluepower:alloy_smelting","ingredients": [{"item": slot1,"count": num1},{"item": slot2,"count": num2},{"item": slot3,"count": num3} ],"result": {"item": output,"count": outnum}})//.id(RegN(slot1+slot2+slot3+'.'+output))
}
/*----------------------------------------------------------------------------------------------*/
//444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
/*----------------------------------------------------------------------------------------------*/
let alloy_4 = (slot1,num1,slot2,num2,slot3,num3,slot4,num4,	output,outnum) => {event.custom({"type": "bluepower:alloy_smelting","ingredients": [{"item": slot1,"count": num1},{"item": slot2,"count": num2},{"item": slot3,"count": num3},{"item": slot4,"count": num4} ],"result": {"item": output,"count": outnum}})//.id(RegN(slot1+slot2+slot3+slot4+'.'+output)) 
}
/*----------------------------------------------------------------------------------------------*/
//555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
/*----------------------------------------------------------------------------------------------*/
let alloy_5 = (slot1,num1,slot2,num2,slot3,num3,slot4,num4,slot5,num5,	output,outnum) => {event.custom({"type": "bluepower:alloy_smelting","ingredients": [{"item": slot1,"count": num1},{"item": slot2,"count": num2},{"item": slot3,"count": num3},{"item": slot4,"count": num4},{"item": slot5,"count": num5} ],"result": {"item": output,"count": outnum}})//.id(RegN(slot1+slot2+slot3+slot4+slot5+'.'+output))
}
/*----------------------------------------------------------------------------------------------*/
//666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
/*----------------------------------------------------------------------------------------------*/
let alloy_6 = (slot1,num1,slot2,num2,slot3,num3,slot4,num4,slot5,num5,slot6,num6,	output,outnum) => {event.custom({"type": "bluepower:alloy_smelting","ingredients": [{"item": slot1,"count": num1},{"item": slot2,"count": num2},{"item": slot3,"count": num3},{"item": slot4,"count": num4},{"item": slot5,"count": num5},{"item": slot6,"count": num6} ],"result": {"item": output,"count": outnum}})//.id(RegN(slot1+slot2+slot3+slot4+slot5+slot6+'.'+output)) 
}
/*----------------------------------------------------------------------------------------------*/
//777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
/*----------------------------------------------------------------------------------------------*/
let alloy_7 = (slot1,num1,slot2,num2,slot3,num3,slot4,num4,slot5,num5,slot6,num6,slot7,num7,	output,outnum) => {event.custom({"type": "bluepower:alloy_smelting","ingredients": [{"item": slot1,"count": num1},{"item": slot2,"count": num2},{"item": slot3,"count": num3},{"item": slot4,"count": num4},{"item": slot5,"count": num5},{"item": slot6,"count": num6},{"item": slot7,"count": num7} ],"result": {"item": output,"count": outnum}})//.id(RegN(slot1+slot2+slot3+slot4+slot5+slot6+slot7+'.'+output))
}
/*----------------------------------------------------------------------------------------------*/
//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
/*----------------------------------------------------------------------------------------------*/
let alloy_8 = (slot1,num1,slot2,num2,slot3,num3,slot4,num4,slot5,num5,slot6,num6,slot7,num7,slot8,num8,	output,outnum) => {event.custom({"type": "bluepower:alloy_smelting","ingredients": [{"item": slot1,"count": num1},{"item": slot2,"count": num2},{"item": slot3,"count": num3},{"item": slot4,"count": num4},{"item": slot5,"count": num5},{"item": slot6,"count": num6},{"item": slot7,"count": num7},{"item": slot8,"count": num8} ],"result": {"item": output,"count": outnum}})//.id(RegN(slot1+slot2+slot3+slot4+slot5+slot6+slot7+slot8+'.'+output))
}
/*----------------------------------------------------------------------------------------------*/
//999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
/*----------------------------------------------------------------------------------------------*/
let alloy_9 = (slot1,num1,slot2,num2,slot3,num3,slot4,num4,slot5,num5,slot6,num6,slot7,num7,slot8,num8,slot9,num9,	output,outnum) => {event.custom({"type": "bluepower:alloy_smelting","ingredients": [{"item": slot1,"count": num1},{"item": slot2,"count": num2},{"item": slot3,"count": num3},{"item": slot4,"count": num4},{"item": slot5,"count": num5},{"item": slot6,"count": num6},{"item": slot7,"count": num7},{"item": slot8,"count": num8},{"item": slot9,"count": num9} ],"result": {"item": output,"count": outnum}})//.id(RegN(slot1+slot2+slot3+slot4+slot5+slot6+slot7+slot8+slot9+'.'+output))
}
/*----------------------------------------------------------------------------------------------*/



//
//alloy_<slots> (
//<slot1>,<count1>,
//..
//<result>,<count>
//)
//

alloy_2(
'minecraft:coal',2,
'minecraft:raw_iron',4,
'minecraft:iron_ingot',1
)

alloy_9(
'minecraft:iron_block',1,
'minecraft:iron_block',1,
'minecraft:iron_block',1,
'minecraft:iron_block',1,
'minecraft:iron_block',1,
'minecraft:iron_block',1,
'minecraft:iron_block',1,
'minecraft:iron_block',1,
'minecraft:iron_block',1,
'homespun:cast_iron_block',1
)

alloy_9(
'minecraft:iron_ingot',1,
'minecraft:iron_ingot',1,
'minecraft:iron_ingot',1,
'minecraft:iron_ingot',1,
'minecraft:iron_ingot',1,
'minecraft:iron_ingot',1,
'minecraft:iron_ingot',1,
'minecraft:iron_ingot',1,
'minecraft:iron_ingot',1,
'ironchest:wood_to_copper_chest_upgrade',1
)

alloy_2(
'bluepower:teslatite_dust',4,
'minecraft:iron_ingot',2,
'bluepower:blue_alloy_ingot',1
)

alloy_2(
'bluepower:brass_ingot',4,
'bluepower:purple_alloy_ingot',1,
'pneumaticcraft:ingot_iron_compressed',1
)

alloy_2(
'bluepower:blue_doped_wafer',1,
'bluepower:red_doped_wafer',1,
'prettypipes:blank_module',64
)

alloy_3(
'minecraft:crafting_table',1,
'bluepower:auto_project_table',1,
'kubejs:blank',1,
'prettypipes:crafting_terminal',1
)

alloy_9(
'homespun:ironwood_log',64,
'homespun:ironwood_log',64,
'homespun:ironwood_log',64,
'homespun:ironwood_log',64,
'homespun:ironwood_log',64,
'homespun:ironwood_log',64,
'homespun:ironwood_log',64,
'homespun:ironwood_log',64,
'homespun:ironwood_log',64,
'homespun:ironwood_wood',1
)

})