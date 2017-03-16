const SERVER_URL = 'https://frozen-ravine-39661.herokuapp.com';

function AddContactController  ($scope, $http, $state)  {
    $scope.contacts = [];

    $scope.addContact = function(data)  {
        $http.post(`${SERVER_URL}/contact`, data).then(resp =>  {
            console.log(resp.data);
            $state.go('home');
        })
    };
}

AddContactController.$inject = ['$scope', '$http', '$state'];

export default AddContactController;