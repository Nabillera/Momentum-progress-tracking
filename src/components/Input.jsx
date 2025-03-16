import { useState, useRef } from "react";
import CheckGrey from "../assets/CheckGrey.svg";
import CheckGreen from "../assets/CheckGreen.svg";
import CheckRed from "../assets/CheckRed.svg";
import {
  validMinimumLength,
  validMaximumLength,
  validCharacters,
} from "../../regex";

export default function Input({ label, isTextarea, onFillField, name }) {
  const [validFields, setValidFields] = useState({
    //  minChars: undefined,
    minWords: undefined,
    maxChars: undefined,
    validChars: undefined,
  });
  const userInput = useRef();

  const minCheckIcon =
    validFields.minChars == undefined
      ? CheckGrey
      : validFields.minChars
        ? CheckGreen
        : CheckRed;
  const maxCheckIcon =
    validFields.maxChars == undefined
      ? CheckGrey
      : validFields.maxChars
        ? CheckGreen
        : CheckRed;

  const [minWordsColor, minCharsColor, maxCharsColor] = [
    "minWords",
    "minChars",
    "maxChars",
  ].map((key) =>
    validFields[key] == undefined
      ? "text-[#6C757D]"
      : validFields[key]
        ? "text-[#08A508]"
        : "text-[#FA4D4D]",
  );

  const inputBorderColor =
    validFields.minChars == undefined && validFields.maxChars == undefined
      ? "border-[#CED4DA]"
      : validFields.minChars && validFields.maxChars
        ? "border-[#08A508]"
        : "border-[#FA4D4D]";

  const handleValidation = () => {
    // const minWordsResult = true;
    const minCharsResult = validMinimumLength.test(userInput.current.value);
    const maxCharsResult = validMaximumLength.test(userInput.current.value);
    const validCharsResult = validCharacters.test(userInput.current.value);

    if (!isTextarea) {
      setValidFields({
        minChars: minCharsResult,
        maxChars: maxCharsResult,
        validChars: validCharsResult,
        // minWords: undefined,
      });
      if (minCharsResult && maxCharsResult && validCharsResult) {
        onFillField(name, userInput.current.value);
      } else {
        onFillField(name, undefined);
      }
    } else {
      setValidFields({
        // minWords: minWordsResult,
        maxChars: maxCharsResult,
        validChars: validCharsResult,
        minChars: undefined,
      });
      // if (minWordsResult && maxCharsResult && validCharsResult) {
      //   onFillField(name, userInput.current.value);
      // } else {
      //   onFillField(name, undefined);
      // }
    }
  };

  return (
    <div className="flex w-[100%] flex-col">
      <label className="text-[14px] font-medium text-[#343A40]">{label}</label>
      {isTextarea ? (
        <textarea
          ref={userInput}
          onChange={handleValidation}
          className={`${inputBorderColor} mt-[3px] mb-[6px] h-[133px] w-[100%] resize-none rounded-[6px] border p-[14px] outline-0`}
        />
      ) : (
        <input
          ref={userInput}
          onChange={handleValidation}
          className={`${inputBorderColor} mt-[3px] mb-[6px] h-[42px] w-[100%] rounded-[6px] border p-[14px] outline-0`}
        />
      )}
      <div className="flex items-center gap-x-[2px]">
        <img src={minCheckIcon} />
        <span
          className={`${isTextarea ? minWordsColor : minCharsColor} text-[10px]`}
        >
          მინიმუმ {isTextarea ? "4 სიტყვა" : "2 სიმბოლო"}
        </span>
      </div>

      <div className="flex items-center gap-x-[2px]">
        <img src={maxCheckIcon} />
        <span className={`${maxCharsColor} text-[10px]`}>
          მაქსიმუმ 255 სიმბოლო
        </span>
      </div>
    </div>
  );
}
