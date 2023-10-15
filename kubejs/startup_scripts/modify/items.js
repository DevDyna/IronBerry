ItemEvents.modification(event => {

    event.modify('rootsclassic:fruit_salad', item => {
        item.foodProperties = food => {
            item.maxStackSize = 64
        }
    })
    event.modify('ordinarycrook:wooden_crook', item => {
        item.maxDamage = 2048
    })


  event.modify('nuclearcraft:dominos', item => {
    item.foodProperties = food => {
        food.hunger(20)
        food.saturation(20)
        food.fastToEat(true)
    }
  })

})
