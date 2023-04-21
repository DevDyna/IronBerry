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
event.shaped('1x pedestals:upgrade_pedestal_cobblegen', [
    'RGP',
    'GRP',
    'PPP'
  ], {
	P: 'minecraft:paper',
	G: 'minecraft:glowstone_dust',
	R: 'minecraft:redstone'
  })
//
//
//
event.shaped('16x minecraft:scaffolding', [
    'RSR',
    'R R',
    'R R'
  ], {
	S: 'minecraft:stick',
	R: 'minecraft:string'
  })
//
//
//
event.shaped('1x kubejs:blank', [
    'MMM',
    'MPM',
    'MMM'
  ], {
	M: 'prettypipes:blank_module',
	P: 'prettypipes:pipe'
  })
//
//
//
event.shaped('32x prettypipes:pipe', [
    'NNN',
    'GBG',
    'NNN'
  ], {
	B: 'prettypipes:blank_module',
	G: 'reactive:quartz_bottle',
	N: 'minecraft:iron_nugget'
  })
//
//
//
})