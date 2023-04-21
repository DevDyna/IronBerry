ServerEvents.tags('item', event => {

event.get('reactive:body_sources').removeAll()
event.get('reactive:caustic_sources').removeAll()
event.get('reactive:verdant_sources').removeAll()

event.add('reactive:body_sources','bluepower:blue_alloy_ingot')
event.add('reactive:caustic_sources','bluepower:indigo_dye')
event.add('reactive:verdant_sources','#tombstone:seeds')
})