<?php

    /*
    // GUTENBERG RECORS
    // --------------------------
    // this file record all custom g block / styles
    */

    //: wordpress enqueued script and css
    //: the scema:  wp_enqueue_...( label_of_script, path_of_script, depencies, caching );
    //: note :      https://kinsta.com/it/blog/wp-enqueue-scripts/
    //:             https://www.billerickson.net/block-styles-in-gutenberg/
    //:             https://awhitepixel.com/blog/wordpress-gutenberg-custom-block-styles/


    
    //: main variable

    $basename    = 'gutenberg-schema';
    $scriptpath  = plugin_dir_url(__FILE__).'js/';
    $stylespath  = plugin_dir_url(__FILE__).'css/';
    $depencies   = ['wp-blocks', 'wp-editor', 'wp-element', 'wp-rich-text', 'wp-i18n'];
    $v           = time(); /*version*/

    //: init blocks generators
    wp_enqueue_script( $basename.'-costants', $scriptpath.'gutenberg-init.js', $depencies, $v );
    wp_enqueue_script( $basename.'-prototyper', $scriptpath.'gutenberg-prototyper.js', $depencies, $v );
    wp_enqueue_script( $basename.'-richcollection', $scriptpath.'gutenberg-richcollection.js', $depencies, $v );

    //: record all blocks maked
    wp_enqueue_script( $basename.'-basic', $scriptpath.'demo-basic.js', $depencies,$v );
    wp_enqueue_script( $basename.'-combo', $scriptpath.'demo-combo.js', $depencies,$v );
    wp_enqueue_script( $basename.'-nesteds', $scriptpath.'demo-nesteds.js', $depencies,$v );
    wp_enqueue_script( $basename.'-inspector', $scriptpath.'demo-inspector.js', $depencies,$v );
    wp_enqueue_script( $basename.'-toolbarboxes', $scriptpath.'demo-toolbar-boxes.js', $depencies,$v );
    wp_enqueue_script( $basename.'-toolbartexts', $scriptpath.'demo-toolbar-texts.js', $depencies,$v );
    wp_enqueue_script( $basename.'-properties', $scriptpath.'demo-usingproperties.js', $depencies,$v );

    //: init css
    wp_enqueue_style( $basename.'-css-editorfix', $stylespath.'editorfix.css', null, $v );
    

?>