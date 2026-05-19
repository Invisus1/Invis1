import { ReactNode } from "react";

export function NumberedRow({ num, children }: { num: string; children: ReactNode }) {
  return (
    <div className="num-row">
      <div className="num-row__num">{num}</div>
      <div className="num-row__body">{children}</div>
    </div>
  );
}
