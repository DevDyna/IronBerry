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
  "reagents": ["reactive:mind","reactive:light"],
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
})