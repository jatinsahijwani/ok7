"use client";
import { useState,ChangeEvent } from "react";
import './Something.css'

const Add = () => {
//   const navigateTo = useNavigate();

const [message,setMessage] = useState('');
const [resume, setResume] = useState<File | null>(null);
const [name,setName] = useState('');
const [mobile,setMobile] = useState('');
const [email,setEmail] = useState('');
const [role,setRole] = useState('');


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('image', image);
//     formData.append('categories', categories);

//       const response = await fetch('http://localhost:4500/api/posts/create-recipe', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         console.log('Recipe created successfully');
//         navigateTo('/viewAll');
//       } else {
//         console.error('Failed to create post');
//       }
//   };
  
const handleFileUpload = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        setResume(e.target.files[0]);
      }
}

const handleSubmit = () => {}

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
    <div className="form-container">
    <div onSubmit={handleSubmit} id="postForm">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="mobile">Mobile:</label>
      <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="email">Role:</label>
      <input type="text" id="role" value={role} onChange={(e) => setRole(e.target.value)} />
      <label htmlFor="email">Message (Optional):</label>
      <input type="text" id="email" value={message} onChange={(e) => setMessage(e.target.value)} />
      <label>Resume:</label>
      <input id="image" type="file" accept=".pdf" onChange={handleFileUpload} />
      <button type="submit">Send</button>
    </div>
    </div>
    </div>
  );
};

export default Add;