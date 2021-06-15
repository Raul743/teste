/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import '@testing-library/jest-dom';
import '@testing-library/react-hooks';

// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';

dotenv.config({ path: './.env.test' });
jest.setTimeout(30000);
