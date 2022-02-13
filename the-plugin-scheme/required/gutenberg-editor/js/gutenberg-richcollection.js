


    /*
    // PROTOTYPER RICHTEXT METHODS
    // --------------------------
    // in this section we saved all prototypes for 
    // expand the standard richtext text bar.
    */

    //: notes
    //:     https://developer.wordpress.org/block-editor/how-to-guides/format-api/
    //:     https://github.com/WordPress/gutenberg/issues/16406
    //:     https://github.com/CakeWP/block-options/blob/master/src/extensions/formats/underline/index.js
    //:     https://github.com/WordPress/gutenberg/issues/14104#issuecomment-467409337
    //:
    //: the sample:
    //:      const makeSampler = props => {
    //:          return  __ ( _richbuttons, { title:'Sampler', icon:'admin-tools', onClick: () => {
    //:                         //get the html container: props.contentRef.current
    //:                         //get the text contents: props.value.text
    //:                         props.onChange(_richedit.toggleFormat( props.value, { type: 'custom/sampler' }));
    //:                  }})
    //:      }
    //:     
    //:      _richedit.registerFormatType( 'custom/sampler', { tagName:'span', title:'Sampler', className: null, edit: makeSampler  });


    const _richedit =  wp.richText
    const _richbuttons = wp.blockEditor.RichTextToolbarButton
    const _richshortner = wp.blockEditor.RichTextShortcut



    //
    // Make paragraph preformatted
    //

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


 
    //
    // Make text preformatted
    //

    const makePreformatted = props => {

        return  __ ( _richbuttons, {
                    title:'Preformatted',
                    icon:'format-aside',
                    isActive: props.isActive,
                    className: props.isActive?'is-active':null,
                    onClick: () => {
                        props.isActive=true
                        props.onChange(_richedit.toggleFormat(
                            props.value,
                            { type: 'custom/preforma' }
                        ));
                    },
                })

    }

    _richedit.registerFormatType(
        'custom/preforma', {
            tagName: 'pre',
            title: 'Preformatted',
            className: 'preformatted-text',
            edit: makePreformatted
    });



    //
    // Make text underline
    //

    const makeUnderline = props => {

        return  __ ( _richbuttons, {
                    title:'Underline',
                    icon:'editor-underline',
                    isActive: props.isActive,
                    className: props.isActive?'is-active':null,
                    onClick: () => {
                        props.isActive=true
                        props.onChange(_richedit.toggleFormat(
                            props.value,
                            { type: 'custom/underline' }
                        ));
                    },
                })

    }

    _richedit.registerFormatType(
        'custom/underline', {
            tagName: 'u',
            title: 'Underline',
            className: null,
            edit: makeUnderline
    });



    //
    // Make text strong
    //

    const makeBold = props => {

        return  __ ( _richbuttons, {
                    title:'Bold no strong',
                    icon:'editor-bold',
                    isActive: props.isActive,
                    className: props.isActive?'is-active':null,
                    onClick: () => {
                        props.isActive=true
                        props.onChange(_richedit.toggleFormat(
                            props.value,
                            { type: 'custom/boldtext' }
                        ));
                    }
                })

    }

    _richedit.registerFormatType(
        'custom/boldtext', {
            tagName: 'b',
            title: 'Bold no strong',
            className: null,
            edit: makeBold
    });



    //
    // Make text more tabbed
    //

    const makeAddTab = props => {
        // <Shortcut
        //     type="primary"
        //     key="b"
        //         onUse={ () => toggleFormat() }
        // />
        return  __ ( _richbuttons, {
                    title:'Tab +1',
                    icon:'controls-skipforward',
                    isActive: false,
                    className: null,
                    onClick: () => {
                        props.isActive=false
                        // props.contentRef.current.style='border:1px solid red;'
                        // props.contentRef.current.parentNode.insertAdjacentHTML('afterbegin','&Tab;')
                        // let tabtext  = '    '+props.value.text;
                        // props.value.end = props.value.text.length+3
                        // props.value.text = tabtext
                        _richedit.insertObject('    ') 
                        props.onChange( _richedit.toggleFormat(
                            props.value,
                            { type: 'custom/tabmore' },
                            removeFormat()
                        ));
                    },
                })

    }

    _richedit.registerFormatType(
        'custom/tabmore', {
            tagName: 'tab',
            title: 'Tab +1',
            className: 'tab',
            edit: makeAddTab
    });

    // wp.data.select( 'core/rich-text' ).getFormatTypeForBareElement( 'tab' );


