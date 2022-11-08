import React from 'react';
import colors from '../../styles/colors';
import styled from 'styled-components';

import { FaSearch, FaBars } from 'react-icons/fa';

const Search = () => {
	return (
		<NavContainer>
			<Form>
				<input type="text" />
				<label>
					<FaSearch />
				</label>
			</Form>
		</NavContainer>
	);
};

export default Search;

const NavContainer = styled.nav`
	display: block;
	/* justify-content: space-between;
	align-items: center; */
	padding: 1rem 1.2rem;
	border-bottom: 1px solid ${colors.gray5};
	z-index: 100;
	background-color: ${colors.white};
`;

const Form = styled.form`
	position: relative;

	input {
		font-size: 1.5rem;
        border: 0;
        background-color: ${colors.gray6};
		color: ${colors.gray2};
		padding-left: 0.8rem;
		border-radius: 1rem;
	}

	label {
		position: absolute;
        top: 0;
        right: 0;
	}
`;
