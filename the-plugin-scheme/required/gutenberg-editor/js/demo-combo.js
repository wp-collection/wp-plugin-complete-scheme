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
	example: {},

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

				tag: 'h1',
				formats: [ 'core/bold' ],
				value: props.attributes.demo_title,
				placeholder: 'type anything here',
				update: data => { props.setAttributes( { demo_title: data } ) },

			}),

			make('edit-texts',{

				tag: 'p',
				break: 'br',
				formats: [ 'core/bold', 'core/italic' ],
				value: props.attributes.demo_paragraph,
				placeholder: 'type anything here',
				update: data => { props.setAttributes( { demo_paragraph: data } ) },

			})
		
		])

	])},

	save: props => { return (

		make('div',{},[

			make('edit-texts',{
				tag: 'h1',
				value: props.attributes.demo_title
			}),

			make('edit-texts',{
				tag: 'p',
				value: props.attributes.demo_paragraph
			})

		])
	)}

});