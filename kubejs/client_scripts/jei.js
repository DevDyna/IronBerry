//priority 0
JEIEvents.hideItems(event => {

	event.hide(['#ironberry:disabled','#ironberry:hide'])
	
})

JEIEvents.information(event=>{
	event.addItem('#ironberry:blue_slabs','Can be created by placing on a crafting grid a saw and a solid block')
	event.addItem('minecraft:honeycomb','You can use a §6Hive Hopper §fto obtain §6honeycomb §fand §6honey §ffull automatic')
	event.addItem('thermal:device_hive_extractor','Extract §6honeycomb §fand §6honey §ffrom §6honey hives §fand §6bee hives')
	event.addItem('minecraft:lily_pad','You can obtain by placing water around a Growing Standing Stone')
	event.addItem('#rootsclassic:berries','You can obtain by break leaves')
	event.addItem('homespun:ironberries','You can obtain by break ironwood leaves')
	event.addItem('supplementaries:ash','§0Obtained by set on §cfire §0wood stuff')
	event.addItem('tombstone:magic_scroll','Can be obtained by right click with a strange scroll while a potion effect still active')
})

JEIEvents.hideFluids(event => {	
	event.hide(['#ironberry:disabled','#ironberry:hide'])
})

 
const $MekanismJEI = Java.loadClass('mekanism.client.jei.MekanismJEI')
JEIEvents.hideCustom(event => {
  //event.get($MekanismJEI.TYPE_GAS).hideAll()
  event.get($MekanismJEI.TYPE_INFUSION).hideAll()
  event.get($MekanismJEI.TYPE_PIGMENT).hideAll()
  event.get($MekanismJEI.TYPE_SLURRY).hideAll()
})

JEIEvents.addItems(event=>{
	event.add('mekanism:creative_fluid_tank')
	event.add('mekanism:creative_chemical_tank')
})