import type React from "react";

type FrageConditionStrokeProps = {
  params: React.ReactNode[];
};

/*
Box drawing characters: https://en.wikipedia.org/wiki/Box-drawing_characters
┌┬─┐
├  ┤
│  │
└┴─┘
*/

export const FrageConditionStroke = ({ params }: FrageConditionStrokeProps) => {
  return (
    <div>
      {params.map((param, index, total) => {
        let line = "";
        if (index === 0) {
          line += "┬".repeat(total.length - 1) + "─" + param;
        } else {
          line += "│".repeat(total.length - index - 1);
          line += "└" + param;
        }
        return (
          <p key={index} className={`${index > 0 ? "-my-2" : "my-0"}`}>
            {line}
          </p>
        );
      })}
    </div>
  );
};

export default FrageConditionStroke;
