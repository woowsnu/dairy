import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPostByUserAPI } from '../lib/api/post';
import { useRecoilState } from 'recoil';
import { getCookie } from '../utils/cookie';
import { todayAtom } from '../recoils/date';
import Calendar from '../components/Calendar/Calendar';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Home = () => {
	const [userPost, setUserPost] = useState([]);
	const id = getCookie('id');
	const userId = { user_id: id };
	const today = useRecoilState(todayAtom)[0].join('-');
	console.log(typeof today, today)
	// const today = '2022-11-01'
	const postDataArr = userPost.map((item) => item.lastUpdate.split('T')[0]);
	const isPostedDate = postDataArr.includes(today);

	useEffect(() => {
		getPostByUserAPI(userId)
			.then((res) => {
				const data = res.json();
				return data;
			})
			.then((data) => {
				setUserPost(data);
			});
	}, [isPostedDate]);

	return (
		<Layout>
			<Calendar post={userPost} />
			<Section>
				{!isPostedDate && (
					<Link href="/emotions">
						<NoPost>오늘의 일기를 작성해보세요.</NoPost>
					</Link>
				)}
				{isPostedDate &&
					userPost?.map((post) => (
						<CardWrapper>
							<Card key={post.id} post={post} />
						</CardWrapper>
					))}
			</Section>
		</Layout>
	);
};

export default Home;

const Section = styled.section`
	width: 90%;
	margin: 0 auto 1rem auto;
`;

const NoPost = styled.div`
	padding: 1rem;
	${fonts.Body1};
	text-align: center;
	color: ${colors.gray2};
	border: 1px solid ${colors.gray4};
	border-radius: 0.3rem;
`

const CardWrapper = styled.div`
	width: 100%;

	p {
		${fonts.Body2};
		color: ${colors.gray1};
		padding: 0.5rem;
	}
`