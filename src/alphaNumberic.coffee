REGEX = /[^a-z\d]/gim

alphaNumberic = (value) ->
  return "#{value}".replace REGEX, ''

module.exports = alphaNumberic