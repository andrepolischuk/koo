
'use strict';

/**
 * Expose get cookie
 *
 * @param  {String} name
 * @return {String|Object}
 * @api public
 */

module.exports.get = function(name) {
  if (!document.cookie || !document.cookie.length) return;
  var split = document.cookie.split(';');
  var cookies = {};

  for (var i = 0, item; i < split.length; i++) {
    item = split[i].replace(/^(\s|\u00A0)+/g, '').split('=');
    cookies[item[0]] = decodeURIComponent(item[1]);
  }

  return name ? cookies[name] : cookies;
};

/**
 * Expose set cookie
 *
 * @param  {String} name
 * @param  {String} value
 * @param  {Object} options
 * @return {String}
 * @api public
 */

module.exports.set = function(name, value, options) {
  if (name === undefined || value === undefined) return;
  options = options || {};
  var date = options.expires || {};

  if (typeof options.expires === 'number') {
    date = new Date();
    date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
  }

  var cookie = name + '=' + encodeURIComponent(value);
  cookie += date.toUTCString ? '; expires=' + date.toUTCString() : '';
  cookie += options.path ? '; path=' + options.path : '';
  cookie += options.domain ? '; domain=' + options.domain : '';
  cookie += options.secure ? '; secure' : '';

  document.cookie = cookie;
  return cookie;
};

/**
 * Expose remove cookie
 *
 * @param  {String} name
 * @return {String}
 * @api public
 */

module.exports.remove = function(name) {
  return module.exports.set(name, '', {expires: -1});
};
