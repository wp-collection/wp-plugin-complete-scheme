<?php

/*
    Plugin Name: The plugin scheme
    Description: The scheme to how to make a plugin, save data, set informations
    Version: 1.0
    Author: Bertz.tech - Alberto Marà 
    Author URI: https://bertz.tech
*/


    class the_plugin_scheme {


            function __construct () {

                // general info on wp hooks: https://codex.wordpress.org/Plugin_API/Action_Reference

                //: set new menu items and page hook,
                //: note :   https://codex.wordpress.org/Administration_Menus
                add_action( 'admin_menu', [$this, '__init_admin_panel'] );

                //: this make a custom block for gutenberg
                //: note :   https://wholesomecode.ltd/create-a-custom-block-category-in-the-wordpress-block-inserter-gutenberg
                add_action( 'wp_loaded', [$this, '__init_custom_blocks_categories'] );

                //: this make a custom block for gutenberg
                //: note :   https://youtu.be/hbJiwm5YL5Q?t=7343
                add_action( 'enqueue_block_assets', [$this, '__init_custom_blocks'] );

                //: this lock/unlock a blocks options on theme support
                //: note :   shorturl.at/kmsFH - shorturl.at/fkpvN  - shorturl.at/nosEK
                add_action( 'enqueue_block_editor_assets', [$this, '__init_theme_snippets'] ); /*enqueue_block_editor_assets*//*after_setup_theme*/

            }


        /* = = = = = = = = = = = = = = = = = = = = = = */


            function __init_admin_panel () {

                //: ADD TO OPTIONS MENU A NEW PAGE
                //: note :   a different way is: add_menu_page, see other in link:
                //:          https://developer.wordpress.org/reference/functions/add_menu_page/

                add_options_page(
                    'The scheme test',              // the page title
                    'hello scheme',                 // the title in menu
                    'activate_plugins',             // the securety level
                    'the-scheme-test',              // the plugin slug
                    [$this,'__init_content_panel'],   // contents printer
                    0                               // index voice position in menu
                );

            }


            function __init_content_panel () {
                require 'required/admin-panels/index_admin_panel.php';
            }


        /* = = = = = = = = = = = = = = = = = = = = = = */
            

            function __init_custom_blocks_categories () { 
                require 'required/gutenberg-editor/index_gutenberg_categories.php';
            }


        /* = = = = = = = = = = = = = = = = = = = = = = */

            function __init_custom_blocks () {
                require 'required/gutenberg-editor/index_gutenberg_blocks.php';
            }

        /* = = = = = = = = = = = = = = = = = = = = = = */


            function __init_theme_snippets () {
                require 'required/theme-snippets/index_theme_snippets.php';
            }


    } $tps = new the_plugin_scheme();

    
?>