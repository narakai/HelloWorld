/**
 * Created by laileon on 2017/7/26.
 */
import React, {Component, PropTypes} from 'react';
import Title from "./title";
import {Image} from "react-native";

export default class NewsItem extends Component {
    render() {
        return (
            <div className="news-item">
                <Image />
                <Title
                    titleText={this.props.titleText}
                    highlighted
                    />
                <Byline />
                <Description />
            </div>);
    }
}

NewsItem.propTypes = {
    titleText: PropTypes.string.isRequired
};