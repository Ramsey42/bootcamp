import React, {useState} from "react";

const Experience = () => {
    const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);

    // Validation logic
    if (!event.target.value) {
      setError('This field is mandatory');
    } else if (event.target.value.length < 2) {
      setError('At least 2 characters are required');
    } else if (!/^[ა-ჰ]+$/.test(event.target.value)) {
      setError('Only Georgian symbols are allowed');
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default Experience;