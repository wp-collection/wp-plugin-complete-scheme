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
        example: {},
        
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
                        update: data => alert('demo: '+data )
                    }),

                    make('ui-selectbox',{
                        // label: "Font size",
                        value: 100,
                        // multiple:true,
                        options: [{ label: 'Big', value: '250' }, { label: 'Medium', value: '150' }, { label: 'Small', value: '75' }],
                        update: data => alert('demo: '+data)
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

                        tag: 'h3',
                        break:'br',
                        formats: formatslist,
                        classes:'text-center',
                        style: { fontWeight:'bold' },
                        placeholder: '- toolbar: text editor -',
                        value: props.attributes.demo_title,
                        update: data => {  props.setAttributes( { demo_title: data } ) },

                    }),

                    make('edit-texts',{

                        tag: 'p',
                        break:'p',
                        classes:'text-center',
                        formats: formatslist,
                        placeholder: 'if you are in editor, click this editable text box',
                        value: props.attributes.demo_paragraph,
                        update: data => {  props.setAttributes( { demo_paragraph: data } ) },

                    })

                ]),

            ])

    
        ])},
    
        save: props => { return (
    
            make('div',{
                style:{
                    background:'var(--base)',
                    padding:'25px',
                    textAlign:'center'
                }
            },[
 
                make('edit-texts',{
                    tag: 'h2',
                    value:props.attributes.demo_title
                }),
 
                make('edit-texts',{
                    tag: 'p',
                    value:props.attributes.demo_paragraph
                })
 
            ])
    
        )}

    });

