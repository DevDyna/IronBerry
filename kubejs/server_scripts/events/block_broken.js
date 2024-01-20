//############################### CROOK WHITELIST ##########################//
BlockEvents.broken(event => {
    // let found = false
    if (event.player.mainHandItem.id === 'ordinarycrook:wooden_crook') {

        //leaves
        let one_found = Feach(event.block.id, data.block.leaves)

            //crops
           let two_found = Feach(event.block.id, data.block.crops)

            //result
            if (!(one_found || two_found)) { //wrong block
				ENotify(event, [Text.of("Action denied")], event.player.mainHandItem.id, '#FFFF33', '#009900', '#99FF33')
				event.cancel()
				setCancellationResult(true)
            }

    }

})
