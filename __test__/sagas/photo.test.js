import { put, takeEvery } from 'redux-saga/effects';
import { Creators as Actions, Types } from '../../src/actions';
import photoSagas from '../../src/sagas/photo';
import getPhoto from '../../src/sagas/photo';

describe('photoSagas', () => {
  // it('should dispatch action "GET_PHOTO_REQUEST" ', () => {
  //   const generator = photoSagas();
  //   expect(generator.next().value).toEqual(takeEvery(Types.GET_PHOTO_REQUEST, getPhoto));
  //   expect(generator.next().done).toBeTruthy();
  // })

  // it('should dispatch action "GET_PHOTO_SUCCESS" with result from fetch News API', () => {
  //   const mockResponse = {"status": 200};
  //   const generator = getPhoto();
  //   generator.next();
  //   expect(generator.next(mockResponse).value).toEqual(put({type:"GET_PHOTO_SUCCESS"}))
  //   expect(generator.next().done).toBeTruthy();
  // })
})
