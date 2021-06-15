import { cleanup, render, screen } from '@testing-library/react';
import { I18nDictionary, TranslationQuery } from 'next-translate';
import I18nProvider from 'next-translate/I18nProvider';
import useTranslation from 'next-translate/useTranslation';

export interface TranslateWithKeyAndQueryProps {
  i18nKey: string;
  query?: TranslationQuery | null | undefined;
  namespace?: string;
}

export interface TranslateWithProviderProps {
  i18nKey: string;
  query?: TranslationQuery | null | undefined;
  namespaces?: Record<string, I18nDictionary>;
}

const dictionary = {
  hello: 'Hello',
  greetings: {
    pt: 'Olá',
    es: 'Hola',
    fr: 'Salut',
  },
  countries: {
    ao: {
      capital: 'Luanda',
    },
    pt: {
      capital: 'Lisbon',
    },
    br: {
      capital: 'Brasília',
    },
  },
  notifications: {
    '0': 'You have no notifications',
    one: 'You have {{count}} notification',
    other: 'You have {{count}} notifications',
    '15': 'You have 15+ notifications',
  },
};

const TranslateWithKeyAndQuery = ({ i18nKey, query }: TranslateWithKeyAndQueryProps) => {
  const { t } = useTranslation();
  return <> {t(i18nKey, query)} </>;
};

const TranslateWithProvider = ({
  i18nKey,
  query = {},
  namespaces = {},
}: TranslateWithProviderProps) => (
  <I18nProvider lang="en" namespaces={namespaces} config={{ logger: () => {} }}>
    <TranslateWithKeyAndQuery i18nKey={i18nKey} query={query} />
  </I18nProvider>
);

describe('Test Next Translation package', () => {
  afterEach(cleanup);

  describe('With wrong translations', () => {
    afterEach(cleanup);

    it('should return the key as fallback using the wrong translation', () => {
      render(<TranslateWithProvider namespaces={{ ns: dictionary }} i18nKey="ns:hellos" />);
      expect(screen.getByText(/ns:hellos/i)).toBeInTheDocument();
    });

    it('should return the key as fallback using the wrong nested translation', () => {
      render(
        <TranslateWithProvider namespaces={{ ns: dictionary }} i18nKey="ns:countries.hr.capital" />
      );
      expect(screen.getByText(/ns:countries.hr.capital/i)).toBeInTheDocument();
    });
  });

  describe('PROVIDER', () => {
    afterEach(cleanup);

    it('should return the key as fallback WITH PROVIDER', () => {
      render(
        <I18nProvider lang="en" namespaces={{}} config={{ logger: () => {} }}>
          <TranslateWithKeyAndQuery i18nKey="ns:with-provider" />
        </I18nProvider>
      );
      expect(screen.getByText(/ns:with-provider/i)).toBeInTheDocument();
    });

    it('should return the key as fallback WITHOUT PROVIDER', () => {
      // Wrap inside the provider with logger
      // so it doesn't return a console.warn
      render(
        <I18nProvider lang="en" config={{ logger: () => {} }}>
          <TranslateWithKeyAndQuery i18nKey="ns:without-provider" />
        </I18nProvider>
      );

      expect(screen.getByText(/ns:without-provider/i)).toBeInTheDocument();
    });
  });

  describe('With default namespaces', () => {
    afterEach(cleanup);

    it('should return the angolan capital', () => {
      render(
        <TranslateWithProvider i18nKey="ns:countries.ao.capital" namespaces={{ ns: dictionary }} />
      );
      expect(screen.getByText(/luanda/i)).toBeInTheDocument();
    });

    it('should return the spanish greeting', () => {
      render(<TranslateWithProvider i18nKey="ns:greetings.es" namespaces={{ ns: dictionary }} />);
      expect(screen.getByText(/hola/i)).toBeInTheDocument();
    });

    it('should return the key fallback using the wrong translation', () => {
      render(<TranslateWithProvider i18nKey="ns:greetings.us" namespaces={{ ns: dictionary }} />);
      expect(screen.getByText(/ns:greetings.us/i)).toBeInTheDocument();
    });
  });

  describe('With plural words', () => {
    afterEach(cleanup);

    it('should render notifications on count=0', () => {
      render(
        <TranslateWithProvider
          i18nKey="ns:notifications"
          namespaces={{ ns: dictionary }}
          query={{ count: 0 }}
        />
      );

      expect(screen.getByText(/You have no notifications/i)).toBeInTheDocument();
    });
    it('should render notifications on count=1', () => {
      render(
        <TranslateWithProvider
          i18nKey="ns:notifications"
          namespaces={{ ns: dictionary }}
          query={{ count: 1 }}
        />
      );
      expect(screen.getByText(/^You have 1 notification$/i)).toBeInTheDocument();
    });

    it('should render notifications on count=3', () => {
      render(
        <TranslateWithProvider
          i18nKey="ns:notifications"
          namespaces={{ ns: dictionary }}
          query={{ count: 3 }}
        />
      );
      expect(screen.getByText(/^You have 3 notifications$/i)).toBeInTheDocument();
    });

    it('should render notifications on count >= 15', () => {
      render(
        <TranslateWithProvider
          i18nKey="ns:notifications"
          namespaces={{ ns: dictionary }}
          query={{ count: 15 }}
        />
      );
      expect(screen.getByText(/^You have 15\+ notifications$/i)).toBeInTheDocument();
    });
  });
});
