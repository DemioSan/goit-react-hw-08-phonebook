import styled from 'styled-components';

export const AppDiv = styled('div')`
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #ffffff;
  background-image: linear-gradient(45deg, #ff9d7f, #ffdab9);

  padding-bottom: 50px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 49px;
    border-bottom: 1px #ffffff solid;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(206, 90, 103);
    width: 100%;
    padding: 20px;

    .header-user-menu {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      margin-right: 30px;
      gap: 30px;

      button {
        margin: auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        font-weight: bold;
      }
    }

    .home-navigation-menu {
      display: flex;
      gap: 30px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;

    &.active {
      background-image: linear-gradient(45deg, #ffebee, #ffccbc);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      animation: pulse 1s infinite alternate;
    }
  }

  @keyframes pulse {
    to {
      transform: scale(1.1);
    }
  }

  a:hover,
  :focus {
    text-decoration: underline;
    color: #951826;
  }

  .login-form {
    gap: 40px;
    .login-form-section {
      display: flex;
      flex-direction: column;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0;
    margin: 0;
    margin-top: 50px;
  }

  li {
    border: 1px solid #ffffff;
    border-radius: 8px;
    padding: 10px;
    text-align: center;

    background-color: #cbad96;
    color: #ffffff;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 10px inset;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    font-size: 30px;
    border-radius: 15px;
    padding-left: 10px;
  }

  button {
    width: 100%;
    min-width: 120px;
    height: 60px;
    display: block;
    font-size: 18px;
    text-transform: uppercase;
    border: 2px solid #ffffff;
    border-radius: 8px;
    background-color: rgb(206, 90, 103);
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 10px inset;

    &:hover {
      background-color: #951826;
      color: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.5) -5px -5px 10px inset;
    }
  }
`;
