// eslint-disable-next-line import/prefer-default-export
export const AvatarNames = (name: string) => {
  const splitName = name.split(" ");
  let msg = splitName[0].substring(0, 1);
  if (splitName.length > 0) {
    msg += `${splitName[splitName.length - 1].substring(0, 1)}`;
  }
  return msg;
};
