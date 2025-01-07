//############################### disabled strippers ##########################//
BlockEvents.rightClicked("integrateddynamics:menril_wood", (event) => {
  if (event.item.hasTag("forge:tools/axes")) {
    event.cancel();
    setCancellationResult(true);
  }
});
