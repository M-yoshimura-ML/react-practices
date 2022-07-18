// sec 12: react optimization tech
// url: /optimization
import { useState, useCallback, useMemo } from "react";
import Button from "../components/UI/Button";
import DemoOutput from "../components/Demo/DemoOutput";
import '../App.css';
import DemoList from "../components/Demo/DemoList";

const OptApp = () => {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log('Opt APP running');

    const toggleParagraphHandler = useCallback(() => {
        if(allowToggle){
            setShowParagraph((prevShowParagraph) => !prevShowParagraph);
        }
    }, [allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle(true);
    }

    const [listTitle, setListTitle] = useState('My List');

    const changeTitleHandler = useCallback(() => {
        setListTitle('New Title');
    }, []);

    const listItems = useMemo(() => [5, 3, 1, 10, 9], []);


    return (
        <div className="opt-app">
            <h1>hi there</h1>
            <DemoOutput isShow={showParagraph} />
            {/* <DemoOutput isShow={false} /> */}
            <Button onClick={allowToggleHandler}>Allow Toggle</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
            <DemoList title={listTitle} items={listItems} />
            <Button onClick={changeTitleHandler}>Change List Title</Button>
        </div>
    )
}


export default OptApp;