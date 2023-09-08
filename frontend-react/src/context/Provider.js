import { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const value = {
    tasks,
    setTasks,
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
