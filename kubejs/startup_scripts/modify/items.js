ItemEvents.modification(event => {

    event.modify('rootsclassic:fruit_salad', item => {
            item.maxStackSize = 64
			item.foodProperties = food => {
				food.fastToEat(true)
			}
    })
	
	event.modify('homespun:ironberry_juice_bottle',item=>{
		item.maxStackSize = 64
	})

    event.modify('rootsclassic:rooty_stew',item=>{
		item.maxStackSize = 64
		item.foodProperties = food => {
			food.hunger(20)
			food.saturation(1)
			food.fastToEat(true)
		}
	})
    
	event.modify('minecraft:bread',item=>{
		item.foodProperties = food => {
			food.hunger(10)
			food.saturation(2)
			food.fastToEat(true)
		}
	})


})
