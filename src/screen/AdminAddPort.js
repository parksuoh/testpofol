import AdminMenuBar from '../components/AdminMenuBar'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useMemo, useRef, useState } from 'react';
import axios from 'axios';

const AdminAddPort = () => {
    const quillRef = useRef();
    const fileInputRef = useRef();
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [titleImg, setTitleImg] = useState();

    const apiPostNewsImage = async(formData) => {
        try {
          const res = await axios.post(
            '/api/portfolio/save-img/',
            formData, 
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              }
            }
        )
    
          if(res.data.success === false) {
              return;
          } 
          return res.data.text
    
        } catch (e) {
          console.log(e)
        }      
      }
  
  
      const imageHandler = async () => {
        const input = document.createElement('input');
    
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        document.body.appendChild(input);
        
        input.click();
      
        input.onchange = async () => {
          const [file] = input.files;
  
          let formData = new FormData()
          formData.append("img1", file)
          const res = await apiPostNewsImage(formData)
          
          if (res) {
            // 현재 커서 위치에 이미지를 삽입하고 커서 위치를 +1 하기
            const range = quillRef.current.getEditorSelection();
            quillRef.current.getEditor().insertEmbed(range.index, 'image', 'http://localhost:8000/media/imgs/'+res)
            quillRef.current.getEditor().setSelection(range.index + 1);
            document.body.querySelector(':scope > input').remove()
          }
  
        };
      }

    const modules = useMemo(() => ({
        toolbar: {
          container: [
            [{ 'header': [1, 2, false] }],
            [{ 'font': [] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            [{ 'align': [] }, { 'color': [] }, { 'background': [] }],   
            ['clean']
          ],
          handlers: { image: imageHandler }
        }
      }), []);

      const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "vedio",
        "imageBlot",
        "color",
        "code-block",
        'align', 
        'background', 
      ];

      const onSubmit = async() => {
        if(title === '') return alert('제목을 입력해주세요.')
        if(value === '') return alert('내용을 입력해주세요.')
        if(!titleImg) return alert('대표사진을 입력해주세요.')


        try {
            let formData = new FormData()
            formData.append("title", title)
            formData.append("value", value)
            formData.append("titleImg", titleImg)

            const res = await axios.post('/api/portfolio/save-portfolio/', 
            formData,             
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              }
            })
            
            if(res.data.success === true) {
                alert('등록에 성공하였습니다.')
                setTitle('')
                setValue('')
                setTitleImg()
                fileInputRef.current.value = "";
            }

            
          } catch (e) {
            console.log(e)
          }

      }

  return (
    <div className='bg-white w-full min-h-screen flex'>
        <AdminMenuBar />
        <div className="w-full flex flex-col items-center ">
            <div className="pl-3 w-full h-20 flex items-center border-b border-gray-200 ">
              <h1 className='font-bold'>
                포트폴리오 등록
              </h1> 
            </div>
            <h1 className='w-4/5 my-2'>
              제목
            </h1>
            <input 
                type='text' 
                placeholder="제목을 입력해 주세요..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-4/5 my-2 h-9 font-bold border-b border-gray-200 focus:outline-none"
            />
            <h1 className='w-4/5 my-2'>
              대표사진
            </h1>
            <input 
              type="file" 
              onChange={(e) => setTitleImg(e.target.files[0])}
              accept="image/*" 
              ref={fileInputRef}
            />
            <h1 className='w-4/5 my-2'>
              내용
            </h1>
            <ReactQuill 
                theme="snow" 
                ref={quillRef}
                modules={modules}
                formats={formats}
                value={value} 
                onChange={setValue} 
                className="h-auto"
            />
            <button
                onClick={onSubmit}
                className="text-xl my-20 bg-blue-50 hover:bg-zinc-400 hover:text-slate-50 w-52 flex items-center justify-center rounded duration-200"
            >
                등록하기
            </button>
        </div>

    </div>
  )
}

export default AdminAddPort
