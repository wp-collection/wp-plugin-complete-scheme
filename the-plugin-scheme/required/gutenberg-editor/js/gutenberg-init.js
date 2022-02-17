    /*
    // GUTENBERG BLOCKS INIT
    // --------------------------
    // this file save all wp object for make a block
    // and initialize the maethod for make all schemas
    */

    //: warning:    All constants ecc is shared via script
    //:             aggregator "wp_enqueue_scriptfunction" in main.php.
    //:             Same situation for all js blocks file!


    //: More info for undestand and expand all js or custom blocks
    //:
    //: a list of standards blocks:
    //:         https://blocks.wp-a2z.org/block/
    //: 
    //: convert from reat to js:
    //:         https://infoheap.com/online-react-jsx-to-javascript/
    //:
    //: a good generic tutorials :
    //:         https://youtu.be/2CGFLwSoDbY
    //:         https://youtu.be/hbJiwm5YL5Q?t=8440
    //:
    //: a good article :
    //:         https://mkaz.blog/wordpress/gutenberg-blocks-without-the-build-step/
    //:         https://mediaron.com/how-to-enable-gutenberg-block-previews/
    //:
    //: registerBlock info:
    //:         https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
    //:         https://www.youtube.com/watch?v=2CGFLwSoDbY&list=PLriKzYyLb28lHhftzU7Z_DJ32mvLy4KKH&index=3 
    //:
    //: all wp icons :
    //:         https://developer.wordpress.org/resource/dashicons/
    //:
    //: all category :
    //:         common | text | layout | media | design | widgets | theme | embe 




    const recordblock             = wp.blocks.registerBlockType
    const recordstyle             = wp.blocks.registerBlockStyle

    const __/*Create*/            = wp.element.createElement

    const _block_control          = wp.editor.BlockControls
    const _block_contents         = wp.blockEditor.InnerBlocks
    // const _data                   = wp.blockEditor.useBlockProps // deprecated

    const _inspector              = wp.blockEditor.InspectorControls
    const _inspector_container    = wp.components.Panel
    const _inspector_header       = wp.components.PanelBody
    const _inspector_group        = wp.components.PanelRow

    const _card                   = wp.components.Card
    const _card_title             = wp.components.CardHeader
    const _card_contents          = wp.components.CardBody

    const _split                  = wp.components.CardDivider

    const _toolbar_group          = wp.components.Toolbar


//  const _MediaChecks            = wp.blockEditor.MediaUploadCheck <= stand-by / not used
    const _mediabox               = wp.blockEditor.MediaUpload

    const _ui_dropmenu            = wp.components.DropdownMenu

    const _ui_texts               = wp.editor.RichText
    const _ui_textarea            = wp.components.TextControl
    const _ui_alignbar            = wp.editor.AlignmentToolbar
    const _ui_feauteredImg        = wp.editor.PostFeaturedImage
    const _ui_btn                 = wp.components.Button
    const _ui_btnicon             = wp.components.IconButton
    const _ui_btn_group           = wp.components.ButtonGroup
    const _ui_switcher            = wp.components.FormToggle
    const _ui_radiobox            = wp.components.RadioControl
    const _ui_checkbox            = wp.components.CheckboxControl
    const _ui_range               = wp.components.RangeControl
    const _ui_select              = wp.components.SelectControl
    const _ui_color               = wp.components.ColorPicker
    const _ui_palette             = wp.components.ColorPalette
    const _ui_toggleslide         = wp.components.__experimentalToggleGroupControl
    const _ui_toggleslide_content = wp.components.__experimentalToggleGroupControlOption


    const _generated_id = () => {return String(Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1));}



 
