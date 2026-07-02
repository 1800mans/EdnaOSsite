export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//.test(url);
}

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
