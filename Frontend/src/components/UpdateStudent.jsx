import React,{useEffect, useState} from 'react'
import { updateStudent } from '../services/Studentservices';
import { useNavigate } from 'react-router-dom';



export default function UpdateStudent() {
  const [formData, setFormData] = useState({
    name: '',
    age:'',
    email: '',
    phone: ''
  });
  // useEffect(async()=>{
  //   const res=await 
  // },[])


  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

  
    if (!formData.name || !/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name must contain only letters and spaces';
    }
    if (!formData.age || isNaN(formData.age)) {
      newErrors.age = 'Age must be a number';
    }

    if (!formData.email.includes('@') || !formData.email.endsWith('.com')) {
      newErrors.email = 'Email must be valid and include "@" and ".com"';
    }

    if (!formData.phone || formData.phone.length !== 10 || isNaN(formData.phone)) {
      newErrors.phone = 'Phone number must be a 10-digit number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response= await updateStudent(formData,id);
        console.log('Form data is valid and submitted:', response.data);
        navigate('/students')
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Update Student Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Roll Number:</label>
          <input
            type="text"
            name="roll"
            value={formData.roll}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.roll && <p className="text-red-500 text-sm">{errors.roll}</p>}
        </div>
        <div>
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block font-semibold">Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        
        <div>
          <label className="block font-semibold">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block font-semibold">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
