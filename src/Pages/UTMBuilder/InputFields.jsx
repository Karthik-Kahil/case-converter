import styled from "styled-components";
import { InputFieldSet } from "./InputFieldSet";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20px 20px;
  grid-gap: 5rem;
  width: 100%;
  margin-top: 20px;
  max-height: 300px;
`;

function InputFields() {
  return (
    <StyledDiv>
      <InputFieldSet htmlFor={"websiteURL"} label={"Web Site URL"} />
      <InputFieldSet
        htmlFor={"websiteURL"}
        label={"Campaign Source (utm_source)"}
      />
      <InputFieldSet
        htmlFor={"websiteURL"}
        label={"Campaign Medium (utm_medium)"}
      />
      <InputFieldSet
        htmlFor={"websiteURL"}
        label={"Campaign Name (utm_campaign)"}
      />
      <InputFieldSet
        htmlFor={"websiteURL"}
        label={"Campaign Term (utm_term)"}
      />
      <InputFieldSet
        htmlFor={"websiteURL"}
        label={"Campaign Content (utm_content)"}
      />
    </StyledDiv>
  );
}

export default InputFields;
