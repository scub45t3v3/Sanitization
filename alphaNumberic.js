(function() {
  var REGEX, alphaNumberic;

  REGEX = /[^a-z\d]/gim;

  alphaNumberic = function(value) {
    return `${value}`.replace(REGEX, '');
  };

  module.exports = alphaNumberic;

}).call(this);
