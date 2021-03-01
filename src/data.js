const colors = {
  default: "#ffffff",
  invalid: "#ffffff",
  unsecure: "#f54242",
  weak: "#f59642",
  poor: "#f5e042",
  good: "#ddf542",
  robust: "#51f542",
};

const bg_colors = {
  default: "#ffffff",
  invalid: "#ffffff",
  unsecure: "#f5abad",
  weak: "#f5ceab",
  poor: "#f5ecab",
  good: "#ebf5ab",
  robust: "#b1f5ab",
};

const input_state = {
  default: "‌‌ ",
  invalid: "Invalid character",
  unsecure: "Unsecure",
  weak: "Weak",
  poor: "Poor",
  good: "Good",
  robust: "Robust",
};

const input_visibility = {
  invisible: "password",
  visible: "text",
};

const lowercase = [..."abcdefghijklmnopqrstuvwxyz"];
const uppercase = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numbers = [..."1234567890"];
const special_chars = [..."@.-_"];

export {
  colors,
  bg_colors,
  input_state,
  input_visibility,
  lowercase,
  uppercase,
  numbers,
  special_chars,
};