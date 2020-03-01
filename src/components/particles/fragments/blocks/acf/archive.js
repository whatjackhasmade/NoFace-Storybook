import mediaFields from "fragments/media"
import seoFields from "fragments/seo"

const acfArchive = `
	... on AcfArchiveBlock {
		archiveFields: acf {
			show_all
			posts {
				id
				categories {
          nodes {
            name
            slug
            termTaxonomyId
          }
        }
				slug
				featuredImage {
					${mediaFields}
				}
				${seoFields}
			}
		}
	}
`

export default acfArchive
