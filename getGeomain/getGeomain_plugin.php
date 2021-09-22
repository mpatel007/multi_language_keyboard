<?php
/**
* Plugin Name: Search Geomain
* Plugin URI: 
* Description: Search Geomain Plugin
* Version: 1.0.0
* Author: Palladiumhub
* Author URI: 
* License: GPL2
*/

define( 'WCP_PLUGIN_VERSION', '1.0.0' );
define( 'WCP_PLUGIN_DOMAIN', 'website-custom-plugin' );
define( 'WCP_PLUGIN_URL', WP_PLUGIN_URL . '/Website-Custome-Plugin' );

include_once(dirname(__FILE__)."/geomain/GeomainController.php");