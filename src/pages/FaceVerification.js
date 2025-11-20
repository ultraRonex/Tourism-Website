import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import axios from 'axios';
import { toast } from 'react-toastify';

function FaceVerification() {
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const handleVerify = async () => {
    const userId = localStorage.getItem('userId');
    try {
      const res = await axios.post('http://localhost:5000/api/users/verify-face', {
        userId,
        currentImage: capturedImage
      });

      if (res.data.success) {
        toast.success('Face verified successfully!');
        navigate('/guide');
      } else {
        toast.error('Face verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Face verification error:', error);
      toast.error('Verification failed.');
    }
  };

  return (
    <div className="form-container">
      <h2>Face Verification</h2>
      <Webcam
        audio={false}
        height={240}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
      />
      <button onClick={capture}>Capture Image</button>
      {capturedImage && (
        <>
          <img src={capturedImage} alt="Captured" style={{ width: '200px', marginTop: '10px' }} />
          <button onClick={handleVerify}>Verify Face</button>
        </>
      )}
    </div>
  );
}

export default FaceVerification;
