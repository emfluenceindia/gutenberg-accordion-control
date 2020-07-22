/**
 * BLOCK: accordion-control
 * Uses: Heading, core/list, core/paragraph
 * Place this block inside accordion to create one accordion item
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

function emfl_accordion_control() {


    registerBlockType('emfl/accordion-content', {
        title: __( 'Accordion Item' ),
        icon: 'shield',
        category: 'layout',
        keywords: [],
        attributes: {},

        edit: (props) => {
            return(
                <div className={props.className}>
                    <p>Hellow!!!</p>
                </div>
            );
        },

        save: (props) => {}
    })

}

export default emfl_accordion_control();