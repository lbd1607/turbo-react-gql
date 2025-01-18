export const toGlobalId = (typeName: string, id: string | number) => {
  return Buffer.from(`${typeName}-${id}`).toString("base64");
};

export const fromGlobalId = (encodedID: string | null | undefined) => {
  if (!encodedID) return [];

  const decoded = Buffer.from(encodedID, "base64").toString("ascii");

  return decoded.split("-");
};
