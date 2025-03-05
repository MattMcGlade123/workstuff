/* eslint-disable */
export type Token = "colors.primary" | "colors.secondary" | "colors.grey.100" | "colors.grey.200" | "colors.red.100" | "colors.red.200" | "colors.blue.100" | "colors.purple.100" | "colors.purple.200" | "fonts.body" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "colors.text" | "colors.colorPalette.100" | "colors.colorPalette.200"

export type ColorPalette = "grey" | "red" | "blue" | "purple"

export type ColorToken = "primary" | "secondary" | "grey.100" | "grey.200" | "red.100" | "red.200" | "blue.100" | "purple.100" | "purple.200" | "text" | "colorPalette.100" | "colorPalette.200"

export type FontToken = "body"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce"

export type Tokens = {
		colors: ColorToken
		fonts: FontToken
		breakpoints: BreakpointToken
		sizes: SizeToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"