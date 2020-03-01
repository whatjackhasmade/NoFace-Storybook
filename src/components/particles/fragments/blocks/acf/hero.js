import mediaFields from "fragments/media"
import seoFields from "fragments/seo"

const acfHero = `
	... on AcfHeroBlock {
		heroFields: acf {
			background_colour
			content
			cta {
				target
				title
				url
			}
			heading
			media {
  			${mediaFields}
			}
		}
	}
`

export default acfHero
