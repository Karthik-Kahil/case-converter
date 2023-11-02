import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { typeSelector } from "../Pages/Bold/boldSlice";

const StyledSelection = styled.select`
  color: #f5eec8;
  background-color: #186f65;
  border: 0;
  padding: 1rem;
  width: 100%;

  & select {
    padding-right: 1rem;
  }
`;

// eslint-disable-next-line react/prop-types
function TextSelection() {
  const dispatch = useDispatch();
  const { differentType } = useSelector((select) => select.boldConvert);

  const onChangeHandler = (e) => {
    dispatch(typeSelector(e.target.value));
  };

  return (
    <StyledSelection
      name="fontsSelection"
      onChange={onChangeHandler}
      value={differentType}
    >
      <option value="sansSerifBold">𝗛𝗘𝗟𝗟𝗢 𝗪𝗢𝗥𝗟𝗗, 𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟲𝟴𝟵</option>
      <option value="sansSerif">𝖧𝖤𝖫𝖫𝖮 𝖶𝖮𝖱𝖫𝖣, 𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟨𝟪𝟫</option>
      <option value="sansSerifItalic">𝘏𝘌𝘓𝘓𝘖 𝘞𝘖𝘙𝘓𝘋, 01234567689</option>
      <option value="sansSerifBoldItalic">𝙃𝙀𝙇𝙇𝙊 𝙒𝙊𝙍𝙇𝘿, 01234567689</option>
      <option value="bold">𝐇𝐄𝐋𝐋𝐎 𝐖𝐎𝐑𝐋𝐃, 𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟔𝟖𝟗</option>
      <option value="italic">𝐻𝐸𝐿𝐿𝑂 𝑊𝑂𝑅𝐿𝐷, 01234567689</option>
      <option value="boldItalic">𝑯𝑬𝑳𝑳𝑶 𝑾𝑶𝑹𝑳𝑫, 01234567689</option>
      <option value="scriptItalic">He𝒧𝒧o 𝒲o𝒭𝒧𝒟, 01234567689</option>
      <option value="scriptBold">𝓗𝓔𝓛𝓛𝓞 𝓦𝓞𝓡𝓛𝓓, 01234567689</option>
      <option value="fraktur">H𝔈𝔏𝔏𝔒 𝔚𝔒𝔕𝔏𝔇, 01234567689</option>
      <option value="boldFraktur">𝕳𝕰𝕷𝕷𝕺 𝖂𝕺𝕽𝕷𝕯, 01234567689</option>
      <option value="doubleStruck">H𝔼𝕃𝕃𝕆 𝕎𝕆𝕉𝕃𝔻, 𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟞𝟠𝟡</option>
      <option value="monospace">𝙷𝙴𝙻𝙻𝙾 𝚆𝙾𝚁𝙻𝙳, 𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟼𝟾</option>
      <option value="super">ᴴᴱᴸᴸᴼ ᵂᴼᴿᴸᴰ, ⁰¹²³⁴⁵⁶⁷⁶⁸⁹</option>
      <option value="parenthesized">🄗🄔🄛🄛🄞 🄦🄞🄡🄛🄓, 0⑴⑵⑶⑷⑸⑹⑺⑹⑻⑼</option>
      <option value="circled">ⒽⒺⓁⓁⓄ ⓌⓄⓇⓁⒹ, 0①②③④⑤⑥⑦⑥⑧⑨</option>
      <option value="squaredCapital">🄷🄴🄻🄻🄾 🅆🄾🅁🄻🄳, 01234567689</option>
      <option value="negativeCircledCapital">🅗🅔🅛🅛🅞 🅦🅞🅡🅛🅓, 01234567689</option>
      <option value="negativeSquaredCapital">🅷🅴🅻🅻🅾 🆆🅾🆁🅻🅳, 01234567689</option>
      <option value="regionalIndicatorSymbol">
        🇭🇪🇱🇱🇴 🇼🇴🇷🇱🇩, 01234567689
      </option>
      <option value="fullWidth">
        ＨＥＬＬＯ ＷＯＲＬＤ, ０１２３４５６７６８９
      </option>
      <option value="myanmar">ꓧꓰꓡꓡꓳ ꓪꓳꓣꓡꓓ, 01234567689</option>
      <option value="cherokee">ᎻᎬᏞᏞᎤ ᏔᎤᎡᏞᎠ, ᎾᏐ23Ꮞ5Ꮾ7Ꮾ8Ꮽ</option>
      <option value="romanNumerals">Hello World, ⅠⅡⅢⅣⅤⅥⅦⅧⅦⅨⅩ</option>
      <option value="romanNumeralsSmall">Hello World, ⅳⅴⅵⅶⅷⅸⅹⅺⅹⅻⅼ</option>
    </StyledSelection>
  );
}

export default TextSelection;
