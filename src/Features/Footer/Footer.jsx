import styled from "styled-components";
import FooterLinks from "./FooterLinks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

  a {
    text-decoration: underline;
  }
`;

const titleNames = [
  {
    pathName: "/cursed-text-tool",
    linkName: "Cursed Text Generater",
    titleName: "Cursed Text Generater",
  },
  {
    pathName: "/invisible-text-generator",
    linkName: "Invisible text generator",
    titleName: "Invisible text generator",
  },
  {
    pathName: "/tiny-text-generator",
    linkName: "Tiny text generator",
    titleName: "Tiny text generator",
  },
  {
    pathName: "/strikethrough-text-generator",
    linkName: "Strikethrough text generator",
    titleName: "Strikethrough text generator",
  },
  {
    pathName: "/superscript-generator",
    linkName: "Superscript generator",
    titleName: "Superscript generator",
  },
  {
    pathName: "/title-case-converter",
    linkName: "Title case converter",
    titleName: "Title case converter",
  },
  {
    pathName: "/underline-text",
    linkName: "Underline text",
    titleName: "Underline text",
  },
  {
    pathName: "/whitespace-remover",
    linkName: "Whitespace remover",
    titleName: "Whitespace remover",
  },
  {
    pathName: "/vaporwave-wide-text-generator",
    linkName: "Wide text generator",
    titleName: "Wide text generator",
  },
  {
    pathName: "/glitch-text-converter",
    linkName: "Glitch text converter",
    titleName: "Glitch text converter",
  },
  {
    pathName: "/binary-code-translator",
    linkName: "Binary code translator",
    titleName: "Binary code translator",
  },
  {
    pathName: "/csv-to-json",
    linkName: "CSV to JSON",
    titleName: "CSV to JSON",
  },
  {
    pathName: "/ascii-art-generator",
    linkName: "ASCII Art generator",
    titleName: "ASCII Art generator",
  },
  {
    pathName: "/hex-to-text-converter",
    linkName: "Hex to Text",
    titleName: "Hex to Text",
  },
  {
    pathName: "/json-stringify-text",
    linkName: "JSON Stringify",
    titleName: "JSON Stringify",
  },
  {
    pathName: "/slugify-url-handle-generator",
    linkName: "Slugify URL generator",
    titleName: "Slugify URL generator",
  },
  {
    pathName: "/morse-code-translator",
    linkName: "Morse code translator",
    titleName: "Morse code translator",
  },
  {
    pathName: "/utf8-encoding",
    linkName: "UTF-8 Encode & Decode",
    titleName: "UTF-8 Encode & Decode",
  },
  {
    pathName: "/utm-generator",
    linkName: "UTM Builder",
    titleName: "UTM Builder",
  },
];

function Footer() {
  const currentLocation = useLocation();

  useEffect(() => {
    const currentData = titleNames.filter(
      (data) => data.pathName === currentLocation.pathname
    );

    if (currentData[0]?.pathName === currentLocation.pathname) {
      document.title =
        currentData[0]?.titleName + " | CaseMorph Pro" || "CaseMorph Pro";
    }
  }, [currentLocation.pathname]);

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
            <FooterLinks to={"cursed-text-tool"}>Cursed Text Tool</FooterLinks>
            <FooterLinks to={"duplicate-line-remover"}>
              Duplicate Line Remover
            </FooterLinks>
            <FooterLinks to={"/invisible-text-generator"}>
              Invisible Text Generator
            </FooterLinks>
            <FooterLinks to={"bold-text-generater?type=sansSerifBoldItalic"}>
              Italic Text Converter
            </FooterLinks>
            <FooterLinks to={"plain-text-converter"}>
              Plain Text Converter
            </FooterLinks>
            <FooterLinks to={"reverse-text-converter"}>
              Reverse Text Generator
            </FooterLinks>
            <FooterLinks to={"/"}>Sentence Case Converter</FooterLinks>
          </div>
          <div>
            <FooterLinks to={"/tiny-text-generator"}>
              Tiny Text Generator
            </FooterLinks>
            <FooterLinks to={"/strikethrough-text-generator"}>
              Strikethrough Text Generator
            </FooterLinks>
            <FooterLinks to={"/superscript-generator"}>
              Superscript Generator
            </FooterLinks>
            <FooterLinks to={"/title-case-converter"}>
              Title Case Converter
            </FooterLinks>
            <FooterLinks to={"/underline-text"}>
              Underline Text Generator
            </FooterLinks>
            <FooterLinks to={"/whitespace-remover"}>
              Whitespace Remover
            </FooterLinks>
            <FooterLinks to={"/vaporwave-wide-text-generator"}>
              Wide Text Generator
            </FooterLinks>
            <FooterLinks to={"/glitch-text-converter"}>
              Zalgo Glitch Text Generator
            </FooterLinks>
          </div>
        </ul>
        <ul>
          <p>Code & Data Translation/Image Tools</p>
          <div>
            <FooterLinks to={"/binary-code-translator"}>
              Binary Code Translator
            </FooterLinks>
            <FooterLinks to={"/csv-to-json"}>CSV to JSON Converter</FooterLinks>
            <FooterLinks to={"/hex-to-text-converter"}>
              Hex to Text Converter
            </FooterLinks>
            <FooterLinks to={"/json-stringify-text"}>
              JSON Stringify Text Generator
            </FooterLinks>
            <FooterLinks to={"/morse-code-translator"}>
              Morse Code Translator
            </FooterLinks>
            <FooterLinks to={"/slugify-url-handle-generator"}>
              Slugify URL Generator
            </FooterLinks>
            <FooterLinks to={"/utf8-encoding"}>
              UTF-8 Encoder/Decoder
            </FooterLinks>
            <FooterLinks to={"/utm-generator"}>
              UTM Builder Generator
            </FooterLinks>
          </div>
          <div>
            <FooterLinks to={"/ascii-art-generator"}>
              Ascii Art Generator
            </FooterLinks>
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
        CaseMorph Pro | Created by{" "}
        <a href="https://karthikkahil.in/" target={"_blank"} rel="noreferrer">
          karthik Kahil
        </a>{" "}
        | <a href="#">Site Map</a> | Theme: Auto
      </StylePara>
    </>
  );
}

export default Footer;
