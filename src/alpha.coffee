REGEX = /[^a-z]/gim

alpha = (value) ->
  return "#{value}".replace REGEX, ''

module.exports = alpha