ServerEvents.recipes(event => {
////recipe removed
//by output
//
event.remove({ output: [
						'homespun:crushing_tub',
						'homespun:salt',
						'minecraft:campfire',
						'ceramicbucket:ceramic_bucket',
						'reactive:scroll',
						'integrateddynamics:drying_basin',
						'integrateddynamics:squeezer',
						'pedestals:upgrade_pedestal_cobblegen',
						'#thermal:machines',
						'#thermal:devices',
						'#thermal:servo',
						'angelblockrenewed:angel_block',
						'angelring:angel_ring',
						'#forge:coins',
						]})
//
//
//by input
//
event.remove({ input: [
						'homespun:crushing_tub',
						'homespun:tiny_iron_dust',
						'#forge:coins',
						]})
//
//
//by recipe-id
//
event.remove({ id: 'homespun:crushing_flint_from_gravel'})
event.remove({ id: 'homespun:crushing_sugar_from_beets'})
event.remove({ id: 'homespun:crushing_ironberry_juice_from_ironberries'})
event.remove({ id: 'homespun:evaporating_tiny_iron_dust_from_ironberry_juice'})
event.remove({ id: 'homespun:crushing_tiny_iron_dust_from_raw_iron'})
event.remove({ id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'})
event.remove({ id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
event.remove({ id: 'pedestals:pedestals/pedestal_stone'})
event.remove({ id: 'minecraft:raw_iron' })
//
//
//by type-id
//
//
event.remove({ type: 'pedestals:cobblegen' })
//
//
//by mod-id
//
//
event.remove({ mod: 'prettypipes' })
})