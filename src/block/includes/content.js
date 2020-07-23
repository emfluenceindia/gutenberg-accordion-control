/**
 * BLOCK: accordion-control
 * Uses: Heading, core/list, core/paragraph
 * Place this block inside accordion-group block to create an item
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { InnerBlocks } = wp.blockEditor;

function emfl_accordion_control() {


    registerBlockType('emfl/accordion-content', {
        title: __( 'Accordion Item' ),
        icon: 'menu-alt',
        category: 'layout',
        parent: ['emfl/accordion-group'],
        keywords: [],
        attributes: {
            itemHeading: {
                type: 'string',
                source: 'text',
                selector: 'a',
                default: ''
            }
        },

        edit: (props) => {

            const itemHeading = props.attributes.itemHeading;

            function onChangeItemHeading(content) {
                props.setAttributes({ itemHeading: content });
            }

            return(
                <div className={props.className}>
                    <div className="accord-item-container">
                        <RichText
                            tagName="a"
                            className="accord-item-heading"
                            value={itemHeading}
                            onChange={onChangeItemHeading}
                            placeholder={ __( 'Add item heading' ) }
                        />
                        <div className="accord-content">
                            <InnerBlocks allowedBlocks={ ['core/paragraph', 'core/list', 'core/image', 'core/video'] } />
                        </div>
                    </div>
                </div>
            );
        },

        save: (props) => {
            return(
                <div className={props.className}>
                    <div className="emfl-accord-item">
                        <div className="emfl-item-heading">
                            { props.attributes.itemHeading ? <RichText.Content tagName="a" value={props.attributes.itemHeading}/> : "Item Heading" }
                        </div>
                        <div className="emfl-item-content">
                            <InnerBlocks.Content/>
                        </div>
                    </div>
                </div>
            );
        }
    })

}

export default emfl_accordion_control();