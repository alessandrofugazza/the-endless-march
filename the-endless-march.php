<?php
/**
 * The Endless March
 * @package 		TheEndlessMarch
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

function hello_dolly_get_lyric()
{
	/** These are the lyrics to Hello Dolly */
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

function hello_dolly()
{
	$chosen = hello_dolly_get_lyric();

	printf(
		'<p id="dolly"><span dir="ltr">%s</span></p>',
		$chosen
	);
}

add_action('admin_notices', 'hello_dolly');

function dolly_css()
{
	echo "
	<style type='text/css'>
	#dolly {
		float: right;
		padding: 5px 10px;
		margin: 0;
		font-size: 12px;
		line-height: 1.6666;
	}
	.rtl #dolly {
		float: left;
	}
	.block-editor-page #dolly {
		display: none;
	}
	@media screen and (max-width: 782px) {
		#dolly,
		.rtl #dolly {
			float: none;
			padding-left: 0;
			padding-right: 0;
		}
	}
	</style>
	";
}

add_action('admin_head', 'dolly_css');

function dolly_enqueue_scripts()
{
	wp_enqueue_script(
		'dolly-custom-script',
		plugin_dir_url(__FILE__) . '/admin/js/script.js',
		array(),
		'0.1.1',
		true
	);
}

add_action('admin_enqueue_scripts', 'dolly_enqueue_scripts');
