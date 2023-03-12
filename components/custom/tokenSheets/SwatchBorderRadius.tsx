import * as React from "react";

export function SwatchBorderRadius({
  className,
  borderRadius,
}: {
  className: string;
  borderRadius: string;
}) {
  return (
    <div
      className={className}
      style={{
        width: borderRadius,
        height: borderRadius,
        border: "solid 1px black",
        borderRadius: borderRadius,
      }}
    >
      {" "}
    </div>
  );
}
