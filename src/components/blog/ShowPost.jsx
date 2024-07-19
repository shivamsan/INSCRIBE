import parse from 'html-react-parser';

const ShowPost = ({content}) => {
  return (
    
    <div className='tiptap m-10 p-5 bg-gray-200 border rounded-md shadow-lg '> 
      <div>
        <span className='text-blue-300'>Saved Doc</span>
        <br />
        <br />
        {parse(content)}
      </div>
    </div>
    //mycontent m-4 p-4 bg-gray-200
    
  )
}

export default ShowPost