import * as React from "react";

export function SwatchBorder({
  className,
  border,
}: {
  className: string;
  border: string;
}) {
  return (
    <div
      className={className}
      style={{
        width: border,
        height: border,
        border: "solid 1px black",
        borderRadius: border,
      }}
    >
      {" "}
    </div>
  );
}
