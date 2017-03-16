const SERVER_URL = "https://frozen-ravine-39661.herokuapp.com";

function IdvContactController ($scope, $http, $stateParams) {

    function init () {
        var contactId = $stateParams.id;
        var url = `${SERVER_URL}/contact/${contactId}`;
        $http.get(url).then(resp => {
            $scope.contact = resp.data[0];
            console.log($scope.contact)
        });
    }

    init();

}

IdvContactController.$inject = ['$scope', '$http', '$stateParams'];

export default IdvContactController;