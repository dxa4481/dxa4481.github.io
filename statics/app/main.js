var resumeApp = angular.module('resumeApp', ['ngSanitize', 'ngAnimate', 'ngRoute']);

resumeApp.controller('mainController', function($scope, $http, $location) {
    $scope.go = function(path){
        $location.path(path);
    }
    $scope.go('/press')

});

resumeApp.controller('projectsController', function($scope, $http, $location){
    $scope.projects = projects;
    $scope.loadReadme = function(project){
        var ghName = project.github.split("/");
        $http.get("https://security.love/" + ghName[ghName.length - 1] + "/README.md").then(function(mdData){
            $scope.markdownContent =  markdown.toHTML(mdData.data);
            $('#modal1').openModal();
        })
    }
});

resumeApp.controller('workHistoryController', function($scope, $http, $location){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "statics/timelineConfig.js";
    $('head').append(script);
});

resumeApp.controller('skillsController', function($scope, $http, $location){
});

resumeApp.controller('pressController', function($scope, $http, $location){
     $http.get("/press.md").then(function(mdData){
        $scope.markdownContent =  markdown.toHTML(mdData.data);
    })
});
