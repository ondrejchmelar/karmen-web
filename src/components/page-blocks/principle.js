import React from "react"
import { FormattedMessage } from "react-intl"

import signupImg from "assets/img/principle-signup.png"
import pillImg from "assets/img/principle-pill.png"
import cloudImg from "assets/img/karmen-cloud.png"

const PrincipleBlock = props => {
  return (
    <section {...props}>
      <h1 className="page-block-headline sitenav__anchorpush">
        <span className="sitenav__anchor" id="principle"></span>
        <FormattedMessage
          id="principle-block.headline"
          defaultMessage="How it works?"
        />
      </h1>
      <div className="principle">
        <div className="principle__box principle-box">
          <div className="principle-box__img">
            <img src={signupImg} alt="Karmen Signup" />
          </div>
          <div className="principle-box__content">
            <h3 className="principle-box__nr">01</h3>
            <h2 className="principle-box__title">
              <FormattedMessage
                id="principle-block.signup"
                defaultMessage="Sign-up"
              />
            </h2>
            <h3 className="principle-box__sub">
              <FormattedMessage
                id="principle-block.signup_note"
                defaultMessage="Sign-up on {signupLink}"
                values={{
                  signupLink: (
                    <a href="https://cloud.karmen.tech/register">
                      cloud.karmen.tech/register
                    </a>
                  ),
                }}
              />
            </h3>
          </div>
        </div>
        <div className="principle__box principle-box">
          <div className="principle-box__img">
            <img src={pillImg} alt="Karmen Pill" />
          </div>
          <div className="principle-box__content">
            <h3 className="principle-box__nr">02</h3>
            <h2 className="principle-box__title">
              <FormattedMessage
                id="principle-block.connect"
                defaultMessage="Connect Pill to your printer"
              />
            </h2>
            <h3 className="principle-box__sub">
              <FormattedMessage
                id="principle-block.connect_note"
                defaultMessage="Use printer USB port"
              />
            </h3>
          </div>
        </div>
        <div className="principle__box principle-box principle-box--cutoff">
          <div className="principle-box__img">
            <img src={cloudImg} alt="Karmen cloud" />
          </div>
          <div className="principle-box__content">
            <h3 className="principle-box__nr">03</h3>
            <h2 className="principle-box__title">
              <FormattedMessage
                id="principle-block.add_printer"
                defaultMessage="Add your printer to Karmen"
              />
            </h2>
            <h3 className="principle-box__sub">
              <FormattedMessage
                id="principle-block.add_printer_note"
                defaultMessage="See {addLink}"
                values={{
                  addLink: (
                    <a href="https://cloud.karmen.tech">cloud.karmen.tech</a>
                  ),
                }}
              />
            </h3>
          </div>
        </div>
        <div className="principle__box principle-box principle-box--emphasized">
          <div className="principle-box__img"></div>
          <div className="principle-box__content">
            <h3 className="principle-box__nr">04</h3>
            <h2 className="principle-box__title">
              <FormattedMessage
                id="principle-block.all_done"
                defaultMessage="All done!"
              />
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipleBlock