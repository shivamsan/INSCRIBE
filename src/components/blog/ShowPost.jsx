import parse from 'html-react-parser';

const ShowPost = ({content}) => {
  return (
    <div className='tiptap m-4 p-4 bg-gray-200'> 
      <div>
        {parse(content)}
      </div>
    </div>
    //mycontent m-4 p-4 bg-gray-200
    
  )
}

export default ShowPost