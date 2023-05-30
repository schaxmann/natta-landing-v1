import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  color: white;
  z-index: 10;
`;

export const Para = styled.a`
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 700;
  font-size: 26px;
  color: white;
  margin: 20px;
  :hover {
    color: #3eae93;
    cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 700;
  font-size: 20px;
  color: black;
  background-color: white;
  padding: 5px;
  padding-top: 7px;
  border-radius: 5px;
  width: 120px;
  border: 0;
  height: 40px;
  transition-duration: 0.1s;
  &:hover {
    background-color: #3eae93;
    cursor: pointer;
    color: black;
    // text-decoration: underline;
  }
`;

const Menu = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
    filter: brightness(5000%);
  }
`;

export default function NavBar() {
  const handleLogout = async (e: any) => {
    e.preventDefault();
    // if (e.target.classList.contains("sign-in")) {
    //   router.push("/sign-in");
    // }
    // if (e.target.classList.contains("sign-up")) {
    //   router.push("/sign-up");
    // }
    // if (e.target.classList.contains("logout") && user) {
    //   try {
    //     await logOut();
    //     router.push("/");
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  };

  return (
    <Wrapper>
      <Para>natta</Para>
      <a>
        <Menu src="natta-icon.svg"></Menu>
      </a>
      {/* <LogoutButton onClick={handleLogout} className="sign-in" type="submit">
        Sign In
      </LogoutButton>
      <LogoutButton onClick={handleLogout} className="sign-up" type="submit">
        Sign Up
      </LogoutButton> */}
    </Wrapper>
  );
}
