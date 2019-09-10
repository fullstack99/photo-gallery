import { all } from 'redux-saga/effects'

// Sagas
import photoSagas from './photo'

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    photoSagas()
  ])
}
