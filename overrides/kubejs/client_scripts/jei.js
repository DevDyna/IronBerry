JEIEvents.hideItems(event => {

	event.hide(['#ironberry:disabled','#ironberry:hide'])
})

JEIEvents.information(event=>{
	event.addItem('#ironberry:blue_slabs','Can be created by placing on a crafting grid a saw and a solid block')
	event.addItem('minecraft:honeycomb','You can use a §6Hive Hopper §fto obtain §6honeycomb §fand §6honey §ffull automatic')
	event.addItem('thermal:device_hive_extractor','Extract §6honeycomb §fand §6honey §ffrom §6honey hives §fand §6bee hives')
	event.addItem('minecraft:lily_pad','You can obtain by placing water around a Growing Standing Stone')
})

/* JEIEvents.hideFluids(event => {

	event.hide(['#ironberry:disabled','#ironberry:hide'])
})
 */