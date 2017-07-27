/**
 * Created by laileon on 2017/7/26.
 */
import React, {Component} from 'react';
import Title from "./Title";

export class WarningTitle extends Title {
    render() {
        return (
            <div style={{border: '1px solid red'}}>
                <Title
                    titleText={this.props.titleText}
                />
            </div>
        )
    }
}

module.exports = WarningTitle;