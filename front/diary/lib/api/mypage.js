import baseURL from '.';

// GET diary API
export const getDiaryAPI = () =>
	fetch(`${baseURL}/post`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

export const getEmotionByCatAPI = async (catId) => {
	const response = await fetch(`${baseURL}/emotion/${catId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (!response.ok) {
		alert('데이터 로딩에 실패했습니다.');
		console.error('에러가 발생했습니다.');
	}
	return response.json();
};