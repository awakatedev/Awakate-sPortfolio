/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import useWindowSize from '../hooks/useWindowSize';
import StyledTag from './StyledTag';

function Header() {
  const router = useRouter();
  const winSize = useWindowSize();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFading, setFading] = useState(false);

  const handleLinkClick = (route) => {
    setFading(true);
    setTimeout(() => {
      router.push(route);
      setModalOpen(false);
      setFading(false);
    }, 300);
  };

  const toggleModal = () => {
    if (isModalOpen) {
      setFading(true);
      setTimeout(() => {
        setModalOpen(false);
        setFading(false);
      }, 300);
    } else {
      setModalOpen(true);
    }
  };

  if (winSize.width < 768) {
    return (
      <>
        <nav className="fixed z-20 flex h-16 w-screen justify-between bg-blackBg/60 px-6 backdrop-blur-xl">
          <button type="button" onClick={() => router.push('/')}>
            <span className="flex items-center justify-center text-secondarySoft">
              <Icon
                className="h-10 w-10 text-secondarySoft"
                icon="icon-park-outline:avocado"
              />
              Awakate.dev
            </span>
          </button>
          <button type="button" onClick={toggleModal}>
            <Icon
              className="h-10 w-10 text-secondarySoft"
              icon={
                isModalOpen
                  ? 'heroicons-outline:x'
                  : 'heroicons-outline:menu-alt-4'
              }
            />
          </button>
        </nav>
        {isModalOpen && (
          <div
            className={`fixed left-0 top-14 z-30 flex h-full w-full items-center justify-center bg-black/90 text-center ${
              isFading
                ? 'opacity-0 transition-opacity duration-300'
                : 'opacity-100'
            }`}
          >
            <ul className="mb-40 flex flex-col gap-8 text-4xl text-textGray">
              <li>
                <button
                  className={router.pathname === '/' ? 'text-primary' : ''}
                  onClick={() => handleLinkClick('/')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={
                    router.pathname === '/Portfolio' ? 'text-primary' : ''
                  }
                  onClick={() => handleLinkClick('/Portfolio')}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  className={router.pathname === '/About' ? 'text-primary' : ''}
                  onClick={() => handleLinkClick('/About')}
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  className={
                    router.pathname === '/Contact' ? 'text-primary' : ''
                  }
                  onClick={() => handleLinkClick('/Contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </>
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

      <div className="flex w-1/2 flex-row items-center justify-items-center">
        <ul className="flex w-full flex-row items-center justify-evenly justify-items-center">
          <StyledTag type="li">
            <button
              type="button"
              className={router.pathname === '/' ? 'text-primary' : ''}
              onClick={() => router.push('/')}
            >
              Home
            </button>
          </StyledTag>
          <StyledTag type="li">
            <button
              type="button"
              className={router.pathname === '/Portfolio' ? 'text-primary' : ''}
              onClick={() => router.push('/Portfolio')}
            >
              Portfolio
            </button>
          </StyledTag>
          <StyledTag type="li">
            <button
              type="button"
              className={router.pathname === '/About' ? 'text-primary' : ''}
              onClick={() => router.push('/About')}
            >
              About me
            </button>
          </StyledTag>
          <StyledTag type="li">
            <button
              type="button"
              className={router.pathname === '/Contact' ? 'text-primary' : ''}
              onClick={() => router.push('/Contact')}
            >
              Contact
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
