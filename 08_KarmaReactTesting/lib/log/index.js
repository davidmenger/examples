'use strict';

/**
 * It's good to override logging
 * @type {Object}
 */
module.exports = {

    /**
     * Log infos
     */
    i (...args) {
        /* eslint no-console: 0*/
        console.info.apply(this, args);
    },

    /**
     * Just log
     */
    log (...args) {
        /* eslint no-console: 0*/
        console.log.apply(this, args);
    },

    /**
     * Log errors
     */
    e (...args) {
        /* eslint no-console: 0*/
        console.error.apply(this, args);
    }
};
