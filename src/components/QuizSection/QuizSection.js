import { Eye } from "react-hero-icon/solid";
import { toast } from "react-toastify";

const compare = (str1, str2) => {
  return str1 === str2;
};
const html = (text) => {
  return { __html: text };
};

const QuizSection = ({ option, serial }) => {
  const { question, correctAnswer, options } = option;

  return (
    <div>
      <div className=" grid place-items-center mt-4 border p-4 shadow-md">
        <div className="flex ">
          <div>
            <h1>
              Quiz : {serial}
              <span dangerouslySetInnerHTML={html(question)}></span>
            </h1>
          </div>
          <div className="ml-12">
            <button
              onClick={() => {
                toast.success(correctAnswer, { autoClose: 200 });
              }}
              className="btn"
            >
              <Eye></Eye>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6  mt-4 ml-8">
          {options.map((op) => {
            return (
              <div key={op} className="flex items-center gap-4">
                <input
                  onChange={() => {
                    const matched = compare(op, correctAnswer);
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
                <label>{op}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
