// action creator: 액션을 생성하는 함수
export const updateUser = (name) => ({
	type: 'updateUser',
	payload: { // 애플리케이션이 어떻게 영향받을것인지를 결정하는 메타데이터
		user: name
	}
})