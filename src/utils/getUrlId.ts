export function getUrlId(url: string) {
  const match = url.match(/\/people\/(\d+)\//);
  return match ? match[1] : null;
}
