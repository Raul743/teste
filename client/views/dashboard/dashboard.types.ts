import { FC } from 'react';

export type DashboardViewItem = {
  menuItemName: string;
  view: FC;
  pageTitle: string;
  pageTarget: string;
};

export enum Routes {
  client = 'client',
  user = 'user',
  processos = 'processos',
  lojas = 'lojas',
}

export enum UrlAsPath {
  client = '/dashboard/client',
  user = '/dashboard/user',
  processos = '/dashboard/processos',
  lojas = '/dashboard/lojas',
}
