/*
// GUTENBERG BLOCK
// ========================--
// - this file save a wysiwyg block
// - a demo of all inspector parts
*/


recordblock(
'the-plugin-scheme/demo-inspector',{

    title: "INSPECTOR TOOLS",
    icon: 'superhero-alt',
    category: 'scheme-blocks',
    description: 'A set of repicable examples of all modded editor components.',
    
    edit: props => { return ([


        //: ADD ON SIDEBAR
        make('inspector',[


            make('inspector-container','— INSECTOR DESIGN',[


                make('inspector-flagbox',{
                    hexcolor:'#f3f4f5',
                    icon:'info',
                    message: 'this is info demo message',
                }),

                make('inspector-flagbox',{
                    hexcolor:'#ffd703',
                    icon:'info',
                    message: 'this is a warnig!',
                }),

                make('inspector-flagbox',{
                    hexcolor:'#006187',
                    icon:'info',
                    message: 'Auto reversed colour!',
                }),

                make('===='),
                
                make('inspector-tab',{
                    label: '➜ this is a tab',
                    icon: 'open-folder',
                },[
                    make('h4',{},"HI FROM SCHEMA!, THIS IS A DEMO TAB CONTENTS!")
                ]),

                make('===='),

                make('inspector-card','my card header',[
                    make('p',{},'card contents 01'),
                    make('p',{},'card contents 02'),
                    make('p',{},'card contents 03'),
                ]),

                make('===='),

                make('inspector-banner',{src:'https://cldup.com/0BNcqkoMdq.jpg'}),

                make('===='),

                make('inspector-group --wide',[

                    make('p',{},'normal group (or --aligned):'),

                    make('inspector-group --aligned',[
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                    ]),

                ]),

                make('----'),

                make('inspector-group --wide',[

                    make('p',{},'jutified group:'),

                    make('inspector-group --justified',[
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                    ]),

                ]),

                make('----'),

                make('inspector-group --wide',[

                    make('p',{},'wide group:'),

                    make('inspector-group --wide',[
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                    ]),

                ]),

                make('===='),

                make('inspector-group --wide',[

                    make('p',{},'grid group 4 (2/3/4/5/6):'),

                    make('inspector-grid-4',[
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                        make('span',{style:{borderRadius:'5px',padding:'5px',background:'var(--base)'}},'box'),
                    ])

                ]),

            ]),


            make('inspector-container','— UI DESIGN',[

                make('inspector-group --wide',[

                    make('p',{},'button "--iconic"'),

                    make('inspector-group --aligned',[
                        make('ui-button --iconic',{
                            icon: 'info',
                            label:"this is icon button!",
                            className: props.attributes.test?'is-active':'',
                            onClick: () => alert('demo...\n\nyou need to connect a global property')
                        }),
                    ]),

                    make('----'),

                    make('p',{},'button "classic"'),

                    make('inspector-group --aligned',[
                        make('ui-button',{
                            label:"this is classic button!",
                            onClick: () => alert('demo...\n\nyou need to connect a global property')
                        }),
                    ]),

                    make('----'),

                    make('p',{},'button "--featuredimage"'),

                    make('ui-button --featuredimage',{
                        label:"this is featured image button!",
                        onClick: () => alert('demo...\n\nyou need to connect a global property')
                    }),

                    make('p',{},'buttons and buttons group'),


                    make('ui-btn-group',[

                        make('ui-button --iconic',{
                            icon: 'star-empty',
                            value: 'first',
                            className: props.attributes.test_selected!='first'?'':'is-active',
                            onClick: () => props.setAttributes({test_selected:'first'})
                        }),

                        make('ui-button --iconic',{
                            icon: 'star-half',
                            value: 'second',
                            className: props.attributes.test_selected!='second'?'':'is-active',
                            onClick: () => props.setAttributes({test_selected:'second'})
                        }),

                        make('ui-button',{
                            icon: 'star-filled',
                            label: 'this is test!',
                            value: 'third',
                            className: props.attributes.test_selected!='third'?'':'is-active',
                            onClick: () => props.setAttributes({test_selected:'third'})
                        })

                    ]),


                    make('===='),

                    make('p',{},'button checkbox'),

                    make('ui-checkbox',{
                        label:"demo check true false",
                        checked:false,
                        onChange: refresh => { 
                            alert('demo - actual status is:'+refresh+'\n\nyou need to connect a global property')
                        }
                    }),

                    make('----'),

                    make('p',{},'button radiobox'),

                    make('ui-radiobox',{
                        selected: 'one',
                        options: [
                            { label: '- like one', value: 'one' },
                            { label: '- like other', value: 'two' },
                            { label: '- like anywone', value: 'three' },
                        ],
                        onChange: refresh => { 
                            alert('demo - actual selected :'+refresh+'\n\nyou need to connect a global property')
                        }
                    }),

                    make('----'),

                    make('p',{},'selectbox'),

                    make('ui-selectbox',{
                        value: "one",
                        options: [
                            { label: 'like one (value:one)', value: 'one' },
                            { label: 'like other (value:two)', value: 'two' },
                            { label: 'like anywone (value:three)', value: 'three' },
                        ],
                        onChange: refresh => { 
                            alert('demo - actual value selected :'+refresh+'\n\nyou need to connect a global property')
                        }
                    }),

                    make('----'),

                    make('p',{},'switchbox'),

                    make('ui-switchbox',{
                        status:false,
                        update : refresh => alert('demo... '+refresh+'\n\nyou need to connect a global property')
                    }),

                    make('----'),

                    make('p',{},'sliders'),

                    make('ui-range',{
                        label:'label',
                        value: 50,
                        min:0,
                        max:100,
                        step:10,
                        marks:[
                            { value: 0, label: '0' },
                            { value: 50, label: '50', },
                            { value: 100, label: '100', },
                        ],
                        onMouseUp: refresh => {
                            alert('demo - actual status is:'+refresh.value+'\n\nyou need to connect a global property')
                        }
                    }),

                    make('----'),

                    make('p',{},'sliders (compact)'),

                    make('ui-range',{
                        label:'label',
                        className:'compact',
                        value: 50,
                        min:0,
                        max:100,
                        step:1,
                        marks:[
                            { value: 0, label: '0' },
                            { value: 50, label: '50', },
                            { value: 100, label: '1', },
                        ],
                        onClick: refresh => {
                            alert('demo - actual status is:'+refresh.value+'\n\nyou need to connect a global property')
                        }
                    }),

                    make('===='),

                    make('ui-togglebox',{
                        label: 'my label',
                        value: 'm',
                        opts:[
                            { value: 's', label: 'small' },
                            { value: 'm', label: 'medium' },
                            { value: 'b', label: 'big' }
                        ]
                    }),

                ]),
                
            ]),


            make('inspector-container','— ADVANCED UI',[

                make('inspector-group --aligned',[

                    make('ui-aligner',{
                        value: props.attributes.css_textalign,
                        onChange: refresh => alert('demo:'+refresh+'\n\nyou need to connect a global property'),
                    }),

                    make('p', {},' - Align Text'),

                ]),

                make('inspector-group --aligned',[

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

                    make('p', {},' - Drop options'),

                ]),

                make('===='),

                make('inspector-group --wide',[

                    make('ui-positioner',{
                        setPositionType: refresh => alert('demo:'+refresh+'\n\nyou need to connect a global property'),
                        setPositionCoord: refresh => alert('demo:'+refresh+'\n\nyou need to connect a global property'),
                        actualCoord: 'relative',
                        actualType: 'center-center',
                    }),

                    make('----'),

                    make('ui-togglebox',{
                        label:'little demo of sizing box',
                        value: 'standard',
                        opts:[
                            { value: 'normal', label: 'normal' },
                            { value: 'wide', label: 'wide' },
                            { value: 'center', label: 'center' },
                            { value: 'full', label: 'full' },
                        ],
                        onClick: refresh => alert('demo...'+refresh+'\n\nyou need to connect a global property')
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

                make('===='),

                make('inspector-group --wide',[

                    make('inspector-tab',{
                        label:' ➜ open color picking',
                        icon: props.attributes.css_textcolor,
                    },[
                        make('ui-color-picker',{
                            disableAlpha: false,
                            value: '#454545',
                            defaultValue: '#000000',
                            onChangeComplete: refresh => alert('demo...'+refresh.hex+'\n\nyou need to connect a global property')
                        })
                    ]),

                    make('===='),

                    make('inspector-tab',{
                        label:' ➜ open color selection',
                        icon: '#454545',
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

                    make('===='),

                    make('inspector-tab',{
                        label:' ➜ set a background',
                        icon: 'https://images.pexels.com/photos/2038832/pexels-photo-2038832.jpeg?auto=compress&cs=tinysrgb&dpr=3&w=432',
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
                    ])

                ]),

            ]),

        ]),

        //: ADD ON PAGE
        //: in this case not have nothig to save, but if you have a contents, it going here:

        make('editor',[

            make('div',{
                style:{
                    background:'var(--base)',
                    padding:'25px',
                    textAlign:'center'}
            },[

                make('h2',{
                    style:{margin:'5px'}
                },'- editor inspector test-'),

                make('p',{
                    style:{margin:'5px'}
                },'Open editor to see the inspector parts!')

            ])

        ])


    ])},

    save: props => { return (

        make('div',{
            saved:true,
            style:{
                background:'var(--base)',
                padding:'25px',
                textAlign:'center'
            }
        },[

            make('h2',{
                saved:true,
                style:{margin:'5px'}
            },'- editor inspector test-'),

            make('p',{
                saved:true,
                style:{margin:'5px'}
            },'in editor test to see the inspector parts')

        ])

    )}

});