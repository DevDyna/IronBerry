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




