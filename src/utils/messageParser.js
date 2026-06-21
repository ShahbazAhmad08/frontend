/**
 * Utility to extract bracket parameters sent from client views
 */
export const parseMessageContent = (fullText = "") => {
  if (!fullText)
    return {
      phone: "N/A",
      company: "N/A",
      mode: "N/A",
      text: "No context supplied",
    };

  const phoneMatch = fullText.match(/\[Phone:\s*([^\]]*)]/);
  const companyMatch = fullText.match(/\[Company:\s*([^\]]*)]/);
  const modeMatch = fullText.match(/\[Preferred Mode:\s*([^\]]*)]/);

  let cleanText = fullText
    .replace(
      /\[Phone:[^\]]*\]|\[Company:[^\]]*\]|\[Preferred Mode:[^\]]*\]/g,
      "",
    )
    .trim();

  return {
    phone: phoneMatch ? phoneMatch[1] : "N/A",
    company: companyMatch ? companyMatch[1] : "N/A",
    mode: modeMatch ? modeMatch[1] : "N/A",
    text: cleanText || "No context supplied",
  };
};
