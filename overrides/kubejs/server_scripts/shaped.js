ServerEvents.recipes(event => {
//shaped
event.shaped('1x homespun:crushing_tub', [
    '   ',
    'P P',
    'PBP'
  ], {
    B: 'minecraft:bowl',
    P: '#minecraft:planks'
  })
//
//
//
event.shaped('1x minecraft:raw_iron', [
    'III',
    'III',
    'III'
  ], {
    I: 'homespun:tiny_iron_dust'
  })
//
//
//
event.shaped('1x reactive:scroll', [
    'DPG',
    'RPR',
    'IPD'
  ], {
    I: 'minecraft:ink_sac',
	G: 'minecraft:glow_ink_sac',
	D: 'minecraft:glowstone_dust',
	R: 'minecraft:redstone',
    P: 'minecraft:paper'
  })
//
//
//


})