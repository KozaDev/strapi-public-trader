'use strict';

/**
 *  dummy-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dummy-user.dummy-user');
