import { useI18n, I18nProps } from 'next-rosetta';
import { MyLocale } from '../i18n';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const HeaderStyled = styled(Header)`
  background-color: yellow;
`;

export default function Home() {
  const { locale, locales, route } = useRouter();
  const { t } = useI18n<MyLocale>();

  return (
    <div>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('metadescription')} />
      </Head>
      <main>
        <Layout>
          <HeaderStyled>
            <h1>{t('title')}</h1>
          </HeaderStyled>
          <Content>
            <p>{t('subtitle')}</p>
            <p>{t('welcome', { name: 'John' })}</p>
            <ul>
              {locales?.map((loc) => (
                <li key={loc}>
                  <Link href={route} locale={loc}>
                    <a className={loc === locale ? 'is-active' : ''}>{loc}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Content>
          <Footer>
            <p>Bye</p>
          </Footer>
        </Layout>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (
  context
) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};
