# Expand the Richtext bar

in the last post we saw how to create a richtext and that the bar will appear by itself. As we noticed a template, a configurable array like this:

```js
var formatslist = [
    'custom/preforma',
    'custom/paragraph',
    'custom/underline',
    'custom/boldtext',
    'custom/tabmore',

    'core/text-color',
    'core/bold',
    'core/italic',
    'core/strikethrough',
    'core/link',
    'core/orderedlist', //NOT-WORKING 
    'core/subscript',
    'core/superscript',
    'core/code',
    'core/keyboard',
    'core/image',
]
```

> **obvious note**: the material is under heavy updating, therefore it does not work or everything is ready.

and we have seen that it is possible to integrate it into the appropriate prototype

```js
make('edit-texts',{
    tagName: ... ,
    multiline: ... ,
    allowedFormats: formatslist,
    placeholder: ...,
    value: ...,
    onChange: ...,
})

```

the question is *"where do I find and how do I build those custom"*? Easy, inside:

./required/gutenberg-editor/js/**[gutenberg-richcollection.js](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/js/gutenberg-richcollection.js)**

It's a collection of richtext modifiers. A bit like it was an exclusive prototype and register for this purpose. 

There is no real collective way with which to build a single method, so it is better to use everything as you see it from time to time.

here is a model to follow explained step by step:

```js
    const makeParagraph = props => {

        return  __ ( _richbuttons, {
                    title:'Paragraph',
                    icon:'editor-paragraph',
                    isActive: props.isActive,
                    className: props.isActive?'is-active':null,
                    onClick: () => {
                        props.isActive=true
                        props.onChange(_richedit.toggleFormat(
                            props.value,
                            { type: 'custom/paragraph' }
                        ));
                    },
                })

    }

    _richedit.registerFormatType(
        'custom/paragraph', {
            tagName: 'p',
            title: 'Paragraph',
            className: null,
            edit: makeParagraph
    });
```

From this excerpt we can immediately see that the thing is divided into two sections. One is the logic, the function saved in a unique constant "makeParagraph". It is in all respects the same as the prototyper.
The change is in the second part... This expansion must be registered with a special function: "registerFormatType" which is present in the same richtext, inside the wordpress library.

One last thing to note is how the property is managed at the change of state ... which with the value is fired from a sub-function "toggleFormat"  and targetted by hook-name directly from the onChange hinitered event.
