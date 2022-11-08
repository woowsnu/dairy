import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import colors from '../../styles/colors';
import styled from 'styled-components';

const Modal = ({ children, selector, closeModal }) => {
	const ref = useRef();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (document) {
			const dom = document.getElementById(selector);
			ref.current = dom;
		}
	}, []);

	if (ref.current && mounted) {
		// mounted 됬고 dom이 존재하는 경우 모달 랜더링 진행
		return ReactDOM.createPortal(
			<>
				<ModalOveray
					onClick={() => {
						closeModal();
					}}
				/>
				<Container>{children}</Container>
			</>,
			ref.current,
		);
	}
	return null;
};

export default Modal;

const ModalOveray = styled.div`
	box-sizing: border-box;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	width: 100%;
	background-color: ${colors.black};
	opacity: 70%;
`;

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	z-index: 50;
`;
