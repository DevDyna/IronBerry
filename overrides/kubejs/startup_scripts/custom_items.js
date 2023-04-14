StartupEvents.registry('item', event => {

event.create('1_bit')
event.create('2_bit')
event.create('4_bit')
event.create('8_bit')

//staff only
event.create('wip').texture('ironberry:item/wip')


//creative shop
event.create('1_grade')
event.create('2_grade')
event.create('3_grade')
event.create('4_grade')
event.create('5_grade')
event.create('6_grade')

// event.create('example_item').displayName('Example Item')

})