import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'//extention
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import logo from './img/inscribe.jpg'



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

    
    
    <div  className='App h-full py-6 px-6    bg-gradient-to-r from-gray-100 to-gray-50'>
      <body>
        <nav class="  flex md:justify-between flex-col md:flex-row min-h-30
        items-center">
            <div class ="logo mx-10 ">
              <img src={logo} alt="Logo" class="h-20 rounded-md" /> 
              
            </div>
            
            <ul class="flex space-x-3 justify-center md:justify-normal">
              <li className='bg-gray-400 px-2 py-1 rounded-md mt-5 text-white  bg-gradient-to-r from-gray-400 via-gray-350 to-gray-400'><a href='https://shivamsan.github.io/Editext/'>Home</a></li>
                
              <li className='bg-gray-400 px-2 py-1 rounded-md mt-5 text-white  bg-gradient-to-r from-gray-400 via-gray-350 to-gray-400'><a href='https://github.com/shivamsan'>About</a></li>
              <li className='bg-gray-400 px-2 py-1 rounded-md mt-5 text-white  bg-gradient-to-r from-gray-400 via-gray-350 to-gray-400'><a href='mailto:shivamsingh@nmiet.edu.in'>Contact</a></li>
                
            </ul>
        </nav>
        <br />
        <br />


        <main>
          <div class="container  bg-gradient-to-r from-purple-200 via-blue-100 to-purple-200 flex md:justify-between flex-col md:flex-row min-h-30
          items-center border rounded-md shadow-lg">
                
            <div class='lg:flex lg:items-center lg:justify-center py-5'>
                <h2 class='text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl px-10'>
                <span class='block py-1'>INSCRIBE</span>
                <span class='block text-pink-300'>
                  Write your hearts out.
                </span>
                </h2>
            </div>
          </div>
        </main>
        <br />
    </body>
        <div className="w-full flex flex-wrap bg-gray-600 p-3 gap-3 text-white border rounded-md shadow-lg">
        
        
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
          ↶
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
          ↷
        </button>

      </div>
        <div className='border bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100  rounded-md shadow-lg' >
            <EditorContent editor={editor} className='max-h-96  min-h-96 overflow-y-scroll '/>
        </div>
        <button onClick={handleEditorContent} className='bg-gray-400 px-2 py-1 rounded-md mt-5 text-white  bg-gradient-to-r from-gray-400 via-gray-350 to-gray-400'>
            Save
        </button>
    </div>
  )
}

export default Tiptap