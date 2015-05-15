app.controller('ReceiptsController', [
  '$scope',
  '$stateParams',
  'receipts',
  function($scope, $stateParams, receipts) {
    $scope.receipt = receipts.receipts[$stateParams.id];
}]);
