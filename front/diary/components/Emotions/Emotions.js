import React, { useState } from 'react';
import Link from 'next/link';

import { EMOTION_CAT } from '../../data/category';
import Button from '../UI/Button';
import Emotion from './Emotion';

import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Modal from '../UI/Modal';

const Emotions = () => {
  const [openModal, setOpenModal] = useState(false);

	// Click state가 true일 때  emotion 컴포넌트를 보여주는 function
	const onClickHandler = () => {
    setOpenModal(!openModal);
  }

	// emotion에서 선택된 단어 상태
	const [selected, setSelected] = useState([]);

	const selectHandler = (emotion) => {
		setSelected([...selected, emotion]);
	};

	return (
		<Container>
			<div className="title">오늘의 기분은 어떠셨나요?</div>
			<div className="seleted-word-area">{selected.length > 0 ? selected : <div>선택하신 단어가 표시됩니다.</div>}</div>
			<Wrap>
				{EMOTION_CAT.map(category => (
					<EmotionBtn onClick={()=>{onClickHandler(category.id)}}>
            <Link href={`/emotions/${category.id}`}>
						<div className="btn">
							<div className="btn-main-emotion" style={{ backgroundColor: category.color }}></div>
							<p className="txt-main-emotion">{category.name}</p>
						</div>
            </Link>
					</EmotionBtn>
				))}
			</Wrap>
      <Bottom>
			{selected.length > 0 ? (
				<Link href={{ pathname: `/emotions/write`, query: { selected } }}>
					<Button>일기쓰기</Button>
				</Link>
			) : (
				<button className="btn-disable">단어를 선택해주세요</button>
			)}
      </Bottom>
		</Container>
	);
};

export default Emotions;

const Container = styled.div`
	position: relative;
	width: 100%;
  height: 100vh;
	margin: 0 auto;
	z-index: 1px;

	.title {
		${fonts.H2};
		color: ${colors.gray2};
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

const Wrap = styled.div`
	max-width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-top: 24px;
	margin: 0 auto;
`;

const EmotionBtn = styled.div`
	width: calc(100%/4);

	.btn {
		border: 1px solid ${colors.gray4};
		border-radius: 3px;
		padding: 8px;
		margin-top: 10px;
	}

	.btn:hover {
		border: 1px solid ${colors.primary};
		color: ${colors.primary};
	}

	.btn-main-emotion {
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}

	.txt-main-emotion {
		text-align: right;
		margin-top: 10px;
		${fonts.Body1}
		color: ${colors.gray3}
	}
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
`