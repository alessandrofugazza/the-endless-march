<?php
/**
 * The Endless March
 * @package 		TheEndlessMarch
 * @author 			Alessandro Fugazza
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

// This just echoes the chosen line, we'll position it later.
function hello_dolly()
{
	$chosen = hello_dolly_get_lyric();
	$lang = '';
	if ('en_' !== substr(get_user_locale(), 0, 3)) {
		$lang = ' lang="en"';
	}

	printf(
		'<p id="dolly"><span class="screen-reader-text">%s </span><span dir="ltr"%s>%s</span></p>',
		__('Quote from Hello Dolly song, by Jerry Herman:', 'hello-dolly'),
		$lang,
		$chosen
	);
}

// Now we set that function up to execute when the admin_notices action is called.
add_action('admin_notices', 'hello_dolly');

// We need some CSS to position the paragraph.
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
