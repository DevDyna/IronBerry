ServerEvents.recipes(event => {


event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 1,
  "input": {
    "tag": "ironberry:source_gems"
  },
  "output": 'ars_nouveau:source_gem',
  "pedestalItems": [
    {
      "item": {
        "item": 'bluepower:amethyst_block'
      }
    },
    {
      "item": {
        "item": 'bluepower:green_sapphire_block'
      }
    },
    {
      "item": {
        "item": 'bluepower:ruby_block'
      }
    },
    {
      "item": {
        "item": 'bluepower:sapphire_block'
      }
    }
  ],
  "source": 2000
})



})