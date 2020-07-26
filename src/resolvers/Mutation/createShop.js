export default async function createShop(_, { input }, context) {
  const { clientMutationId = null, ...mutationInput } = input;

  const shop = await context.mutations.createShop(context, { ...mutationInput });

  return { shop, clientMutationId };
}
