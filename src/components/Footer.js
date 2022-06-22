import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <div className="Footer">
        <div className="Footer__logo">
          <img src="/image/logo-dark.svg" alt="fylo logo" />
        </div>
        <div className="Footer__links">
          <div className="Footer__links_1">
            <div className="Footer__links_1__link">
              <img src="/image/icon-phone.svg" alt="phone icon" />
              <a href="tel:+1-543-123-4567">Phone: +1-543-123-4567</a>
            </div>
            <div className="Footer__links_1__link">
              <img src="/image/icon-email.svg" alt="email icon" />
              <a href="mailto:example@fylo.com">example@fylo.com</a>
            </div>
          </div>
          <div className="Footer__links_2">
            <div className="Footer__links_2__left">
              <a
                href="/"
                className="Footer__links_2__left_link"
                onClick={(e) => e.preventDefault()}
              >
                About Us
              </a>
              <a
                href="/"
                className="Footer__links_2__left_link"
                onClick={(e) => e.preventDefault()}
              >
                Jobs
              </a>
              <a
                href="/"
                className="Footer__links_2__left_link"
                onClick={(e) => e.preventDefault()}
              >
                Press
              </a>
              <a
                href="/"
                className="Footer__links_2__left_link"
                onClick={(e) => e.preventDefault()}
              >
                Blog
              </a>
            </div>
            <div className="Footer__links_2__right">
              <a
                href="/"
                className="Footer__links_2__right_link"
                onClick={(e) => e.preventDefault()}
              >
                Contact Us
              </a>
              <a
                href="/"
                className="Footer__links_2__right_link"
                onClick={(e) => e.preventDefault()}
              >
                Terms
              </a>
              <a
                href="/"
                className="Footer__links_2__right_link"
                onClick={(e) => e.preventDefault()}
              >
                Privacy
              </a>
            </div>
          </div>
          <div className="Footer__links_social">
            <a
              href="/"
              className="Footer__links_social__link"
              onClick={(e) => e.preventDefault()}
            >
              <img src="/image/facebook.svg" alt="facebook icon" />
            </a>
            <a
              href="/"
              className="Footer__links_social__link"
              onClick={(e) => e.preventDefault()}
            >
              <img src="/image/twitter.svg" alt="twitter icon" />
            </a>
            <a
              href="/"
              className="Footer__links_social__link"
              onClick={(e) => e.preventDefault()}
            >
              <img src="/image/instagram.svg" alt="instagram icon" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  padding: 108px 0 71px;
  background-color: var(--blue-dark);
  @media (max-width: 548px) {
    padding: 94px 12% 68px;
  }
  .Footer {
    width: min(1340px, 100%);
    margin: 0 2.084%;
    padding: 0 50px;
    @media (max-width: 548px) {
      margin: 0;
      padding: 0;
      flex-direction: column;
      width: 100%;
    }
    &__logo {
      width: min(176px, 100%);
      padding-bottom: 20.05px;
      @media (max-width: 548px) {
        width: min(255px, 100%);
        padding-bottom: 56.73px;
      }
      & > img {
        width: 100%;
        height: auto;
      }
    }
    &__links {
      width: min(1096px, 100%);
      display: flex;
      gap: 174px;
      flex-wrap: wrap;
      @media (max-width: 548px) {
        gap: 65px;
        flex-direction: column;
      }
      &_1 {
        padding-right: 37px;
        &__link {
          display: flex;
          align-items: center;
          gap: 18px;
          padding-bottom: 16px;
          @media (max-width: 548px) {
            padding-bottom: 26px;
          }
          & > a {
            color: var(--white);
            text-decoration: none;
          }
        }
      }
      &_2 {
        display: flex;
        gap: 200px;
        @media (max-width: 1400px) {
          gap: 15%;
        }
        @media (max-width: 548px) {
          flex-direction: column;
          gap: 68px;
        }
        &__left,
        &__right {
          display: flex;
          flex-direction: column;
          gap: 12px;
          @media (max-width: 548px) {
            gap: 22px;
          }
          &_link {
            font-weight: 400;
            font-size: 17px;
            line-height: 150%;
            letter-spacing: -0.033em;
            color: var(--white);
            text-decoration: none;
          }
        }
      }
      &_social {
        display: flex;
        gap: 13px;
        padding-top: 6px;
        @media (max-width: 548px) {
          align-items: center;
          justify-content: center;
          width: 100%;
        }
      }
    }
  }
  /* @media (max-width:548px){} */
`;
