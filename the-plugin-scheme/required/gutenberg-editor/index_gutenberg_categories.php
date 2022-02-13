<?php

    //: this make a custom block for gutenberg
    //: note :   https://wholesomecode.ltd/create-a-custom-block-category-in-the-wordpress-block-inserter-gutenberg

    function generete_custom_blocks_categories ($c) { 
    
        return array_merge($c,[
            [
                'slug'  => 'scheme-blocks',
                'title' => __( 'SCHEMES', 'the-plugin-scheme' ),
            ],  // add yours gutenberg category
        ]);
    
    }

    add_action( 'block_categories', 'generete_custom_blocks_categories' );

?>