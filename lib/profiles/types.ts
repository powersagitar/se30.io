export type Email = `${string}@${string}`;
export type GitHubProfile = `https://github.com/${string}`;
export type LinkedInProfile = `https://www.linkedin.com/in/${string}`;
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
  github?: GitHubProfile;
  linkedin?: LinkedInProfile;
};
