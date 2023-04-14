ServerEvents.tags('item', event => {

event.get('reactive:body_sources').removeAll()
event.get('reactive:caustic_sources').removeAll()
})