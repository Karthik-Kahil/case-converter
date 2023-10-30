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
    text-decoration: underline;
  }

  & ul a {
    font-size: 1.3rem;
    line-height: 3rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <ul>
        <p>Text Modification/Formatting</p>
        <div>
          <FooterLinks>Bold Text Generator</FooterLinks>
          <FooterLinks>Bubble Text Generator</FooterLinks>
          <FooterLinks>Cursed Text Tool</FooterLinks>
          <FooterLinks>Duplicate Line Remover</FooterLinks>
          <FooterLinks>Invisible Text Generator</FooterLinks>
          <FooterLinks>Italic Text Converter</FooterLinks>
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
        <p>Code & Data Translation</p>
        <div>
          <FooterLinks>Bold Text Generator</FooterLinks>
          <FooterLinks>Bubble Text Generator</FooterLinks>
          <FooterLinks>Cursed Text Tool</FooterLinks>
          <FooterLinks>Duplicate Line Remover</FooterLinks>
          <FooterLinks>Invisible Text Generator</FooterLinks>
          <FooterLinks>Italic Text Converter</FooterLinks>
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
    </StyledFooter>
  );
}

export default Footer;
