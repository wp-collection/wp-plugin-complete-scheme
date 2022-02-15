/*
// GUTENBERG BLOCK
// --------------------------
// - this file save a wysiwyg block
// - a demo of all toolbar and inspector parts
*/

var formatslist = [
    
    // you can see more on:
    // https://github.com/WordPress/gutenberg/tree/trunk/packages/format-library/src
    // ['core/heading', [
    //     { level: 1, placeholder: 'Enter a heading' },
    //     { level: 2, placeholder: 'Enter a heading' },
    //     { level: 3, placeholder: 'Enter a heading' }
    // ]],                        //NOT-WORKING
    // ['core/paragraph'],        //??
    // 'DEMO',                    //NOT-WORKING

    'custom/preforma',
    'custom/paragraph',
    'custom/underline',
    'custom/boldtext',
    'custom/tabmore',

    'core/text-color',       //ok
    'core/bold',             //ok
    'core/italic',           //ok
    'core/strikethrough',    //ok
    'core/link',             //ok
    'core/orderedlist',      //NOT-WORKING 
    'core/subscript',        //ok
    'core/superscript',      //ok
    'core/code',             //ok
    'core/keyboard',         //ok
    'core/image',            //ok but not have aligner
    // 'core/gallery',       //NOT-WORKING
    // 'core/cover',         //NOT-WORKING
    // 'core/button',        //NOT-WORKING
]

recordblock(
    'the-plugin-scheme/demo-toolbar-texts',{
    
        title: "TOOLBAR TEXTS DEMO",
        icon: 'superhero-alt',
        category: 'scheme-blocks',
        description: 'A demo of repicable examples for richtext toolbar .',
        
        attributes: {

            demo_title: {
                type: 'string',
            },

            demo_paragraph: {
                type: 'string',
            },

        },
        
        edit: props => { return ([
    

            // ADD ON BLOCK CONTROLLER

            make('toolbar',[

                make('toolbar-group',[

                    make('ui-aligner',{
                        value: 'center',
                        onChange: refresh => alert('demo: '+refresh )
                    }),

                    make('ui-selectbox',{
                        // label: "Font size",
                        value: 100,
                        // multiple:true,
                        options: [{ label: 'Big', value: '250' }, { label: 'Medium', value: '150' }, { label: 'Small', value: '75' }],
                        onChange: refresh => alert('demo: '+refresh)
                    }),

                ]),

                
            ]),


            // SUBJECT STRUCTURE

            make('editor',[

                make('div',{
                    style: {
                        background:'var(--base)',
                        padding:'25px',
                        textAlign:'center'
                    }
                },[

                    make('edit-texts',{

                        tagName: 'h3',
                        multiline:'br',
                        allowedFormats: formatslist,
                        className:'text-center',
                        style: { fontWeight:'bold' },
                        placeholder: '- toolbar: text editor -',
                        value: props.attributes.demo_title,
                        onChange: refresh => {  props.setAttributes( { demo_title: refresh } ) },

                    }),

                    make('edit-texts',{

                        tagName: 'p',
                        multiline:'p',
                        className:'text-center',
                        allowedFormats: formatslist,
                        placeholder: 'if you are in editor, click this editable text box',
                        value: props.attributes.demo_paragraph,
                        onChange: refresh => {  props.setAttributes( { demo_paragraph: refresh } ) },

                    })

                ]),

            ])

    
        ])},
    
        save: props => { return (
    
            make('div',{
                saved:true,
                style:{
                    background:'var(--base)',
                    padding:'25px',
                    textAlign:'center'
                }
            },[
 
                make('edit-texts',{
                    saved:true,
                    tagName: 'h2',
                    value:props.attributes.demo_title
                }),
 
                make('edit-texts',{
                    saved:true,
                    value:props.attributes.demo_paragraph
                })
 
            ])
    
        )}

    });

