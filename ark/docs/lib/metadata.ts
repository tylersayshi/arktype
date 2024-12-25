import { createMetadataImage } from "fumadocs-core/server"
import { source } from "./source.tsx"

export const metadataImage = createMetadataImage({
	imageRoute: "/docs-og",
	filename: "/image/openGraphBackground.png",
	source
})
