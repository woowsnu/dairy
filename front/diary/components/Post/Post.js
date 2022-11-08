import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { postTodoAPI } from '../../lib/api/post';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import styled from 'styled-components';
import Button from '../UI/Button';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedEmotionList } from '../../recoils/emotion';
import { getCookie } from '../../utils/cookie';
import Layout from '../Layout/Layout';

const Post = () => {
	const router = useRouter();
	const emotions = useRecoilValue(selectedEmotionList);
	const [description, setDescription] = useState('');
	const setEmotionList = useSetRecoilState(selectedEmotionList);
	
	const filterEmotionId = () => {
		let emotionsForSave = [];
		for(let i = 0; i < emotions.length; i++) {
			const item = { emotionId : emotions[i].emotionId }
			emotionsForSave.push(item);
		}
		return emotionsForSave;
	}

	const today = new Date();

	function getToday() {
		var year = today.getFullYear();
		var month = ('0' + (1 + today.getMonth())).slice(-2);
		var day = ('0' + today.getDate()).slice(-2);
		return year + '-' + month + '-' + day;
	}

	function getTodayView() {
		var year = today.getFullYear();
		var month = ('0' + (1 + today.getMonth())).slice(-2);
		var day = ('0' + today.getDate()).slice(-2);
		return year + '.' + month + '.' + day;
	}

	const date = getToday(today);
	const dateView = getTodayView(today);
	const descChangeHandler = (e) => {
		setDescription(e.target.value);
	};

	const addPost = () => {
		const userId = getCookie('userId');
		const emotions = filterEmotionId();
		const post = {
			contents: description,
			user_id: {
				id: userId,
			},
			emotion: emotions
		};

		postTodoAPI(post);
		setEmotionList([]);
		router.replace('/');
	};

	return (
		<Layout>
			<Container>
				<h1>{dateView} 의 일기</h1>
				<div className="tags">
					{emotions?.map((emotion) => (
						<span key={emotion}>{emotion.emotionWord}</span>
					))}
				</div>
				<textarea
					className="write-area"
					value={description}
					onChange={descChangeHandler}
					cols="30"
					rows="10"
					placeholder='오늘의 감정을 글로 남겨보세요.'
				></textarea>
				<Bottom>
					<Button onClick={addPost} label="저장" size="md">
						저장
					</Button>
				</Bottom>
			</Container>
		</Layout>
	);
};

export default Post;

const Container = styled.div`
	width: 90%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;

	h1 {
		${fonts.H2};
		color: ${colors.gray2};
		text-align: left;
		padding: 30px 0 20px 4px;
	}

	.tags {
		padding-bottom: 1rem;

		span {
			${fonts.Body2}
			padding: 6px 14px;
			margin: 10px 8px 10px 0;
			border-radius: 1rem;
			color: ${colors.white};
			background-color: ${colors.primary};
		}
	}

	.write-area {
		border: 1px solid ${colors.gray4};
		border-radius: 5px;
		padding: 12px;
		margin: 0;
		${fonts.Body2};
		color: ${colors.gray3};
	}
`;

const Bottom = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
`;
