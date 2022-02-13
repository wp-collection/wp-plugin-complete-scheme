/*
// GUTENBERG BLOCK
// --------------------------
// - this file save a wysiwyg block
// - a demo of all toolbar and inspector parts
*/


recordblock(
    'the-plugin-scheme/demo-toolbar-boxes',{

        title: "TOOLBAR BOXES DEMO",
        icon: 'superhero-alt',
        category: 'scheme-blocks',
        description: 'A demo of repicable examples for toolbar for a global boxes settings.',

        attributes: {

            content: {},

        },

        edit: props => { return ([


                // ADD ON BLOCK CONTROLLER

                make('toolbar',[
    
                    make('toolbar-group',[
                    
                        make('ui-button',{
                            label:'toolbar!',
                            className:"my-custom-button",
                            onClick: () => { alert('pressed button') }
                        }),
                        
                    ]), 
    
                    make('toolbar-group',[
                    
                        make('ui-button --iconic',{
                            icon: 'info',
                            help:'this is an exempe of custom button in custom toolbar!',
                            className:"my-custom-button",
                            onClick: () => { alert('pressed button') }
                        }),
                        
                    ]),
    
                    make('toolbar-group',[
                        make('ui-checkbox',{
                            // label:'Visibility',
                            // help:'if is visible or not (demo)', not raccomended
                            checked:props.attributes.data_your_status,
                            onClick: status =>{ status=!props.attributes.data_your_status; alert("(demo) box visibility is now: "+status); props.setAttributes({ data_your_status:!!status })}
                        }),
                    ]),
    
                    make('toolbar-group',[
                        make('ui-switchbox',{
                            status:false,
                            update : refresh => alert('demo... '+refresh+'\n\nyou need to connect a global property')
                        }),
                    ]),
    
                    make('toolbar-group',[

                        make('ui-togglebox',{
                            label: 'my label',
                            value: 'm',
                            opts:[
                                { value: 's', label: 'S' },
                                { value: 'm', label: 'M' },
                                { value: 'l', label: 'L' }
                            ]
                        }),
                    ]),

                    make('toolbar-group',[

                        make('ui-radiobox',{
                            selected: 'one',
                            options: [
                                { label: 'A', value: 'one' },
                                { label: 'B', value: 'two' },
                            ],
                            onChange: refresh => { 
                                alert('demo - actual selected :'+refresh+'\n\nyou need to connect a global property')
                            }
                        }),

                    ]),

                    make('toolbar-group',[
    
                        make('ui-aligner',{
                            value: 'center',
                            onChange: refresh => alert('demo: '+refresh )
                        }),
    
                        make('ui-selectbox',{
                            // label: "Font size",
                            value: 100,
                            // multiple:true,
                            options: [{ label: 'Big', value: '250' }, { label: 'Medium', value: '150' }, { label: 'Small', value: '75' }],
                            onChange: refresh => alert('demo: '+refresh)
                        }),
    
                    ]),

                    make('toolbar-group',[

                        make('toolbar-tab',{
                            icon:'color-picker'
                        },[
                            make('ui-color-picker',{
                                disableAlpha: false,
                                value: '#454545',
                                defaultValue: '#000000',
                                onChangeComplete: refresh => alert('demo...'+refresh.hex+'\n\nyou need to connect a global property')
                            })
                        ]),
    
                    ]),
                    
                    make('toolbar-group',[

                        make('toolbar-tab',{
                            icon:'color-picker'
                        },[
                            make('ui-color-palette',{
                                colors: [
                                    { name: 'black', color: '#202020' },
                                    { name: 'white', color: '#ffffff' },
                                    { name: 'red', color: '#ff1212' },
                                    { name: 'blue', color: '#122fff' },
                                ],
                                onChange: refresh => alert('demo...'+refresh+'\n\nyou need to connect a global property')
                            })
                        ]),
    
                    ]),
                    
                    make('toolbar-group',[

                        make('toolbar-tab',{
                            icon:'format-image'
                        },[
                            make('ui-background',{
                                reset: () => alert('demo...\n\nyou need to connect a global property'),
                                setCover: () => alert('demo...\n\nyou need to connect a global property'),
                                setRepeat: () => alert('demo...\n\nyou need to connect a global property'),
                                setPosition: pos => alert('demo: '+pos+'\n\nyou need to connect a global property'),
                                setMedia: media => alert('demo... media id:'+media.id+', media url:'+media.url+'\n\nyou need to connect a global property'),
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
                                setPositionType: refresh => alert('demo:'+refresh+'\n\nyou need to connect a global property'),
                                setPositionCoord: refresh => alert('demo:'+refresh+'\n\nyou need to connect a global property'),
                                actualCoord: 'relative',
                                actualType: 'center-center',
                            }),

                            make('----'),

                            make('ui-setmargins', {
                                top: '0',
                                right:  '0',
                                bottom: '0',
                                left: '0',
                                update: (dir,px,shorthand) => alert('demo...\n\nyou need to connect a global property')
                            }),

                        ]),
    
                    ]),

                    make('toolbar-group',[
                        make('ui-range',{
                            label:"Exemple [0 - 100]",
                            value: '10',
                            min:0,
                            max:100,
                            onChange: refresh => alert('demo: '+refresh)
                        }),
                    ]),
    
                    make('toolbar-group',[
    
                        make( 'ui-dropdown', { icon:'editor-insertmore', label:'more' },[
                            [
                                { title: 'Up', icon: 'arrow-up', onClick: () => alert( 'up' )},
                                { title: 'Right', icon: 'arrow-right', onClick: () => alert( 'right' )}
                            ],

                            [
                                { title: 'Down', icon: 'arrow-down', onClick: () => alert( 'down' ) },
                                { title: 'Left', icon: 'arrow-left', onClick: () => alert( 'left' ),}
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
                saved:true,
                value:props.attributes.content,
                style:{background:'var(--base)',padding:'25px',textAlign:'center'}
            },[

                make('h2',{
                    saved:true
                },'- toolbar: box editor params -'),

                make('p',{
                    saved:true
                },'if you are in editor, click this simple concept box')

            ])

        )}

    });