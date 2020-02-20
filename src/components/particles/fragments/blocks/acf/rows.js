import mediaFields from "@fragments/media"
import seoFields from "@fragments/seo"

const acfRows = `
	... on AcfRowsBlock {
		rowsFields: acf {
			background_imagery
			background_pattern
			rows {
				columns {
					content
					image {
  					${mediaFields}
					}
				}
			}
		}
	}
`

export default acfRows
