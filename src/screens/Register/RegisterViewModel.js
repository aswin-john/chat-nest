import { useState } from 'react';

const useRegisterViewModel = () => {
  const [userName, setUserName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return {
    userName,
    setUserName,
    mobileNo,
    setMobileNo,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };
};

export default useRegisterViewModel;