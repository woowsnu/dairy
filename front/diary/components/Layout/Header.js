import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import colors from '../../styles/colors';
import styled from 'styled-components';

import { FaSearch, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Menu from './Menu';

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuState = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			{menuOpen && <Menu handleMenuState={handleMenuState} />}
			<NavContainer>
				<div>
					<Link href="/">
						<Image src="/static/images/logo2.png" width="55" height="38" />
					</Link>
				</div>
				<div>
					<IconSpan>
						<Link href="/search">
							<FaSearch />
						</Link>
					</IconSpan>
					<IconSpan>
						<FaBars onClick={handleMenuState} />
					</IconSpan>
				</div>
			</NavContainer>
		</>
	);
};

export default Nav;

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 1.2rem;
	border-bottom: 1px solid ${colors.gray5};
	z-index: 100;
	background-color: ${colors.white};
`;

const IconSpan = styled.span`
	font-size: 1.5rem;
	color: ${colors.gray2};
	padding-left: 0.8rem;
`;
