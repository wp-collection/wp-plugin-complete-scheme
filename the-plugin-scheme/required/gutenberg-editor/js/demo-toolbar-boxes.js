/*
// GUTENBERG BLOCK
// ====----====----====----====----====----====------
// - this file save a wysiwyg block
// - a demo of all toolbar and inspector parts
*/


recordblock(
    'the-plugin-scheme/demo-toolbar-boxes',{

        title: "TOOLBAR BOXES DEMO",
        icon: 'superhero-alt',
        category: 'scheme-blocks',
        description: 'A demo of repicable examples for toolbar for a global boxes settings.',
        example: {},

        attributes: {

        },

        edit: props => { return ([


                // ADD ON BLOCK CONTROLLER

                make('toolbar',[
    
                    make('toolbar-group',[
                    
                        make('ui-button',{
                            label:'toolbar!',
                            classes:"my-custom-button",
                            update: data => alert('demo, button pressed')
                        }),
                        
                    ]), 
    
                    make('toolbar-group',[
                    
                        make('ui-button',{
                            icon: 'info',
                            help:'this is an exempe of custom button in custom toolbar!',
                            classes:"my-custom-button",
                            update: data => alert('demo, button pressed')
                        }),
                        
                    ]),
    
                    make('toolbar-group',[
                        make('ui-checkbox',{
                            // label:'Visibility',
                            // help:'if is visible or not (demo)', not raccomended
                            checked:false,
                            update: data => alert('demo, changing to:  '+data)
                        }),
                    ]),
    
                    make('toolbar-group',[
                        make('ui-switchbox',{
                            status:false,
                            update : data => alert('(demo) changing to:  '+data)
                        }),
                    ]),
    
                    make('toolbar-group',[

                        make('ui-togglebox',{
                            label: 'my label',
                            value: 'm',
                            list:[
                                { value: 's', label: 'S' },
                                { value: 'm', label: 'M' },
                                { value: 'l', label: 'L' }
                            ],
                            update: data => alert('demo, actual selected :'+data+'\nyou need to connect a property')
                        }),
                    ]),

                    make('toolbar-group',[

                        make('ui-radiobox',{
                            value: 'one',
                            list: [
                                { label: 'A', value: 'one' },
                                { label: 'B', value: 'two' },
                            ],
                            update: data => alert('demo, actual selected :'+data+'\nyou need to connect a property')
                        }),

                    ]),

                    make('toolbar-group',[
    
                        make('ui-aligner',{
                            value: 'center',
                            update: data => alert('demo: '+data )
                        }),
    
                        make('ui-selectbox',{
                            // label: "Font size",
                            // multiple:true,
                            value: 100,
                            list: [{ label: 'Big', value: '250' }, { label: 'Medium', value: '150' }, { label: 'Small', value: '75' }],
                            update: data => alert('demo: '+data)
                        }),
    
                    ]),

                    make('toolbar-group',[

                        make('toolbar-tab',{
                            icon:'color-picker'
                        },[
                            make('ui-color-picker',{
                                alpha: false,
                                value: '#454545',
                                default: '#000000',
                                update: data => alert('demo: '+data+'\nyou need to connect a property')
                            })
                        ]),
    
                    ]),
                    
                    make('toolbar-group',[

                        make('toolbar-tab',{
                            icon:'color-picker'
                        },[
                            make('ui-color-palette',{
                                colors:[
                                    { name: 'black', color: '#202020' },
                                    { name: 'white', color: '#ffffff' },
                                    { name: 'red', color: '#ff1212' },
                                    { name: 'blue', color: '#122fff' },
                                ],
                                update: data => alert('demo: '+data+'\nyou need to connect a property')
                            })
                        ]),
    
                    ]),
                    
                    make('toolbar-group',[

                        make('toolbar-tab',{
                            icon:'format-image'
                        },[
                            make('ui-background',{
                                reset: () => alert('demo: \nyou need to connect a property'),
                                setCover: () => alert('demo: \nyou need to connect a property'),
                                setRepeat: () => alert('demo: \nyou need to connect a property'),
                                setPosition: data => alert('demo: '+data+'\nyou need to connect a property'),
                                setMedia: data => alert('demo:  media id:'+data.id+', media url:'+data.url+'\nyou need to connect a property'),
                                iscover: true,
                                isrepeat: false,
                                coord: 'center center',
                                url: 'https://images.pexels.com/photos/2038832/pexels-photo-2038832.jpeg?auto=compress&cs=tinysrgb&dpr=3&w=432',
                                id: '123'
                            })
                        ]),
    
                    ]),

                    make('toolbar-group',[

                        make('toolbar-tab',{
                            icon:'editor-expand'
                        },[

                            make('ui-positioner',{
                                setPositionType: data => alert('demo:'+data+'\nyou need to connect a property'),
                                setPositionCoord: data => alert('demo:'+data+'\nyou need to connect a property'),
                                actualCoord: 'relative',
                                actualType: 'center-center',
                            }),

                            make('===='),

                            make('ui-setmargins', {
                                top: '0',
                                right:  '0',
                                bottom: '0',
                                left: '0',
                                update: (dir,px,shorthand) => alert('demo: \nyou need to connect a property')
                            }),

                        ]),
    
                    ]),

                    make('toolbar-group',[
                        make('ui-range',{
                            label:"Exemple [0 - 100]",
                            value: '10',
                            min:0,
                            max:100,
                            update: data => alert('demo: '+data)
                        }),
                    ]),
    
                    make('toolbar-group',[
    
                        make( 'ui-dropdown', { icon:'editor-insertmore', label:'more' },[
                            [
                                { title: 'Up', icon: 'arrow-up', update: () => alert( 'up' )},
                                { title: 'Right', icon: 'arrow-right', update: () => alert( 'right' )}
                            ],

                            [
                                { title: 'Down', icon: 'arrow-down', update: () => alert( 'down' ) },
                                { title: 'Left', icon: 'arrow-left', update: () => alert( 'left' ),}
                            ],
                        ]),

                    ]),
    
                ]),


                // SUBJECT STRUCTURE

                make('editor',[

                    make('div',{
                        style:{
                            background:'var(--base)',
                            padding:'25px',
                            textAlign:'center'
                        }
                    },[

                        make('h2',{
                            disbaled:true,
                            style:{margin:'5px'}
                        },'- toolbar: box editor params -'),

                        make('p',{
                            disbaled:true,
                            style:{margin:'5px'}
                        },'if you are in editor, click this simple concept box')

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

                make('h2',{},'- toolbar: box editor params -'),

                make('p',{},'if you are in editor, click this simple concept box')

            ])

        )}

    });