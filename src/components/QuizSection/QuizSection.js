import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import Option from "../Options/Option";

const QuizSection = ({ option, serial }) => {
  const { question, correctAnswer, options } = option;

  return (
    <div className=" bg-red-100">
      <div className="w-full grid md:place-items-center mt-4 border p-2 md:p-4 shadow-md w-7/12 m-auto">
        <div className="flex w-full">
          {/* quetions  */}
          <div>
            <div className=" text-left flex flex-row ">
              <h1> Quiz : {serial}</h1>
              <PaperAirplaneIcon className="w-6 h-6" />
              <div>
                <h1 dangerouslySetInnerHTML={{ __html: question }} />
              </div>
            </div>
          </div>

          {/* eye button  */}
          <div className="ml-8">
            <button
              onClick={() => {
                toast.success(correctAnswer, { autoClose: 200 });
              }}
              className="btn btn-info "
            >
              <EyeSlashIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* options  */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-6  mt-4 ml-8">
          {options.map((item, index) => (
            <Option
              key={index}
              item={item}
              correctAnswer={correctAnswer}
            ></Option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
