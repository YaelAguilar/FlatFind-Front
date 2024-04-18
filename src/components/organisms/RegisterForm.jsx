import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setMessage('Please fill all fields');
      return;
    }
    try {
      await axios.post('http://localhost:4000/api/users/register', formData);
      setMessage('User registered successfully');
    } catch (error) {
      setMessage(error.response.data.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="w-full px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600">
            Register
          </button>
          {message && <p className="text-center text-red-500">{message}</p>}
        </form>
        <p className="text-center">
          <Link to="/login" className="text-blue-500 hover:underline">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
