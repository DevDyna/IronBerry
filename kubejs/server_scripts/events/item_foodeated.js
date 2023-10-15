ItemEvents.foodEaten('nuclearcraft:dominos',event=>{
	
	if(rnd_booldozer(0,128)){
		event.player.tell(Text.of("Paul joined the game only to eat your dominos!").yellow())
	}
	
})