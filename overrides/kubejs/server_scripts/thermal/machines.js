ServerEvents.recipes(event => {
	
let bottler = (input,amount_input,fluid,amount_fluid,output,amount_output,rf) => {event.custom({"type": "thermal:bottler","ingredients": [{"item": input,"count": amount_input},{"fluid": fluid,"amount": amount_fluid}],"result": [{"item": output ,"count": amount_output}],"energy": rf})}

bottler(
"minecraft:stone",10,
"minecraft:lava",10,
"minecraft:cobblestone",10,
10
)





	
})








