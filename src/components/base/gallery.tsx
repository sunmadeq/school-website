"use client";

import * as React from "react";
import * as ReactIcons from "@/components/base/icon";

export type GalleryContextStore = {
  page: number;
  size: number;
};

export type GalleryContextActions = {
  setPage: (page: number) => void;
  setSize: (size: number) => void;
};

export const GalleryContext = React.createContext<
  (GalleryContextStore & GalleryContextActions) | null
>(null);

export function useGalleryContext() {
  const context = React.useContext(GalleryContext);

  if (context === null) {
    throw new Error("useGalleryContext must be used within GalleryContext");
  }

  return context;
}

export const Provider = ({ children }: React.PropsWithChildren) => {
  const [size, setSize] = React.useState(0);
  const [page, setPage] = React.useState(0);

  function setCurrentSize(size: number) {
    setSize(size);
  }

  function setCurrentPage(page: number) {
    if (page < 0) {
      setPage(size - 1);
    } else if (page >= size) {
      setPage(0);
    } else {
      setPage(page);
    }
  }

  return (
    <GalleryContext.Provider
      value={{
        page,
        size,
        setSize: setCurrentSize,
        setPage: setCurrentPage,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export const Root = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return <div className="gallery" ref={ref} {...props} />;
});

export const Images = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    images: string[];
  }
>(({ images, children, ...props }, ref) => {
  const { page, size, setSize } = useGalleryContext();

  React.useEffect(() => {
    setSize(images.length);
  }, []);

  const items = images.slice(page, size).concat(images.slice(0, page));

  return (
    <div className="gallery__images" ref={ref} {...props}>
      {items.map((src) => (
        <img key={src} src={src} alt="" />
      ))}
    </div>
  );
});

export const Body = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return <div className="gallery__body" ref={ref} {...props} />;
});

export const Title = React.forwardRef<React.ElementRef<"h3">, React.ComponentPropsWithoutRef<"h3">>(
  (props, ref) => {
    return <h3 className="gallery__title" ref={ref} {...props} />;
  },
);

export const Navigation = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const { page, size, setPage } = useGalleryContext();

  return (
    <nav className="gallery__navigation" ref={ref} {...props}>
      <button onClick={() => setPage(page - 1)} disabled={size === 0}>
        <ReactIcons.ChevronLeftIcon />
      </button>
      <button onClick={() => setPage(page + 1)} disabled={size === 0}>
        <ReactIcons.ChevronRightIcon />
      </button>
    </nav>
  );
});

export const Description = React.forwardRef<
  React.ElementRef<"p">,
  React.ComponentPropsWithoutRef<"p">
>((props, ref) => {
  return <p className="gallery__description" ref={ref} {...props} />;
});
