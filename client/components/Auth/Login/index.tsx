import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import { Row, Col, CardBody, Card, Container } from 'reactstrap';
import { Redirect } from '../../../../utils/Redirect';
import { Input } from '../../index';
import logo from '../../../../assets/images/logo.svg';
import profile from '../../../../assets/images/profile-img.png';
import { validate, initialValues } from './schemaValidate';

export default function Login() {
  const [session, loading] = useSession();
  const { pathname } = useRouter();

  console.log('validate=>', validate);

  useEffect(() => {
    console.log('session=>', session);
    console.log('pathname=>', pathname);
  }, []);

  //if (session && pathname === '/') {
  //  return <Redirect to="/dashboard/pessoa" />;
  //}

  if (loading) {
    <h3>Loading...</h3>;
  }

  const handleSubmit = (data: object) => {
    console.log('DataSubmited=>', data);
  };

  const AuthLogo = () => (
    <div>
      <a href="/" className="auth-logo-light">
        <div className="avatar-md profile-user-wid mb-4">
          <span className="avatar-title rounded-circle bg-light">
            <img src={logo} alt="" className="rounded-circle" height="34" />
          </span>
        </div>
      </a>
    </div>
  );

  const HeaderLogin = () => (
    <div className="bg-primary bg-soft">
      <Row>
        <Col xs={7}>
          <div className="text-primary p-4">
            <h5 className="text-primary">Bem-vindo a SNIR!</h5>
            <p>Entra para continuares na Snir Template</p>
          </div>
        </Col>
        <Col className="col-5 align-self-end">
          <img src={profile} alt="" className="img-fluid" />
        </Col>
      </Row>
    </div>
  );

  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <a href="/" className="text-dark">
          <i className="fas fa-home h2" />
        </a>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <HeaderLogin />
                <CardBody className="pt-0">
                  <AuthLogo />
                  <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validate}
                  >
                    {formik => (
                      <Form>
                        <Col xl="12">
                          <Input
                            type="text"
                            name="email"
                            label="Email"
                            placeholder="Enter email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />
                        </Col>
                        <Col xl="12">
                          <Input
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Enter password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                          />
                        </Col>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customControlInline"
                          />
                          <label className="form-check-label" htmlFor="customControlInline">
                            Remember me
                          </label>
                        </div>

                        <div className="mt-3 d-grid">
                          <button
                            className="btn btn-primary btn-block waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        </div>

                        <div className="mt-4 text-center">
                          <h5 className="font-size-14 mb-3">Sign in with</h5>

                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Link href="/">
                                <a
                                  className="social-list-item bg-primary text-white border-primary"
                                  onClick={() => {
                                    signIn('facebook', { callbackUrl: '/admin/pessoa' });
                                  }}
                                >
                                  <i className="mdi mdi-facebook" />
                                </a>
                              </Link>
                            </li>

                            <li className="list-inline-item">
                              <Link href="/">
                                <a
                                  className="social-list-item bg-danger text-white border-danger"
                                  onClick={() =>
                                    signIn('google', {
                                      callbackUrl: 'dashboard/pessoa',
                                    })
                                  }
                                >
                                  <i className="mdi mdi-google" />
                                </a>
                              </Link>
                            </li>

                            <li className="list-inline-item">
                              <Link href="/">
                                <a
                                  className="social-list-item bg-info text-white border-info"
                                  onClick={() =>
                                    signIn('twitter', {
                                      callbackUrl: '/admin/pessoa',
                                    })
                                  }
                                >
                                  <i className="mdi mdi-twitter" />
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Form>
                    )}
                  </Formik>

                  <div className="p-2"></div>
                </CardBody>
              </Card>

              <div className="mt-5 text-center">
                <p>
                  Não tem uma conta ?{' '}
                  <a href="register" className="fw-medium text-primary">
                    {' '}
                    Cadastre-se agora{' '}
                  </a>{' '}
                </p>
                <p>
                  © {new Date().getFullYear()} SNIR Template. Criado{' '}
                  <i className="mdi mdi-heart text-danger" /> Pela Snir-Devesenvolvimento
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
