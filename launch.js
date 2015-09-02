'use strict';

/**
 * Imports
 */

var ghost = require('ghost');
var path = require('path');


/**
 * Config
 */

var GhostConfig = {
    config: path.join(__dirname, 'config.js')
};


/**
 * Start Server
 */

ghost(GhostConfig).then(startGhost);


/**
 * Helpers
 */

function startGhost(ghostServer) {
    ghostServer.start();
}
