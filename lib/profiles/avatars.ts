// https://stackoverflow.com/a/36380674/20143641
export function getAvatarFromGitHub(username: string, size?: number): URL {
  if (size) {
    return new URL(`https://github.com/${username}.png?size=${size}`);
  } else {
    return new URL(`https://github.com/${username}.png`);
  }
}
