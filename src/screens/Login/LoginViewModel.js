import { useState } from 'react';

const useLoginViewModel = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordVisible, setPasswordVisible] = useState(false);

  return {
    userName,
    setUserName,
    password,
    setPassword,
    // passwordVisible,
    // togglePasswordVisibility: () => setPasswordVisible(prev => !prev),
  };
};

export default useLoginViewModel;
