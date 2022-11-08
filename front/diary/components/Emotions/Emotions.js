import React, { useState } from 'react';
import Link from 'next/link';

import { EMOTION_CAT } from '../../data/category';
import Button from '../UI/Button';

import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Emotion from './Emotion';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedEmotionList } from '../../recoils/emotion';
import { getCookie } from '../../utils/cookie';

const Emotions = () => {
	const [openModal, setOpenModal] = useState(false);
	const [clickedCatId, setClickedCatId] = useState(0);
	const selectedEmotion = useRecoilValue(selectedEmotionList);
	const setEmotionList = useSetRecoilState(selectedEmotionList);
	const nickname = getCookie('nickname')
	const handleModalState = () => {
		setOpenModal(!openModal);
	};

	const handleCatId = id => {
		setClickedCatId(id);
	};

	const handleEmotionSelect = emotion => {
		console.log(emotion)
		setEmotionList(prevList => [...prevList, ...emotion]);
	};

	return (
		<Container>
			{openModal && (
				<Emotion catId={clickedCatId} handleModalState={handleModalState} handleEmotionSelect={handleEmotionSelect} />
			)}
			<h1>
				{nickname}님,
				<br />
				오늘의 기분은 어때요?
			</h1>
			<SelectedWordSection>
				{selectedEmotion.length > 0 ? (
					selectedEmotion.map(emotion => <span>{emotion.emotionWord}</span>)
				) : (
					<div>선택하신 단어가 표시됩니다.</div>
				)}
			</SelectedWordSection>
			<EmotionBtns>
				{EMOTION_CAT.map(category => (
					<EmotionBtn
						onClick={() => {
							handleModalState();
							handleCatId(category.id);
						}}
					>
						<div>{category.emoji}</div>
						<p>{category.name}</p>
					</EmotionBtn>
				))}
			</EmotionBtns>
			<Bottom>
				{selectedEmotion.length > 0 ? (
					<Link href="/emotions/write">
						<Button label="일기쓰기" size="md" />
					</Link>
				) : (
					<Button label="단어를 선택해주세요" disabled={true} notForClick="true" />
				)}
			</Bottom>
		</Container>
	);
};

export default Emotions;

const Container = styled.div`
	position: relative;
	max-width: 360px;
	max-width: 100%;
	height: 100vh;
	margin: 0 auto;
	padding: 0 1.5rem;
	z-index: 1px;

	h1 {
		${fonts.H2};
		color: ${colors.gray1};
		padding-top: 1rem;
	}

	.seleted-word-area {
		border: 1px dashed ${colors.gray4};
		text-align: center;
		${fonts.Body1};
		color: ${colors.gray4};
	}

	.btn-disable {
		width: 100%;
		padding: 20px;
		margin: 30px auto;
		${fonts.Body1};
		font-weight: 600;
		background-color: ${colors.gray4};
		color: white;
		border: 0;
		cursor: pointer;
		text-align: center;
	}
`;

const SelectedWordSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 17.5rem;
	height: 17.5rem;
	margin: 2.1rem auto;
	border-radius: 50%;
	background: linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);
	box-shadow: 0 0 1.2rem #ebedee;

	span {
		margin-right: 0.6rem;
	}
`;

const EmotionBtns = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 0 auto;
`;

const EmotionBtn = styled.div`
	margin-bottom: 1rem;
	text-align: center;
	border: 1px solid ${colors.gray5};
	border-radius: 0.75rem;
	padding: 0.5rem 1rem;
	margin-bottom: 0.6rem;

	div {
		font-size: 2rem;
		padding-bottom: 0.8rem;
	}

	p {
		${fonts.Caption};
	}

	&:hover {
		border: 1px solid ${colors.primary};
		color: ${colors.primary};
	}

	.txt-main-emotion {
		text-align: right;
		margin-top: 10px;
		${fonts.Body1}
		color: ${colors.gray3}
	}
`;

const Bottom = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
`;
