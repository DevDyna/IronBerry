ServerEvents.recipes(event => {

    event.custom({
        "type": "nuclearcraft:isotope_separator",
        "input": [
          {
            "count": 16,
            "item": 'minecraft:dirt'
          }
        ],
        "output": [
          {
            "count": 4,
            "item": 'kubejs:rich_bone_meal'
          },
          {
            "item": 'minecraft:clay_ball'
          }
        ],
        "powerModifier": global.nc.energy,
        "radiation": global.nc.rad,
        "timeModifier": global.nc.speed
      })


})
