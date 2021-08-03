import AvatarImage from '../src/components/AvatarImage';
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

function ProfileSideBar({ user }) {
  return (
    <Box>
      <AvatarImage user={user} />
    </Box>
  );
}

function PeopleAvatar({ person }) {
 return (
   <li key={person}>
    <a href={`/users/${person}`}>
      <AvatarImage user={person} />
      <span>{ person }</span>
    </a>
   </li>
 );
}

export default function Home() {
  const user = 'guilhermelaureano';
  const people = [
    'guilhermelaureano',
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea">
          <ProfileSideBar user={user} />
        </div>
        <div className="welcomeArea">
          <Box>
            <h1 className="title" >Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da comunidade ({people.length})</h2>
            <ul>{people.map((item) => <PeopleAvatar person={item} />)}</ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
