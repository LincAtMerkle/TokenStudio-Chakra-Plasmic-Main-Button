import { SwatchLetterSpacing } from "./SwatchLetterSpacing";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchLetterSpacing() {
  registerComponent(SwatchLetterSpacing, {
    name: "SwatchLetterSpacing",
    importPath: "./components/custom/tokenSheets/SwatchLetterSpacing",
    props: {
      paragraphSpacing: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
