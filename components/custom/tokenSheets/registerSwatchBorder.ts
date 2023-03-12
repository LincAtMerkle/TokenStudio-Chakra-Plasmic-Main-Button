import { SwatchBorder } from "./SwatchBorder";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchBorder() {
  registerComponent(SwatchBorder, {
    name: "SwatchBorder",
    importPath: "./components/custom/tokenSheets/SwatchBorder",
    props: {
      border: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
