/*
// GUTENBERG BLOCK
// --------------------------
// - this file save a wysiwyg block
// - make a block with toolbar, inspector and different css attributes
*/

//: warning: this file is a simple demostraton... it's not perfect!

//: notes : 
//:     youtube: https://www.youtube.com/watch?v=jD3owg8H84w
//:     info: https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/
//:     info: https://rudrastyh.com/gutenberg/inspector-controls.html

//:     info: https://imranhsayed.medium.com/attributes-and-components-in-gutenberg-blocks-richtext-blockcontrols-aligntoolbar-230910fcbd4a
//:     info: https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/inspector-controls

//:     attr: https://reaktiv.co/blog/gutenberg-attributes/

//:     toolbar : https://developer.wordpress.org/block-editor/reference-guides/components/toolbar/
//:     allcomponents: https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components
//:     all attributes: https://design.oit.ncsu.edu/docs/gutenberg/block-attributes/
//:     all mods: https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#editor-blocklistblock
//:     all ui : https://developer.wordpress.org/block-editor/reference-guides/components/combobox-control/



const webcolors = [
    { name: 'black', color: '#202020' },
    { name: 'white', color: '#ffffff' },
    { name: 'red', color: '#ff1212' },
    { name: 'blue', color: '#122fff' },
    { name: 'gold', color: '#ffd712' },
    { name: 'green', color: '#20ff12' },
    { name: 'purple', color: '#fb12ff' },
];

