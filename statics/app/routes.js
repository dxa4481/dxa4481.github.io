resumeApp.config(function($routeProvider) {
        $routeProvider
            .when('/press', {
                templateUrl : 'statics/app/partials/press.html',
                controller  : 'pressController'
            })
             .when('/workHistory', {
                templateUrl : 'statics/app/partials/workHistory.html',
                controller  : 'workHistoryController'
            })
            .when('/projects', {
                templateUrl : 'statics/app/partials/projects.html',
                controller  : 'projectsController'
            })
            .when('/skills', {
                templateUrl : 'statics/app/partials/skills.html',
                controller  : 'skillsController'
            });
    });
