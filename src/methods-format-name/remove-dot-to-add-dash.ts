export function removeDotToAddDash(name: string) {
  if (!name.includes('-')) {
    return name.replace(/\./gi, '-');
  }
  return name;
}