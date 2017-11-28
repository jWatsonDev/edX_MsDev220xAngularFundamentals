app.controller('menuController', [
    '$scope', 
    function ($scope) {
        $scope.model = {title: 'Our Menu', mainDish: 'Cheese Pizza', price: '$5.00'};
        
        $scope.changeMainDish = function(item) {
            $scope.model.mainDish = item; 
        }

        $scope.$watch('model.mainDish', function (newValue, oldVluae) {
            if (newValue == 'BBQ Chicken Pizza') {
                $scope.model.price = '$6.00';
            } else if (newValue == 'Pepperoni Pizza') {
                $scope.model.price = '$5.50';
            } else if (newValue == 'Margherita Pizza') {
                $scope.model.price = '$6.50';
            } else if (newValue == 'Combo Pizza') {
                $scope.model.price = '$7.00';
            } else if (newValue == 'Cheese Pizza') {
                $scope.model.price = '$5.00';
            }
        });
    }
]);