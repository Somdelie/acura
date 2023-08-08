'use strict';

/**
 * make controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::make.make');
