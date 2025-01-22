import styled from 'styled-components';
import IconLink from '../common/IconLink';

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100px;
  margin-top: 1.5em;
  padding: 1em;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.primary};
`;
const Logo = styled.h1`
  display: flex;
  align-items: center;
  padding: 0 2em 0 1em;
  border-right: 1px solid ${({ theme }) => theme.primary};
`;

const Sections = styled.div`
  display: flex;
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
`;
const SectionHeading = styled.h3`
  margin: 0 3em;
  padding: 0.2em 0;
  color: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.light};
`;
const SectionList = styled.ul`
  margin: 1em 0 1em 1em;
`;
const SectionListItem = styled.li`
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.dark};
    text-decoration: underline;
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 1em 3em;
`;

const CopyRight = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.5em 3em;
  font-size: 0.7em;
  text-transform: upper;
  color: ${({ theme }) => theme.primary};
`;

const links = [
  {
    id: 'sitemap',
    name: 'Site map',
    links: ['Home', 'Exhibitions', 'The museum', 'Profile'],
  },
  {
    id: 'visit',
    name: 'Visit us',
    links: ['Admission', 'Membership', 'Directions', 'Museum map'],
  },
  {
    id: 'contact',
    name: 'Contact',
    links: ['Call', 'Fax', 'Email', 'Address'],
  },
];

const icons = [
  { link: 'https://www.instagram.com', icon: 'instagram' },
  { link: 'https://www.facebook.com', icon: 'facebook' },
  { link: 'https://www.twitter.com', icon: 'twitter' },
  { link: 'https://www.tiktok.com', icon: 'tiktok' },
];

function Footer() {
  return (
    <StyledFooter>
      <Sections>
        <Logo>Museum</Logo>

        {links.map((section) => (
          <FooterSection key={section.id}>
            <SectionHeading>{section.name}</SectionHeading>
            <SectionList>
              {section.links.map((link) => (
                <SectionListItem key={link}>{link}</SectionListItem>
              ))}
            </SectionList>
          </FooterSection>
        ))}

        <FooterSection>
          <SectionHeading>Social media</SectionHeading>
          <FooterLinks>
            {icons &&
              icons.map((icon) => (
                <IconLink key={icon.icon} link={icon.link} icon={icon.icon} />
              ))}
          </FooterLinks>
        </FooterSection>
      </Sections>

      <CopyRight>&copy; Linn Johansen, 2025</CopyRight>
    </StyledFooter>
  );
}

export default Footer;
