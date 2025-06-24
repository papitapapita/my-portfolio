export interface LinkButton {
  name: string;
  path: string;
}

export const linkButtons: LinkButton[] = [
  { name: "Home", path: "/" },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
