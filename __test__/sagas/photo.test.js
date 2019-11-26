// import { put, takeLatest } from 'redux-saga/effects';
// import { photoSagas, getPhoto } from '../../src/sagas/photo';
//  describe('SAGAS', () => {
//    it('should dispatch action "GET_NEWS" ', () => {
//      const generator = photoSagas();
//      expect(generator.next().value).toEqual(takeLatest('GET_PHOTO_REQUEST', getPhoto));
//      expect(generator.next().done).toBeTruthy();
//    })

//    it('should dispatch action "GET_PHOTO_SUCCESS" with result from fetch News API', () => {
//       const mockResponse = {"status": 200};
//       const generator = getPhoto();
//       generator.next();
//       expect(generator.next(mockResponse).value).toEqual(put({type:"GET_PHOTO_SUCCESS", json:"Some content"}))
//       expect(generator.next().done).toBeTruthy();
//    })
// })