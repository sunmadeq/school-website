import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import Header from "@/components/page/header";
import Footer from "@/components/page/footer";
import Main from "@/components/page/main";
import fonts from "@/config/fonts";
import "@/styles/styles.scss";

export const metadata: Metadata = {
  title: {
    default: "Little Learners",
    template: "%s - Little Learners",
  },
  description: "This is the description of the website.",
  icons: {
    icon: "/logotypes/logotype.svg"
  }
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
