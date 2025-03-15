import React, { useEffect, useState } from 'react'
import db from '../../firebase'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'

const ManagerDashboard = () => {
  const [complaints, setComplaints] = useState([])

  useEffect(() => {
    const fetchComplaints = async () => {
      const querySnapshot = await getDocs(collection(db, 'complaints'))
      const complaintsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      setComplaints(complaintsData)
    }

    fetchComplaints()
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'complaints', id))
      setComplaints(complaints.filter(complaint => complaint.id !== id))
      toast.success('Complaint removed successfully!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      })
    } catch (error) {
      console.error('Error removing complaint:', error)
      toast.error('Problem in removing complaint', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      })
    }
  }

  return (
    <div className='h-full w-full flex flex-col items-center gap-10 p-4'>
      <h1 className='font-extrabold text-3xl md:text-8xl text-black'>Manager Dashboard</h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Complaint Category</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td className="border px-4 py-2 text-center">{complaint.firstname}</td>
                <td className="border px-4 py-2 text-center">{complaint.lastname}</td>
                <td className="border px-4 py-2 text-center">{complaint.address}</td>
                <td className="border px-4 py-2 text-center">{complaint.issue}</td>
                <td className="border px-4 py-2 text-center">{complaint.complaintdescription}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(complaint.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ManagerDashboard
