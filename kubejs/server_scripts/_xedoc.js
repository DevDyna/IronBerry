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