import { put, takeEvery, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { Creators as Actions, Types } from '../../src/actions';
import photoSagas from '../../src/sagas/photo';
import getPhoto from '../../src/sagas/photo';
import * as API from '../../src/services/api';

const getPhotoAction = Actions.getPhotoRequest();

describe('photoSagas', () => {
  const generator = cloneableGenerator(getPhoto)();
  expect(generator.next().value).toEqual(takeEvery(Types.GET_PHOTO_REQUEST, getPhoto));
  expect(generator.next().value).toEqual(call(API.getPhotos));

  test('get Photo success', () => {
    const clone = generator.clone();
    expect(clone.next(true).value).toEqual(put(Actions.getPhotoSuccess()));
    expect(clone.next().done).toEqual(true);
  });

  test('get Photo Failure', () => {
    const clone = generator.clone();
    expect(clone.next(false).value).toEqual(put(Actions.getPhotoFailure()));
    expect(clone.next().done).toEqual(true);
  });
})
