const SERVER_URL = "https://frozen-ravine-39661.herokuapp.com";

function ContactController ($scope, $http, $state) {
    $scope.contacts = [];

    function init () {
        $http.get(`${SERVER_URL}/contact`).then(resp => {
            $scope.contacts = resp.data;
        });
    }

    init();

}

ContactController.$inject = ['$scope', '$http', '$state'];

export default ContactController;