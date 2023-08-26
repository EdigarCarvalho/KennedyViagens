import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import AuthLogin from "../../auth/components/AuthLogin/index";
import AuthLogout from "../../auth/components/AuthLogout";
import { AuthChildStyle, AuthPageStyle, BlueBlock, CompanyName, SubTitle, TextDiv } from "./index.stitches";

function Auth() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <AuthPageStyle>
      <AuthChildStyle>
        <TextDiv>
          <CompanyName data-testid="company-name">FEMAQUA</CompanyName>
          <SubTitle data-testid="sub-title">Ferramentas Maravilhosas que Adoro</SubTitle>
        </TextDiv>

        {isLoggedIn ? <AuthLogout data-testid="auth-logout" /> : <AuthLogin data-testid="auth-login" />}
      </AuthChildStyle>
      <BlueBlock data-testid="blue-block"></BlueBlock>
    </AuthPageStyle>
  );
}

export default Auth;
