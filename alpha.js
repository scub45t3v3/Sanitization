(function() {
  var REGEX, alpha;

  REGEX = /[^a-z]/gim;

  alpha = function(value) {
    return `${value}`.replace(REGEX, '');
  };

  module.exports = alpha;

}).call(this);
