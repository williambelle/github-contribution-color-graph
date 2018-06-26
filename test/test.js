'use strict';

describe('github-contribution-color-graph', function () {
  it('should convert to hex', function () {
    hex(255).should.equal('ff');
    hex(0).should.equal('00');
  });

  it('should convert rgb to hex', function () {
    rgb2hex('rgb(255,255,255)').should.equal('#ffffff');
    rgb2hex('rgb(0,0,0)').should.equal('#000000');
    rgb2hex('rgb(13, 71, 161)').should.equal('#0d47a1');
  });
});
