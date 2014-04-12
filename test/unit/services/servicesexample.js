/*global describe, beforeEach, expect, inject*/
'use strict';

// Testing a controller
describe('SmithService Test', function() {
  var SmithService;
  beforeEach(module('tkApp'));
  beforeEach(inject(function(_SmithService_) {
    SmithService = _SmithService_;
  }));

  describe('SmithService', function() {
    it('should append Smith to a name', function() {
      expect(SmithService.getName('John')).toBe('John Smith');
    });
  });
});