recordblock(
'the-plugin-scheme/demo-properties',{

    title: "COMPLEX PROPERTIES",
    icon: 'superhero-alt',
    category: 'scheme-blocks',
    description: 'manca: "carica un banner dentro HELLO SCHEMA", il margine nelle posizioni, le colonne, le griglie?',
	example: {},
    
    attributes: {
        
        css_disabling:          { default: false },
        css_opacity:            { default: 100 },
        css_textalign:          { default: 'center' },
        css_fullpads:           { default: 0 },
        css_boxwidth:           { default: 0 },
        css_boxheight:          { default: 0 },
        css_textsize:           { default: 100 },
        css_textcolor:          { default: 'inherit' },
        css_bkgcolor:           { default: 'transparent' },
        css_bkgimage_cover:     { default: false },
        css_bkgimage_repeat:    { default: false },
        css_bkgimage_position:  { default: null },
        css_bkgimage_url:       { default: null },
        css_bkgimage_id:        { default: null },
        css_position_type:      { default: 'relative'},
        css_position_coord:     { default: 'center-center'},
        css_fullradius:         { default: null },
        css_margins:            { default:'0 0 0 0'},
        css_margin_top:         { default: 0 },
        css_margin_right:       { default: 0 },
        css_margin_bottom:      { default: 0 },
        css_margin_left:        { default: 0 },

        opt_box_standard:       { default: true },
        opt_box_center:         { default: false },
        opt_box_wide:           { default: false },
        opt_box_full:           { default: false },

        btn_selected:           { default:'first' },

        content_title:          { type: 'string' },

    },
    
    edit: props => { return ([

        // ADD ON BLOCK CONTROLLER
        make('toolbar',[

            make('toolbar-group',[
            
                make('ui-button',{
                    icon: 'info',
                    help:'this is an exempe of custom button in custom toolbar!',
                    classes:"my-custom-button",
                    update: () => alert('button pressed!')
                }),
                
            ]),

            make('toolbar-group',[

                make('ui-aligner',{
                    value: props.attributes.css_textalign,
                    update: data => props.setAttributes({ css_textalign: data })
                }),

                make('ui-selectbox',{
                    value: props.attributes.css_textsize,
                    list: [{ label: 'Big', value: '450' }, { label: 'Medium', value: '200' }, { label: 'Small', value: '100' }],
                    update: dataSize => props.setAttributes({ css_textsize: dataSize })
                }),

            ]),

            make('toolbar-group',[
                make('ui-checkbox',{
                    value:props.attributes.css_disabling,
                    update: status =>{ props.setAttributes({ css_disabling:!!props.attributes.css_disabling })}
                }),
            ]),

            make('toolbar-group',[
                make('ui-range',{
                    label:"Padding [0 - 100]",
                    value: props.attributes.css_fullpads,
                    min:0,
                    max:100,
                    update: newPads => props.setAttributes({ css_fullpads: newPads })
                }),
            ]),

        ]),
        
        // ADD ON SIDEBAR
        make('inspector',[

            make('inspector-container','— WARNING:',[
                make('inspector-flagbox',{
                    hexcolor:'#ffd703',
                    icon:'info',
                    message: 'please read documentation on github! this is a stupid demo!!',
                }),

            ]),

            make('inspector-container','— BOX SETTINGS',[

                make('inspector-group --wide',[

                    make('a',{
                        href:'https://github.com/wordpress-projects-station/wp-gutenberg-boxalign-css',
                        target:'_blank',
                        style:{ fontSize:'10px' }
                    },'need a boxaligner css for align elements'),

                    make('inspector-grid-2', [
                        
                        make('ui-button',{
                            label:"standard",
                            value: props.attributes.opt_box_standard,
                            classes: props.attributes.opt_box_standard?'is-active':'',
                            update: () => {
                                props.setAttributes({ 
                                    opt_box_standard: true,
                                    opt_box_center: false,
                                    opt_box_wide: false,
                                    opt_box_full: false
                                })
                            }
                        }),

                        make('ui-button',{
                            label:"centered",
                            value: props.attributes.opt_box_center,
                            classes: props.attributes.opt_box_center?'is-active':'',
                            update: () => {
                                props.setAttributes({
                                    opt_box_standard: false,
                                    opt_box_center: true,
                                    opt_box_wide: false,
                                    opt_box_full: false
                                })
                            }
                        }),

                        make('ui-button',{
                            label:"widebox",
                            value: props.attributes.opt_box_wide,
                            classes: props.attributes.opt_box_wide?'is-active':'',
                            update: () => {
                                props.setAttributes({
                                    opt_box_standard: false,
                                    opt_box_center: false,
                                    opt_box_wide: true,
                                    opt_box_full: false
                                })
                            }
                        }),

                        make('ui-button',{
                            label:"fullpage",
                            value: props.attributes.opt_box_full,
                            classes: props.attributes.opt_box_full?'is-active':'',
                            update: () => {
                                props.setAttributes({
                                    opt_box_standard: false,
                                    opt_box_center: false,
                                    opt_box_wide: false,
                                    opt_box_full: true
                                })
                            }
                        }),

                    ]),

                    make('===='),

                    make('ui-range',{
                        label:"box height",
                        value: props.attributes.css_boxheight,
                        min:0,
                        max:100,
                        update: data => props.setAttributes({ css_boxheight: data })
                    }),

                    make('ui-range',{
                        label:"box width",
                        value: props.attributes.css_boxwidth,
                        min:0,
                        max:100,
                        update: data => props.setAttributes({ css_boxwidth: data })
                    }),

                    make('ui-range',{
                        label:"Padding",
                        value: props.attributes.css_fullpads,
                        min:0,
                        max:100,
                        update: data => props.setAttributes({ css_fullpads: data })
                    }),

                    make('ui-range',{
                        label:"Radius",
                        value: props.attributes.css_fullradius,
                        min:0,
                        max:100,
                        update: data => props.setAttributes({ css_fullradius: data })
                    }),

                    make('ui-range',{
                        label:"Opacity",
                        value: props.attributes.css_opacity,
                        min:0,
                        max:100,
                        step:0.2,
                        list:[
                            { value: 0, label: '0' },
                            { value: 25, label: '25', },
                            { value: 50, label: '50', },
                            { value: 75, label: '75', },
                            { value: 100, label: '100', },
                        ],
                        update: data => props.setAttributes({ css_opacity: data })
                    }),

                ]),

                make('inspector-group --wide',[

                    make('inspector-tab',{
                        label:' ➜ set a background',
                        icon: props.attributes.css_bkgimage_url,
                    },[
                        make('ui-background',{
                            reset: () => props.setAttributes({ css_bkgimage_url:'' }),
                            update_cover: () => props.setAttributes({ css_bkgimage_cover:!props.attributes.css_bkgimage_cover }),
                            update_repeat: () => props.setAttributes({ css_bkgimage_repeat:!props.attributes.css_bkgimage_repeat }),
                            update_position: pos => props.setAttributes({ css_bkgimage_position: pos }),
                            update_media: media => props.setAttributes({ css_bkgimage_url: media.url, css_bkgimage_id:media.id }),
                            iscover: props.attributes.css_bkgimage_cover,
                            isrepeat: props.attributes.css_bkgimage_repeat,
                            coord: props.attributes.css_bkgimage_position,
                            url: props.attributes.css_bkgimage_url,
                            id: props.attributes.css_bkgimage_id
                        })
                    ])
                ]),

            ]),

            make('inspector-container','— CONTENT SETTINGS',[


                make('inspector-group --wide',[

                    make('ui-checkbox',{
                        label: 'active/disable box',
                        value:props.attributes.css_disabling,
                        update: data => { alert('demo, actual status is:'+data+'\nyou need to connect a global property') }
                    }),

                ]),
                
                make('----'),

                make('inspector-tab',{
                    label:' ➜ open color picking',
                    icon: props.attributes.css_textcolor,
                },[
                    make('ui-color-picker',{
                        alpha: false,
                        value: props.attributes.css_textcolor,
                        default: props.attributes.css_textcolor,
                        update: data => { props.setAttributes({ css_textcolor: data}); }
                    })
                ]),
                
                make('----'),

                make('inspector-tab',{
                    label:' ➜ open color selection',
                    icon: props.attributes.css_bkgcolor,
                },[
                    make('ui-color-palette',{
                        list: webcolors,
                        update: data => { props.setAttributes({ css_bkgcolor: data}); }
                    })
                ]),

                make('----'),

                make('inspector-grid-2',[
                    
                    make('inspector-group --aligned',[
                        make('ui-aligner',{
                            value: props.attributes.css_textalign,
                            update: data => props.setAttributes({ css_textalign: data })
                        }),
                        make('p',{},'Align Text',),
                    ]),

                    make('ui-selectbox',{
                        value: props.attributes.css_textsize,
                        list: [{ label: 'Big', value: '450' }, { label: 'Medium', value: '200' }, { label: 'Small', value: '100' }],
                        update: data => props.setAttributes({ css_textsize: data })
                    }),

                ]),

                make('===='),

                make('ui-positioner',{
                    update_type: data => {props.setAttributes({ css_position_type: data })},
                    update_coord: data => {props.setAttributes({ css_position_coord: data })},
                    coord: props.attributes.css_position_coord,
                    type: props.attributes.css_position_type,
                }),

                make('----'),

                make('ui-setmargins', {
                    top: props.attributes.css_margin_top,
                    right: props.attributes.css_margin_right,
                    bottom:props.attributes.css_margin_bottom,
                    left:props.attributes.css_margin_left,
                    update: (dir,px,shorthand) => {
                        props.setAttributes({['css_margin_'+dir]:px})
                        props.setAttributes({ css_margins:shorthand })
                    }
                }),

            ]),

        ]),

        // SUBJECT STRUCTURE
        make('editor',[

            make('div',{
                
                classes:
                    props.attributes.opt_box_center?'aligncenter':
                    props.attributes.opt_box_wide?'alignwide':
                    props.attributes.opt_box_full?'alignfull':'' 
                ,
                style:{ 
                    transitionProperty: "box-shadow, text-align, color, background, opacity, font-size, top, left, right, bottom, width, height",
                    transition: "all 0.3s ease .01s",
                    position: 'relative',
                    backgroundSize: props.attributes.css_bkgimage_cover ? 'cover' : '',
                    backgroundImage: 'url('+props.attributes.css_bkgimage_url+')',
                    backgroundRepeat: props.attributes.css_bkgimage_repeat ? 'repeat' : 'no-repeat',
                    backgroundPosition: props.attributes.css_bkgimage_position,
                    height: props.attributes.css_boxheight>0?props.attributes.css_boxheight+'vh':null,
                    width: props.attributes.css_boxwidth>0?props.attributes.css_boxwidth+'%':null,
                    padding: props.attributes.css_fullpads+"px",
                    textAlign:props.attributes.css_textalign,
                    opacity: props.attributes.css_opacity+'%',
                    borderRadius:props.attributes.css_fullradius+'px',
                    overflow:'hidden'
                }
            },[
                make('edit-texts',{
                    style: { 
                        color: props.attributes.css_textcolor,
                        textAlign: props.attributes.css_textalign,
                        fontSize: props.attributes.css_textsize+'%',
                        background:props.attributes.css_bkgcolor,
                        pointerEvents: props.attributes.css_disabling?'none':null,
                        opacity: props.attributes.css_disabling?'50%':null,
                        margin:props.attributes.css_margins
                    },
                    classes:('__'+props.attributes.css_position_type+'-'+props.attributes.css_position_coord),
                    tag: 'h1',
                    placeholder: 'type anything here',
                    value: props.attributes.content_title,
                    update: dataText => {  props.attributes.css_disabling?alert('box is disabled'):props.setAttributes( { content_title: dataText } ) },
                })
            ])

        ])

    ])},

    save: props => { return (

        make('div',{
            classes:
                props.attributes.opt_box_center?'aligncenter':
                props.attributes.opt_box_wide?'alignwide':
                props.attributes.opt_box_full?'alignfull':'' 
            ,
            style:{
                position: 'relative',
                backgroundSize: props.attributes.css_bkgimage_cover ? 'cover' : '',
                backgroundImage: 'url('+props.attributes.css_bkgimage_url+')',
                backgroundRepeat: props.attributes.css_bkgimage_repeat ? 'repeat' : 'no-repeat',
                backgroundPosition: props.attributes.css_bkgimage_position,
                height: props.attributes.css_boxheight>0?props.attributes.css_boxheight+'vh':null,
                width: props.attributes.css_boxwidth>0?props.attributes.css_boxwidth+'%':null,
                padding:props.attributes.css_fullpads+"px",
                textAlign:props.attributes.css_textalign,
                opacity: props.attributes.css_opacity+'%',
                borderRadius:props.attributes.css_fullradius+'px',
                overflow:'hidden'
            }
        },[

            make('edit-texts',{
                value:props.attributes.content_title,
                tag:'h1',
                classes:('__'+props.attributes.css_position_type+'-'+props.attributes.css_position_coord),
                style:{ 
                    pointerEvents: props.attributes.css_disabling?'none':null,
                    opacity: props.attributes.css_disabling?'50%':null,
                    color: props.attributes.css_textcolor,
                    background:props.attributes.css_bkgcolor,
                    fontSize: props.attributes.css_textsize+'%',
                    textAlign:props.attributes.css_textalign,
                    margin:props.attributes.css_margins
                },
            })

        ])

    )},

    extra: (()=>{


        // this add customized block stile
        // https://awhitepixel.com/blog/wordpress-gutenberg-custom-block-styles/
        // https://www.billerickson.net/block-styles-in-gutenberg/

        // recordstyle(
        //     'the-plugin-scheme/hello-scheme-properties', {
        //     'name' : 'violet-border', //generete is-style-violet-border class
        //     'label' : 'Violet border'
        // });
        

    })()

});