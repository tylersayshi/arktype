import { rootSchema } from "@ark/schema"
import type { Nominal, of, To } from "../../attributes.ts"
import type { Module, Submodule } from "../../module.ts"
import { arkModule } from "../utils.ts"
import { regexStringNode } from "./utils.ts"

declare namespace string {
	export type lowercase = of<string, Nominal<"lowercase">>
}

const preformatted = regexStringNode(/^[a-z]*$/, "only lowercase letters")

export const lower: lower.module = arkModule({
	root: rootSchema({
		in: "string",
		morphs: (s: string) => s.toLowerCase(),
		declaredOut: preformatted
	}),
	preformatted
})

export declare namespace lower {
	export type module = Module<submodule>

	export type submodule = Submodule<$>

	export type $ = {
		root: (In: string) => To<string.lowercase>
		preformatted: string.lowercase
	}
}
