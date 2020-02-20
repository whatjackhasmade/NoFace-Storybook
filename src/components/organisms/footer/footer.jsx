import React from "react"
import { arrayOf, number, shape, string } from "prop-types"
import { Formik } from "formik"
import { useMutation } from "@apollo/react-hooks"

import StyledFooter from "./footer.styles"

import IconFacebook from "@assets/icons/brands/facebook.svg"
import IconInstagram from "@assets/icons/brands/instagram.svg"

import CREATE_SUBSCRIBER_MUTATION from "@particles/mutations/subscriber/CREATE_SUBSCRIBER_MUTATION"

import Link from "@atoms/link/link"

import Cookies from "@molecules/cookies/cookies"
import Error from "@molecules/error/error"

const Footer = ({ email, menus, telephone }) => {
  const [createSubscriber, { called, error, loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  )

  const onSubmit = async ({ email }) => {
    await createSubscriber({
      variables: {
        email,
        type: `Marketing`,
      },
    })
  }

  return (
    <>
      <StyledFooter>
        <div className="footer__contents">
          <nav className="footer__navigation">
            <Link className="footer__logo" href="/">
              Makeup &amp; Mane
            </Link>
            <a className="mailtoui" href={`mailto:${email}`}>
              {email}
            </a>
            <a href={`tel:${telephone}`}>{telephone}</a>
            <nav className="footer__social">
              <a
                href="https://facebook.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconFacebook />
              </a>
              <a
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconInstagram />
              </a>
            </nav>
            <span>© {new Date().getFullYear()} Makeup and Mane</span>
            <a
              href="https://whatjackhasmade.co.uk"
              rel="noopener noreferrer"
              target="_blank"
            >
              Website by Jack Pritchard
            </a>
          </nav>
          {menus.one && <FooterNav menu={menus.one} />}
          {menus.two && <FooterNav menu={menus.two} />}
          <nav className="footer__navigation">
            <h4>Want more?</h4>
            <p>
              Be the first to hear about classes and special offers when you
              sign up for our mailing list:
            </p>
            <Formik
              initialValues={{ email: `` }}
              validate={values => {
                let errors = {}
                if (!values.email) {
                  errors.email = `Required`
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = `Invalid email address`
                }
                return errors
              }}
              validateOnBlur={false}
              validateOnChange={false}
              onSubmit={(values, { setSubmitting }) => {
                onSubmit({ ...values })
                setSubmitting(false)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <>
                  {errors.email && touched.email && (
                    <Error error={errors.email} />
                  )}
                  {error && <Error error={error} />}
                  {called && !error && !loading ? (
                    <p>
                      Thanks for signing up{` `}
                      <span aria-label="Happy smiling face emoji" role="img">
                        😊
                      </span>
                    </p>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      disabled={loading || isSubmitting}
                    >
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <button type="submit" disabled={loading || isSubmitting}>
                        Sign Me Up
                      </button>
                    </form>
                  )}
                </>
              )}
            </Formik>
          </nav>
        </div>
      </StyledFooter>
      <Cookies>
        This site uses cookies{` `}
        <span aria-label="Cookie emoji" role="img">
          🍪
        </span>
        . Cookies help us remember your preferences (e.g. hiding this popup). To
        find out more about your cookies visit{` `}
        <Link href="/privacy-policy">our privacy policy page</Link>.
      </Cookies>
    </>
  )
}

// Expected prop values
Footer.propTypes = {
  email: string,
  menus: shape({
    one: shape({
      id: string,
      count: number,
      menuItems: shape({
        nodes: arrayOf(
          shape({
            items: arrayOf(
              shape({
                label: string.isRequired,
                target: string,
                url: string.isRequired,
              })
            ),
          })
        ),
      }),
    }),
    two: shape({
      id: string,
      count: number,
      menuItems: shape({
        nodes: arrayOf(
          shape({
            items: arrayOf(
              shape({
                label: string.isRequired,
                target: string,
                url: string.isRequired,
              })
            ),
          })
        ),
      }),
    }),
  }),
  telephone: string,
}

// Default prop values
Footer.defaultProps = {
  email: `hello@makeupandmane.co.uk`,
  menus: [],
  telephone: `0200 000 000`,
}

const FooterNav = ({ menu }) => {
  const { menuItems } = menu
  const { nodes } = menuItems

  if (!nodes) return null

  return (
    <nav className="footer__navigation">
      {nodes.length > 0 &&
        nodes.map(({ id, label, url }) => (
          <Link href={url} key={id}>
            {label}
          </Link>
        ))}
    </nav>
  )
}

// Expected prop values
FooterNav.propTypes = {
  menu: shape({
    menuItems: shape({
      nodes: arrayOf(
        shape({
          id: string,
          label: string,
          url: string,
        })
      ),
    }),
  }),
}

// Default prop values
FooterNav.defaultProps = {
  menu: {
    menuItems: {
      nodes: [],
    },
  },
}

export default Footer
