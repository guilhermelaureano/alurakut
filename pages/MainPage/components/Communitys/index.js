import AvatarImage from '../../../../src/components/AvatarImage';
import { ProfileRelationsBoxWrapper } from '../../../../src/components/ProfileRelations';

function Avatar ({ item }) {
  return (
    <li key={item.name}>
      <a href={`/${item.url}`}>
        <AvatarImage src={item.avatar} />
        <span>{ item.name }</span>
      </a>
    </li>
  );
 }

const Communitys = ({entries, title}) => (
  <ProfileRelationsBoxWrapper>
    <h2 className="smallTitle">{title}({entries.length})</h2>
    <ul>{entries.map((item) => <Avatar item={item} />)}</ul>
  </ProfileRelationsBoxWrapper>
);

export default Communitys;
