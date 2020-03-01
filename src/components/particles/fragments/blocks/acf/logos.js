import mediaFields from "fragments/media"
import seoFields from "fragments/seo"

const acfHero = `
	... on AcfLogosBlock {
		logoFields: acf {
			logos {
				logo {
 					${mediaFields}
				}
			}
			title
		}
	}
`

export default acfHero
