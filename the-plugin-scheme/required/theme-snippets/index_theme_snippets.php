<?php

    /*
    // SNIPPETS RECORS
    // --------------------------
    // all snippet and funcitons for theme or
    // customization of gutenberg blocks
    */

    //: themes support filtering:
    //:      https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/
    //:      https://developer.wordpress.org/reference/functions/add_theme_support/
    //:      https://www.youtube.com/watch?v=CLLdK7OLQmM
    //:
    //: remove gutenberg blocks:
    //:      https://rudrastyh.com/gutenberg/remove-default-blocks.html
    //:


    //: enable basic supports options
    if( ! current_theme_supports( 'custom-spacing' ) ) add_theme_support( 'custom-spacing' );
    if( ! current_theme_supports( 'align-wide' ) ) add_theme_support( 'align-wide' );
    if( ! current_theme_supports( 'align-full' ) ) add_theme_support( 'align-full' );


    //: other exemple:

    // if( ! current_theme_supports( 'custom-line-height' )
    // add_theme_support( 'custom-line-height' );

    // if( ! current_theme_supports( 'custom-units' ) )
    // add_theme_support( 'custom-units', ['%','px','rem','em']);

    // if( ! current_theme_supports( 'editor-styles' ) )
    // add_theme_support( 'editor-styles' );

    // if( ! current_theme_supports( 'editor-color-palette' ) )
    // {
    //     add_theme_support(
    //     'editor-color-palette', [
    //             [
    //                 'name'=>'white',
    //                 'slug'=>'slug',
    //                 'color'=>'#fff'
    //             ],
    //     ]);
    //     addAction('init','editor-color-palette')
    // }

    // if( ! current_theme_supports( 'editor-gradient-presets' ) )
    // {
    //     add_theme_support( 'editor-gradient-presets', [
    //         [
    //             'name'     => esc_attr__( 'Vivid cyan blue to vivid purple', 'themeLangDomain' ),
    //             'gradient' => 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
    //             'slug'     => 'vivid-cyan-blue-to-vivid-purple'
    //         ],
    //     ]);
    // }

    // if( ! current_theme_supports( 'editor-font-sizes' ) )
    // {
    //     add_theme_support( 'editor-font-sizes', [
    //         [
    //             'name' => esc_attr__( 'Small', 'themeLangDomain' ),
    //             'size' => 12,
    //             'slug' => 'small'
    //         ],
    //     ]);
    // }

    // force disable:

    // remove_theme_support( 'core-block-patterns' );
    // add_theme_support( 'disable-custom-font-sizes' );
    // add_theme_support( 'disable-custom-colors' );
    // add_theme_support( 'disable-custom-gradients' );
?>