import { useState, useRef } from "react";
import CheckGrey from "../assets/CheckGrey.svg";
import CheckGreen from "../assets/CheckGreen.svg";
import CheckRed from "../assets/CheckRed.svg";
import {
  validMinimumLengthModal,
  validMinimumLength,
  validMaximumLength,
  validCharacters,
  validMinimumWords,
} from "../../regex";

export default function Input({
  label,
  isTextarea,
  onFillField,
  name,
  isModal,
}) {
  const [validFields, setValidFields] = useState({
    minChars: undefined,
    minWords: undefined,
    maxChars: undefined,
    validChars: undefined,
  });
  const userInput = useRef();

  // validation message colors
  const keys = ["minWords", "minChars", "maxChars", "validChars"];
  const [minWordsIcon, minCheckIcon, maxCheckIcon, charsCheckIcon] = keys.map(
    (key) =>
      validFields[key] == undefined
        ? CheckGrey
        : validFields[key]
          ? CheckGreen
          : CheckRed,
  );
  const [minWordsColor, minCharsColor, maxCharsColor, validCharsColor] =
    keys.map((key) =>
      validFields[key] == undefined
        ? "text-[#6C757D]"
        : validFields[key]
          ? "text-[#08A508]"
          : "text-[#FA4D4D]",
    );
  const inputBorderColor =
    (!validFields.minChars && validFields.minChars != undefined) ||
    (!validFields.maxChars && validFields.maxChars != undefined)
      ? "border-[#FA4D4D]"
      : "border-[#CED4DA]";

  // fill validated fields
  const handleValidation = () => {
    let input = userInput.current.value;
    if (isModal) {
      // for employee modal inputs
      const minCharsResult = validMinimumLengthModal.test(input);
      const maxCharsResult = validMaximumLength.test(input);
      const validCharsResult = validCharacters.test(input);
      setValidFields({
        minChars: minCharsResult,
        minWords: undefined,
        maxChars: maxCharsResult,
        validChars: validCharsResult,
      });
      if (minCharsResult && maxCharsResult && validCharsResult) {
        onFillField(name, input);
      } else {
        onFillField(name, undefined);
      }
    } else if (isTextarea) {
      // for new task description
      const minWordsResult = validMinimumWords.test(input);
      const maxCharsResult = validMaximumLength.test(input);
      setValidFields({
        minChars: undefined,
        minWords: minWordsResult,
        maxChars: maxCharsResult,
        validChars: undefined,
      });
      if ((minWordsResult && maxCharsResult) || input == undefined) {
        onFillField(name, input);
      } else {
        onFillField(name, false);
      }
    } else {
      // for new task title
      const minCharsResult = validMinimumLength.test(input);
      const maxCharsResult = validMaximumLength.test(input);
      setValidFields({
        minChars: minCharsResult,
        minWords: undefined,
        maxChars: maxCharsResult,
        validChars: undefined,
      });
      if (minCharsResult && maxCharsResult) {
        onFillField(name, input);
      } else {
        onFillField(name, undefined);
      }
    }
  };

  return (
    <div className="flex w-[100%] flex-col">
      <label
        className={`py-[6px] ${isModal ? "text-[14px]" : "text-[16px] leading-[19px]"} font-medium text-[#343A40]`}
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          ref={userInput}
          onChange={handleValidation}
          className={`${inputBorderColor} mb-[6px] h-[133px] w-[100%] resize-none rounded-[6px] border bg-white p-[14px] outline-0`}
        />
      ) : (
        <input
          ref={userInput}
          onChange={handleValidation}
          className={`${inputBorderColor} mb-[6px] ${isModal ? "h-[42px]" : "h-[45px]"} w-[100%] rounded-[6px] border bg-white p-[14px] outline-0`}
        />
      )}
      <div className="flex items-center gap-x-[2px]">
        <img src={isTextarea ? minWordsIcon : minCheckIcon} />
        <span
          className={`${isTextarea ? minWordsColor : minCharsColor} text-[10px]`}
        >
          მინიმუმ{" "}
          {isTextarea ? "4 სიტყვა" : isModal ? "2 სიმბოლო" : "3 სიმბოლო"}
        </span>
      </div>

      <div className="flex items-center gap-x-[2px]">
        <img src={maxCheckIcon} />
        <span className={`${maxCharsColor} text-[10px]`}>
          მაქსიმუმ 255 სიმბოლო
        </span>
      </div>

      {isModal && (
        <div className="flex items-center gap-x-[2px]">
          <img src={charsCheckIcon} />
          <span className={`${validCharsColor} text-[10px]`}>
            ლათინური და ქართული ასოები
          </span>
        </div>
      )}
    </div>
  );
}
