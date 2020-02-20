import mediaFields from "./media"

const seoFields = `
	seo {
		title
		focuskw
		metaDesc
		metaKeywords
		opengraphDescription
		opengraphImage {
			${mediaFields}
		}
		opengraphTitle
		twitterDescription
		twitterImage {
			${mediaFields}
		}
		twitterTitle
	}
`

export default seoFields
