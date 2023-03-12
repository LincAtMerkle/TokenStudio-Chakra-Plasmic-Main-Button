import React, { useEffect, useMemo, useState } from "react";
import { Documentation } from "./Documentation";
import DesignTokenItem from "./DesignTokenItem";

export type ChakraDocsProps = JSX.IntrinsicAttributes & {
  set?: string;
  path?: string;
  theme?: string;
  className?: string;
};

export function ChakraDocs(
  { set, path, theme, className }: ChakraDocsProps,
  render: (data: any) => JSX.Element
) {
  {
    const [copiedToken, setCopiedToken] = useState("");
    const onTokenCopy = async (value: string, tokenName: any) => {
      if (!navigator?.clipboard) {
        alert("Clipboard not supported");
      }

      try {
        await navigator.clipboard.writeText(value);
        setCopiedToken(`${tokenName}${value}`);
      } catch (error) {
        alert("Error copying value");
      }
    };
    return (
      <div className={className}>
        <Documentation
          theme={theme}
          path={path}
          set={set}
          render={(data) => {
            return data.map(
              ({ value, tokenName, variant, description }: any, i: any) => {
                return (      
                  <div key={`token-docs-${i}`} style={{ padding: 0 }}>
                    <DesignTokenItem
                      //@ts-ignore
                      tokenName={tokenName}
                      swatches={variant}
                      description={description}
                      
                      /////// token swatches
                      color ={variant === "color" ? value : undefined}
                      sizing ={variant === "sizing" ? value : undefined}
                      // borderRadius ={variant === "borderRadius" ? value : undefined}
                      spacing ={variant === "spacing" ? value : undefined}
                      // fontFamily ={variant === "fontFamily" ? value : undefined}
                      // fontWeights ={variant === "fontWeights" ? value : undefined}
                      // fontSizes ={variant === "fontSizes" ? value : undefined}
                      // borderWidth ={variant === "borderWidth" ? value : undefined}
                      // opacity ={variant === "opacity" ? value : undefined}
                      // lineHeights ={variant === "lineHeights" ? value : undefined}
                      // letterSpacing ={variant === "letterSpacing" ? value : undefined}
                      // paragraphSpacing ={variant === "paragraphSpacing" ? value : undefined}
                      // textCase ={variant === "textCase" ? value : undefined}
                      // textDecoration ={variant === "textDecoration" ? value : undefined}

                      ////// How best to do these
                      // assets ={variant === "assets" ? value : undefined}
                      // dimension ={variant === "dimension" ? value : undefined}

                      /////// composite token swatched
                      /////// How to handle this????
                      // border ={variant === "border" ? value : undefined}
                      // boxShadow ={variant === "boxShadow" ? value : undefined}
                      // typography ={variant === "typography" ? value : undefined}
                      // composition ={variant === "composition" ? value : undefined}
                    />
                  </div>
                );
              }
            );
          }}
        />
      </div>
    );
  }
}
