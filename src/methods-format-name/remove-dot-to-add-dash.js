export function removeDotToAddDash(name) {
  if (!name.includes('-')) {
    return name.replace(/\./gi, '-');
  }
  return name;
}