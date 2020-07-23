<?php
/**
 * Plugin Name: Gutenberg Accordion Block
 * Plugin URI: https://github.com/emfluenceindia/guten-accordion-control
 * Description: A Gutenberg plugin to place and render an Accordion Control for the frontend.
 * Author: Subrata Sarkar
 * Author URI: https://subratasarkar.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package emfl
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';


/* mem package update: https://stackoverflow.com/a/58294621/1496518 */