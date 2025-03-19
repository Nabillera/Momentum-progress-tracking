export const validMinimumLengthModal = new RegExp("^.{2,}$");

export const validMinimumLength = new RegExp("^.{3,}$");

export const validMaximumLength = new RegExp("^.{1,255}$");

export const validCharacters = new RegExp("^[a-zA-Z\u10A0-\u10FF]+$");

export const validMinimumWords = new RegExp(
  "^(?:\\b[^\\s]+\\b[\\s\\r\\n]*){4,}",
);
