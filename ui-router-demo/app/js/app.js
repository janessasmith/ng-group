/**
 * Created by ZhengLu on 2016/03/02.
 */

var myUiRouter = angular.module('myUiRouter', ['ui.router']);
myUiRouter.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');

    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'splice/index.html'
                },
                'topbar@index': {
                    templateUrl: 'splice/topbar.html'
                },
                'main@index': {
                    templateUrl: 'splice/home.html'
                }
            }
        })
        // index子嵌套
        // 用户管理
        .state('index.usermanage', {
            url: '/usermanage',
            views: {
                'main@index': {
                    templateUrl: 'splice/usermanage.html',
                    controller: function($scope, $state) {
                        $scope.addUserType = function() {
                            $state.go("index.usermanage.addusertype");
                        }
                    }
                }
            }
        })
        // 用户管理子嵌套
        // 高端用户
        .state('index.usermanage.highendusers', {
            url: '/highendusers',
            templateUrl: 'splice/highendusers.html'
        })
        // 中端用户
        .state('index.usermanage.normalusers', {
            url: '/normalusers',
            templateUrl: 'splice/normalusers.html'
        })
        // 低端用户
        .state('index.usermanage.lowerusers', {
            url: '/lowerusers',
            templateUrl: 'splice/lowerusers.html'
        })
        // 新增用户
        .state('index.usermanage.addusertype', {
            url: '/addusertype',
            templateUrl: 'splice/addusertype.html',
            controller: function($scope, $state) {
                $scope.backToPrevious = function() {
                    window.history.back();
                }
            }
        })

        // 权限管理子嵌套
        .state('index.permission', {
            url: '/permission',
            views: {
                'main@index': {
                    template: '这里是权限管理'
                }
            }
        })

        // 报表管理子嵌套
        .state('index.report', {
            url: '/report',
            views: {
                'main@index': {
                    template: '这里是报表管理'
                }
            }
        })

        // 系统设置子嵌套
        .state('index.settings', {
            url: '/settings',
            views: {
                'main@index': {
                    template: '这里是系统设置'
                }
            }
        })
});