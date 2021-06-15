import { DashboardViewItem } from '../dashboard.types';
import TestComponent from './test';

export default [
  {
    pageTitle: 'Lista de usuários',
    menuItemName: 'Usuario',
    view: TestComponent,
    pageTarget: '/dashboard/user',
  },
  {
    pageTitle: 'Lista de clientes',
    menuItemName: 'Cliente',
    view: TestComponent,
    pageTarget: '/dashboard/client',
  },
  {
    pageTitle: 'Lista de lojas',
    menuItemName: 'Lojas',
    view: TestComponent,
    pageTarget: '/dashboard/lojas',
  },
  {
    pageTitle: 'Processos',
    menuItemName: 'Processos',
    view: TestComponent,
    pageTarget: '/dashboard/processos',
  },
] as ReadonlyArray<DashboardViewItem>;
