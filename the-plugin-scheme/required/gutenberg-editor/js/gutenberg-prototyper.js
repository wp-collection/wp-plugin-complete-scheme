    /*
    // PROTOTYPER MAKE METHOD
    // --------------------------
    // in this file section all block prototypes for "make" it
    // in runtime when you need with a clean call.
    */


    //: litte how to:
    //:     1. save new file js for you block 
    //:     2. use recordblock + recordstyle for start block
    //:     3. protoproto your schema width __ (the clean shorthend of wp creator)
    //:
    //:     exemple:
    //:     recordblock('the-plugin-scheme/hello-scheme-basic',{
    //:         title:'NAME',icon:'DASHICON',category:'CATNAME',attributes:{content:{},},
    //:		    edit: props => {return __ ('yourhtmltag',{ all properties },[ all contents ]) },
    //:         save: props => {return __ ('yourhtmltag',{ saved:true, all properties },[ all contents ]) },
    //:         extra: (()=>{ recordstyle('the-plugin-scheme/hello-scheme-properties',{'name':'nameofstyle','label':'nameofstyle'}) ...other functions})()
    //:     })
    //:
    //:     if block work and is nestable or repeatable, you have a perfect candidate for "make method function".
    //:
    //:     exemple:
    //:     make('NAMEOFPROTOTYPE',{ cross params (properties) },[ nestable contents if can ]),
    //:
    //:     4. after prototipation, save it in a prototype name, inside while of make method
    //:     5. remove old prototype inside edit and save,
    //:     6. call prototype from when you whant :)
    //:
    //:     extra -> "make" and "__" it's similar, It's a good role use make(...) for all and use "__(...)" only inside prototype.


    const make = (prototype,params,contents) => {

        var nested = contents==undefined?null:contents

        switch( prototype ) {


            case 'editor' :

                return __ ( 'div', {className:'wp-block-prototyped'}, params)


            /*--------------------------------------------*/


            case 'toolbar' :

                return __ ( _block_control, {key:'controls'}, params)


            case 'toolbar-group' :
    
                return __ ( _toolbar_group, {}, params)


            /*--------------------------------------------*/


            case 'inspector' :

                return __ ( _inspector,{},params)


            case 'inspector-container' :
    
                return __ ( _inspector_container,{}, __ ( _inspector_header, {title:params,initialOpen:false}, nested))


            case 'inspector-group' :
            case 'inspector-group --wide' :
            case 'inspector-group --aligned' :
            case 'inspector-group --justified' :

                return __ ( _inspector_group, {}, __ ( 'div', {className:'components-panel__wrapper '+String(prototype.split('group')[1])}, params ) )


            case 'inspector-split' : case '====' :

                return __ ( _split,{className:'linesplit'})


            case 'inspector-space':case '----' :

                return __ ('div',{className:'dashspace'})
                

            case 'inspector-grid-2':
            case 'inspector-grid-3':
            case 'inspector-grid-4':
            case 'inspector-grid-5':
            case 'inspector-grid-6':

                return __ ('div', {className:'inspector-block-grid'+prototype.split('grid')[1]}, params)


            case 'inspector-card' :

                let nestedcontents = []; for(let _n of nested) nestedcontents.push( __ (_card_contents,{size:'xSmall',},_n ) )

                return __ ( _card ,{},[ __ ( _card_title ,{size:'xSmall',isShady:true},String(params)), nestedcontents ])


            /*--------------------------------------------*/


            case 'inspector-flagbox' :

                return  __ ( 'div',{
                                className:'flagbox',
                                style:{
                                    background:params.hexcolor,
                                    color: params.hexcolor
                                }
                        },[
                            __ ('span',{className:'dashicon dashicons dashicons-'+params.icon}),
                            __ ('p',{},params.message)
                        ])


            /*--------------------------------------------*/


            case 'inspector-tab' :

                return __ ('div',{},[

                    __ ('details',{className:'components-panel__tab'},[

                        __ ('summary',{}, (


                                params.texticon ?
                                    __ ('p',{className:'tab-icon'},params.icon) :

                                params.icon!=undefined&&params.icon.startsWith('http') ?
                                    __ ('div',{className:'tab-icon',style:{background:"url("+params.icon+") center center / cover" }}) :

                                params.icon!=undefined&&params.icon.startsWith('#') ?
                                    __ ('div',{className:'tab-icon',style:{background:params.icon }}) :

                                !params.icon|params.icon==null|params.icon==undefined ?
                                    __ ('span',{className:'tab-icon no-icon'},"✖") :
                                    __ ('span',{className:'tab-icon dashicon dashicons dashicons-'+params.icon})

                            ),

                            __ ('p',{},!params.label?'option group:':params.label),

                        ),

                        __ ('div', { className:'tab-contents' }, nested )

                    ])
                ])


            case 'inspector-banner' :

                return __ ( 'img',{style:{width:'100%'},src:params.src})

                
            /*--------------------------------------------*/

            case 'toolbar-tab' :

                let tbid = _generated_id()

                return  __ ( 'div', {
                            className:'toolbar-tab'
                        },[
                            __ ( _ui_btn, {
                                icon: params.icon,
                                id: tbid,
                                onClick: () => {

                                    let tab = document.getElementById(tbid).parentNode.classList;

                                    tab.contains('has-active')?
                                        tab.remove('has-active'):
                                        tab.add('has-active')

                                }
                            } ),

                            __ ( 'div', { className: 'tab-contents' }, nested )

                        ],null)


            /*--------------------------------------------*/


            case 'edit-texts' :

                if (!params.update) {

                    params.value==undefined?console.log("_ui_texts prototype message: gutenberg rich text value result undefined. Please set attributes:{ YOURCONTENT: { type:'string' } }"):null
                    return  __ ( _ui_texts.Content, params, null)

                } else {

                    return  __ ( _ui_texts, {
                        tagName: params.tag,
                        multiline: params.break, 
                        preserveWhiteSpace: !params.unspace,
                        allowedFormats: params.formats,
                        placeHolder: params.placeholder,
                        className: params.classes,
                        style:params.style,
                        value: params.value,
                        onChange: data => ( params.update(String(data)) )
                    })

                }

            /*--------------------------------------------*/


            case 'nesting-group' :
                if (!params.formats) return __ ( 'div', {} , __( _block_contents.Content ) ) 
                else                 return __ ( 'div', { className: 'nesting-selector-container' }, __ ( _block_contents , params.formats!='all'?{allowedBlocks:params.formats}:null ))
                

            /*--------------------------------------------*/


            case 'ui-textarea' :

                return __ (_ui_textarea, {

                    placeHolder: params.placeHolder,
                    style:params.style,
                    className: params.class,
                    value: params.val,
                    onChange: newtext => props.update(newtext)

                })


            case 'ui-aligner' :

                return __ ( _ui_alignbar, {
                    
                    value: params.value,
                    onChange: data => params.update( data) 

                }, null)


            case 'ui-btn-group' :

                return __ ( _ui_btn_group, {}, params )


            case 'ui-button':

                return __ ( params.icon && !params.label ? _ui_btnicon : _ui_btn, {
                    icon: params.icon,
                    label: params.label,
                    value: params.value,
                    style:params.style,
                    className: params.class,
                    onClick: data => params.update(data)
                }, params.label )


            case 'ui-featuredimage' :

                return __ ( _ui_feauteredImg,{},null )


            case 'ui-checkbox' :

                return __ ( _ui_checkbox, {

                    label: params.label,
                    help: params.help,
                    checked:params.status,
                    onClick: () => { params.update( !params.status?true:false ) }

                }, null )


            case 'ui-radiobox' :

                return __ ( _ui_radiobox, {

                    selected: params.value,
                    options: params.list,
                    onChange: refresh => params.update( refresh ) 

                }, null )


            case 'ui-range' :
            case 'ui-range-compact' :

                return __ ( _ui_range , {

                    className:( prototype.includes('-compact') ? params.className+=' compact' : null ),
                    label:params.label,
                    value:params.value,
                    min:params.min,
                    max:params.max,
                    step:params.step,
                    marks:params.list,
                    onChange: data => params.update(data)

                } , null )


            case 'ui-selectbox' :

                return __ ( _ui_select, {
            
                    label: params.label,
                    value: params.value,
                    multiple:params.multiple,
                    options: params.list, 
                    onChange: data => params.update( data )

                }, null )


            case 'ui-togglebox' :

                let optresult = [];  for ( let _opt of params.list ) optresult.push(  __ ( _ui_toggleslide_content, { value:_opt.value, label:_opt.label } ) )

                return __ ( _ui_toggleslide, {

                    label:params.label,
                    value:params.value,
                    isBlock: true,
                    onChange: data => params.update(data)

                } , optresult )


            case 'ui-switchbox' :

                return __ ( _ui_switcher , {

                    checked: params.status,
                    onClick : () => { params.update( !params.status?true:false ) }

                }, null)


            case 'ui-color-picker' :

                return __ ( _ui_color,{

                    disableAlpha: params.alpha,
                    value: params.value,
                    defaultValue: ! params.default ? '#000000' : params.default,
                    onChangeComplete: data => params.update(data.hex)

                }, null )


            case 'ui-color-palette' :

                return __ ( _ui_palette, {
                    colors: params.colors,
                    onChange: data => params.update(data)
                }, null )


            case 'ui-positioner' :

                return  __ ('div',{className:'ui-positioner'},[

                            __ ('p',{},'Set anchoring'),

                            __ ( _ui_radiobox, {
                                selected: params.actualType,
                                options: [
                                    { label: 'standard anchor', value: 'relative' },
                                    { label: 'sticky content', value: 'sticky' },
                                    { label: 'respect container', value: 'absolute' },
                                    { label: 'respect screen', value: 'fixed' },
                                ],
                                onChange: data => params.setPositionType(data)
                            }),

                            __ ('div',{className:'dashspace'}),

                            __ ('p',{},'Set position of object'),

                            __ ('div',{className:'ui-positioner-grid'},

                                __ ( _ui_radiobox, {
                                    selected: params.actualCoord,
                                    options: [
                                        { label: '', value: 'top-left' },
                                        { label: '', value: 'top-center' },
                                        { label: '', value: 'top-right' },
                                        { label: '', value: 'center-left' },
                                        { label: '', value: 'center-center' },
                                        { label: '', value: 'center-right' },
                                        { label: '', value: 'bottom-left' },
                                        { label: '', value: 'bottom-center' },
                                        { label: '', value: 'bottom-right' },
                                    ],
                                    onChange: data => params.setPositionCoord(data) 
                                },null)

                            )

                        ])


            case 'ui-setmargins' :

                return  __ ('div',{className:'ui-setmargins'},[

                            __ ( _ui_range, {
                                label:"top",
                                value: parseInt(params.top),
                                className:'compact',
                                min:-100,max:100,marks:[{value:0,label:'zero'}],
                                onChange: newpxtop => {
                                    params.update(
                                        'top',newpxtop,
                                        params.top+'% '+params.right+'% '+params.bottom+'% '+params.left+'px'
                                    )
                                }
                            }),

                            __ ( _ui_range, {
                                label:"right",
                                value:parseInt(params.right),
                                className:'compact',
                                min:-100,max:100,marks:[{value:0,label:'zero'}],
                                onChange: newpxright => {
                                    params.update(
                                        'right',newpxright,
                                        params.top+'% '+params.right+'% '+params.bottom+'% '+params.left+'px'
                                    )
                                }
                            }),

                            __ ( _ui_range, {
                                label:"bottom",
                                value: parseInt(params.bottom),
                                className:'compact',
                                min:-100,max:100,marks:[{value:0,label:'zero'}],
                                onChange: newpxbottom => {
                                    params.update(
                                        'bottom',newpxbottom,
                                        params.top+'% '+params.right+'% '+params.bottom+'% '+params.left+'px'
                                    )
                                }
                            }),

                            __ ( _ui_range, {
                                label:"left",
                                value: parseInt(params.left),
                                className:'compact',
                                min:-100,max:100,marks:[{value:0,label:'zero'}],
                                onChange: newpxleft => {
                                    params.update(
                                        'left',newpxleft,
                                        params.top+'% '+params.right+'% '+params.bottom+'% '+params.left+'px'
                                    )
                                }
                            })

                        ])


            case 'ui-background' :

                return  __ ('div',{},[

                            __ ('div',{ className:'image-container' },

                                __ ('div',{

                                        className:'image-background-container',
                                        style:{
                                            backgroundImage:'url('+params.url+')',
                                            backgroundRepeat: params.isrepeat?'repeat':'no-repeat',
                                            backgroundPosition: params.coord,
                                            backgroundSize: params.iscover ? 'cover' : !params.iscover&&params.isrepeat? '50%' : 'auto 75%'
                                        }
            
                                    },

                                    __ (_mediabox,{
                                        addToGallery: true,
                                        gallery: false,         //set true for more images
                                        multiple: false,        //set true for more images
                                        allowedprotos: 'image',  //set array for more images
                                        value: params.url,
                                        onSelect: media => { params.setMedia(media) },
                                        render: ({ open }) => __( _ui_btn , {onClick:open} , (!params.url?'✚':'↻') )
                                    })
                                        
                                ),
                            ),

                            __ ('div',{className:'dashspace'}),

                            __ ('div',{className:'components-panel__wrapper --justified'},

                                __ ( _ui_checkbox,{
                                    label:'cover',
                                    checked:params.iscover,
                                    onChange: () =>{  if(!params.iscover&&params.isrepeat){params.setRepeat()} params.setCover()  }
                                }),

                                __ ( _ui_checkbox, {
                                    label:'repeated',
                                    checked:params.isrepeat,
                                    onChange: () =>{  if(params.iscover&&!params.isrepeat){params.setCover()} params.setRepeat() }
                                }),

                            ),

                            __ ('div',{className:'dashspace'}),

                            __ ( _ui_select, {
                                multiple:false,
                                value: params.coord,
                                options: [
                                    { label: '⌜ |  top - left', value: 'top left' },
                                    { label: '⊤ |  top - center', value: 'top center' },
                                    { label: '⌝ |  top - right', value: 'top right' },
                                    { label: '⊢ |  center - left', value: 'center left' },
                                    { label: '✛ |  center - center', value: 'center center' },
                                    { label: '⊣ |  center - right', value: 'center right' },
                                    { label: '⌟ |  bottom - right', value: 'bottom right' },
                                    { label: '⊥ |  bottom - center', value: 'bottom center' },
                                    { label: '⌞ |  bottom - left', value: 'bottom left' }
                                ],
                                onChange: newposition => { params.setPosition(newposition) }
                            }),

                            __ ('div',{className:'dashspace'}),

                            __ ('div',{className:'image-container-data'},[

                                __ ('input',{
                                    id:params.id,
                                    proto:'text',
                                    placeHolder:'no file selected',
                                    value:params.url,
                                    readOnly:'true'
                                }),

                                __ ( _ui_btn, { onClick: reset => {
                                        document.getElementById(params.id).value = ''
                                        params.reset()
                                    }},
                                    !params.url?'○':'✖'
                                )
                            ])

                        ])


            case 'ui-dropdown' : 

                return  __ ( _ui_dropmenu, { icon: params.icon, label: params.label, controls: nested }, null)


            default : 

                // if(params.saved==true)
                //     return __ ( prototype, _data.save(params), nested )
                // else
                    return __ ( prototype, params,  nested )

        }
    }

    