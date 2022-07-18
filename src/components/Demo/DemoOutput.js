import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    // return (
    //     <p>{props.isShow ? 'show paragraph' : ''}</p>
    // )
    console.log('DemoOutput RUNNING');
    return (
        <MyParagraph>{props.isShow ? 'This is new!' : ''}</MyParagraph>
    );

}

export default React.memo(DemoOutput);