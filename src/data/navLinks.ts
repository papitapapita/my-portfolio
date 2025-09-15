export interface LinkButton {
  name: string;
  path: string;
  external: boolean;
}

export const linkButtons: LinkButton[] = [
  { name: "Home", path: "/", external: false },
  {
    name: "resume",
    path: "/resume",
    external: false,
  },
  {
    name: "work",
    path: "/work",
    external: false,
  },
  {
    name: "services",
    path: "/services",
    external: false,
  },
  {
    name: "contact",
    path: "/contact",
    external: false,
  },
  {
    name: "hire me",
    path: "https://www.linkedin.com/in/jonathan-olivos/",
    external: true,
  },
];
