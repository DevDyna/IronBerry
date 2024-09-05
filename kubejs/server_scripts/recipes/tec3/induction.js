ServerEvents.recipes(event=>{
    event.custom({
        "type": "ten3:induction_furnace",
        "inputs": [
          {
            "form": "item",
            "type": "static",
            "key": "ten3:pipe"
          },
          {
            "form": "item",
            "type": "tag",
            "key": "forge:dusts/powered_tin"
          }
        ],
        "outputs": [
          {
            "form": "item",
            "key": "ten3:pipe_white"
          }
        ],
        "time": 50
      })
})