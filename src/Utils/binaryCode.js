export function textToBinary(str) {
  let output = "";
  str.split("").forEach((element) => {
    let char = element.charCodeAt(0).toString(2);
    output += ("00000000" + char).slice(-8).concat(" ");
  });
  return output;
}
