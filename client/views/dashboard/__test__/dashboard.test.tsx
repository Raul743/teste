import { render } from '@test-suite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

import Dashboard from '..';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    asPath: '/dashboard/client',
    push: jest.fn(),
  })),
}));

describe('Test Dashboard component', () => {
  it('should handle navigate and change the background of button', () => {
    const success = 'makeStyles-success-1';
    const greyColor = 'makeStyles-grey-2';

    const push = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({ push, asPath: '/dashboard/client' }));

    const { getByText, getByTestId } = render(<Dashboard />);

    const elemText = getByText('Click to navigate to routes');
    expect(elemText).toBeInTheDocument();

    const fakeBtnclient = getByTestId('btnclient');
    expect(fakeBtnclient.textContent).toBe('client');

    const fakeBtnuser = getByTestId('btnuser');
    expect(fakeBtnuser.textContent).toBe('user');

    expect(fakeBtnclient).toHaveClass(success);

    expect(fakeBtnuser).toHaveClass(greyColor);
    fireEvent.click(fakeBtnclient);

    expect(push).toHaveBeenCalledWith('client');

    expect(fakeBtnclient.classList.contains(greyColor)).toBeFalsy();
    expect(fakeBtnclient).toHaveClass(success);

    expect(fakeBtnuser.classList.contains(success)).toBeFalsy();
    expect(fakeBtnuser).toHaveClass(greyColor);
  });
});
