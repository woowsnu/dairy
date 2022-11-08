import React from 'react';
import Link from 'next/link';
import { getCookie } from '../../utils/cookie';
import { BsXLg } from 'react-icons/bs';
import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const Menu = (props) => {
	const nickname = getCookie('nickname');

	return (
		<>
			<Rnb>
				<CloseBtn>
					<BsXLg
						onClick={() => {
							props.handleMenuState();
						}}
					/>
				</CloseBtn>
				<UserWrap>
					<h3>{nickname}</h3>
				</UserWrap>
				<MenuWrap>
					<Link href="/mypage/weekly">
						<li>마이페이지</li>
					</Link>

					<Link href="/mypage">
						<li>회원정보수정</li>
					</Link>
				</MenuWrap>
			</Rnb>
			<Deemed
				onClick={() => {
					props.handleMenuState();
				}}
			/>
		</>
	);
};

export default Menu;

const Deemed = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 150;
	padding: 1.2rem 0;
	background-color: ${colors.black};
	opacity: 50%;
`;

const Rnb = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 200;
	display: flex;
	flex-direction: column;
	width: 70%;
	height: 100%;
	padding: 1.2rem;
	background-color: ${colors.white};
	text-decoration: none;
	/* animation: ${MenuSlide} 1s; */
`;

const CloseBtn = styled.div`
	font-size: 1.5rem;
	align-self: flex-end;
`;

const UserWrap = styled.div`
	display: flex;
	padding-top: 2rem;
	padding-left: 1rem;

	h3 {
		${fonts.H3};
	}
`;

const MenuWrap = styled.ul`
	padding-top: 2rem;
	padding-left: 1rem;
	text-decoration: none;
	list-style: none;

	li {
		${fonts.Body1}
		text-decoration: none;
		list-style: none;
		padding-bottom: 1rem;
	}

	li:hover {
		color: ${colors.primary};
	}
`;
