custom = (value, clean) ->
  return "#{value}".replace clean, ''

exports.custom = custom