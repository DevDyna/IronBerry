JEIEvents.hideItems((event) => {
  event.hide(global.disabledItem);
  event.hide(global.clearNBT);
  event.hide(global.uselessItems);
});
JEIEvents.information((event) => {
  event.addItem(
    "#ironberry:blue_slabs",
    "Can be created by placing on a crafting grid a saw and a solid block"
  );
  event.addItem(
    "minecraft:honeycomb",
    "You can use a §6Hive Hopper §fto obtain §6honeycomb §fand §6honey §ffull automatic"
  );
  event.addItem(
    "thermal:device_hive_extractor",
    "Extract §6honeycomb §fand §6honey §ffrom §6honey hives §fand §6bee hives"
  );
  event.addItem(
    "minecraft:lily_pad",
    "You can obtain by placing water around a Growing Standing Stone"
  );
  event.addItem("#rootsclassic:berries", "You can obtain by break leaves");
  event.addItem(
    "homespun:ironberries",
    "You can obtain by break ironwood leaves"
  );
  event.addItem(
    "supplementaries:ash",
    "§0Obtained by set on §cfire §0wood stuff"
  );
  event.addItem(
    "tombstone:magic_scroll",
    "Can be obtained by right click with a strange scroll while a potion effect still active"
  );
  event.addItem(
    "#ironberry:patina_source",
    "When deoxidized can spawn some patina"
  );
});
// JEIEvents.hideFluids((event) => {
//   event.hide([
//     "mekanism:hydrogen",
//     "mekanism:oxygen",
//     "mekanism:chlorine",
//     "mekanism:sulfur_dioxide",
//     "mekanism:sulfur_trioxide",
//     "mekanism:sulfuric_acid",
//     "mekanism:hydrogen_chloride",
//     "mekanism:hydrofluoric_acid",
//     "mekanism:uranium_oxide",
//     "mekanism:uranium_hexafluoride",
//     "mekanism:ethene",
//     "mekanism:sodium",
//   ]);
// });
const $MekanismJEI = Java.loadClass("mekanism.client.jei.MekanismJEI");
JEIEvents.hideCustom((event) => {
  event.get($MekanismJEI.TYPE_GAS).hide(global.whitelistGasses);
  event.get($MekanismJEI.TYPE_INFUSION).hideAll();
  event.get($MekanismJEI.TYPE_PIGMENT).hideAll();
  event.get($MekanismJEI.TYPE_SLURRY).hideAll();
});
//show items without nbt
JEIEvents.addItems((event) => {
  global.clearNBT.forEach((item) => {
    event.add(item);
  });
});

// JEIEvents.hideItems(event => {
// 	global.uselessItems.forEach(item=>{
// 		event.hide(item)
// 	})
// })

// JEIEvents.hideFluids((event) => {
//   event.hideAll()
// });

JEIEvents.hideItems((event) => {
  event.hide(/nuclearcraft:(?:\w+_bucket)/);
});

JEIEvents.addItems((event) => {
  let list = [
    Item.of(
      "expatternprovider:infinity_cell",
      '{record:{"#c":"ae2:f",id:"pneumaticcraft:ethanol"}}'
    ),
    Item.of(
      "expatternprovider:infinity_cell",
      '{record:{"#c":"ae2:f",id:"pneumaticcraft:biodiesel"}}'
    ),
    Item.of(
      "expatternprovider:infinity_cell",
      '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'
    ),
    Item.of(
      "expatternprovider:infinity_cell",
      '{record:{"#c":"ae2:i",id:"minecraft:sand"}}'
    ),
    Item.of(
      "expatternprovider:infinity_cell",
      '{record:{"#c":"ae2:i",id:"minecraft:stone"}}'
    ),
    Item.of(
      "expatternprovider:infinity_cell",
      '{record:{"#c":"ae2:i",id:"minecraft:gravel"}}'
    ),
    Item.of(
      "expatternprovider:infinity_cell",
      '{record:{"#c":"ae2:i",id:"minecraft:dirt"}}'
    ),
    Item.of("ae2:facade", '{item:"minecraft:stone"}'),
    Item.of(
      "bluepower:half_block",
      '{block:"minecraft:stone",display:{Name:\'{"extra":[{"text":" "},{"translate":"block.bluepower.half_block"}],"translate":"block.minecraft.stone"}\'}}'
    ),
    Item.of(
      "bluepower:panel",
      '{block:"minecraft:stone",display:{Name:\'{"extra":[{"text":" "},{"translate":"block.bluepower.panel"}],"translate":"block.minecraft.stone"}\'}}'
    ),
    Item.of(
      "bluepower:cover",
      '{block:"minecraft:stone",display:{Name:\'{"extra":[{"text":" "},{"translate":"block.bluepower.cover"}],"translate":"block.minecraft.stone"}\'}}'
    ),

    Item.of("kubejs:scale", "{AugmentData:{BaseMod:16,MachineEnergy:1.5d}}"),
    Item.of("kubejs:powah", "{AugmentData:{RFMax:1250,RFXfer:32000}}"),
    Item.of("kubejs:sonic", "{AugmentData:{MachineEnergy:10,MachinePower:49}}"),
    Item.of(
      "kubejs:lucky",
      "{AugmentData:{MachineEnergy:2.5d,MachineSec:0.4d}}"
    ),
  ];
  list.forEach((element) => {
    event.add(element.strongNBT());
  });
});
