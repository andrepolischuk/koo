// Koo © 2014 Andrey Polischuk
// https://github.com/andrepolischuk/koo

!function() {

  'use strict';

  /**
   * Get document cookies
   * @return {Object}
   * @api private
   */

  function getCookies() {

    var result = {};

    if (document.cookie && document.cookie !== '') {

      var cookies = document.cookie.split(';');

      for (var i = 0, cookie; i < cookies.length; i++) {

        // define item
        cookie = cookies[i].replace(/^(\s|\u00A0)+/g, '').split('=');

        // item to result object
        result[cookie[0]] = decodeURIComponent(cookie[1]);

      }

    }

    return result;

  }

  /**
   * Set document cookie
   * @param {String} name
   * @param {String} value
   * @param {Object} options
   * @api private
   */

  function setCookie(name, value, options) {

    if (name !== undefined && value !== undefined) {

      options = options || {};

      var expires = '';

      if (options.expires && (typeof options.expires === 'number' || options.expires.toUTCString)) {

        var date;

        if (typeof options.expires === 'number') {
          date = new Date();
          date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
        } else {
          date = options.expires;
        }

        expires = '; expires=' + date.toUTCString();

      }

      // define cookie params
      var path   = options.path ? '; path=' + (options.path) : '';
      var domain = options.domain ? '; domain=' + (options.domain) : '';
      var secure = options.secure ? '; secure' : '';

      document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');

    }

  }

  /**
   * Initialize object
   * @api public
   */

  function koo() {

  }

  /**
   * Get cookie
   * @param {String} name
   * @api public
   */

  koo.get = function(name) {
    var cookies = getCookies();
    return name ? cookies[name] : cookies;
  };

  /**
   * Set cookie
   * @param {String} name
   * @param {String} value
   * @param {Object} options
   * @api public
   */

  koo.set = function(name, value, options) {
    setCookie(name, value, options);
  };

  /**
   * Remove cookie
   * @param {String} name
   * @api public
   */

  koo.remove = function(name) {
    setCookie(name, '', { 'expires' : -1 });
  };

  /**
   * Module exports
   */

  if (typeof define === 'function' && define.amd) {

    define([], function() {
      return koo;
    });

  } else if (typeof module !== 'undefined' && module.exports) {

    module.exports = koo;

  } else {

    this.koo = koo;

  }

}.call(this);
