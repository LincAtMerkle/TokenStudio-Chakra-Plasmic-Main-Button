import * as React from "react";

export function SwatchComposition({
  className,
  composition,
}: {
  className: string;
  composition: string;
}) {
  return (
    <div
      className={className}
      style={{
        height: "24px",
        width: "24px",
        // composition: composition,
      }}
    ></div>
  );
}
