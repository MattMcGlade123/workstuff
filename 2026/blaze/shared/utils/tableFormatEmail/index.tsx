// long emails can break the table layout, so we need to format them to prevent that
export const formatEmail = (email: string) => {
  const [name, domain] = email.split('@');

  return (
    <>
      {name}
      <wbr />@{domain}
    </>
  );
};
