// App.js
import React, { useState } from 'react';
import BirthdayForm from './components/BirthdayForm';
import BirthdayCard from './components/BirthdayCard';
import './styles.css';

const App = () => {
  const [cardData, setCardData] = useState(null);

  const handleFormSubmit = (formData) => {
    setCardData(formData);
  };

  return (
    <div>
      <BirthdayForm onSubmit={handleFormSubmit} />
      {cardData && <BirthdayCard data={cardData} />}
    </div>
  );
};

export default App;
