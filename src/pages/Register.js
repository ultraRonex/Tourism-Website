


// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Webcam from 'react-webcam';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Register.css';

// function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: '',
//   });

//   const webcamRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const capture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (formData.password !== formData.confirmPassword) {
//       toast.error('Passwords do not match!');
//       return;
//     }

//     if (!formData.role) {
//       toast.error('Please select a role!');
//       return;
//     }

//     if (formData.role === 'guide' && !capturedImage) {
//       toast.error('Please capture your image for verification!');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/users/register', {
//         ...formData,
//         image: capturedImage,
//       });

//       toast.success(
//         formData.role === 'guide'
//           ? 'Registered as guide! Your profile is pending verification.'
//           : `Registered successfully as ${formData.role}!`
//       );

//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
//     } catch (error) {
//       const errorMsg = error.response?.data?.error || 'Registration failed!';
//       toast.error(errorMsg);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//         <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

//         <select name="role" value={formData.role} onChange={handleChange} required>
//           <option value="">Select Role</option>
//           <option value="visitor">Visitor</option>
//           <option value="guide">Guide</option>
//           <option value="blogger">Blogger</option>
//         </select>

//         {formData.role === 'guide' && (
//           <div className="webcam-section">
//             <Webcam
//               audio={false}
//               height={240}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               width={320}
//             />
//             <button type="button" onClick={capture}>Capture Image</button>
//             {capturedImage && <img src={capturedImage} alt="Captured" style={{ marginTop: '10px', width: '200px' }} />}
//           </div>
//         )}

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;


// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Webcam from 'react-webcam';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Register.css';

// function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: '',
//   });

//   const [aadharFile, setAadharFile] = useState(null);
//   const webcamRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAadharChange = (e) => {
//     setAadharFile(e.target.files[0]);
//   };

//   const capture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       toast.error('Passwords do not match!');
//       return;
//     }

//     if (!formData.role) {
//       toast.error('Please select a role!');
//       return;
//     }

//     if (formData.role === 'guide') {
//       if (!capturedImage) {
//         toast.error('Please capture your image for verification!');
//         return;
//       }
//       if (!aadharFile) {
//         toast.error('Please upload your Aadhar card!');
//         return;
//       }
//     }

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('password', formData.password);
//       formDataToSend.append('role', formData.role);
//       if (formData.role === 'guide') {
//         formDataToSend.append('image', capturedImage);
//         formDataToSend.append('aadhar', aadharFile);
//       }

//       const response = await axios.post('http://localhost:5000/api/users/register', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       toast.success(
//         formData.role === 'guide'
//           ? 'Registered as guide! Your profile is pending verification.'
//           : `Registered successfully as ${formData.role}!`
//       );

//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
//     } catch (error) {
//       const errorMsg = error.response?.data?.error || 'Registration failed!';
//       toast.error(errorMsg);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit} className="form" encType="multipart/form-data">
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//         <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

//         <select name="role" value={formData.role} onChange={handleChange} required>
//           <option value="">Select Role</option>
//           <option value="visitor">Visitor</option>
//           <option value="guide">Guide</option>
//           <option value="blogger">Blogger</option>
//         </select>

//         {formData.role === 'guide' && (
//           <>
//             <div className="webcam-section">
//               <Webcam
//                 audio={false}
//                 height={240}
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//                 width={320}
//               />
//               <button type="button" onClick={capture}>Capture Image</button>
//               {capturedImage && <img src={capturedImage} alt="Captured" style={{ marginTop: '10px', width: '200px' }} />}
//             </div>

//             <div className="aadhar-upload">
//               <label>Upload Aadhar Card (PDF or Image):</label>
//               <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleAadharChange} required />
//             </div>
//           </>
//         )}

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;



// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Webcam from 'react-webcam';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Register.css';

// function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: '',
//   });

//   const [aadharFile, setAadharFile] = useState(null);
//   const webcamRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAadharChange = (e) => {
//     setAadharFile(e.target.files[0]);
//   };

//   const capture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation
//     if (formData.password !== formData.confirmPassword) {
//       toast.error('Passwords do not match!');
//       return;
//     }

//     if (!formData.role) {
//       toast.error('Please select a role!');
//       return;
//     }

