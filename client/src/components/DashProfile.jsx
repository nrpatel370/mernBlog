import { Alert, Button, TextInput } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {getDownloadURL, getStorage, uploadBytesResumable, ref} from 'firebase/storage'
import {app} from '../firebase'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashProfile() {
    const {currentUser} = useSelector((state)=>state.user)
    const [imgFile, setImgFile] = useState(null);
    const [imgFileUrl, setImgFileUrl] = useState(null);
    const [imgFileUploadProgress, setImgFileUploadProgress] = useState(null);
    const [imgFileUploadError, setImgFileUploadError] = useState(null);
    const filePickerRef = useRef();
    const handleImgChange = (e)=>{
        const file = e.target.files[0];
        if(file){
            setImgFile(file);
            setImgFileUrl(URL.createObjectURL(file));
        }
        
    }

    useEffect( ()=>{
        if(imgFile){
            uploadImage();
        }
    }, [imgFile])

    const uploadImage = async() => {
        setImgFileUploadError(null);
        const storage = getStorage(app);
        const fileName = new Date().getTime() + imgFile.name;
        const storageRef = ref(storage, fileName);  // Correct storage reference path
        const uploadTask = uploadBytesResumable(storageRef, imgFile);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
                setImgFileUploadProgress(progress.toFixed(0));
                setImgFileUrl(null);
                setImgFile(null);
            }
        ),
        (error) =>{ 
            setImgFileUploadError("Coudn't upload image");
            setImgFileUploadProgress(null);
        },
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImgFileUrl(downloadURL);
            })
        }
    }
    
    
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className="flex flex-col gap-4"> 
        <input type="file" accept='image/*' onChange={handleImgChange} ref={filePickerRef} hidden/>
        <div className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full ' onClick ={()=> filePickerRef.current.click()}>
            {imgFileUploadProgress && (
                <CircularProgressbar value={imgFileUploadProgress || 0} text={`${imgFileUploadProgress}%`} strokeWidth={5} styles={{
                    root:{
                        width: '100%',
                        height: '100%',
                        position: 'absolute'
                    },
                    path:{
                        stroke: `rgb(62,152,199, ${imgFileUploadProgress/100})`,
                    }
                }}/>
            )}
            <img src={imgFileUrl || currentUser.profilePicture} className={`rounded-full w-full h-full object-cover border-8 border-color-[lightgray]${imgFileUploadProgress && imgFileUploadProgress < 100 && 'opacity-60'}`}/>
        </div>
        {imgFileUploadError && 
        <Alert color='failure'>
            {imgFileUploadError}
        </Alert> }
        
        <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username}/>
        <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email}/>
        <TextInput type='password' id='password' placeholder='********' />
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>Update</Button>
      </form>

      <div className='text-red-500 flex justify-between mt-5'>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

