import React from "react";
import { toast } from "react-toastify";

const compare = (str1, str2) => {
  return str1 === str2;
};
const Option = ({ item, correctAnswer }) => {
  console.log(item);
  return (
    <div>
      <div className="flex md:items-center gap-4 border-2 rounded-md border-fuchsia-300 e p-6">
        <input
          onChange={() => {
            const matched = compare(item, correctAnswer);
            if (matched) {
              toast.success("correct Answer", { autoClose: 500 });
            } else {
              toast.warning("incorrect Answer", { autoClose: 500 });
            }
          }}
          type="radio"
          name="radio-4"
          className="radio radio-accent"
        />
        <label>{item}</label>
      </div>
    </div>
  );
};

export default Option;
