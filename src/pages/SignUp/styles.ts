import styled from 'styled-components';

const background = '#FFFFFF';
const gray = '#00000029';
const green = '#a9c5ba';
const darkGray = '#707070';
const black = '#000000';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: row;
  align-items: stretch;

  @media screen and (max-width: 720px) {
    place-content: center;
    width: 100%;
    height: 100vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 960px;
  min-width: 720px;

  background-color: ${background};

  h1 {
    //Invision Text "logo"
    align-self: flex-end;
    color: ${black};
    margin-right: 60px;
  }

  h3 {
    //New Invision Text Normal
    font-family: 'Mulish', sans-serif;
    font-weight: normal;
    strong {
      // New Invision Text Bold
      font-weight: bold;
      color: ${darkGray};
    }

    & + h3 {
      margin-top: 10px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 80px 0px 10px 0px;
    width: 340px;
    text-align: center;

    h1 {
      // Welcome text
      margin-bottom: 48px;
      color: ${darkGray};
      font-weight: normal;
    }

    input::placeholder {
      position: fixed;
      top: 0;
      left: 0;
      font-size: 12px;
    }

    input {
      border-bottom: 2px solid ${darkGray};
      border-style: hidden;
      border-bottom-style: solid;
      padding: 16px;
      width: 100%;
      color: ${black};

      & + input {
        margin-top: 8px;
      }
    }

    a {
      //Forgot Password Link
      align-self: flex-end;
      padding: 12px 0;
      color: ${darkGray};
      text-decoration: none;
    }

    button {
      //SignIn Button
      background: ${darkGray};
      color: ${background};
      align-items: center;
      height: 56px;
      border-radius: 48px;
      border: 0;
      margin: 30px 0px 40px 0px;
      width: 175px;
      height: 45px;
      font-weight: bold;
      align-self: center;
      font-family: 'Mulish', sans-serif;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
      padding: 0 20px;
    }

    hr {
      width: 150px;
      height: 0px;
      border: 0.1px solid ${darkGray};
      opacity: 0.5;
    }
  }

  button {
    //SignIn Google Button
    display: flex;
    background: ${background};
    color: ${black};
    border-radius: 100px;
    border: 0;
    place-content: center;
    margin: 40px 0px;
    width: 263px;
    height: 45px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    box-shadow: 0px 3px 6px ${gray};
    opacity: 1;

    img {
      width: 30px;
      height: 30px;
      align-self: center;
    }

    h3 {
      align-self: center;
      margin-left: 10px;
    }
  }

  a {
    //Create Account Link
    text-decoration: underline;
    color: ${green};
  }
  @media screen and (max-width: 720px) {
    z-index: 1;
    place-content: center;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const Background = styled.div`
  display: flex;
  background-color: ${green};
  color: ${background};

  width: 100%;

  max-width: 960px;

  place-content: center;

  align-items: center;

  padding-top: 48px;

  div {
    height: 555px;
    width: 705px;
    margin-bottom: 50px;
  }

  h1 {
    font-weight: normal;
    margin-bottom: 20px;
  }

  h2 {
    font-weight: normal;
  }

  @media screen and (max-width: 720px) {
    font-size: 50%;
    background-color: ${background};
    background-image: none;
    z-index: -1;
    width: 0;
  }
`;
