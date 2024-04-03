StartupEvents.postInit(event =>{
    let $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
      let $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')
      $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('minecraft:apple', 'minecraft:carrot'))
      $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('minecraft:golden_apple', '#forge:stone'))
    })