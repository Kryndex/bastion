/**
 Copyright 2013 Red Hat, Inc.

 This software is licensed to you under the GNU General Public
 License as published by the Free Software Foundation; either version
 2 of the License (GPLv2) or (at your option) any later version.
 There is NO WARRANTY for this software, express or implied,
 including the implied warranties of MERCHANTABILITY,
 NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 have received a copy of GPLv2 along with this software; if not, see
 http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
 **/

/**
 * @ngdoc controller
 * @name Katello.user-sessions.controller:UserSessionsController
 *
 * @requires $scope
 * @requires notices
 *
 * @description
 *  A controller for all user session (i.e. login page) functionality.
 */
angular.module('Katello.user-sessions').controller('UserSessionsController', ['$scope', 'notices', function($scope, notices) {
    $(document).bind('ajax:complete', function(event, request) {
        var status = request.status;

        // Don't trigger orgSwitcher refresh for error cases.
        if (status === 200) {
            $scope.orgSwitcher.refresh();
        } else {
            notices.displayNotice("error", request.responseText);
        }
    });
}]);