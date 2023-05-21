ServerEvents.loaded((event) => {
    event.server.runCommandSilent('reload')
})

ServerEvents.recipes(event => {
	//TODO
    event.shapeless('1x ae2:controller', ['minecraft:cactus', 'minecraft:cactus']).stage('controller')

    /*     const $CraftingRecipe = Java.loadClass('net.minecraft.world.item.crafting.CraftingRecipe')
    function addStageByMod(stage, modid) {
    event.forEachRecipe({ mod: modid }, recipe => {
    if (recipe.originalRecipe instanceof $CraftingRecipe) {
    recipe.stage(stage)
    }
    })
    } */

    //addStageByMod("storage_drawers", "storagedrawers")

})
