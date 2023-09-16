//############################### CROOK WHITELIST ##########################//
BlockEvents.broken(event => {
    // let found = false
    if (event.player.mainHandItem.id === 'ordinarycrook:wooden_crook') {

        //leaves
        let found = Feach(event.block.id, data.block.leaves)

            //crops
            found = Feach(event.block.id, data.block.crops)

            //result
            if (!found) { //wrong block
                event.cancel()
				setCancellationResult(true)
            }

    }

})
