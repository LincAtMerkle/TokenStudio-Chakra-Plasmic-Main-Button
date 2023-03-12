import { SwatchBorderRadius } from "./SwatchBorderRadius";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchBorderRadius() {
  registerComponent(SwatchBorderRadius, {
    name: "SwatchBorderRadius",
    importPath: "./components/custom/tokenSheets/SwatchBorderRadius",
    props: {
      borderRadius: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
