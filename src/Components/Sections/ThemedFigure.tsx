import type { ReactNode } from "react";

type ThemedFigureProps = {
  light: string;
  /** Omit to use the light artwork in both themes. */
  dark?: string;
  alt: string;
  width: number;
  height: number;
  /** Constrains the image; the caption still spans the full column. */
  imageClassName?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * A paper figure with an optional dark-mode artwork.
 *
 * The site toggles themes with a class on <html>, not `prefers-color-scheme`,
 * so <picture media=...> cannot follow it — hence two images, one hidden per
 * theme. Both are lazy so the hidden one is not fetched while off-screen.
 */
export default function ThemedFigure({
  light,
  dark,
  alt,
  width,
  height,
  imageClassName = "",
  className = "",
  children,
}: ThemedFigureProps) {
  return (
    <figure className={`m-0 ${className}`}>
      <a
        href={light}
        target="_blank"
        rel="noopener noreferrer"
        className={dark ? "block dark:hidden" : "block"}
      >
        <img
          src={light}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className={`block w-full ${imageClassName}`}
        />
      </a>

      {dark && (
        <a
          href={dark}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden dark:block"
        >
          <img
            src={dark}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            className={`block w-full ${imageClassName}`}
          />
        </a>
      )}

      {children}
    </figure>
  );
}
