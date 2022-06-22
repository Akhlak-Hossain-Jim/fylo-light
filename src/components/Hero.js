import React from "react";
import styled from "styled-components";

export default function Hero() {
  return (
    <Container>
      <div className="hero_left">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form className="hero_left__form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email..." required />
          <span className="input_error">Please check your email</span>
          <button type="submit">Get Started</button>
        </form>
      </div>
      <div className="hero_right">
        <img src="/image/illustration-1.svg" alt="intro illustration" />
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 21px 50px;
  width: min(1380px, 100%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 47px;
  @media (max-width: 548px) {
    padding: 105px 42px;
    flex-direction: column-reverse;
    gap: 54px;
  }
  .hero {
    &_left {
      width: min(593px, 100%);
      @media (max-width: 548px) {
        text-align: center;
      }
      & > h1 {
        font-family: var(--font-secondary);
        font-weight: 700;
        font-size: 41px;
        line-height: 59px;
        letter-spacing: -0.01em;
        @media (max-width: 548px) {
          font-family: var(--font-primary);
          font-size: 20px;
          line-height: 34px;
          letter-spacing: 0.01em;
        }
      }
      & > p {
        padding-top: 16px;
        font-weight: 400;
        font-size: 18px;
        line-height: 133%;
        color: var(--purple);
        @media (max-width: 548px) {
          font-size: 16px;
          padding-top: 35px;
        }
      }
      &__form {
        padding-top: 25px;
        display: flex;
        position: relative;
        gap: 16px;
        @media (max-width: 548px) {
          padding-top: 47px;
          gap: 24px;
          flex-direction: column;
        }
        & > input {
          width: min(320px, 100%);
          border: 1px solid var(--purple);
          color: var(--blue-dark);
          padding: 13px 21px 8px;
          border-radius: 2px;
          outline: none;

          font-weight: 400;
          font-size: 14px;
          line-height: 171%;
          letter-spacing: 0.03em;

          &::placeholder {
            color: var(--gray);
          }
          @media (max-width: 548px) {
            width: 100%;
            letter-spacing: 0;
          }
          & + .input_error {
            display: none;
          }
          &:focus:invalid {
            & + .input_error {
              position: absolute;
              bottom: -22px;
              left: 0;
              display: inline-block;
              font-weight: 400;
              font-size: 13px;
              line-height: 18px;
              letter-spacing: -0.01em;
              color: var(--red);
              @media (max-width: 548px) {
                position: unset;
                bottom: 0;
              }
            }
          }
        }
        & > button {
          width: min(200px, 100%);
          border-radius: 6px;
          background-color: var(--blue);
          color: var(--white);
          border: none;
          padding: 11px 24px 10px;
          text-align: center;
          outline: none;

          font-weight: 700;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: -0.02em;

          &:hover {
            opacity: 0.7;
          }
          @media (max-width: 548px) {
            width: 100%;
          }
        }
      }
    }
    &_right {
      width: min(639.93px, 100%);
      & > img {
        width: 100%;
        height: auto;
        object-position: center;
      }
    }
  }
`;
