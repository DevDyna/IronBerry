ServerEvents.recipes(event => {
event.custom({
    "type": "nuclearcraft:assembler",
    "input": [
      {
        "count": 2,
        "item": 'pneumaticcraft:transistor'
      },
      {
        "count": 2,
        "item": 'pneumaticcraft:capacitor'
      },
      {
        "item": 'mekanism:block_steel'
      },
      {
        "item": 'pneumaticcraft:plastic'
      },
      {
        "item": 'pneumaticcraft:upgrade_matrix'
      },
      {
        "item": 'nuclearcraft:steel_frame'
      }
    ],
    "output": [
      {
        "count": 2,
        "item": 'mekanism:steel_casing'
      }
    ],
    "powerModifier": 1.0,
    "radiation": 0.0,
    "timeModifier": 1.0
  })









})