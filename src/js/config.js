function Config ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/contact-list.tpl.html',
            controller: 'ContactController'
        })
        .state('contacts-new', {
            url: '/contact/new',
            templateUrl: 'templates/add-contact.tpl.html',
            controller: 'AddContactController'
        })
        .state('contact-idv', {
            url: '/contact/:id',
            templateUrl: 'templates/contact.tpl.html',
            controller: 'IdvContactController'
        })
        .state('page-not-found', {
            url: '/not-found',
            template: `<h2>No such page. Haha. You're dumb.</h2>`
        });

    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;