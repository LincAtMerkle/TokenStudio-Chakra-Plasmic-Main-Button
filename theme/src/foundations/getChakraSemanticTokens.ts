//@ts-nocheck

interface SemanticTokens {
  colors: Record<string, any>;
  radii: Record<string, any>;
  shadows: Record<string, any>;
  fontSizes: Record<string, any>;
  borders: Record<string, any>;
  sizes: Record<string, any>;
  fonts: Record<string, any>;
  space: Record<string, any>;
  lineHeights: Record<string, any>;
  fontWeights: Record<string, any>;
}

const getChakraSemanticTokens = (figmaTokens: any): SemanticTokens => {
  const semanticTokens: SemanticTokens = {
    radii: {},
    colors: {},
    shadows: {},
    fonts: {},
    fontWeights: {},
    space: {},
    lineHeights: {},
    sizes: {},
    borders: {},
    fontSizes: {},
  };

  /**
   * Organize light tokens into semanticTokens object first
   * For colors, create an object putting light on "default"
   *
   * Then, do a second pass where we take the dark tokens and put
   * the dark color tokens into semanticTokens object under the "_dark" key
   */
  Object.entries(figmaTokens.light).forEach(([category, tokenGroup]) => {
    if (category === "colors") {
      Object.entries(tokenGroup).forEach(([key, val]) => {
        semanticTokens[category][key] = {
          default: val,
        };
      });
    } else {
      semanticTokens[category] = tokenGroup;
    }
  });

  Object.entries(figmaTokens.dark).forEach(([category, tokenGroup]) => {
    if (category === "colors") {
      Object.entries(tokenGroup).forEach(([key, val]) => {
        semanticTokens[category][key]._dark = val;
      });
    }
  });
  return semanticTokens;
};

export default getChakraSemanticTokens;
