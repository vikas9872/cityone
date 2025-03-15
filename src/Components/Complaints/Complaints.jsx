import React, { useRef } from 'react'
import db from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'

const Complaints = () => {
    const firstnameRef = useRef(null)
    const lastnameRef=useRef(null)
    const addressRef = useRef(null)
    const issueRef = useRef(null)
    const complaintdescriptionRef=useRef(null)
    const phoneRef=useRef(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const firstname = firstnameRef.current.value
            const lastname = lastnameRef.current.value
            const address = addressRef.current.value
            const issue = issueRef.current.value
            const complaintdescription=complaintdescriptionRef.current.value
            const phone=phoneRef.current.value

            // Add complaint to Firestore
            await addDoc(collection(db, 'complaints'), {
                firstname,
                lastname,
                address,
                phone,
                issue,
                complaintdescription,
                timestamp: new Date()
            })
            // alert('Complaint submitted successfully')
            toast.success('Complaint submitted successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        } catch (error) {
            console.error('Error submitting complaint:', error)
            // alert('Error submitting complaint')
            toast.error('Problem in submission', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    }

    return (
        <div className='h-full w-full flex flex-col items-center justify-center gap-10 p-4'>
            <h1 className='font-extrabold text-4xl md:text-8xl text-black'>Complaint</h1>
            <form className='w-full md:w-[50%] flex flex-col gap-4 p-4 backdrop-blur-0 backdrop-saturate-200 bg-white/60 rounded-lg border border-gray-300/30 shadow-lg' onSubmit={handleSubmit}>
            <div className='flex flex-col md:flex-row  gap-2'>
                <div className='flex flex-col gap-2 w-[100%]'>
                    <label className='text-sm text-black'>First Name</label>
                    <input type="text" className='border-2 p-2 outline-none' required ref={firstnameRef} />
                </div>
                <div className='flex flex-col gap-2 w-[100%]'>
                    <label className='text-sm text-black'>Last Name</label>
                    <input type="text" className='border-2 p-2 outline-none' required ref={lastnameRef} />
                </div>
            </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm text-black'>Address</label>
                    <input type="text" className='border-2 p-2 outline-none' required ref={addressRef} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm text-black'>Phone Number</label>
                    <input type="text" className='border-2 p-2 outline-none' required ref={phoneRef} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Complaint Category</label>
                    <select className='border-2 p-2 outline-none' ref={issueRef}>
                        <option>Garbage dumps</option>
                        <option>Potholes</option>
                        <option>Garbage vehicle not arrived</option>
                        <option>Sweeping not done</option>
                        <option>No water supply</option>
                        <option>Streetlights not working</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm text-black'>Complaint description</label>
                    <textarea className="border-2 p-2 outline-none border-black" ref={complaintdescriptionRef}/>
                </div>
                <div className='flex items-center justify-center'>
                    <button type="submit" className='border-2 border-black p-2 w-full md:w-full cursor-pointer text-black'>
                        Complaint!!
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Complaints