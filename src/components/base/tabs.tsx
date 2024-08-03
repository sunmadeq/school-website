"use client";

import * as React from "react";

type TabValue = string | "all";

type TabsStore = {
  tab: TabValue;
};

type TabsActions = {
  setTab: (tab: TabValue) => void;
};

const TabsContext = React.createContext<(TabsStore & TabsActions) | null>(null);

export function useTabsContext() {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("useTabsContext must be used within the context.");
  }

  return context;
}

export const Provider = ({
  children,
  defaultTab,
}: { defaultTab: string } & React.PropsWithChildren) => {
  const [tab, setTab] = React.useState(defaultTab);

  return (
    <TabsContext.Provider
      value={{
        tab,
        setTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const Root = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => <div className="tabs" ref={ref} {...props} />);

export const List = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => <div className="tabs__list" ref={ref} {...props} />);

export const Trigger = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button"> & {
    value: TabValue;
  }
>(({ value, ...props }, ref) => {
  const { tab, setTab } = useTabsContext();

  return (
    <button
      className="tabs__trigger"
      onClick={() => setTab(value)}
      data-active={tab === value}
      value={value}
      ref={ref}
      {...props}
    />
  );
});

export const Item = ({ value, children }: { value: TabValue } & React.PropsWithChildren) => {
  const { tab } = useTabsContext();

  if (tab !== value && tab !== "all") return null;

  return <>{children}</>;
};
