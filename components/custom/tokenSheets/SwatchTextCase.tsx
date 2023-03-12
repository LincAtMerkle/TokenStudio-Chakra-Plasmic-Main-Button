import * as React from "react";

export function SwatchTextCase({
  className,
  textCase,
}: {
  className: string;
  textCase: string;
}) {
  return (
    <div
      className={className}
      style={{ 
        // textTransform: textCase, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </div>
  );
}
