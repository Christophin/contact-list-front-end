import angular from 'angular';
import 'angular-ui-router';
import AppConfig from './config';

import AddContactController from './controllers/addContact';
import ContactController from './controllers/contact';
import IdvContactController from './controllers/idvContact';

angular
    .module('app', ['ui.router'])
    .config(AppConfig)
    .controller('AddContactController', AddContactController)
    .controller('ContactController', ContactController)
    .controller('IdvContactController', IdvContactController);
