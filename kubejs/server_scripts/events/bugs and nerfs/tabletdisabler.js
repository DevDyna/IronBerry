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