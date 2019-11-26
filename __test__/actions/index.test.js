import * as actions from '../../src/actions'
// import * as types from '../../src/reducers/photo'
import * as reducer from '../../src/reducers/photo'

describe('actions', () => {

  it('should return the initial state', () => {
    expect(reducer.default(undefined, {})).toEqual({
      isLoading: false,
      error: null,
      photos: [],
      isLoaded: false,
      favoriteImages: []
    })
  })

  // it('getPhotoRequest', () => {
  //   const expectedAction = {
  //     type: GET_PHOTO_REQUEST,
  //     isLoading: true
  //   }
  //   console.log(123123, actions)
  //   console.log(456, types)
  //   expect(actions.Creators.getPhotoRequest()).toEqual(expectedAction)
  // })
})