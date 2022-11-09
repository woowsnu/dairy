import React from 'react';
import { getCookie } from './cookie';

const AuthProvider = () => {
	const isLogin = getCookie('userEmail');
	return <div>AuthProvider</div>;
};

export default AuthProvider;
