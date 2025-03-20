export const validMinimumLengthModal = new RegExp("^.{2,}$");

export const validMinimumLength = new RegExp("^.{3,}$");

export const validMaximumLength = new RegExp("^.{1,255}$");

export const validCharacters = new RegExp("^[a-zA-Z\u10A0-\u10FF]+$");

export const validMinimumWords = new RegExp(
  "^(?:[\\w\\u{10A0}-\\u{10FF}.,!?;:'\"-]+\\s+){3,}[\\w\\u{10A0}-\\u{10FF}.,!?;:'\"-]+",
  "u",
);
