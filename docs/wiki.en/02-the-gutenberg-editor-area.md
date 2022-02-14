# The Gutenberg Editor Area

Being purists, minimalists, we didn't want super libraries to manage elements in wordpress, because it's so close to php and web 2.0. For that we preferred to use the standard wp libs, which we appreciated and granted us the ability to have easy *prototyper* ... at least as a compromise, given that, behind our every mistake, almost surprisingly ... there was debugging react (wtf??!!).

## - inside the area

As we anticipated, the gutenberg section is divided between the plugin and the editor.
Editor elements are loaded from the index_gutenberg_blocks.php file

We can practically see that in these first three lines:

```php
/: init blocks generators
wp_enqueue_script( ...  .'gutenberg-init.js', ... );
wp_enqueue_script( ...  .'gutenberg-prototyper.js', ... );
wp_enqueue_script( ...  .'gutenberg-richcollection.js', ... );
```

Only after whe have another wp_enqueue_script and css.

What's up? It's simple...

The first 3 files are respectively:

- the variables of the wordpress libraries are global and will then be read by each script that follows that file

- then comes the turn for the method with which we will save the preconstructed blocks with the worpdress libraries, otherwise we would have too complicated blocks to read!

- ends with gutenberg text bar expansions, so you won't be satisfied with just bold or italic

Immediately after we will queue the created blocks (which here all start with demo- and end with an obvious nameofblock.js) and then the general css that tries to correct the various adjustments necessary to the new features. we recommend that you build extra css for your stuff and add a specific one for alignments, not present in this asset.

We remind you that each block has many comments, left purposely as a source of general study with which to deepen the topics covered but, I know ... you want to understand more .... and you want it now.

Let's get it inside.

### - the gutenberg-init.js

As mentioned in this file [file](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/js/gutenberg-init.js) have all the variables, but being more specific they are the first shortcut from "wordpress library" to "do this quickly".

example:

```js
const __ = wp.element.createElement
```

without such shortcuts a function to build something would be incredibly long.
A very brief example from this with shortends:

```js
 __ ( _card ,{},[ __ ( _card_title ,{...},params), nesteds ])
```

to mutch complicated:

```js
wp.element.createElement ( wp.components.Card ,{},[ wp.element.createElement ( wp.components.CardHeader ,{...}, otherparams), otherwpcomponentsblablabla ])``
```

that's what happens to every function inside the [prototyper](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/js/gutenberg-prototyper.js)

### - the gutenberg-prototyper.js

the [prototyper](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/js/gutenberg-prototyper.js) has the specific purpose of saving the constructs made with shortcuts to recall them, in an understandable way, inside a block (any demo-blockname.js).

He succeeds thanks to a small switch. A very simple trick. The logic is very simple: "Save the name of the component created and call it with a string from the function."

Let's see to practice.

INSIDE PROTOTYPER:

```js
case 'hello-world' :

    return  __ ( 'div',{ className:'helloworld' },[
                __ ('h1',{},params.title),
                __ ('h1',{},params.text),
                nested
            ])
```

INSIDE THE BLOCK.JS:

```js
make('hello-world',{title:'hello',text:'this is an exemple'},[
    other make ..., ..., ...,
])
```

It is easy to see that it is a simple case, but you can imagine the usefulness of this thing in very advanced cases such as the element we built that manages the "set a background" box button with selectboxes, buttons and a lot of it inside. other.

Yes, because each element of *__* and make is nestable at will.

> note: **Remember that it is a very bad thing to mix the two creators**. Use the double underscore inside the prototyper and call it with make only inside the js blocks. In short: make your complicated prototype with __ and save it inside the prototyper switch. Call that from make(xxx).

Notice that the parameters are directly linked by make.

So if, in a block you sentence *"make ('test', {onClick: message=>{ alert (message) })"* passing directly "message" into prototyper, probably, that would work; but it's often better to set up an intermediary. Here is a simple exemple:

INSIDE PROTOTYPER:

```js
case 'radiotest' :

    var myone = params.actual=='foo'?'ONE-IS-ACTIVE':'ONE'
    var mytwo = params.actual=='bar'?'TWO-IS-ACTIVE':'TWO'

    return __ ( _ui_radiobox, _blockdata({
                selected: params.actual,
                options: [
                    { label: myone , value: 'foo' },
                    { label: mytwo , value: 'bar' },
                ],
                onChange: v => params.setActual(v)
           }))
```

INSIDE THE BLOCK:

```js
make('radiotest',{
    actual:'foo',
    setActual: refresh => attributes.setAttribute{{ actual:refresh }}
})
```

This makes it easier to build complex semantics, write a modificator before native functions, change vars, and get all via actuator outside prototyper as for switching between onChange (native) and setActual (invented).

It's beautiful right? A complex thing becomes a name that prints what it takes. sounds cool! How do you say? What are those attributes?

See you soon! With gutenberg blocks.

### - From prototyper to blocks.js

There are already some "demo-" blocks, we have called them specifically so because they are valid examples but they remain such. To advance you will need to create your own for your plugin. Let's see how.

To build a block create a new js in *./required/gutenberg-editor/js/demo-hello-world.js_*

and populate it with:

```js
recordblock(
    'the-plugin-scheme/demo-hello-world',{

        title: "HELLO WORLD!",
        icon: 'superhero-alt',
        category: 'scheme-blocks',
        description: 'A demo of simple block.',

        attributes: { content: {} },

        edit: props => { return([

            make( 'mydemoname' , {
                ... your properties attributes
            },[
                ... and other nested
            ])

        ])},

        save: props => { return (

            make( 'mydemoname' , {
                saved : true,
                value : props.attributes.content,
                ...and other props
            },[
                ...and other nested
            ])

        )},

    });
```

