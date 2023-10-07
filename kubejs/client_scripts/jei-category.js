	const $VanillaTypes = Java.loadClass('mezz.jei.api.constants.VanillaTypes')
    const $IRecipeLayoutBuilder = Java.loadClass('mezz.jei.api.gui.builder.IRecipeLayoutBuilder')
    const $IDrawable = Java.loadClass('mezz.jei.api.gui.drawable.IDrawable')
    const $IGuiHelper = Java.loadClass('mezz.jei.api.helpers.IGuiHelper')
    const $IFocusGroup = Java.loadClass('mezz.jei.api.recipe.IFocusGroup')
    const $RecipeIngredientRole = Java.loadClass('mezz.jei.api.recipe.RecipeIngredientRole')
    const $RecipeType = Java.loadClass('mezz.jei.api.recipe.RecipeType')
    const $IRecipeCategory = Java.loadClass('mezz.jei.api.recipe.category.IRecipeCategory')

    /* import net.minecraft.network.chat.Component;
    import net.minecraft.resources.ResourceLocation;
    import net.minecraft.world.item.ItemStack; */
	
	//let UID = new ResourceLocation("kubejs", "gem_infusing");

    //let TEXTURE = new ResourceLocation("kubejs", "textures/gui/gem_infusing_station_gui.png");

    //private final IDrawable background;
   // private final IDrawable icon;

	$IGuiHelper.background = $IGuiHelper.helper.createDrawable(TEXTURE, 0, 0, 176, 85);
    $IGuiHelper.icon = $IGuiHelper.helper.createDrawableIngredient(VanillaTypes.ITEM_STACK, new ItemStack("minecraft:stone"));

        //$RecipeType.JEIKubePlugin.INFUSION_TYPE;


	$IGuiHelper.Title.Component.literal("Gem Infusing Station")
	
/*     public Component getTitle() {
        return Component.literal("Gem Infusing Station");
    } */


/*     public IDrawable getBackground() {
        return this.background;
    }


    public IDrawable getIcon() {
        return this.icon;
    } */


        $IRecipeLayoutBuilder.builder.addSlot(RecipeIngredientRole.INPUT, 86, 15).addIngredients(recipe.getIngredients().get(0));

        $IRecipeLayoutBuilder.builder.addSlot(RecipeIngredientRole.OUTPUT, 86, 60).addItemStack(recipe.getResultItem());
