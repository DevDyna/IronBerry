//priority 999
// to remake
function reactive(event, tag) {
    if (tag) {
        //tag form
        return (
            input, output,
            reagents, min, cost) => {
            event.custom({
                "type": "reactive:transmutation",
                "reactant": {
                    "tag": input
                },
                "product": {
                    "item": output
                },
                "reagents": reagents,
                "min": min,
                "cost": cost
            }).id(RegX(input + "_" + output))
        }
    } else {
        //item form
        return (
            input, output,
            reagents, min, cost) => {
            event.custom({
                "type": "reactive:transmutation",
                "reactant": {
                    "item": input
                },
                "product": {
                    "item": output
                },
                "reagents": reagents,
                "min": min,
                "cost": cost
            }).id(RegX(input + "_" + output))
        }
    }
}
try {
/*     ServerEvents.tags('item', event => {

        let l_items = [
            'tombstone:decorative_graves',
            'tombstone:magic_tablets',
        ]

        for (let i = 0; i < l_items.length; i++) {
            event.get(l_items[i]).getObjectIds().forEach(item => {
                items[i].push(item)
            })
        }
    }) */
/*     ServerEvents.tags('block', event => {

        let l_blocks = [
            'minecraft:leaves',
            'minecraft:crops',
        ]

        for (let i = 0; i < l_blocks.length; i++) {

            event.get(l_blocks[i]).getObjectIds().forEach(block => {
                blocks[i].push(block)
            })

        }
    }) */
} catch (error) {}
//tombstone soul_type
function soultype(event, type) {
    Utils.server.runCommandSilent(`/setblock ${event.block.x} ${event.block.y} ${event.block.z} ${event.block.id}[soul_type= ${type} ]`)
    Utils.server.runCommandSilent(`/particle minecraft:witch ${event.block.x} ${event.block.y+1} ${event.block.z} 0 0 0 0.5 100`)
    let inv = event.player.inventory
        if (!event.player.isCreative()) {
            inv.extractItem(inv.find('kubejs:soul'), 1, false)
        }
        event.player.give('tombstone:soul_receptacle')

}