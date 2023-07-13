import React from 'react';
import {convertToRaw, EditorState} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../components/demo-code/wysiwyg-editor.txt";
import Div from "@jumbo/shared/Div";
import { Card } from '@mui/material';

let Editor = () => <React.Fragment/>;

const WysiwygEditorExample = () => {
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

    React.useEffect(() => {
        Editor = require('react-draft-wysiwyg').Editor;
        setEditorState(EditorState.createEmpty());
    }, []);

    return (
        <Card
           style={{
            
                backgroundColor: 'background.paper',
                width: "23.8vw",
                height:"36.6vh"
            }}
        >
            <Div sx={{flex: 1}} >
                <Editor
                    editorStyle={{
                        
                        width: '23.8vw',
                        minHeight: 150,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'lightgray',
            
                    }}
                    editorState={editorState}
                    onEditorStateChange={editorState => setEditorState(editorState)}
                />
                {/* <textarea
                    style={{width: '100%', height: 200}}
                    disabled
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                /> */}
            </Div>
        </Card>
    );
};

export default WysiwygEditorExample;
