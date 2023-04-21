ItemEvents.tooltip(event => {
  // dirt = clayball
  event.add('minecraft:clay_ball', 'Obtained by crushing dirt on crushing tub')
  event.add('minecraft:campfire', 'Item form require silk touch')
  event.add('reactive:scroll', 'Right click a cauldron to convert into a crucible')
  event.add('minecraft:bone_meal', 'Obtained by compost stuff on composter')
  event.add('minecraft:string', 'Obtained by flax plants')
  event.add('bluepower:engine', 'Volts to FE')
  event.add('bluepower:solar_panel', 'Generate Volts')
})