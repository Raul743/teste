/* eslint-disable import/no-extraneous-dependencies */
import { RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

import { State } from '../redux/redux.types';

export interface Saga {
  (arg?: any): Generator<any>;
}

interface CustomRenderOptions extends Omit<RenderOptions, 'queries'> {
  state?: State;
}

export type CustomRender = (ui: ReactElement, options?: CustomRenderOptions) => RenderResult;
