import React from 'react';
import './Education.css';
import Educationprops from './Educationprops';
const Education = () => {
    return(
        <div className='education-container'>
            <div className='education-left'>
            <h1 className='education-header'>განათლება</h1>
            <h1 className='education-page'>3/3</h1>
        <hr className='education-hr'></hr>

        <div className="education-wrapper">
          <label className="education-label">თანამდებობა</label>
          <input className="education-input" /> 
            
          <p className="education-hint">მინიმუმ 2 სიმბოლო</p>
        </div>

        <div className="degree-wrapper">
          <label className="degree-label">ხარისხი</label>
          <select className="degree-input">
  <option value="option1">საშუალო სკოლის დიპლომი</option>
  <option value="option2">ზოგადსაგანათლებლო დიპლომი</option>
  <option value="option3">ბაკალავრი</option>
  <option value="option3">მაგისტრი</option>
  <option value="option3">დოქტორი</option>
  <option value="option3">ასოცირებული ხარისხი</option>
  <option value="option3">სტუდენტი</option>
  <option value="option3">კოლეჯი(ხარისხის გარეშე)</option>
  <option value="option3">სხვა</option>
</select>    
        </div>

        <div className="graduate-wrapper">
          <label className="graduate-label">თანამდებობა</label>
          <input type='date' className="graduate-input" /> 
        </div>
        
        <div className='aducation-discription-wrapper'>
            <div className='aducation-discription-label'>
               აღწერა
            </div>
            <textarea className='aducation-description-input'></textarea>
        </div>

        <button className='add-aducation'> <p className='add-aducation-content'> სხვა სასწავლებლის დამატება</p></button>

<button className='previous-page2'>  <p className='previous-page2-content'>უკან</p></button>
<button  className='submit'><p className='submit-content'>დასრულება</p></button>
            </div>







            <div className='education-right'>
                <Educationprops />
            </div>
            </div>
    )
}

export default Education;
