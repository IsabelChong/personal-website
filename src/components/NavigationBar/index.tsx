import { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import frame from '../../assets/other/frame_navigation.svg';

export default function NavigationBar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [framePosition, setFramePosition] = useState(0);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const links = useMemo(() => [
    { href: '/home', label: 'ChatWithMe' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/education', label: 'Education' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
  ], []);

  useEffect(() => {
    const activeLink = linkRefs.current[links.findIndex(link => link.href === active)];
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      setFramePosition(rect.left - 505);
    }
  }, [active, links]);

  const handleClick = (href: string) => {
    setActive(href);
    const activeLink = linkRefs.current[links.findIndex(link => link.href === href)];
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      setFramePosition(rect.left - 505);
    }
  };

  return (
    <div className="mb-10">
      <nav className="relative flex justify-center space-x-20 font-pixelify-sans text-xl">
        {links.map((link, index) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={() => handleClick(link.href)}
            ref={el => linkRefs.current[index] = el}
            className={'relative z-10'}
          >
            {link.label}
          </Link>
        ))}
        <img
          src={frame}
          alt="Frame"
          className="absolute transition-transform duration-300 ease-in-out w-52 h-12"
          style={{
            transform: `translateX(${framePosition}px)`,
            bottom: '-10px',
          }}
        />
      </nav>
    </div>
  );
}
