import Link from 'next/link';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { selectedEmotionList } from '../../recoils/emotion';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// 검색결과가 들어가는 카드 UI

const Card = (props) => {
	const { id, contents, lastUpdate, emotion } = props.post;
	const date = lastUpdate.split('T')[0]

	return (
		<Link href={`/emotions/write/${id}`}>
			<Container>
				{emotion.map((emo)=>(
					<span key={emo.id}>"{emo.word}"</span>
				))}
				<h5>{date}</h5>
				<h4>{contents}</h4>
			</Container>
		</Link>
	);
};

export default Card;

const Container = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding: 1rem;
	margin: 0 auto;
	background-color: white;
	border-radius: 5px;
	border: 1px solid #d9d9db;
	box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);

	span {
		${fonts.Body1};
		color: ${colors.E4};
		font-weight: 600;
		padding-bottom: 0.6rem;
		margin-right: 0.3rem;
	}

	h5 {
		${fonts.Caption}
		color: ${colors.gray3};
		padding: 0.3rem 0.2rem;
	}

	h4 {
		${fonts.Body2};
		color: ${colors.gray4};
		padding-left: 0.2rem;
		-webkit-line-clamp : 2;
		text-overflow: ellipsis;
	}
`;
