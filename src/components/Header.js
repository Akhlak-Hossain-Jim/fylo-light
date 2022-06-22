import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div className="header_logo">
        <img src="/image/logo.svg" alt="fylo logo" />
      </div>
      <nav className="header_nav">
        <a
          href="/"
          className="header_nav__link"
          onClick={(e) => e.preventDefault()}
        >
          Features
        </a>
        <a
          href="/"
          className="header_nav__link"
          onClick={(e) => e.preventDefault()}
        >
          Team
        </a>
        <a
          href="/"
          className="header_nav__link"
          onClick={(e) => e.preventDefault()}
        >
          Sign In
        </a>
      </nav>
    </Container>
  );
}

const Container = styled.header`
  padding: 65px 5.556%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  @media (max-width: 548px) {
    padding: 7%;
  }
  @media (max-width: 350px) {
    flex-direction: column;
    justify-content: center;
  }
  .header {
    &_logo {
      width: min(166px, 100%);
      & > img {
        width: 100%;
        height: auto;
      }
    }
    &_nav {
      display: flex;
      align-items: center;
      gap: 56px;
      @media (max-width: 548px) {
        gap: 24px;
        padding-bottom: 10px;
      }
      &__link {
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: -0.025em;
        font-family: var(--font-secondary);
        width: max-content;
        text-decoration: none;
        color: var(--blue-dark);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
