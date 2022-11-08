import { atom } from 'recoil';

const thisYear = new Date().getFullYear();
const thisMonth = new Date().getMonth()+1;
const today = new Date().getDate();

const todayAtom = atom({
	key: 'selectedDate',
	default: [thisYear, thisMonth, today],
});


const selectedDate = atom({
	key: 'selectedDate',
	default: [thisYear, thisMonth, today],
});

export { todayAtom, selectedDate };
