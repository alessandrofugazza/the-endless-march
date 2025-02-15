<?php
// TODO https://semver.org
/**
 * The Endless March
 * @link 			https://alessandrofugazza.com/misc/the-endless-march/
 * @since			0.1.0
 * @package 		The_Endless_March
 * @version 		0.1.1
 *
 * @wordpress-plugin
 * Plugin Name: 	The Endless March
 * Plugin URI: 		https://alessandrofugazza.com/misc/the-endless-march/
 * Description: 	Harbingers of the new dawn.
 * Version: 		0.1.1
 * Author: 			Alessandro Fugazza
 * Author URI: 		https://alessandrofugazza.com/
 * Update URI: 		https://alessandrofugazza.com/misc/the-endless-march/
 */

if (!defined('ABSPATH')) {
	exit;
}

// if (is_admin()) {
// 	require_once __DIR__ . '/admin/the-endless-march.php';
// } else {
// 	require_once __DIR__ . '/public/the-endless-march.php';
// }

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

define('THE_ENDLESS_MARCH_VERSION', '0.1.1');

function the_endless_march_get_lyric()
{
	/** These are the lyrics to Hello endless_march */
	$lyrics = "HEART, STEEL
WE KILL
IRON WILL
ON TO WAR!
CYBERSTAN
CAN'T KEEP HER DOWN
WE COUNT DOWN
THE NEW DAWN!
CYBERSTAN
CAN'T KEEP HER DOWN
WE COUNT DOWN
FIGHT TO DAWN!";

	// Here we split it into lines.
	$lyrics = explode("\n", $lyrics);

	// And then randomly choose a line.
	return wptexturize($lyrics[mt_rand(0, count($lyrics) - 1)]);
}

function the_endless_march()
{
	$chosen = the_endless_march_get_lyric();

	printf(
		'<p id="endless-march"><span dir="ltr">%s</span></p>',
		$chosen
	);
}

add_action('admin_notices', 'the_endless_march');

function endless_march_enqueue_styles()
{
	wp_enqueue_style(
		'admin-style',
		plugin_dir_url(__FILE__) . 'admin/css/admin-style.css',
		array(),
		'0.1.1'
	);
}

add_action('admin_enqueue_scripts', 'endless_march_enqueue_styles');

function endless_march_enqueue_scripts()
{
	wp_enqueue_script(
		'admin-script',
		plugin_dir_url(__FILE__) . '/admin/js/admin-script.js',
		array(),
		'0.1.1',
		true
	);
}

add_action('admin_enqueue_scripts', 'endless_march_enqueue_scripts');
