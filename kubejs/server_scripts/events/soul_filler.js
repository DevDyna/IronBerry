//############################### SOUL FILLER ##########################//
BlockEvents.rightClicked((event) => {
    if (
      Feach(event.block, data.block.tombstone) &&
      event.player.mainHandItem.id === "kubejs:soul"
    ) {
      event.player.swing();
  
      let $facing = event.block.properties.get("facing");
      let $is_engraved = event.block.properties.get("is_engraved");
      let $model_texture = event.block.properties.get("model_texture");
      let $waterlogged = event.block.properties.get("waterlogged");
      let $soul_type = "";
  
      if (event.block.properties.get("soul_type") === "weak") {
        $soul_type = "none";
      }
  
      if (event.block.properties.get("soul_type") === "strong") {
        $soul_type = "weak";
      }
  
      if ($soul_type != "") {
        event.block.set(event.block.id, {
          soul_type: $soul_type,
          waterlogged: $waterlogged,
          facing: $facing,
          is_engraved: $is_engraved,
          model_texture: $model_texture,
        });
        Utils.server.runCommandSilent(
          `/particle minecraft:witch ${event.block.x} ${event.block.y + 1} ${
            event.block.z
          } 0 0 0 0.5 100`
        );
        let inv = event.player.inventory;
        if (!event.player.isCreative()) {
          inv.extractItem(inv.find("kubejs:soul"), 1, false);
        }
        event.player.give("tombstone:soul_receptacle");
      }
    }
  });