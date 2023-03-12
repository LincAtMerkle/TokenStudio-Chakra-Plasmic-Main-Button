import * as React from "react";

export function SwatchSizing({
  className,
  sizing,
}: {
  className: string;
  sizing: string;
}) {
  return (
    <div
      className={className}
      style={{ 
        height: sizing, 
        width: sizing, 
        backgroundColor: "green" 
    }}
    >
      {" "}
    </div>
  );
}
