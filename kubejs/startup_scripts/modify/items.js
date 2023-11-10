ItemEvents.modification(event => {

    event.modify('rootsclassic:fruit_salad', item => {
        item.foodProperties = food => {
            item.maxStackSize = 64
        }
    })
    event.modify('ordinarycrook:wooden_crook', item => {
        item.maxDamage = 2048
    })

})
