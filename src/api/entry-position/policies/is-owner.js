module.exports = (policyContext, config, { strapi }) => {
  const {
    state: {
      user: { id },
    },
    request: {
      body: {
        data: { user: idDeclaredInBody },
      },
    },
  } = policyContext;

  if (id == idDeclaredInBody) return true;
  return false;
};
