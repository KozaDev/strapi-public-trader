"use strict";

/**
 * entry-position router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::entry-position.entry-position", {
  config: {
    create: {
      policies: ["is-owner"],
    },
    update: {
      policies: ["is-owner"],
    },
  },
});
