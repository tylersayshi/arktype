import { generateOGImage } from "fumadocs-ui/og"
import { metadataImage } from "../../../lib/metadata"

const ralewayArrayBuffer = await fetch(
	"https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap"
).then(res => res.arrayBuffer())

export const GET = metadataImage.createAPI(page =>
	generateOGImage({
		title: page.data.title === "ArkType" ? "ArkType" : "ArkType Docs",
		description: page.data.title === "ArkType" ? "" : page.data.title,
		site: "ArkType",
		debug: true,
		fonts: [
			{
				name: "Raleway",
				data: ralewayArrayBuffer,
				style: "normal",
				weight: 700
			}
		]
	})
)

export const generateStaticParams = () => metadataImage.generateParams()
