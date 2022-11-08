import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { renderCalendar, renderCalendarChange } from '../../utils/render-calendar';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import colors from '../../styles/colors';
import styled from 'styled-components';
import fonts from '../../styles/fonts';
import { useRecoilValue } from 'recoil';
import { todayAtom } from '../../recoils/date';

const Calendar = ({post}) => {
	const [dates, setDates] = useState([]);
	const [viewYear, setViewYear] = useState('');
	const [viewMonth, setViewMonth] = useState('');
	const dateState = useRecoilValue(todayAtom);
	

	const handleThisDates = () => {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth();
		setViewYear(year);
		setViewMonth(month);
		const data = renderCalendar();
		setDates(data);
	};

	useEffect(() => {
		handleThisDates();
	}, []);

	const handlePrevDates = () => {
		let month = viewMonth - 1;
		let year = viewYear;
		if (month === -1) {
			year = year - 1;
			month = 11;
			const data = renderCalendarChange(year, month);
			setViewYear(year);
			setViewMonth(month);
			setDates(data);
		}
		const data = renderCalendarChange(year, month);
		setViewMonth(month);
		setDates(data);
	};

	const handleNextDates = () => {
		let month = viewMonth + 1;
		let year = viewYear;
		if (month === 12) {
			year = year + 1;
			month = 0;
			const data = renderCalendarChange(year, month);
			setViewYear(year);
			setViewMonth(month);
			setDates(data);
		}
		const data = renderCalendarChange(year, month);
		setViewMonth(month);
		setDates(data);
	};

	return (
		<Container>
			<CalendarBody>
				<CalendarUtils>
					<h1>
						{viewYear}년 {viewMonth + 1}월
					</h1>
					<div>
						<IconSpan>
							<FaAngleLeft onClick={handlePrevDates} />
						</IconSpan>
						<IconSpan>
							<FaAngleRight onClick={handleNextDates} />
						</IconSpan>
						{/* <button onClick={handleThisDates}>Today</button> */}
					</div>
				</CalendarUtils>
				<Weeks>
					<WeekItem>일</WeekItem>
					<WeekItem>월</WeekItem>
					<WeekItem>화</WeekItem>
					<WeekItem>수</WeekItem>
					<WeekItem>목</WeekItem>
					<WeekItem>금</WeekItem>
					<WeekItem>토</WeekItem>
				</Weeks>
				<Dates>
					{dates.map((date, i) => {
						if (date.id === 0) {
							return (
								<Link href="/emotions">
									<DateItem key={i}>
										<OtherDateItem/>
										<span>{date.value}</span>
									</DateItem>
								</Link>
							);
						}
						return (
							<Link href="/emotions">
								<DateItem key={i}>
									<DateItemView style={date.value === dateState[2] && viewYear === dateState[0] && viewMonth === dateState[1]-1 ? {backgroundColor: "#FD895C"} : null}/>
									{date.value}
								</DateItem>
							</Link>
						);
					})}
				</Dates>
			</CalendarBody>
		</Container>
	);
};

export default Calendar;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
`;

const CalendarBody = styled.div`
	width: 96%;
`;

const CalendarUtils = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	padding: 0 0.2rem;

	h1 {
		${fonts.H3};
		padding-left: 0.8rem;
	}
`;

const IconSpan = styled.span`
	font-size: 1.4rem;
	padding-left: 0.4rem;
`;

const Weeks = styled.div`
	display: flex;
	flex-flow: row wrap;
	padding-top: 0.6rem;
`;

const WeekItem = styled.div`
	width: calc(100% / 7);
	text-align: center;
	padding: 1rem 0;
`;

const Dates = styled.div`
	display: flex;
	flex-flow: row wrap;
`;

const DateItem = styled.div`
	width: calc(100% / 7);
	text-align: center;
	padding: 0.5rem 0;

	span {
		opacity: 0.3;
	}
`;

// 추후 작성 여부에 따라 색상 props로 표시
const DateItemView = styled.div`
	text-align: center;
	width: 1.5rem;
	height: 1.5rem;
	margin: 0.1rem auto;
	background-color: ${colors.gray6};
	border-radius: 50%;
`;

const OtherDateItem = styled.div`
	text-align: center;
	width: 1.5rem;
	height: 1.5rem;
	margin: 0.1rem auto;
	background-color: ${colors.gray6};
	border-radius: 50%;
	opacity: 30%;
`;

