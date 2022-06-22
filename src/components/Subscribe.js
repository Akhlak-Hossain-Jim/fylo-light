import React from "react";
import styled from "styled-components";

export default function Subscribe() {
  return (
    <Container>
      <div className="Subscribe">
        <div className="Subscribe_left">
          <h2>Get early access today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <form className="Subscribe_form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="email@example.com" required />
          <span className="input_error">Please check your email</span>
          <button type="submit">Get Started For Free</button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 94px 0 87px;
  background-color: var(--purple);
  @media (max-width: 548px) {
    padding: 64px 12% 103px;
  }
  .Subscribe {
    width: min(1340px, 100%);
    margin: 0 2.084%;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
    @media (max-width: 548px) {
      margin: 0;
      padding: 0;
      flex-direction: column;
      width: 100%;
    }
    &_left {
      width: min(519px, 48.056%);
      color: var(--white);
      @media (max-width: 548px) {
        width: 100%;
        text-align: center;
      }
      & > h2 {
        font-weight: 700;
        font-size: 32px;
        line-height: 120%;
        font-family: var(--font-secondary);
        @media (max-width: 548px) {
          font-size: 26px;
        }
      }
      & > p {
        font-weight: 400;
        font-size: 17px;
        line-height: 142%;
        padding-top: 20px;
      }
    }
    &_form {
      padding-top: 25px;
      display: flex;
      position: relative;
      flex-direction: column;
      gap: 16px;
      width: 44.63%;
      @media (max-width: 548px) {
        padding-top: 47px;
        gap: 24px;
        width: 100%;
      }
      & > input {
        width: 100%;
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
`;