It's obvious that this is the most basic scheme you can have and that the prototyper will give an error on that demo... However, we will need to understand that:

- *"recordblock"* is a shortcut that will register the block managed by *"the-plugin-scheme"* which will have the name *"demo-hello-world"*. On the editor menu of gutenberg, under the category registered with the slug *"scheme-blocks"* will appear a [dash icon](https://developer.wordpress.org/resource/dashicons/#superhero-alt) *"superhero-alt"* with a label (the title of block) *"HELLO WORLD!"*. The description, appear on the sidebar editor (whit, again, icon and title).

- Finally we observe "the global attributes of the block" ie those variables that will intersect globally to be recalled and modified throughout the block.
  
  They are no longer a mandatory element but without them, you could run into errors if you need an interchange of data.
  
  This data list is complex and can be anything ... observe, for example, the css data stored in attributes inside the most complicated block: that, in fact, of the [demo-usingproperties.js](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/js/demo-usingproperties.js#L44-L87)

- then we see the "edit" function object that creates the editable block in the editor. We, here, will use the prototyper or the classes directly to prototype something (we'll see later)

- in conclusion we can see the "save", similar to first but it's the "final versione of saved html output"

Make attention of different warning:

1. "saved:true" is required in element for prototyper.

2. "save:" funciton it's not an array.

3. "props.attributes.content" it's required for save contets of block.

That's how it's maked a block. Now... the prepared blocks inside prototype is more, later we can talk of this but, in this moment, try to make a new prototype from stretch:

```js
recordblock(
    'the-plugin-scheme/demo-hello-world',{

        title: "HELLO WORLD!",
        icon: 'superhero-alt',
        category: 'scheme-blocks',
        description: 'A demo of simple block.',

        attributes: { 
            content: {},
            css_hide_box:{ default: false }
        },

        edit: props => { return([

            __ ( 'div' , {className:'wp-block'},[
                __ ( 'div' , {
                    style : { 'display': attributes.css_hide_box?'none':'block'},
                    onClick: refresh => attributes.setAttribute({css_hide_box:!!attributes.css_hide_box})
                },'helloooo')
            ])

        ])},

        save: props => { return (

            __( 'div' , {
                saved : true,
                value : props.attributes.content,
                style : { 'display': attributes.css_hide_box?'none':'block'},
            },'helloooo')

        )},

    });
```

From the example we can see many things. First of all that a shortcut "make ('hideshow', ...)" is aesthetically more understandable, for example the div with class wp-block is already replaceable by a prototype. Then that editing and saving are not exactly the same if you want to. finally that it would be better to build an intermediary for the css value and the action to build something logically acceptable.

we preview a final prototyped construction :

```js
recordblock(
    'the-plugin-scheme/demo-hello-world',{

        title: "HELLO WORLD!",
        icon: 'superhero-alt',
        category: 'scheme-blocks',
        description: 'A demo of simple block.',

        attributes: { 
            content: {},
            box_status:{ default: false }
        },

        edit: props => { return([

            make( 'editor' , [

                make( 'hideshow', {
                    status : attributes.box_status,
                    setStatus: refresh => attributes.setAttribute({box_status:refresh})
                }, 'helloooo' )

            ])

        ])},

        save: props => { return (

            make( 'hideshow',{
                saved : true,
                value : props.attributes.content,
                style:{ 'display':params.visibility?'none':'block'}
            },[ make( 'p', {saved:true}, 'helloooo') ])

        )},

    });
```

INTO PROTOTYPER:

```js
case 'hideshow' :

    var visibility = params.status?'none':'block'

    return __ ( 'div', _blockdata({
                className:'box-hide-show',
                style:{ 'display':params.visibility},
                onClick: () => params.setStatus(!!visibility)
           }),nested) 
```

The list of each element present in the prototyper is here. **We remind you**, because maybe you didn't notice that **prototypes are not blocks ... but part of them**. For example ...

*how can i add on [inspector an elements](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/js/demo-toolbar-boxes.js#L28-L219)?*

```js
make('inspector',[

    make('inspector-container','— MY TITLE!',[

        make('inspector-group --wide',[
            ... contents
        ]),

        ... contents

    ]),

    ... contents

])
```

*and how can i add a ui? exemple... a color picker?*

```js
make('inspector-tab',{
    label:' ➜ open color picking',
    icon: props.attributes.your_global_css_color,
},[
    make('ui-color-picker',{
        disableAlpha: false,
        value: props.attributes.your_global_css_color,
        defaultValue: '#000000',
        onChangeComplete: refresh => {props.setAttributes({your_global_css_color:refresh.hex})}
    })
])
```

*and a [toolbar for a box](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/js/demo-toolbar-boxes.js#L28-L219)?*

```js
make('toolbar',[

    make('toolbar-group',[
        ... contents
    ]),

    ... contents

])
```

*and how would you use gutenberg [richtext editor](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/js/demo-basic.js#L32-L41)?*

```js
make('edit-texts',{

    tagName: 'p',
    multiline: 'br',
    className: props.className,
    allowedFormats: [ 'core/bold', 'core/italic' ],
    placeholder: 'type anything here',
    value: props.attributes.content,
    onChange: refresh => { props.setAttributes( { content: refresh } ) },

})
```

and how can i add elments on [text richeditor toolbar](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/js/demo-toolbar-texts.js#L1-L150)?

wen you use a *edit-texts* we add a toolbar in automatic and set inside the formats but for expand it, for exemple whit a underline ([see this exemple](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/js/demo-toolbar-texts.js#L8-L40)), you need make a collection of modificator. [See next post](./03-expand-richtext.md).
