import { all } from 'redux-saga/effects'
import root from '../../src/sagas';
import photoSagas from '../../src/sagas/photo';


describe('root sagas', () => {
  it('render root sagas', () => {
    const generator = root();
    expect(generator.next().value).toEqual(all([
      photoSagas()
    ]));
  })
})
