
/*
// GUTENBERG BLOCK
// --------------------------
// - this file save a wysiwyg block
// - make a editable title basic block
*/

//: warning:    this action required gutenberg-blocks-init.js
//: warning:    this action required gutenberg-blocks-prototyper.js

recordblock(
'the-plugin-scheme/demo-basic',{

	title: "BASIC TEXT BLOCK",
	icon: 'superhero-alt',
	category: 'scheme-blocks',
	description: 'A demo of simple editor text... see more inside the github repo.',

	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'h1',
		},
	},

	edit: props => { return([

		make('editor',[

			make('edit-texts',{

				tagName: 'h1',
				className: props.className,
				allowedFormats: [ 'core/bold', 'core/italic' ],
				placeholder: 'type anything here',
				value: props.attributes.content,
				onChange: refresh => { props.setAttributes( { content: refresh } ) },

			})

		])

	])},

	save: props => { return (

		make('edit-texts-contents',{
			saved:true,
			tagName: 'h1',
			value: props.attributes.content,
		})

	)},

});