/* eslint-disable prettier/prettier */
/* eslint-disable arrow-parens */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Container, Content, Background } from './styles';
import googleLogo from '../../assets/google.svg';
import Slider from '../../components/Slideshow';
import Input from '../../components/Input/index';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [borderError, setBorderError] = useState(false);

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef?.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Este campo não pode ser vazio.'),
          email: Yup.string()
            .required('Este campo não pode ser vazio.')
            .email('Insira um e-mail válido'),
          password: Yup.string().min(
            6,
            'A senha não pode ter menos de 6 caracteres',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        setBorderError(false);
        alert('Congrats! Now you can login on application.');
        history.push('/');
      } catch (error) {
        // eslint-disable-next-line no-console
        setBorderError(true);

        const errors = getValidationErrors(error);

        formRef?.current?.setErrors(errors);
      }
    },
    [history],
  );

  return (
    <Container>
      <Background>
        <Slider />
      </Background>
      <Content>
        <h1>Invision</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Getting Started</h1>

          <Input
            style={
              borderError
                ? {
                  borderColor: '#f00',
                }
                : {
                  borderColor: '#707070',
                }
            }
            name="name"
            placeholder="Full Name"
          />

          <Input
            style={
              borderError
                ? {
                  borderColor: '#f00',
                }
                : {
                  borderColor: '#707070',
                }
            }
            name="email"
            placeholder="Users name or Email"
          />

          <Input
            style={
              borderError
                ? {
                  borderColor: '#f00',
                }
                : {
                  borderColor: '#707070',
                }
            }
            name="password"
            type="password"
            placeholder="Password"
          />

          <a href="forgot">Forgot Password?</a>

          <button type="submit">Sign up</button>
        </Form>

        <div>
          <hr />
          <h3>Or</h3>
          <hr />
        </div>

        <button type="button">
          <img src={googleLogo} alt="" />
          <h3>Sign up with Google</h3>
        </button>

        <h3>
          By signing up, you agree to
          {' '}
          <strong>Invision</strong>
          <br />
          <a href="terms">Terms of Condition</a>
          {' '}
          and
          {' '}
          <a href="privacy">Privacy Policy</a>
        </h3>
        <h3>
          Already on
          {' '}
          <strong>Invision</strong>
          ?
          <Link to="/">
            <a href="signin"> Log in</a>
          </Link>
        </h3>
      </Content>
    </Container>
  );
};

export default SignUp;
