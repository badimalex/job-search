import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 12px;
  margin: 0 auto;
  max-width: 1100px;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;

  a {
    padding: 0 15px;
  }
`;

const ProfileLink = styled.a`
  margin-left: auto;
`;

const Footer = styled.footer``;

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <>
      <Container>
        <Header>
          <Link to="/">Jobs</Link>
          <Link to="/resumes">Specialist</Link>
          <Link to="/companies">Companies</Link>
          <Link to="/salaries">Salaries</Link>

          <ProfileLink href="#">Profile</ProfileLink>
        </Header>

        {children}
        <Footer>
          <hr />
          <p>copyright</p>
        </Footer>
      </Container>
    </>
  );
}

export default MainLayout;
