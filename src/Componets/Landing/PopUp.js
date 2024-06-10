import React, { useState } from 'react';
import './Landing.css';

const Popup = ({ onClose }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSave = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result.split(',')[1];
      const userData = { name, image: base64Image };
      localStorage.setItem('userInfo', JSON.stringify(userData));
      onClose();
    };
    if (image) {
      reader.readAsDataURL(image);
    } else {
      const userData = { name, image: null };
      localStorage.setItem('userInfo', JSON.stringify(userData));
      onClose();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div className="popup">
      <div className="popup-content">
      <div className="login-box">
        
         <div className="user-box">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}  required  />
            <label>Name</label>
          </div>
          
        <div className="profile-container">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            id="file-input"
          />
          <label htmlFor="file-input" className="profile-label">
            {preview ? (
              <img src={preview} alt="Profile Preview" className="profile-preview" />
            ) : (
              <div className="profile-placeholder">Choose File</div>
            )}
          </label>
        </div>
        <center>
        <a><button className='save' onClick={handleSave}>Save</button></a>
        <a><button className='close' onClick={onClose}>Close</button></a>
        <span></span>
        </center>
        
        </div>
      </div>
    </div>
    </>
  );
};

export default Popup;
