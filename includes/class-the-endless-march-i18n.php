<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       http://example.com
 * @since      0.1.2
 *
 * @package    The_Endless_March
 * @subpackage The_Endless_March/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      0.1.2
 * @package    The_Endless_March
 * @subpackage The_Endless_March/includes
 * @author     Alessandro Fugazza <alessandro.fugazza01@gmail.com>
 */
class The_Endless_March_i18n
{


    /**
     * Load the plugin text domain for translation.
     *
     * @since    0.1.2
     */
    public function load_plugin_textdomain()
    {

        load_plugin_textdomain(
            'the-endless-march',
            false,
            dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
        );

    }



}