import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import Marker from './Marker';

interface ButtonProps {
  icon?: string;
  href?: string;
  markerFill?: string;
  containerClassName?: string;
  onClick?: React.MouseEventHandler;
}

const Button = ({
  icon,
  href,
  markerFill,
  containerClassName,
  onClick,
  children,
}: ButtonProps & PropsWithChildren) => {
  const buttonClassName = clsx(
    'g5 group relative rounded-2xl p-0.5 shadow-500',
    containerClassName,
  );

  const Inner = () => (
    <>
      <span className="g4 inner-before relative flex min-h-[60px] items-center overflow-hidden rounded-2xl px-4 group-hover:before:opacity-100">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill || ''} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="z-10 mr-5 size-10 object-contain"
          />
        )}
        <span className="base-bold base-bold relative z-2 font-poppins uppercase text-p1">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a className={buttonClassName} href={href}>
      <Inner />
    </a>
  ) : (
    <button className={buttonClassName} onClick={onClick}>
      <Inner />
    </button>
  );
};

export default Button;
