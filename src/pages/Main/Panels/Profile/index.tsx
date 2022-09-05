import { useRecoilValue } from 'recoil';
import { ProfileAtom } from '../../../../atoms/profile.atom';
import View from '../../../../components/View';

import style from './style.module.scss';

const developers = [
  {
    name: 'Разработал это приложение',
    subname: 'Лутфрахманов Дамир',
    image:
      'https://portal.midis.info/upload/resize_cache/main/7a5/mvssbnm6001oon0s0zpcwomiud6mi88g/200_200_2/livesey.webp',
  },
  {
    name: 'Разработал сервер',
    subname: 'Даниил Сагабутдинов',
    image:
      'https://portal.midis.info/upload/resize_cache/main/f00/khnnhrlon4kh5lu9o1az7lb045vx9dp6/200_200_2/jojo_livesey.webp',
  },
  {
    name: 'Тот самый чел',
    subname: 'Маркин Егор',
    image:
      'https://portal.midis.info/upload/main/2d0/4lgw8i9rxfqwpa5p05ju5k0yliqpzgwz/egor_livesey.gif',
  },
];

export default function ProfileView() {
  const profile = useRecoilValue(ProfileAtom);

  const version = document.getElementsByTagName('html')[0].getAttribute('version');
  return (
    <View>
      <div className={style.profile}>
        <img src={profile.pic} />
        <div>
          <span>{profile.name}</span>
          <span>{profile.group}</span>
        </div>
      </div>
      <div className={style.developers}>
        <h3>Разработчики</h3>
        <ul>
          {developers.map((developer) => (
            <li className={style.developer} key={developer.subname}>
              <img src={developer.image} />
              <div>
                <h4>{developer.name}</h4>
                <span>{developer.subname}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h4 className={style.version}>Version: {version}</h4>
    </View>
  );
}
