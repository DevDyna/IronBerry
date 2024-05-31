/**
 *
 * @param {item[]} inputs itemstack or tag item without #
 * @param {string[]} in_form item or fluid
 * @param {string[]} in_type tag or static
 * @param {int[]} count
 * @param {item} output
 * @param {type} out_form item or fluid
 * @param {int} time
 */
function TXcompressor(inputs, in_form, in_type, count, output, out_form, time) {
  ServerEvents.recipes((event) => {
    event.custom({
      type: "ten3:compressor",
      inputs: [
        {
          form: "item",
          type: "tag",
          key: "forge:ingots/chlorium",
          count: 4,
        },
        {
          form: "item",
          type: "static",
          key: "ten3:mould_gear",
        },
      ],
      outputs: [
        {
          form: "item",
          key: "ten3:chlorium_gear",
        },
      ],
      time: 100,
    });
  });
}
