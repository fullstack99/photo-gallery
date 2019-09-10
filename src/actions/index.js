import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
	getPhotoRequest: null,
	getPhotoSuccess: ['data'],
	getPhotoFailure: ['error'],

	setFavoriteImage: ['item'],
})
