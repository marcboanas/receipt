app.factory('receipts', [function() {
  var o = {
  receipts: [
  {amount: 200, paid: true},
  {amount: 201, paid: false},
  {amount: 202, paid: true},
  {amount: 203, paid: false},
  {amount: 204, paid: true}
  ]
  };
  return o;
}]);
