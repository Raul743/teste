/**
 * @jest-environment jsdom
 */

import ExampleComponent from '@components/example';
import { render } from '@test-suite';

describe('ExampleComponent', () => {
  test('shows proper information', () => {
    const { getByText } = render(<ExampleComponent />);
    const el = getByText('this is an example');

    expect(el).toBeInTheDocument();
  });
});
