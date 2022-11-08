import React from 'react';
import MypageTab from './MypageTab';
import styled from 'styled-components';
import Layout from '../Layout/Layout';

const Mypage = (props) => {
	return (
		<Layout>
			<MypageContainer>
				<MypageTab />
				{props.children}
			</MypageContainer>
		</Layout>
	);
};

export default Mypage;

const MypageContainer = styled.div`
	width: 100%;
	height: 100vh;
`;
