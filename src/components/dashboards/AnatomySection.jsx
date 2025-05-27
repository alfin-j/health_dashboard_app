import React from 'react';
import bodyImage from '../../assets/humanbody.jpg';
import '../../styles/AnatomySection.css';

function AnatomySection() {
  return (
    <div className="anatomy-container">
      <img src={bodyImage} alt="Human Anatomy" className="anatomy-image" />
      
      <div className="marker heart" title="Healthy Heart">
        <div className="marker-box">❤️<br/><small>Heart</small></div>
      </div>

      <div className="marker lungs" title="Lung Issue">
        <div className="marker-box">❌<br/><small>Lungs</small></div>
      </div>

      <div className="marker bone" title="Healthy Bone">
        <div className="marker-box">🦴<br/><small>Bone</small></div>
      </div>
    </div>
  );
}

export default AnatomySection;
