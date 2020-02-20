import mediaFields from "@fragments/media"
import seoFields from "@fragments/seo"

const acfTeam = `
	... on AcfTeamBlock {
		teamFields: acf {
			intro
			title
		}
	}
`

export default acfTeam
