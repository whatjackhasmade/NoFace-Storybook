import mediaFields from "fragments/media"
import seoFields from "fragments/seo"

const acfGridGallery = `
	... on AcfGridgalleryBlock {
		galleryFields: acf {
			gallery {
				image {
					${mediaFields}
				}
			}
		}
	}
`

export default acfGridGallery
