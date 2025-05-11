import { useState } from 'react';

const useLoginViewModel = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState(''); 

  return {
    userName,
    setUserName,
    password,
    setPassword,
  };
};

export default useLoginViewModel;
