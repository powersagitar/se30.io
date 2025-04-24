export type Email = `${string}@${string}`;
export type Portfolio = {
  displayName: string;
  href: URL;
};

export type Profile = {
  firstName: string;
  lastName: string;
  bio?: string;
  email?: Email;
  portfolio?: Portfolio;
  github?: string;
  linkedin?: string;
};
