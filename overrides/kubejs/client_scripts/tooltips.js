ItemEvents.tooltip(event => {
  // dirt = clayball
  event.add('minecraft:clay_ball', 'Obtained by crushing dirt on crushing tub')
  event.add('minecraft:campfire', 'Item form require silk touch')
  event.add('reactive:scroll', 'Right click a cauldron to convert into a crucible')
})