export const renderCalendar = () => {
	let date = new Date();
	const viewYear = date.getFullYear();
	const viewMonth = date.getMonth();

	const prevLast = new Date(viewYear, viewMonth, 0);
	const thisLast = new Date(viewYear, viewMonth + 1, 0);

	const PLDate = prevLast.getDate();
	const PLDay = prevLast.getDay();

	const TLDate = thisLast.getDate();
	const TLDay = thisLast.getDay();

	const prevDates = [];
	// const thisDates = [...Array(TLDate + 1).keys()].slice(1);
	const thisDates = [];
	const nextDates = [];

	if (PLDay !== 6) {
		for (let i = 0; i < PLDay + 1; i++) {
			prevDates.unshift({ id: 0, value: PLDate - i });
		}
	}

	for (let i = 1; i < TLDate + 1; i++) {
		thisDates.push({ id: 1, value: i });
	}

	for (let i = 1; i < 7 - TLDay; i++) {
		nextDates.push({ id: 0, value: i });
	}

	const dates = prevDates.concat(thisDates, nextDates);
	return dates;
};

export const renderCalendarChange = (year, month) => {
	const viewYear = year;
	const viewMonth = month;

	const prevLast = new Date(viewYear, viewMonth, 0);
	const thisLast = new Date(viewYear, viewMonth + 1, 0);

	const PLDate = prevLast.getDate();
	const PLDay = prevLast.getDay();

	const TLDate = thisLast.getDate();
	const TLDay = thisLast.getDay();

	const prevDates = [];
	const thisDates = [];
	const nextDates = [];

	if (PLDay !== 6) {
		for (let i = 0; i < PLDay + 1; i++) {
			prevDates.unshift({ id: 0, value: PLDate - i });
		}
	}

	for (let i = 1; i < TLDate + 1; i++) {
		thisDates.push({ id: 1, value: i });
	}

	for (let i = 1; i < 7 - TLDay; i++) {
		nextDates.push({ id: 0, value: i });
	}

	const dates = prevDates.concat(thisDates, nextDates);
	return dates;
};
