//############################### BEE .NET ##########################//
ItemEvents.entityInteracted("kubejs:net", (event) => {
    const { hand, player, target } = event;
    if (player.getItemInHand(hand).id != "kubejs:net") return;
  
    player.swing();
    if (target.type !== "minecraft:bee") return;
  
    player.spawnItemParticles("minecraft:cobweb", 2);
    target.spawnItemParticles("minecraft:honeycomb", 8);
    target.block.popItem(Item.of("kubejs:bee", target.nbt));
    target.setRemoved("killed");
  });