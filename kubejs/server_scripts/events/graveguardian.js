//############################### GRAVE GUARDIAN ##########################//
BlockEvents.rightClicked((event) => {
    let item = event.getItem();
    let inv = event.player.inventory;
  
    if (inv.count(item) && event.player.mainHandItem == "kubejs:grave_spawn") {
      event.player.swing();
  
      if (!event.block.hasTag("ironberry:egg_blacklist")) {
        let compost = event.level.createEntity("tombstone:grave_guardian");
        compost.y = event.block.y + 1;
        compost.x = event.block.x + 0.5;
        compost.z = event.block.z + 0.5;
        compost.mergeNbt({});
        compost.spawn();
      }
  
      if (!event.player.isCreative()) {
        inv.extractItem(inv.find("kubejs:grave_spawn"), 1, false);
      }
    }
  });