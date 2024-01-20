ItemEvents.modification(event => {

    event.modify('rootsclassic:fruit_salad', item => {
        item.foodProperties = food => {
            item.maxStackSize = 64
        }
    })

})
