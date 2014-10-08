// Koo © 2014 Andrey Polischuk
// https://github.com/andrepolischuk/koo

!function(undefined) {

  'use strict';

  /**
   * Get document cookies
   * @return {Object}
   * @api private
   */
  
  var getCookies = function() {

    var result = {};

    if (document.cookie && document.cookie !== '') {
      
      var cookie;
      var cookies = document.cookie.split(';');

      for (var i = 0; i < cookies.length; i++) {

        // define item
        cookie = cookies[i].replace(/^(\s|\u00A0)+/g, '').split('=');

        // item to result object
        result[cookie[0]] = decodeURIComponent(cookie[1]);

      }

    }

    return result;

  };

  /**
   * Set document cookie
   * @param {String} name
   * @param {String} value
   * @param {Object} options
   * @api private
   */
  
  var setCookie = function(name, value, options) {

    if (name !== undefined && value !== undefined) {

      options = options || {};

      var expires = '';

      if (options.expires && ('number' === typeof options.expires || options.expires.toUTCString)) {

        var date;

        if ('number' === typeof options.expires) {
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

  };

  /**
   * Initialize object
   * @api public
   */
  
  var koo = function() {

  };

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

    var value   = '';
    var expires = -1;

    setCookie(name, value, { 'expires' : expires });

  };

  /**
   * Module exports
   */

  window.koo = koo; 

}();