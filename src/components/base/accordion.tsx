"use client";

import * as React from "react";
import * as ReactIcons from "@/components/base/icon";

type AccordionContextState = {
  value: string | null;
};

type AccordionContextActions = {
  toggleValue: (value: string | null) => void;
};

export const AccordionContext = React.createContext<
  (AccordionContextState & AccordionContextActions) | null
>(null);

export function useAccordionContext() {
  const context = React.useContext(AccordionContext);

  if (!context) {
    throw new Error("useAccordionContext must be used within the context.");
  }

  return context;
}

export const AccordionItemContext = React.createContext<{
  id: string;
} | null>(null);

export function useAccordionItemContext() {
  const context = React.useContext(AccordionItemContext);

  if (!context) {
    throw new Error("useAccordionItemContext must be used within the context.");
  }

  return context;
}

export const Provider = ({ children }: React.PropsWithChildren) => {
  const [value, setValue] = React.useState<string | null>(null);

  function toggleValue(current: string | null) {
    if (value === current) {
      setValue(null);
    } else {
      setValue(current);
    }
  }

  return (
    <AccordionContext.Provider value={{ value, toggleValue }}>{children}</AccordionContext.Provider>
  );
};

export const Root = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return <div className="accordion" ref={ref} {...props} />;
});

export const Item = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    id: string;
  }
>(({ id, ...props }, ref) => {
  const context = useAccordionContext();

  return (
    <AccordionItemContext.Provider value={{ id }}>
      <div className="accordion__item" data-active={context.value === id} ref={ref} {...props} />
    </AccordionItemContext.Provider>
  );
});

export const Head = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return <div className="accordion__head" ref={ref} {...props} />;
});

export const Title = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return <div className="accordion__title" ref={ref} {...props} />;
});

export const Trigger = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>((props, ref) => {
  const rootContext = useAccordionContext();
  const itemContext = useAccordionItemContext();

  return (
    <button
      className="accordion__trigger"
      onClick={() => rootContext.toggleValue(itemContext.id)}
      ref={ref}
      {...props}
    >
      {rootContext.value === itemContext.id ? <ReactIcons.CloseIcon /> : <ReactIcons.OpenIcon />}
    </button>
  );
});

export const Body = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const rootContext = useAccordionContext();
  const itemContext = useAccordionItemContext();

  if (rootContext.value !== itemContext.id) return null;

  return <div className="accordion__body" ref={ref} {...props} />;
});
