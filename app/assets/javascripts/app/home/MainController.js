app.controller('MainController', [
'$scope',
'receipts',
function($scope, receipts){
  $scope.receipts = receipts.receipts;
  $scope.paid = false;
  $scope.addReceipt = function() {
    if(!$scope.amount || $scope.amount === ''){ return; }
    $scope.receipts.push({
      amount: $scope.amount,
      paid: $scope.paid
    });
    $scope.amount = '';
    $scope.paid = false;
  };
  $scope.receiptPaid = function(receipt) {
    receipt.paid = receipt.paid === true ? false : true;
  };
}]);
