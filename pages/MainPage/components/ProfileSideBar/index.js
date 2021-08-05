import AvatarImage from '../../../../src/components/AvatarImage';
import Box from '../../../../src/components/Box';
import { AlurakutProfileSidebarMenuDefault } from '../../../../src/lib/AlurakutCommons';

const ProfileSideBar = ({ user }) => (
  <Box as='aside'>
    <AvatarImage src={`https://github.com/${user}.png`} />
    <hr />
    <p><a className="boxLink" href={`https://github.com/${user}`}>@{user}</a></p>
    <hr />
    <AlurakutProfileSidebarMenuDefault />
  </Box>
);

export default ProfileSideBar;
