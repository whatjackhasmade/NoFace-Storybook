import React from "react"
import { hasBrowser } from "@helpers"

import StyledShare from "./share.styles"

import IconFacebook from "@assets/icons/brands/facebook.svg"
import IconPinterest from "@assets/icons/brands/pinterest.svg"
import IconLinkedin from "@assets/icons/brands/linkedin.svg"
import IconTwitter from "@assets/icons/brands/twitter.svg"

import CTA from "@atoms/cta/cta"

const Share = ({ title = ``, url = `` }) => {
  let ShareAPI = false

  if (hasBrowser() && typeof window.navigator !== `undefined`) {
    ShareAPI = navigator && navigator.share
  }

  // TODO: Update this to feedback in interface
  const handleShare = e => {
    e.preventDefault()
    try {
      navigator.share({
        title,
        url,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <StyledShare className="blog__share">
      <div className="blog__share__contents">
        {ShareAPI && (
          <CTA className="blog__share__text" onClick={handleShare}>
            Share This Article
          </CTA>
        )}
        {!ShareAPI && <h4 className="blog__share__text">Share This Article</h4>}
        <div className="blog__share__icons">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
            <IconFacebook />
          </a>
          <a
            href={`https://pinterest.com/pin/create/button/?url=${url}&media=&description=`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pinterest
            <IconPinterest />
          </a>
          <a
            href={`https://twitter.com/home?status=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <IconTwitter />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <IconLinkedin />
          </a>
        </div>
      </div>
    </StyledShare>
  )
}

export default Share
