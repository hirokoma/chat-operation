'use strict';

angular.module('chatOperationApp.auth', ['chatOperationApp.constants', 'chatOperationApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
