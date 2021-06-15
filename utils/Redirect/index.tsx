import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

type RedirectProps = {
  to: string;
};

export const Redirect: FC<RedirectProps> = ({ to }) => {
  const router = useRouter();
  useEffect(() => {
    router.push(to);
  }, [to]);

  return null;
};