//     if ((formData.role === 'guide' || formData.role === 'blogger') && !aadharFile) {
//       toast.error('Please upload your Aadhar card!');
//       return;
//     }

//     if (formData.role === 'guide' && !capturedImage) {
//       toast.error('Please capture your image for verification!');
//       return;
//     }

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('password', formData.password);
//       formDataToSend.append('role', formData.role);

//       if (formData.role === 'guide') {
//         formDataToSend.append('image', capturedImage);
//       }

//       if (formData.role === 'guide' || formData.role === 'blogger') {
//         formDataToSend.append('aadhar', aadharFile);
//       }

//       const response = await axios.post('http://localhost:5000/api/users/register', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       toast.success(
//         formData.role === 'guide'
//           ? 'Registered as guide! Your profile is pending verification.'
//           : formData.role === 'blogger'
//           ? 'Registered as blogger! Your profile is pending verification.'
//           : `Registered successfully as ${formData.role}!`
//       );

//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
//     } catch (error) {
//       const errorMsg = error.response?.data?.error || 'Registration failed!';
//       toast.error(errorMsg);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit} className="form" encType="multipart/form-data">
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//         <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

//         <select name="role" value={formData.role} onChange={handleChange} required>
//           <option value="">Select Role</option>
//           <option value="visitor">Visitor</option>
//           <option value="guide">Guide</option>
//           <option value="blogger">Blogger</option>
//         </select>

//         {/* Aadhar upload for Guide and Blogger */}
//         {(formData.role === 'guide' || formData.role === 'blogger') && (
//           <div className="aadhar-upload">
//             <label>Upload Aadhar Card (PDF or Image):</label>
//             <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleAadharChange} required />
//           </div>
//         )}

//         {/* Webcam for Guide only */}
//         {formData.role === 'guide' && (
//           <div className="webcam-section">
//             <Webcam
//               audio={false}
//               height={240}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               width={320}
//             />
//             <button type="button" onClick={capture}>Capture Image</button>
//             {capturedImage && <img src={capturedImage} alt="Captured" style={{ marginTop: '10px', width: '200px' }} />}
//           </div>
//         )}

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;


import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Webcam from 'react-webcam';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [aadharFile, setAadharFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    if (!formData.role) {
      toast.error('Please select a role!');
      return;
    }

    if ((formData.role === 'guide' || formData.role === 'blogger') && !aadharFile) {
      toast.error('Please upload your Aadhar card!');
      return;
    }

    if (formData.role === 'guide' && !capturedImage) {
      toast.error('Please capture your image for verification!');
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('confirmPassword', formData.confirmPassword);
      formDataToSend.append('role', formData.role);

      if (formData.role === 'guide') {
        formDataToSend.append('image', capturedImage); // base64 string
      }

      if (formData.role === 'guide' || formData.role === 'blogger') {
        formDataToSend.append('aadhar', aadharFile); // file
      }

      const response = await axios.post('http://localhost:5000/api/users/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success(
        formData.role === 'guide'
          ? 'Registered as guide! Your profile is pending verification.'
          : `Registered successfully as ${formData.role}!`
      );

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Registration failed!';
      toast.error(errorMsg);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="">Select Role</option>
          <option value="visitor">Visitor</option>
          <option value="guide">Guide</option>
          <option value="blogger">Blogger</option>
        </select>

        {(formData.role === 'guide' || formData.role === 'blogger') && (
          <div className="file-upload-section" style={{ marginTop: '10px' }}>
            <label htmlFor="aadharUpload">Upload Aadhar Card:</label>
            <input
              id="aadharUpload"
              type="file"
              accept="application/pdf,image/*"
              onChange={(e) => setAadharFile(e.target.files[0])}
              required
            />
            {aadharFile && <p>Selected file: {aadharFile.name}</p>}
          </div>
        )}

        {formData.role === 'guide' && (
          <div className="webcam-section" style={{ marginTop: '10px' }}>
            <Webcam
              audio={false}
              height={240}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={320}
            />
            <button type="button" onClick={capture} style={{ marginTop: '10px' }}>
              Capture Image
            </button>
            {capturedImage && (
              <img
                src={capturedImage}
                alt="Captured"
                style={{ marginTop: '10px', width: '200px' }}
              />
            )}
          </div>
        )}

        <button type="submit" style={{ marginTop: '20px' }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
