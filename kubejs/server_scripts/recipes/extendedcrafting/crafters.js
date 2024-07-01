ServerEvents.recipes(event=>{
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:redstone"
          },
          "B": {
            "item": "bluepower:red_alloy_ingot"
          },
          "C": {
            "item": "morered:red_alloy_ingot"
          },
          "D": {
            "item": "bluepower:red_doped_wafer"
          }
        },
        "result": {
          "item": 'extendedcrafting:redstone_ingot',
          "count":4
        }
      })
})