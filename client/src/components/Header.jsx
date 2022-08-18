import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import useWindowSize from '../hooks/useWindowSize';
import StyledTag from './StyledTag';

function Header() {
  const router = useRouter();
  const winSize = useWindowSize();

  if (winSize.width < 768) {
    return (
      <nav className="fixed z-20 flex h-16 w-screen justify-between bg-blackBg/60 px-6 backdrop-blur-xl">
        <button type="button" onClick={() => router.push('/')}>
          <span className="flex items-center justify-center  text-secondarySoft">
            <Icon
              className="h-10 w-10 text-secondarySoft"
              icon="icon-park-outline:avocado"
            />
            Awakate.dev
          </span>
        </button>
        <button type="button">
          <Icon
            className="h-10 w-10 text-secondarySoft"
            icon="heroicons-outline:menu-alt-4"
          />
        </button>
      </nav>
    );
  }
  return (
    <nav className="fixed z-20 flex h-16 w-screen justify-between bg-blackBg/60 px-6 backdrop-blur">
      <button type="button" onClick={() => router.push('/')}>
        <span className="flex w-52 items-center justify-center text-secondarySoft">
          <Icon
            className="h-10 w-10 text-secondarySoft"
            icon="icon-park-outline:avocado"
          />
          Awakate.dev
        </span>
      </button>

      <div className=" flex w-1/2 flex-row items-center justify-items-center">
        <ul className="flex w-full flex-row items-center justify-evenly justify-items-center">
          <StyledTag type="li">
            <button type="button" onClick={() => router.push('/')}>
              Home
            </button>
          </StyledTag>
          <StyledTag type="li">
            <button type="button" onClick={() => router.push('/Portfolio')}>
              Portfolio
            </button>
          </StyledTag>
          <StyledTag type="li">
            <button type="button" onClick={() => router.push('/About')}>
              About me
            </button>
          </StyledTag>
          <StyledTag type="li">
            <button type="button" onClick={() => router.push('/Contact')}>
              Contact
            </button>
          </StyledTag>
          <StyledTag type="li">
            <button
              type="button"
              className="flex items-center gap-y-1"
              onClick={() => router.push('/Blog')}
            >
              <span>Blog</span>
              <Icon icon="pepicons:angle-down" />
            </button>
          </StyledTag>
        </ul>
      </div>

      <div className="flex w-52 flex-row items-center justify-items-end">
        <a
          className="text-textGray hover:text-primary"
          href="https://github.com/awakatedev/"
        >
          <Icon className="h-8 w-8" icon="bi:github" />
        </a>
      </div>
    </nav>
  );
}
export default Header;
