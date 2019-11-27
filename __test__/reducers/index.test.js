import PhotoReducer from '../../src/reducers'

test('rootReducer contains all child reducers', () => {
  const reducerNames = [
    PhotoReducer
  ];

  reducerNames.forEach((reducerName) => {
    const reducer = reducerName;
    expect(reducer).toBeDefined();
    expect(typeof reducer).toBe('object');
  });
});
