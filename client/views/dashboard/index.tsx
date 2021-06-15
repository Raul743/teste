import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import useStyles from './dashboard.styles';
import { DashboardViewItem, Routes, UrlAsPath } from './dashboard.types';
import views from './views/index';

const Dashboard: FC = () => {
  const router = useRouter();
  const classes = useStyles();
  const dashboard = router.asPath;
  const [selectedViewItem, setSelectedViewItem] = useState<DashboardViewItem | undefined>(
    views.find(view => view.pageTarget === dashboard)
  );

  useEffect(() => {
    setSelectedViewItem(views.find(view => view.pageTarget === dashboard));
  }, [dashboard]);

  // #region Test propose
  const handleRoute = (url: string) => {
    router.push(url);
  };

  const activeRoute = (target: string) => {
    if (!selectedViewItem) return {};
    const { pageTarget } = selectedViewItem;
    return !!(pageTarget === target && pageTarget === dashboard);
  };

  // #endregion
  return (
    <div>
      <h1>Click to navigate to routes</h1>
      <button
        data-testid="btnclient"
        className={clsx({
          [classes.success]: activeRoute(UrlAsPath.client),
          [classes.grey]: !activeRoute(UrlAsPath.client),
        })}
        type="button"
        onClick={() => handleRoute(Routes.client)}
      >
        client
      </button>
      <button
        data-testid="btnuser"
        type="button"
        className={clsx({
          [classes.success]: activeRoute(UrlAsPath.user),
          [classes.grey]: !activeRoute(UrlAsPath.user),
        })}
        onClick={() => handleRoute(Routes.user)}
      >
        user
      </button>
      <button
        type="button"
        className={clsx({
          [classes.success]: activeRoute(UrlAsPath.processos),
          [classes.grey]: !activeRoute(UrlAsPath.processos),
        })}
        onClick={() => handleRoute(Routes.processos)}
      >
        processos
      </button>
      <button
        type="button"
        className={clsx({
          [classes.success]: activeRoute(UrlAsPath.lojas),
          [classes.grey]: !activeRoute(UrlAsPath.lojas),
        })}
        onClick={() => handleRoute(Routes.lojas)}
      >
        lojas
      </button>
    </div>
  );
};

export default Dashboard;
