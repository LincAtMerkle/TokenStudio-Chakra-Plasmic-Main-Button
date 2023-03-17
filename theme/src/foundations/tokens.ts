import getChakraSemanticTokens from "./getChakraSemanticTokens";
import lightTokens from "../tokens-output/light.json";
import darkTokens from "../tokens-output/dark.json";

const semanticTokens = getChakraSemanticTokens({
  light: lightTokens,
  dark: darkTokens,
});

export default semanticTokens;
