import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import AuthLogin from "../../auth/components/AuthLogin/index";
import AuthLogout from "../../auth/components/AuthLogout";
import { AuthChildStyle, AuthPageStyle, BlueBlock, CompanyName, SubTitle, TextDiv } from "./index.stitches";

function Auth() {
  const { isLoggedIn} = useContext(AuthContext);

    return (
        <AuthPageStyle>
          <AuthChildStyle>
            <TextDiv>
              <CompanyName>FEMAQUA</CompanyName>
              <SubTitle>Ferramentas Maravilhosas que Adoro</SubTitle>
            </TextDiv>

            { isLoggedIn 
            ? <AuthLogout />
            : <AuthLogin />}
          </AuthChildStyle>
          <BlueBlock></BlueBlock>
        </AuthPageStyle>
    )
  }
  
  export default Auth;
  