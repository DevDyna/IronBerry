ServerEvents.recipes(event => {
//transmutation
//
event.custom({
  "type": "reactive:transmutation",
  "reactant": {
    "item": "minecraft:ink_sac"
  },
  "product": {
    "item": "bluepower:teslatite_dust"
  },
  "reagents": ["reactive:caustic","reactive:soul"],
  "min": 100,
  "cost": 10
})
//
//
event.custom({
  "type": "reactive:transmutation",
  "reactant": {
    "item": "homespun:crushing_tub"
  },
  "product": {
    "item": "integrateddynamics:squeezer"
  },
  "reagents": ["reactive:mind","reactive:body","reactive:caustic","reactive:light","reactive:verdant","reactive:soul"],
  "min": 100,
  "cost": 50
})
//
//
event.custom({
  "type": "reactive:transmutation",
  "reactant": {
    "item": "homespun:evaporating_basin"
  },
  "product": {
    "item": "integrateddynamics:drying_basin"
  },
  "reagents": ["reactive:mind","reactive:body","reactive:caustic","reactive:light","reactive:verdant","reactive:soul"],
  "min": 100,
  "cost": 50
})
//
//
event.custom({
  "type": "reactive:transmutation",
  "reactant": {
    "item": "minecraft:iron_nugget"
  },
  "product": {
    "item": "reactive:quartz_bottle"
  },
  "reagents": ["reactive:mind","reactive:light"],
  "min": 100,
  "cost": 10
})
//
//
event.custom({
  "type": "reactive:transmutation",
  "reactant": {
    "item": "minecraft:poppy"
  },
  "product": {
    "item": "bluepower:indigo_flower"
  },
  "reagents": ["reactive:mind"],
  "min": 100,
  "cost": 10
})
//
//
event.custom({
  "type": "reactive:transmutation",
  "reactant": {
    "item": "minecraft:iron_ingot"
  },
  "product": {
    "item": "minecraft:copper_ingot"
  },
  "reagents": ["reactive:light"],
  "min": 100,
  "cost": 10
})
//
//
event.custom({
  "type": "reactive:transmutation",
  "reactant": {
    "item": "minecraft:copper_ingot"
  },
  "product": {
    "item": "bluepower:zinc_ingot"
  },
  "reagents": ["reactive:caustic"],
  "min": 100,
  "cost": 10
})
//
//
event.custom({
  "type": "reactive:transmutation",
  "reactant": {
    "item": "minecraft:copper_block"
  },
  "product": {
    "item": "minecraft:sculk"
  },
  "reagents": ["reactive:caustic","reactive:light"],
  "min": 100,
  "cost": 10
})
//
//
event.custom({
  "type": "reactive:transmutation",
  "reactant": {
    "item": "bluepower:teslatite_block"
  },
  "product": {
    "item": "minecraft:stone"
  },
  "reagents": ["reactive:body"],
  "min": 100,
  "cost": 10
})
//
//
event.custom({
  "type": "reactive:transmutation",
  "reactant": {
    "item": "bluepower:red_alloy_ingot"
  },
  "product": {
    "item": "minecraft:pointed_dripstone"
  },
  "reagents": ["reactive:verdant","reactive:body"],
  "min": 100,
  "cost": 10
})
//
//
})