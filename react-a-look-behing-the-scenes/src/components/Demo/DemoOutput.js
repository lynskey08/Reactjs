import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = props => {
    
    console.log("DemoOutput RUNNING");
    return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
}
// for optimising functional components
export default React.memo(DemoOutput);