//############################### PHOENIX EGG DUPE ##########################//
BlockEvents.rightClicked("exoticbirds:phoenix_egg", (event) => {
    const { item, player } = event;
    if (item === "tiab:time_in_a_bottle" && player.isCrouching()) {
      event.cancel();
      setCancellationResult(true);
    }
  });