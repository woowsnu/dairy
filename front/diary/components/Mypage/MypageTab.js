import React, { useState } from 'react';
import Link from 'next/link';
import colors from '../../styles/colors'
import styled from 'styled-components';

const MypageTab = () => {
	const [tabNum, setTabNum] = useState(0);
	return (
		<Ul>
			<Li>
				<button>주간</button>
			</Li>
			<Li>
				<button>월간</button>
			</Li>
			<Li>
				<button>종합</button>
			</Li>
		</Ul>
	);
};

export default MypageTab;

const Ul = styled.ul`
	display: flex;
  justify-content: space-between;
  padding: 1rem;
	list-style: none;
  background-color: ${colors.gray6};
`;

const Li = styled.li`
  width: calc(100%/3);
  border-radius: 0.3rem;

  button {
    width: 100%;
    padding: 0.8rem;
    border: 0;
    outline: 0;
    background-color: ${colors.white};
  }
`

// background-color: ${colors.primary};