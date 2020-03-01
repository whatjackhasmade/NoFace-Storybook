import mediaFields from "fragments/media"
import seoFields from "fragments/seo"

const coreHeading = `
	... on CoreHeadingBlock {
		originalContent
		attributes {
			level
			content
			align
		}
	}
`

export default coreHeading
