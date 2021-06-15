import useTranslation from 'next-translate/useTranslation';
import SignIn from '../client/components/Auth/Login';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <SignIn />
    </div>
  );
}
