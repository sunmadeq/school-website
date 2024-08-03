import {Outfit, Raleway} from "next/font/google";

const headingFont = Raleway(
  {
    subsets: ["latin"],
    weight: ["700", "800", "900"],
    variable: "--heading"
  }
)

const defaultFont = Outfit(
  {
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--default"
  }
)

export default `${headingFont.variable} ${defaultFont.variable}`;