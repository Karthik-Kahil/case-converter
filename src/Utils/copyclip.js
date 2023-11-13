export async function copyTextToClipboard(text) {
  // Remove HTML tags from the text

  const plainText = text.replace(/<[^>]*>/g, "");

  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(plainText);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = plainText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    return Promise.resolve();
  }
}
