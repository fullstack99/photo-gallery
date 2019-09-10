import { call, cancelled, put, takeEvery } from 'redux-saga/effects';

import { Creators as Actions, Types } from '../actions';
import * as API from '../services/api';

function* getPhoto() {
  const error = 'Something went Wrong. Please try again'
  try {
    const resp = yield call(API.getPhotos)
    if (resp.status === 200) {
      yield put(Actions.getPhotoSuccess(resp.data))
    } else {
      yield put(Actions.getPhotoFailure(error))
    }
  } catch (err) {
    yield put(Actions.getPhotoFailure(err))
  } finally {
    if (yield cancelled()) {
      console.log('Get user task cancelled.')
    }
  }
}

export default function* photoSagas() {
  yield takeEvery(Types.GET_PHOTO_REQUEST, getPhoto)
}