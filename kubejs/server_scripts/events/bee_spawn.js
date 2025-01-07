//############################### BEE SPAWN ##########################//
BlockEvents.rightClicked((event) => {
    let item = event.getItem();
    let inv = event.player.inventory;
  
    if (inv.count(item) && event.player.mainHandItem == "kubejs:standard_drone") {
      event.player.swing();
  
      if (!event.block.hasTag("ironberry:egg_blacklist")) {
        let compost = event.level.createEntity("minecraft:bee");
        compost.y = event.block.y + 1;
        compost.x = event.block.x + 0.5;
        compost.z = event.block.z + 0.5;
        compost.mergeNbt({});
        compost.spawn();
      }
  
      if (!event.player.isCreative()) {
        inv.extractItem(inv.find("kubejs:standard_drone"), 1, false);
      }
    }
  });