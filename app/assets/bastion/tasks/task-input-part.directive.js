/**
 * Copyright 2013 Red Hat, Inc.
 *
 * This software is licensed to you under the GNU General Public
 * License as published by the Free Software Foundation; either version
 * 2 of the License (GPLv2) or (at your option) any later version.
 * There is NO WARRANTY for this software, express or implied,
 * including the implied warranties of MERCHANTABILITY,
 * NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 * have received a copy of GPLv2 along with this software; if not, see
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
 */

angular.module('Bastion.tasks').directive('taskInputPart',
    function () {
        return {
            restrict: 'E',
            template: '<span ng-if="!link()">{{text()}}</span>' +
                      '<a ng-if="link()" href="{{link()}}">{{text()}}</a>',
            scope: {
                data: '=',
            },
            link: function (scope) {
                scope.text = function () {
                    if (typeof(scope.data) === 'string') {
                        return scope.data;
                    } else {
                        return scope.data[1].text;
                    }
                };

                scope.link = function () {
                    if (typeof(scope.data) !== 'string' && scope.data[1]) {
                        return scope.data[1].link;
                    }
                };
            }
        };
    }
);
