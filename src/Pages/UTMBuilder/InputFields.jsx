/* eslint-disable react/prop-types */
import styled from "styled-components";
import { InputFieldSet } from "./InputFieldSet";
import { useForm } from "react-hook-form";

const StyledDiv = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 30px 30px;
    grid-gap: 6rem;
    width: 100%;
    margin-top: 20px;
    max-height: 300px;
  }
`;

function InputFields({ textHandler }) {
  const { register, handleSubmit } = useForm();

  return (
    <StyledDiv>
      <form
        onChange={handleSubmit((data) => {
          textHandler(data);
        })}
      >
        <InputFieldSet
          register={register}
          htmlFor={"siteURL"}
          label={"Web Site URL"}
        />
        <InputFieldSet
          register={register}
          htmlFor={"campaignSource"}
          label={"Campaign Source (utm_source)"}
        />
        <InputFieldSet
          register={register}
          htmlFor={"campaignMedium"}
          label={"Campaign Medium (utm_medium)"}
        />
        <InputFieldSet
          register={register}
          htmlFor={"campaignName"}
          label={"Campaign Name (utm_campaign)"}
        />
        <InputFieldSet
          register={register}
          htmlFor={"campaignTerm"}
          label={"Campaign Term (utm_term)"}
        />
        <InputFieldSet
          register={register}
          htmlFor={"campaignContent"}
          label={"Campaign Content (utm_content)"}
        />
      </form>
    </StyledDiv>
  );
}

export default InputFields;
