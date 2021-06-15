import { mockStoreState } from '@test-suite';

import { INITIAL_STATE as state } from '../example.reducer';
import * as selectors from '../example.selectors';
import { ExampleEnum } from '../example.types';

describe('testing example selectors', () => {
  it(selectors.getExampleData.name, () => {
    const data = { name: 'met-care' };
    const mockState = mockStoreState({
      [ExampleEnum.Example]: { ...state, [ExampleEnum.Data]: data },
    });

    expect(selectors.getExampleData(mockState)).toEqual(data);
  });
});
