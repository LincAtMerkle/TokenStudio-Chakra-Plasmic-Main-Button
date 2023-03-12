import * as React from "react";

export function SwatchAssets({
  className,
  assets,
}: {
  className: string;
  assets: string;
}) {
  return (
    <div
      className={className}
      style={{
        height: "24px",
        width: "24px",
        // assets: assets,
      }}
    ></div>
  );
}
