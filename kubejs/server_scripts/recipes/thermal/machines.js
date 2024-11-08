ServerEvents.recipes((event) => {
  data.recipes.induction.forEach((e) => {
    //[item_a, item_b, output, outcount]
    event.recipes.thermal.smelter([Item.of(e[1], e[2])],e[0]);
  });

let acidize = (input,output) =>
  event.recipes.thermal.bottler(Item.of(output),[Fluid.of('biomancy:acid',25),Item.of(input)])

acidize('extendedcrafting:ender_ingot','extendedcrafting:enhanced_ender_ingot')
acidize('extendedcrafting:redstone_ingot', 'extendedcrafting:enhanced_redstone_ingot')
});
