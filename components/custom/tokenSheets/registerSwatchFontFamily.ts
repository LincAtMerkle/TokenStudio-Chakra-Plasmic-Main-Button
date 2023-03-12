import { SwatchFontFamily } from "./SwatchFontFamily";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchFontFamily() {
  registerComponent(SwatchFontFamily, {
    name: "SwatchFontFamily",
    importPath: "./components/custom/tokenSheets/SwatchFontFamily",
    props: {
      FontFamily: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
