/*
// GUTENBERG BLOCK
// --------------------------
// - this file save a wysiwyg block
// - make a pre-composed block
*/

//: warning:    this action required gutenberg-blocks-init.js
//: warning:    this action required gutenberg-blocks-prototyper.js

recordblock(
'the-plugin-scheme/demo-combo',{


	title: "BASIC TEXT EDIT LAYOUT",
	icon: 'superhero-alt',
	category: 'scheme-blocks',
	description: 'A demo of simple fac-simile layout... see more inside the github repo.',

	attributes: {

		demo_title: {
			type: 'string'
		},

		demo_paragraph: {
			type: 'string'
		},

	},

	edit: props => { return ([

		make('editor',[

			make('edit-texts',{

				tagName: 'h1',
				allowedFormats: [ 'core/bold' ],
				value: props.attributes.demo_title,
				placeholder: 'type anything here',
				onChange: refresh => { props.setAttributes( { demo_title: refresh } ) },

			}),

			make('edit-texts',{

				tagName: 'p',
				// multiline: false, 
				// preserveWhiteSpace: false,
				allowedFormats: [ 'core/bold', 'core/italic' ],
				value: props.attributes.demo_paragraph,
				placeholder: 'type anything here',
				onChange: refresh => { props.setAttributes( { demo_paragraph: refresh } ) },

			})
		
		])

	])},

	save: props => { return (

		make('div',{saved:true},[

			make('edit-texts',{
				saved:true,
				tagName: 'h1',
				value: props.attributes.demo_title
			}),

			make('edit-texts',{
				saved:true,
				tagName: 'p',
				value: props.attributes.demo_paragraph
			})

		])
	)}

});