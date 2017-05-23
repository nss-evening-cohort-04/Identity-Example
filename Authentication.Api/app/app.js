var app = angular.module("Authentication", ["ngRoute"]);

app.config([
    "$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/",
            {
                templateUrl: "app/login.html",
                controller: "loginController"
            });
    }
]);


