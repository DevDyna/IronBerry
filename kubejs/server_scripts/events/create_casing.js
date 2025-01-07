//############################### CREATE OVERRIDE ##########################//
BlockEvents.rightClicked((event) => {
    if (event.item == "create:andesite_casing" && event.block == "create:shaft") {
      event.item.count--;
    }
  });
  
  BlockEvents.rightClicked((event) => {
    if (
      event.item == "create:wrench" &&
      event.player.isCrouching() &&
      event.block == "create:andesite_encased_shaft"
    ) {
      event.player.give("create:andesite_casing");
    }
  });