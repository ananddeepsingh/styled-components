import styled from 'styled-components';
import Header from './Header.js';

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0;
  padding: 0 16px;
  box-sizing: border-box;

  p{
    margin: 0 0 20px 0;
    text-align: justify;
  }
`;


function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
    </>
  )
}

export { PageLayout };
