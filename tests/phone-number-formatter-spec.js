'use strict';
var expect = require('chai').expect;
var format = require('../phone-number-formatter.js');

describe('PhoneNumberFormatter', function() {
  describe('#format()', function() {
    it('should formatted phone number in (xxx) xxx-xxxx format', function() {
      expect(format('')).to.equal('(   )    -    ');
      expect(format('1')).to.equal('(1');
      expect(format('12')).to.equal('(12');
      expect(format('123')).to.equal('(123) ');
      expect(format('1234')).to.equal('(123) 4');
      expect(format('12345')).to.equal('(123) 45');
      expect(format('123456')).to.equal('(123) 456-');
      expect(format('1234567')).to.equal('(123) 456-7');
      expect(format('12345678')).to.equal('(123) 456-78');
      expect(format('123456789')).to.equal('(123) 456-789');
      expect(format('1234567890')).to.equal('(123) 456-7890');
    });
    it('should truncate phone numbers longer than 10 digits', function() {
      expect(format('1234567890123')).to.equal('(123) 456-7890');
    });
    it('should remove all non numeric characters', function() {
      expect(format('a1b2c3-4(5)6')).to.equal('(123) 456-')
    });
  });
});
