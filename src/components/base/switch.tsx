"use client";

import * as React from "react";
import * as ReactIcons from "@/components/base/icon";

export type SwitchContextStore = {
  page: number;
  size: number;
};

export type SwitchContextActions = {
  setPage: (page: number) => void;
  setSize: (size: number) => void;
};

export const SwitchContext = React.createContext<
  (SwitchContextStore & SwitchContextActions) | null
>(null);

export function useSwitchContext() {
  const context = React.useContext(SwitchContext);

  if (!context) {
    throw new Error("useSwitchContext must be used within the context.");
  }

  return context;
}

export const Provider = ({
  children
}: React.PropsWithChildren) => {
  const [size, setSize] = React.useState(0);
  const [page, setPage] = React.useState(0);

  function setCurrentSize(size: number) {
    setSize(size);
  }

  function setCurrentPage(page: number) {
    if (page < 0) {
      setPage(0);
    } else if (page >= size) {
      setPage(size - 1);
    } else {
      setPage(page);
    }
  }

  return (
    <SwitchContext.Provider
      value={{
        page,
        size,
        setSize: setCurrentSize,
        setPage: setCurrentPage
      }}
    >
      {children}
    </SwitchContext.Provider>
  );
};

export const Root = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return <div className="switch" ref={ref} {...props} />;
});

export const Body = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  const { page, size, setSize } = useSwitchContext();

  React.useEffect(() => {
    setSize(React.Children.count(children));
  }, [children]);

  const array = React.Children.toArray(children);
  const items = array.slice(page, size).concat(array.slice(0, page));

  return (
    <div className="switch__body" ref={ref} {...props}>
      {items}
    </div>
  );
});

export const Foot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const { page, size, setPage } = useSwitchContext();

  return (
    <div className="switch__foot" ref={ref} {...props}>
      <div className="switch__items">
        {size - page - 1} items left.
      </div>
      <div className="switch__navigation">
        <button onClick={() => setPage(page - 1)} disabled={size === 0}>
          <ReactIcons.ChevronLeftIcon />
        </button>
        <button onClick={() => setPage(page + 1)} disabled={size === 0}>
          <ReactIcons.ChevronRightIcon />
        </button>
      </div>
    </div>
  );
});
