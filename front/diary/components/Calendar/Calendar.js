import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { renderCalendar, renderCalendarChange } from '../../utils/render-calendar';

const Calendar = () => {
	const [dates, setDates] = useState([]);
	const [viewYear, setViewYear] = useState('');
	const [viewMonth, setViewMonth] = useState('');

	useEffect(() => {
        const date = new Date();
        const year= date.getFullYear();
        const month = date.getMonth();
        setViewYear(year)
        setViewYear(month)
		const data = renderCalendar();
		setDates(data);
	}, []);

	const handlePrevDates = () => {
		const data = renderCalendarChange(year, month);
		setDates(data);
	};

	const handleNextDates = () => {};

	const handleThisDates = () => {};

	return (
		<div>
			<div>
				<div>
					{viewYear}년 {viewMonth + 1}월
				</div>
				<div>
					<button onClick={handlePrevDates}>이전</button>
					<button onClick={handleThisDates}>Today</button>
					<button onClick={handleNextDates}>다음</button>
				</div>
			</div>
			<div>
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
						return <DateItem key={i}>{date}</DateItem>;
					})}
				</Dates>
			</div>
		</div>
	);
};

export default Calendar;

const Weeks = styled.div`
	display: flex;
	flex-flow: row wrap;
`;

const WeekItem = styled.div`
	width: calc(100% / 7);
	text-align: center;
`;

const Dates = styled.div`
	display: flex;
	flex-flow: row wrap;
`;

const DateItem = styled.div`
	width: calc(100% / 7);
	text-align: center;
`;
