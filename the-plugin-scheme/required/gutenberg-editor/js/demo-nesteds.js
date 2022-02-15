
/*
// GUTENBERG BLOCK
// --------------------------
// - this file save a wysiwyg block
// - make a custom group nestable lock
*/

//: warning:    this action required gutenberg-blocks-init.js
//: warning:    this action required gutenberg-blocks-prototyper.js

//: notes:      https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/
//:             https://github.com/WordPress/gutenberg/blob/5f055de64eae7852cb703adda6e203280a826cec/packages/block-editor/src/components/inner-blocks/README.md#templatelock
//:             https://stackoverflow.com/questions/70790355/create-plus-button-for-call-other-nested-gutenberg-blocks-in-plain-javascript
//: questions:  how to renderAppender? wp.editorBlocks.ButtonBlockAppender?

//: all block types : https://gist.github.com/DavidPeralvarez/37c8c148f890d946fadb2c25589baf00

recordblock(
'the-plugin-scheme/demo-nesteds',{

    title: "NESTEDS GROUPS",
    icon: 'superhero-alt',
    category: 'scheme-blocks',
    description: 'Add a standard sub contents or layouts box',

	attributes: {},

    edit: props => { return ([

        make('editor',[

            make('nesting-group',{
                // extra params:
                // template:[ [ 'core/heading', { placeholder: 'Test Title' } ], ... ],
                // allowedBlocks:['core/columns','core/heading']
            })

        ])

    ])},

    save: props => { return (

        make('div',{
            saved:true
        },[
            make('nesting-group',{saved:true})
        ])

    )}

});