import React from "react";
import styled from "styled-components";

export default function StayProductive() {
  return (
    <Container>
      <div className="stayProductive">
        <div className="stayProductive_left">
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <button>
            See how Fylo works
            <img src="/image/icon-arrow.svg" alt="right arrow" />
          </button>
          <div className="stayProductive_left__testimonial">
            <img
              src="/image/icon-quotes.svg"
              alt="quote illustration"
              className="stayProductive_left__testimonial_img"
            />
            <p className="stayProductive_left__testimonial_thought">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="stayProductive_left__testimonial_profile">
              <div className="stayProductive_left__testimonial_profile__image">
                <img
                  src="/image/avatar-testimonial.jpg"
                  alt="Kyle Burton avatar"
                />
              </div>
              <div className="stayProductive_left__testimonial_profile__details">
                <h3>Kyle Burton</h3>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="stayProductive_right">
          <img
            src="/image/illustration-2.svg"
            alt="be productive illustration"
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 143.01px;
  background-color: var(--gray-light);
  background-image: url("/image/bg-productive.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top left;
  @media (max-width: 548px) {
    margin-top: 0;
  }
  .stayProductive {
    width: min(1381px, 100%);
    margin: 0 auto;
    padding: 178px 50px 107px;
    display: flex;
    align-items: center;
    gap: 73px;
    @media (max-width: 548px) {
      padding: 160px 40px 118px;
      flex-direction: column-reverse;
      gap: 130px;
    }
    &_left {
      width: min(666px, 100%);
      & > h2 {
        font-weight: 700;
        font-size: 41px;
        line-height: 110%;
        font-family: var(--font-secondary);
        padding-bottom: 28px;
        @media (max-width: 548px) {
          font-size: 18px;
          text-align: center;
          letter-spacing: 0.01em;
          padding-bottom: 26px;
        }
      }
      & > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--purple);
        padding: 8px 0;
        @media (max-width: 548px) {
          padding: 12px 0 13px;
          font-size: 15px;
        }
      }
      & > button {
        border: none;
        outline: none;
        background-color: transparent;
        padding: 7px 0 3px;
        color: var(--cyan);
        border-bottom: 1px solid var(--cyan);
        display: flex;
        align-items: center;
        gap: 6px;

        font-weight: 400;
        font-size: 16px;
        line-height: 150%;

        &:hover {
          opacity: 0.7;
        }

        @media (max-width: 548px) {
          border-bottom: 2px solid var(--cyan);
          padding-top: 39px;
          margin: 0 auto;
        }
      }
      &__testimonial {
        width: min(356px, 100%);
        background-color: var(--white);
        box-shadow: var(--box-shadow);
        border-radius: 6px;
        margin-top: 45px;
        padding: 25px 39px 26px 33px;
        @media (max-width: 548px) {
          width: 100%;
          margin-top: 57px;
        }
        &_img {
          width: 13px;
          height: auto;
        }
        &_thought {
          font-weight: 400;
          font-size: 13px;
          line-height: 177%;
          letter-spacing: 0.037em;
          padding-top: 12px;
        }
        &_profile {
          padding-top: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          &__image {
            width: 32px;
            & > img {
              width: 100%;
              height: auto;
              border-radius: 50%;
            }
          }
          &__details {
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 2px;
            text-decoration: left;
            & > h3 {
              font-weight: 700;
              font-size: 12px;
              line-height: 14px;
              font-family: var(--font-secondary);
            }
            & > p {
              font-weight: 700;
              font-size: 8px;
              line-height: 11px;
              letter-spacing: 0.02em;
              color: var(--purple);
            }
          }
        }
      }
    }
    &_right {
      width: min(541.87px, 100%);
      & > img {
        width: 100%;
        height: auto;
        object-position: center;
      }
    }
  }
`;
