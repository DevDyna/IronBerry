JEIEvents.hideItems(event => {
    event.hide(global.disabledItem)
	event.hide(global.hiddenItems)
})
JEIEvents.information(event => {
    event.addItem('#ironberry:blue_slabs', 'Can be created by placing on a crafting grid a saw and a solid block')
    event.addItem('minecraft:honeycomb', 'You can use a §6Hive Hopper §fto obtain §6honeycomb §fand §6honey §ffull automatic')
    event.addItem('thermal:device_hive_extractor', 'Extract §6honeycomb §fand §6honey §ffrom §6honey hives §fand §6bee hives')
    event.addItem('minecraft:lily_pad', 'You can obtain by placing water around a Growing Standing Stone')
    event.addItem('#rootsclassic:berries', 'You can obtain by break leaves')
    event.addItem('homespun:ironberries', 'You can obtain by break ironwood leaves')
    event.addItem('supplementaries:ash', '§0Obtained by set on §cfire §0wood stuff')
    event.addItem('tombstone:magic_scroll', 'Can be obtained by right click with a strange scroll while a potion effect still active')
	event.addItem('#ironberry:patina_source','When deoxidized can spawn some patina')
})
JEIEvents.hideFluids(event => {
    event.hide(['mekanism:hydrogen', 'mekanism:oxygen', 'mekanism:chlorine', 'mekanism:sulfur_dioxide', 'mekanism:sulfur_trioxide', 'mekanism:sulfuric_acid', 'mekanism:hydrogen_chloride', 'mekanism:hydrofluoric_acid', 'mekanism:uranium_oxide', 'mekanism:uranium_hexafluoride', 'mekanism:ethene', 'mekanism:sodium', ])



})
const $MekanismJEI = Java.loadClass('mekanism.client.jei.MekanismJEI')
JEIEvents.hideCustom(event => {

    event.get($MekanismJEI.TYPE_GAS).hide(global.whitelistGasses)
    event.get($MekanismJEI.TYPE_INFUSION).hideAll()
    event.get($MekanismJEI.TYPE_PIGMENT).hideAll()
    event.get($MekanismJEI.TYPE_SLURRY).hideAll()
})
	//show items without nbt
JEIEvents.addItems(event => {
	global.hiddenItems.forEach(item=>{
	event.add(item)	
	})
})

JEIEvents.hideItems(event => {
	global.uselessItems.forEach(item=>{
		event.hide(item)
	})
	
	
})