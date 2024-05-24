//############################### STRANGE SCROLL TO EFFECT SCROLL ##########################//
ItemEvents.rightClicked("tombstone:strange_scroll", (event) => {
  let potion = event.player.getPotionEffects().getActive();
  let inv = event.player.inventory;
  if (potion.toString() != "[]") {
    event.player.swing();
    if (!event.player.isCreative()) {
      inv.extractItem(inv.find("tombstone:strange_scroll"), 1, false);
    }
    let level = 0;
    let effect = doublewall(
      potion.toString(),
      "[effect.",
      ", Duration"
    ).replace(".", ":"); //define effect cut

    if (effect.indexOf(" x ") != -1) {
      level = parseInt(
        effect.substring(effect.indexOf(" x ")).replace(" x ", "")
      ); //numeric level extractor
      effect = effect.substring(0, effect.indexOf(" x ")); //cut garbage chars
      level--;
    }
    event.player.give(
      Item.of(
        `tombstone:magic_scroll`,
        `{magic_effect:{amplifier:${level}b,id:"${effect}"}}`
      )
    );
    event.player.removeEffect(effect);
    Utils.server.runCommandSilent(
      `/execute at ${event.player.uuid} run particle minecraft:witch ~ ~ ~ 1 1 1 0.01 100`
    );
  }
});
//############################### TABLET DISABLET ##########################//
ItemEvents.rightClicked("tombstone:lost_tablet", (event) => {
  ENotify(
    event,
    [Text.of("Disabled by DevDyna")],
    "tombstone:textures/item/lost_tablet.png",
    "#0009FF",
    "#03CDFF",
    "#039BFF"
  );
  event.player.addItemCooldown(event.item, 200);
  event.cancel();
  setCancellationResult(true);
});

ItemEvents.rightClicked("tombstone:tablet_of_cupidity", (event) => {
  ENotify(
    event,
    [Text.of("Disabled by DevDyna")],
    "tombstone:textures/item/lost_tablet.png",
    "#0009FF",
    "#03CDFF",
    "#039BFF"
  );
  event.player.addItemCooldown(event.item, 200);
  event.cancel();
  setCancellationResult(true);
});
//############################### ILLUMINATI! ##########################//
ItemEvents.rightClicked("kubejs:illuminati", (event) => {
  try {
    if (
      event.player.inventory.getItem(
        event.player.inventory.find("tiab:time_in_a_bottle")
      ) == "tiab:time_in_a_bottle"
    ) {
      event.player.swing();
      if (!event.player.isCreative())
        event.player.addItemCooldown(event.item, 200);
      let random = 0;
      if (rnd(0, 10) == 0) {
        random = rnd(12000, 48000);

        let min = Math.floor(Math.floor(random / 20) / 60);
        let sec = Math.floor(
          Math.floor(random / 20) - Math.floor(random / 60 / 20) * 60
        );
        if (sec <= 9) {
          sec = "0" + sec;
        }
        let star = String.fromCharCode(9733);
        event.player.notify(
          Notification.make((e) => {
            e.text = [
              Text.of(star).gold(),
              " Added " + min + ":" + sec + "! ",
              Text.of(star).gold(),
            ];
            e.outlineColor = "#016055";
            e.backgroundColor = "#40E862";
            e.borderColor = "#267623";
          })
        );

        Utils.server.runCommandSilent(
          `/execute at ${event.player.uuid} run playsound inventorypets:illuminati_confirmed block @p ~ ~ ~`
        );
      }
      if (random == 0) {
        Utils.server.runCommandSilent(
          `/execute at ${event.player.uuid} run playsound inventorypets:illuminati block @p ~ ~ ~`
        );
      }

      event.player.inventory.getItem(
        event.player.inventory.find("tiab:time_in_a_bottle")
      ).nbt.storedTime += random;
      event.player.inventory.getItem(
        event.player.inventory.find("tiab:time_in_a_bottle")
      ).nbt.totalAccumulatedTime += random;
    }
  } catch (e) {
    event.player.swing();
    if (!event.player.isCreative())
      event.player.addItemCooldown(event.item, 140);
    event.player.notify(
      Notification.make((e) => {
        e.text = [Text.of("Missing")];
        e.icon = "ironberry:textures/item/tiab.png"; //item texture fix
        e.outlineColor = "#0009FF";
        e.backgroundColor = "#03CDFF";
        e.borderColor = "#039BFF";
      })
    );
  }
});
//############################### BEE .NET ##########################//
ItemEvents.rightClicked((event) => {
  const { item, hand, player } = event;
  const {entity} = player.rayTrace(2.5)
  const {block} = entity
  if (hand == "OFF_HAND") return;

  if (
    hand == "MAIN_HAND" &&
    entity != null &&
    entity.type == "minecraft:bee" &&
    item.id == "kubejs:net"
  ) {
    block.popItem("kubejs:standard_drone")
    entity.setRemoved('unloaded_to_chunk')
    
    player.swing()
  }
});
