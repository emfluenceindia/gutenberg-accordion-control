/**
 * BLOCK: accordion-group
 * Description: can contain multiple accordion-content
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

function emfl_accordion_container() {
    registerBlockType( 'emfl/accordion-group', {
        title: __( 'Accordion' ),
        icon: 'feedback',
        category: 'layout',
        keywords: [
            __( 'Accordion' ),
            __( 'Accordion Group' ),
            __( 'Accordion Control' )
        ],
        attributes: {},

        edit: (props) => {
            return(
                <div className={props.className}>
                    <div className="accord-group">
                        <InnerBlocks allowedBlocks={ ['emfl/accordion-content'] }/>
                    </div>
                </div>
            );
        },

        save: (props) => {
            return(
                <div className={props.className}>
                    <div className="emfl-accord-item-group">
                        <InnerBlocks.Content/>
                    </div>
                </div>
            );
        }
    } )
}


export default emfl_accordion_container();