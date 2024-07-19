import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'//extention
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'


// define your extension array
const extensions = [StarterKit,
  Underline,
  TextAlign.configure({
  types: ['heading', 'paragraph'],
}),
]

const content =``
const Tiptap = ({onEditorContentSave}) => {
    const editor = useEditor({
      extensions,
      content,
    })

    if(!editor){
        return null
    }

    const handleEditorContent = () =>{
        const html = editor.getHTML()
        //console.log(html);
        onEditorContentSave(html)
    }

  return (

    <div className="m-8">
      <body>
        <nav class="bg-purple-600 text-white  flex md:justify-between flex-col md:flex-row min-h-30
        items-center">
            <div class ="logo mx-auto md:mx-0">
                @iamshivamsan
            </div>
            
            <ul class="flex space-x-3 justify-center md:justify-normal">
                <li>Home</li>
                <li>About</li>
                <li>Conatct</li>
                
            </ul>
        </nav>

        <main>
            <div class="container text-white bg-purple-500 flex md:justify-between flex-col md:flex-row min-h-30
        items-center">
                Online Text Editor
            </div>
        </main>

        <footer>

        </footer>
    </body>
        <div className="w-full flex flex-wrap bg-gray-600 p-3 gap-3 text-white">
        
        
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <strong>B</strong>
        </button>


        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
          bg-gray-400 px-2 py-1 rounded-md mt-5
        >
          <i>I</i>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleUnderline()
              .run()
          }
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          <u>U</u>
        </button>


        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <s>S</s>
        </button>


        
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          P
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
        >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
        >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
        >
          H6
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        >
          Left
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
        >
          Center
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        >
          Right
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
        >
          Justify
        </button>
        <button onClick={() => editor.chain().focus().unsetTextAlign().run()}>
          Unset
        </button>
        





        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          ul
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          ol
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          Blockquote
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          Hr
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hb
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          Redo
        </button>

      </div>
        <div className='border border-gray-500 border-t-0 ' >
            <EditorContent editor={editor} className='max-h-96  min-h-96 overflow-y-scroll '/>
        </div>
        <button onClick={handleEditorContent} className='bg-gray-400 px-2 py-1 rounded-md mt-5'>
            Save
        </button>
    </div>
  )
}

export default Tiptap