BlockEvents.modification( event => {
	
event.modify('craftingstation:crafting_station', block => {block.destroySpeed = 0.5})
event.modify('craftingstation:crafting_station_slab', block => {block.destroySpeed = 0.5})



})