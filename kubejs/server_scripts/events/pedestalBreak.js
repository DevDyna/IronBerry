//############################### pedestal break shortcut ##########################//
BlockEvents.rightClicked((event) => {
    if (
      event.item.hasTag("forge:tools/pickaxes") &&
      event.block.hasTag("ironberry:pedestals")
    ) {
      if (event.item.getMaxDamage() == event.item.getDamageValue()) {
        event.player.inventory.extractItem(
          event.player.inventory.find(event.item.id),
          1,
          false
        );
      } else {
        event.item.setDamageValue(event.item.getDamageValue() + 1);
      }
      event.level.destroyBlock(event.block.pos,true,event.player)
    }
  });