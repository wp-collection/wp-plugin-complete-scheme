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

		content:{
			type: 'array',
			source: 'children',
		},

		content_title: {
			type: 'array',
			source: 'children',
			selector: 'h1',
		},

		content_paragraph: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},

	},

	edit: props => { return ([

		make('editor',[

			make('edit-texts',{

				tagName: 'h1',
				allowedFormats: [ 'core/bold' ],
				value: props.attributes.content_title,
				placeholder: 'type anything here',
				onChange: refresh => { props.setAttributes( { content_title: refresh } ) },

			}),

			make('edit-texts',{

				tagName: 'p',
				// multiline: false, 
				// preserveWhiteSpace: false,
				allowedFormats: [ 'core/bold', 'core/italic' ],
				value: props.attributes.content_paragraph,
				placeholder: 'type anything here',
				onChange: refresh => { props.setAttributes( { content_paragraph: refresh } ) },

			})
		
		])

	])},

	save: props => { return (

		make('div',{
			saved:true,
			className:'my-custom-class',
			value:props.attributes.content
		},[

			make('edit-texts-contents',{
				saved:true,
				tagName: 'h1',
				value: props.attributes.content_title
			}),

			make('edit-texts-contents',{
				saved:true,
				tagName: 'p',
				value: props.attributes.content_paragraph
			})

		])
	)}

});