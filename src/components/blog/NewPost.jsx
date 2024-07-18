import Tiptap from "../Tiptap"
import { useState } from "react";
import ShowPost from "./ShowPost";

const NewPost = () => {
    const [htmlContent, setHtmlContent] = useState('');
    const handleEditorContentSave =(html) =>{
        //console.log(html);
        setHtmlContent(html)
        //call api and send to database
        //then retrive and pass through prop
        
    }
  return (
    <>
        <Tiptap onEditorContentSave={handleEditorContentSave}/>
        <hr></hr>
        <ShowPost content={htmlContent}/>
    </>
    
  )
}

export default NewPost