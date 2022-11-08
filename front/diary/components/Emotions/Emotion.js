import React, { useState, useEffect, useReducer } from 'react';
import { getEmotionByCatAPI } from '../../lib/api/mypage';
import Button from '../UI/Button';
import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Modal from '../UI/Modal';

const emotionReducer = (state, action) => {
	if (action.type === 'SLICE1') {
		return { value: action.value, emotions: action.emotions };
	}
	if (action.type === 'SLICE2') {
		return { value: action.value, emotions: action.emotions };
	}
	if (action.type === 'SLICE3') {
		return { value: action.value, emotions: action.emotions };
	}
	if (action.type === 'SLICE4') {
		return { value: action.value, emotions: action.emotions };
	}
	if (action.type === 'SLICE5') {
		return { value: action.value, emotions: action.emotions };
	}
};

const Emotion = (props) => {
	const catId = props.catId;
	const [emotions, setEmotions] = useState([]);
	const [emotionState, dispatchEmotion] = useReducer(emotionReducer, {
		value: 1,
		emotions: [],
	});
	const [splitSize, setSplitSize] = useState(0);
	const [seletedEmotions, setSeletedEmotions] = useState([]);

	useEffect(() => {
		getEmotionByCatAPI(catId).then((data) => {
			const sortData = data.sort((a, b) => a.word_freq - b.word_freq);
			setEmotions(sortData);
			const dataDivision = Math.round(sortData.length / 5);
			emotionState.value = 1;
			emotionState.emotions = [...sortData].splice(0, dataDivision);
			setSplitSize(dataDivision);
		});
	}, []);

	const onselectHandler = (id, word) => {
		const selected = { emotionId : id, emotionWord : word}
		// const emotionWord = e.target.textContent;
		setSeletedEmotions([...seletedEmotions, selected]);
	};

	const sliderValueHandler = (e) => {
		const slide = e.target.value;
		const copy = emotions;
		if (slide == 1) {
			dispatchEmotion({
				type: 'SLICE1',
				value: slide,
				emotions: copy.slice(0, splitSize),
			});
		}
		if (slide == 2) {
			dispatchEmotion({
				type: 'SLICE2',
				value: slide,
				emotions: copy.slice(splitSize, splitSize * slide),
			});
		}
		if (slide == 3) {
			dispatchEmotion({
				type: 'SLICE3',
				value: slide,
				emotions: copy.slice(splitSize * (slide - 1), splitSize * slide),
			});
		}
		if (slide == 4) {
			dispatchEmotion({
				type: 'SLICE4',
				value: slide,
				emotions: copy.slice(splitSize * (slide - 1), splitSize * slide),
			});
		}
		if (slide == 5) {
			dispatchEmotion({
				type: 'SLICE5',
				value: slide,
				emotions: copy.slice(splitSize * (slide - 1), emotions.length),
			});
		}
	};

	const closeModal = () => {
		props.handleEmotionSelect(seletedEmotions);
		props.handleModalState();
	};
	return (
		<Modal selector="modal-root" closeModal={props.handleModalState}>
			<Container>
				<h1>
					오늘 느낀 감정 크기는
					<br />
					어느정도 였나요?
				</h1>
				<WordSection>
					{emotionState.emotions.map((emotion) => (
						<div className="tag" onClick={()=>{onselectHandler(emotion.emotionId, emotion.word)}}>
							{emotion.word}
						</div>
					))}
				</WordSection>
				<Wrapper>
					<div className="slider-label">
						<p>약간</p>
						<p>매우</p>
					</div>
					<Slider type="range" min="1" max="5" value={emotionState.value} onChange={sliderValueHandler} />
				</Wrapper>
				<Bottom>
					<Button onClick={closeModal} label="완료" size="md" />
				</Bottom>
			</Container>
		</Modal>
	);
};

export default Emotion;

const Container = styled.div`
	position: relative;
	height: 100%;
	top: 4rem;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 300;
	background-color: white;
	border-radius: 1.2rem 1.2rem 0 0;

	h1 {
		text-align: left;
		${fonts.H1};
		color: ${colors.gray1};
		padding-left: 1.5rem;
		padding-top: 3.2rem;
		padding-bottom: 1.4rem;
	}
`;

const WordSection = styled.div`
	margin-top: 10px;
	padding: 0.8rem;
	border: 1px solid ${colors.gray5};
	display: flex;
	flex-wrap: wrap;

	.tag {
		padding: 8px 14px;
		margin: 4px;
		font-size: 15px;
		background-color: ${colors.gray5};
		border-radius: 16px;
	}

	.tag:hover {
		background-color: ${colors.primary};
		color: ${colors.white};
	}
`;

const Wrapper = styled.div`
	${fonts.Caption};
	color: ${colors.gray4};
	padding: 1rem;

	.slider-label {
		display: flex;
		justify-content: space-between;
		padding-bottom: 0.6rem;
	}
`;

const Slider = styled.input`
	-webkit-appearance: none;
	accent-color: ${colors.primary};
	background-color: ${colors.gray4};
	border-radius: 0.3rem;
	width: 100%;
	height: 0.6rem;
`;

const Bottom = styled.div`
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
`;
