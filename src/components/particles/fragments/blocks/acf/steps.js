import mediaFields from "@fragments/media"
import seoFields from "@fragments/seo"

const acfSteps = `
	... on AcfStepsBlock {
		stepsFields: acf {
			steps {
				description
				icon {
					${mediaFields}
				}
				title
			}
		}
	}
`

export default acfSteps
