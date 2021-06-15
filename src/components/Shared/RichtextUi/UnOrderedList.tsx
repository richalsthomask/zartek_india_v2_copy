import React, { FC } from "react";

interface UnorderedListProps {
  list: any;
}

export const UnorderedListRT: FC<UnorderedListProps> = ({ list }) => {
  return (
    <div className="col-lg-12 mb-2">
      <ul className="unordered-list-rt">
        {list?.map(({ props }, i) => {
          return (
            <li className="d-flex align-items-baseline" key={i}>
              <i className="fa fa-angle-right mr-2"></i>
              {props.children}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
