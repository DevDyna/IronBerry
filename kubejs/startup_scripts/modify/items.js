ItemEvents.modification(event => {

    event.modify('rootsclassic:fruit_salad', item => {
            item.maxStackSize = 64

    })
	
	event.modify('homespun:ironberry_juice_bottle',item=>{
		item.maxStackSize = 64
	})

    event.modify('rootsclassic:rooty_stew',item=>{
		item.maxStackSize = 64
	})
    


})
