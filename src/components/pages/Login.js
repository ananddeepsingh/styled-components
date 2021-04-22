import { Button, Input, InputPassword, PageLayout, Spinner } from '../common';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: #000;
  border-radius: 4px;

  .alt-text{
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

function Login() {
  const [formFields, setFormFields] = useState({ username: undefined, password: undefined });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    e.persist();
    setFormFields(state => ({
      ...state,
      [e.target.name]: e.target.value
    })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    }
  }, [])

  return (
    <>
      <PageLayout>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          {loading
            ? <Spinner />
            :
            <>
              <Input
                value={formFields.username}
                type="text"
                onChange={handleInputChange}
                name="username"
                placeholder="Username"
              />
              <InputPassword
                value={formFields.password}
                name="password"
                type="password"
                onChange={handleInputChange}
              />
            </>
          }
          <Button secondary type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </Button>

          {!loading &&
            <>
              <div className="alt-text">or</div>
              <Button type="button">Register</Button>
            </>
          }
        </Form>

      </PageLayout>
    </>
  )
}

export default Login;
