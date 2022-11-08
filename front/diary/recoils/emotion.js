import { atom } from 'recoil';

const selectedEmotionList = atom({
	key: 'selectedEmotionList',
	default: [],
});

export { selectedEmotionList }