import styled from "styled-components";
import { cores } from "../../utils";

export const FooterContainer = styled.footer`
  height: 298px;
  background-color: ${cores.brancaRosada};
`;

export const FooterContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgLogo = styled.img`
  display: block;
  margin-top: 40px;
`;

export const Social = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 32px;
  margin-bottom: 80px;

  display: flex;
  gap: 16px;

  li {
    display: flex;
  }

  a {
    display: inline-flex;
  }

  img {
    display: block;
  }
`;

export const FooterText = styled.p`
  max-width: 480px;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.rosa};

  margin: 0 0 40px;
`;
