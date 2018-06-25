(function() {
  var custom;

  custom = function(value, clean) {
    return `${value}`.replace(clean, '');
  };

  exports.custom = custom;

}).call(this);
