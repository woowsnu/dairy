import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Layout = props => {
	return (
		<Container>
			<Header />
			<Main>{props.children}</Main>
		</Container>
	);
};

export default Layout;

const Container = styled.div`
	box-sizing: border-box;
	position: relative;
	max-width: 67.5rem;
	margin: 0 auto;
`;

const Main = styled.main`
	width: 100%;
	height: 100%;
`;
