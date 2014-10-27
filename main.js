var options = {
  opened: 'always',
//   allowRange: true,
//   allowMultiple: true,
//   format: 'yyyy-mm-d',
//   formatRange: 'From { to }.',
//   formatMultiple: '{, |, and finally, }.',
//   firstDay: 1,
//   show: 'months',
//   min: new Date(2014, 7, 8),
//   max: new Date(2014, 11, 8),
}





/**
 * Demo stuff..
 */

// Create a pickadate shadow element.
var pickadate = shadow.Pickadate.create({
  $el: $('#pickadate'),
  attrs: options
});
