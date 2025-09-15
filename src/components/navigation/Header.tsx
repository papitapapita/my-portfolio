import { MobileNav } from "./MobileNav";
import { Nav } from "./Nav";
import { TransitionLink } from "./TransitionLink";

export function Header() {
  return (
    <header aria-label="Main Navigation">
      <div className="container flex justify-around xl:justify-between mx-auto py-8">
        <TransitionLink href="/" aria-label="Go to homepage">
          <h1 className="text-4xl font-semibold">
            Jonathan<span className="text-accent">.</span>
          </h1>
        </TransitionLink>

        <div className="hidden xl:flex">
          <Nav />
        </div>

        <div className="xl:hidden flex">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
