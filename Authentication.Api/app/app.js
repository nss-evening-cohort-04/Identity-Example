var app = angular.module("Authentication", ["ngRoute"]);

app.config([
    "$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/",
            {
                templateUrl: "app/login.html",
                controller: "loginController"
            })
            .when("/home",
            {
                templateUrl: "app/home.html",
                controller: "homeController"
            });

    }
])

app.run(["$http", function($http) {

    var token = sessionStorage.getItem('token');

    if (token)
        $http.defaults.headers.common['Authorization'] = `bearer ${token}`;

    }
]);


