/**
 * Created by laileon on 2017/7/26.
 */
import React, {Component, PropTypes} from 'react';

export default class Title extends Component {
    render() {
        return (
            <h1 style={{
                backgroundColor: this.props.highlighted ? 'yellow' : 'white',
                fontSize: '${this.props.fontSize}px'
            }}>
                {this.props.titleText}
                /*{this.props.children}*/
            </h1>
        )
    }
}

Title.propTypes = {
    titleText: PropTypes.string.isRequired,
    // children: PropTypes.node.isRequired,
    highlighted: PropTypes.bool,
    fontSize: PropTypes.number
};

Title.defaultProps = {
    highlighted: false,
    fontSize: 18
};