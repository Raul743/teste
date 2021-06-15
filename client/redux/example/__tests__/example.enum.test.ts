import ExampleActionTypes from '../example.enum';

describe('testing example enums', () => {
  it(ExampleActionTypes.EXAMPLE_START, () => {
    expect(ExampleActionTypes.EXAMPLE_START).toBe('EXAMPLE_START');
  });

  it(ExampleActionTypes.EXAMPLE_SUCCESS, () => {
    expect(ExampleActionTypes.EXAMPLE_SUCCESS).toBe('EXAMPLE_SUCCESS');
  });

  it(ExampleActionTypes.EXAMPLE_FAILURE, () => {
    expect(ExampleActionTypes.EXAMPLE_FAILURE).toBe('EXAMPLE_FAILURE');
  });
});
