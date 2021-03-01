import {
  colors,
  bg_colors,
  input_state,
  lowercase,
  uppercase,
  numbers,
  special_chars,
  all
} from "../data";

export function checkPassword(
  pwd_text,
  setInputColor,
  setInputState,
  setBgColor,
  bgColorEnabled,
) {
  let points = 0;

  // Check empty
  if (pwd_text === "") {
    setInputColor(colors.default);
    setInputState(input_state.default);
    bgColorEnabled && setBgColor(bg_colors.default);
    return;
  }
  
  // Check invalid character
  for (let i = 0; i < pwd_text.length; i++) {
    if(!all.includes(pwd_text[i])){
      setInputColor(colors.default);
      setInputState(input_state.invalid);
      bgColorEnabled && setBgColor(bg_colors.invalid);
      return;
    }
  }

  // Check >8 chars
  if (pwd_text.length < 8) {
    setInputColor(colors.unsecure);
    setInputState(input_state.unsecure);
    bgColorEnabled && setBgColor(bg_colors.unsecure);
    return;
  }

  // Check if contains lowercase
  for (let i = 0; i < lowercase.length; i++) {
    if (pwd_text.includes(lowercase[i])) {
      points++;
      break;
    }
  }

  // Check if contains uppercase
  for (let i = 0; i < uppercase.length; i++) {
    if (pwd_text.includes(uppercase[i])) {
      points++;
      break;
    }
  }

  // Check if contains numbers
  for (let i = 0; i < numbers.length; i++) {
    if (pwd_text.includes(numbers[i])) {
      points++;
      break;
    }
  }

  // Check if contains special chars
  for (let i = 0; i < special_chars.length; i++) {
    if (pwd_text.includes(special_chars[i])) {
      points++;
      break;
    }
  }

  switch (points) {
    case 1:
      setInputColor(colors.weak);
      setInputState(input_state.weak);
      bgColorEnabled && setBgColor(bg_colors.weak);
      break;

    case 2:
      setInputColor(colors.poor);
      setInputState(input_state.poor);
      bgColorEnabled && setBgColor(bg_colors.poor);
      break;

    case 3:
      setInputColor(colors.good);
      setInputState(input_state.good);
      bgColorEnabled && setBgColor(bg_colors.good);
      break;

    case 4:
      setInputColor(colors.robust);
      setInputState(input_state.robust);
      bgColorEnabled && setBgColor(bg_colors.robust);
      break;
  }
}
