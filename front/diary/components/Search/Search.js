import React, { useState } from 'react';
import colors from '../../styles/colors';
import styled from 'styled-components';

import { FaSearch, FaBars } from 'react-icons/fa';
import { searchPostAPI } from '../../lib/api/post';
import Card from '../UI/Card';

const Search = () => {
	const [enteredKeyword, setEnteredKeyword] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	const handleEnteredKeyword = (e) => {
		setEnteredKeyword(e.target.value);
	};

	const submitKeyword = async () => {
		const data = await searchPostAPI(enteredKeyword);
		setSearchResult(data);
	};

	return (
		<>
			<NavContainer>
				<Form>
					<input type="text" vlaue={enteredKeyword} onChange={handleEnteredKeyword} />
					<label onClick={submitKeyword}>
						<FaSearch />
					</label>
				</Form>
			</NavContainer>
			<div>
				<ul>
					{searchResult?.map((result) => (
						<Card key={result.id} post={result}/>
					))}
				</ul>
				
			</div>
		</>
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
