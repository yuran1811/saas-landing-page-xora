import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ title }: { title: string }) => (
    <LinkScroll
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold max-lg:h5 cursor-pointer uppercase text-p4 transition-colors duration-500 hover:text-p1 max-lg:my-4"
      onClick={() => setIsOpen(false)}
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        'fixed left-0 top-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4',
        hasScrolled &&
          'bg-gradient-to-b from-black-100/85 to-transparent py-2 backdrop-blur-[8px]',
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a href="/" className="flex-1 cursor-pointer lg:hidden">
          <img src="/images/xora.svg" alt="Xora Logo" width={115} height={55} />
        </a>

        <div
          className={clsx(
            'w-full max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0',
            isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none',
          )}
        >
          <div className="sidebar-before max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:flex-col max-lg:overflow-hidden max-lg:py-6 max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      'cursor-pointer transition-transform duration-500 max-lg:hidden',
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="Xora Logo"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>

            <div
              className={clsx(
                'absolute right-0 top-1/2 block h-[380px] w-[960px] -translate-x-[-290px] -translate-y-1/2 -rotate-90 lg:hidden',
              )}
            >
              <img
                src="/images/bg-outlines.svg"
                alt="outline"
                width={960}
                height={360}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline"
                width={960}
                height={360}
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
        </div>

        <button
          className="z-2 flex size-10 items-center justify-center rounded-full border-2 border-s4/90 lg:hidden"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <img
            src={`/images/${isOpen ? 'close' : 'magic'}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
