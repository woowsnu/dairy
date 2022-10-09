import React, { useEffect, useState } from 'react';
import { renderCalendar, renderCalendarChange } from '../../utils/render-calendar';
import colors from '../../styles/colors';
import styled from 'styled-components';

const Calendar = () => {
	const [dates, setDates] = useState([]);
	const [viewYear, setViewYear] = useState('');
	const [viewMonth, setViewMonth] = useState('');

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
						if (date.id === 0) {
							return (
								<DateItem key={i}>
									<span>{date.value}</span>
								</DateItem>
							);
						}
						return <DateItem key={i}>{date.value}</DateItem>;
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

	&:nth-child(7n) {
		color: blue;
	}

	&:nth-child(7n + 1) {
		color: red;
	}
`;

const Dates = styled.div`
	display: flex;
	flex-flow: row wrap;
	/* border-top: 1px solid #333333;
  border-right: 1px solid #333333; */
`;

const DateItem = styled.div`
	width: calc(100% / 7);
	text-align: center;
	/* border-bottom: 1px solid #333333;
	border-left: 1px solid #333333; */

	&:nth-child(7n) {
		color: blue;
	}

	&:nth-child(7n + 1) {
		color: red;
	}

	span {
		opacity: 0.5;
	}
`;
