/*global describe, beforeEach, expect, inject*/
'use strict';

// Testing an element
describe('Example Test', function() {
  var element;
  var $scope;
  var $rootScope;
  var $compile;

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $scope = $rootScope;

    element = angular.element('<div>{{2 + 2}}</div>');
    element = $compile(element)($rootScope);
  }));

  it('should equal 4', function() {
    $scope.$digest();
    expect(element.html()).toBe('4');
  });
});
