import React, {useReducer, useState} from 'react';
import './styles.css';

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      name: '',
      email: 0,
      idea: '',
    }
  }

  return {
    ... state,
    [event.name]: event.value
  }
}

function Form() {
  const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
  })
  
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 1000)

  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  return (
    <div className="wrapper">
      
      <form onSubmit={handleSubmit} className="form">
        <h2 className="question">Got a flavour suggestion?</h2>
        <fieldset disabled={submitting} className="form-data">
         <label for="name" className="field-label"> 
           <p className="label">Name</p>
           <input name="name" onChange={handleChange} value={formData.name || ''}/>
         </label>
          <label for="email" className="field-label">
            <p className="label">Email address</p>
            <input name="email" onChange={handleChange} value={formData.email || ''}/>
          </label>
          <label for="idea" className="field-label">
            <p className="label">What is your suggestion?</p>
            <input type="textarea" name="idea" rows="10" cols="50" onChange={handleChange} value={formData.idea || ''}/>
          </label>
          <label for="contact" className="box-label">
            <p className="label">Can we contact you for more flavour recommendations?</p>
            <input 
              type="checkbox" 
              name="contact" 
              onChange={handleChange} 
              checked={formData['contact'] || false}
            />
             
          </label>
        
        <button type="submit" disabled={submitting}>Submit</button>
        </fieldset>
        {submitting && 
      <div className="submitting">You are submitting:
        <ul>{Object.entries(formData).map(([name, value]) => (
          <li key={name}><strong>{name}</strong>:{value.toString()}</li>
        ))}
        </ul>
      </div>
      }
      </form>
      
    </div>
  );
}

export default Form;

// https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react