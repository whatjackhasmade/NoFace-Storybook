import mediaFields from "@fragments/media"
import seoFields from "@fragments/seo"

const acfBanner = `
	... on AcfBannerBlock {
		bannerFields: acf {
			backgroundColor
			backgroundImage {
  			${mediaFields}
			}
			columns {
				content
			}
		}
	}
`

export default acfBanner
