import styled from "styled-components";
import FooterLinks from "./FooterLinks";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 5%;
  background-color: #445d48;
  border-top: 3px solid #f5eec8;
  margin-bottom: 5rem;

  & p {
    font-size: 1.5rem;
    color: #ffffff;
    padding: 0 2rem 2rem 0;
    grid-column: 1 / 3;
  }

  & ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #ffffff;
    padding: 2rem;
  }

  & div {
    text-decoration: underline !important;
  }

  & ul a {
    font-size: 1.3rem;
    line-height: 3rem;
  }

  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr 1fr;

    & ul {
      grid-template-columns: 1fr;
    }

    & p {
      grid-column: 1 / 2;
    }
  }

  @media screen and (max-width: 481px) {
    grid-template-columns: 1fr;

    & ul {
      grid-template-columns: 1fr;
    }

    & p {
      grid-column: 1;
    }
  }
`;

const StylePara = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 5rem;
`;

function Footer() {
  return (
    <>
      <StyledFooter>
        <ul>
          <p>Text Modification/Formatting</p>
          <div>
            <FooterLinks to={"bold-text-generater"}>
              Bold Text Generator
            </FooterLinks>
            <FooterLinks to={"bold-text-generater?type=negativeCircledCapital"}>
              Bubble Text Generator
            </FooterLinks>
            <FooterLinks>Cursed Text Tool</FooterLinks>
            <FooterLinks to={"duplicate-line-remover"}>
              Duplicate Line Remover
            </FooterLinks>
            <FooterLinks>Invisible Text Generator</FooterLinks>
            <FooterLinks to={"bold-text-generater?type=sansSerifBoldItalic"}>
              Italic Text Converter
            </FooterLinks>
            <FooterLinks>Plain Text Converter</FooterLinks>
            <FooterLinks>Reverse Text Generator</FooterLinks>
            <FooterLinks>Sentence Case Converter</FooterLinks>
          </div>
          <div>
            <FooterLinks>Small Text Generator</FooterLinks>
            <FooterLinks>Strikethrough Text Generator</FooterLinks>
            <FooterLinks>Superscript Generator</FooterLinks>
            <FooterLinks>Title Case Converter</FooterLinks>
            <FooterLinks>Underline Text Generator</FooterLinks>
            <FooterLinks>Unicode Text Converter</FooterLinks>
            <FooterLinks>Whitespace Remover</FooterLinks>
            <FooterLinks>Wide Text Generator</FooterLinks>
            <FooterLinks>Zalgo Glitch Text Generator</FooterLinks>
          </div>
        </ul>
        <ul>
          <p>Code & Data Translation/Image Tools</p>
          <div>
            <FooterLinks to={"/binary-code-translator"}>
              Binary Code Translator
            </FooterLinks>
            <FooterLinks to={"/csv-to-json"}>CSV to JSON Converter</FooterLinks>
            <FooterLinks>Hex to Text Converter</FooterLinks>
            <FooterLinks>JSON Stringify Text Generator</FooterLinks>
            <FooterLinks>Morse Code Translator</FooterLinks>
            <FooterLinks>Slugify URL Generator</FooterLinks>
            <FooterLinks>UTF-8 Encoder/Decoder</FooterLinks>
            <FooterLinks>UTM Builder Generator</FooterLinks>
          </div>
          <div>
            <FooterLinks>Ascii Art Generator</FooterLinks>
            <FooterLinks>JPG to PNG Converter</FooterLinks>
            <FooterLinks>JPG to WebP Converter</FooterLinks>
            <FooterLinks>PNG to JPG Converter</FooterLinks>
            <FooterLinks>PNG to WebP Converter</FooterLinks>
            <FooterLinks>WebP to JPG Converter</FooterLinks>
            <FooterLinks>WebP to PNG Converter</FooterLinks>
          </div>
        </ul>
      </StyledFooter>
      <StylePara>
        CaseMorph Pro | Concept by Karthik Kahil | Inspiration from Convert Case
        | <a href="#">Site Map</a> | Theme: Auto
      </StylePara>
    </>
  );
}

export default Footer;
