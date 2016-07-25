function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.tmpl.html',
      controller: 'HomeController as vm'
    })
    .state('single', {
      url: '/contact/:contactid',
      templateUrl: 'templates/single.tmpl.html',
      controller: 'SingleController as vm'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tmpl.html',
      controller: 'AddController as vm'
    });

  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };