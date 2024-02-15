ServerEvents.recipes(event => {

    function reactor(input,out){
        event.custom({
            "type": "nuclearcraft:fission_reactor_controller",
            "input": [
              {
                "item": input
              }
            ],
            "output": [
              {
                "item": out
              }
            ],
            "powerModifier": (global.nc.energy),
            "radiation": (global.nc.rad),
            "timeModifier": (global.nc.speed)
          }) 
    }
   
    //fission()
    
})

