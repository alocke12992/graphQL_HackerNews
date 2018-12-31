const feed = async (parent, args, context) => {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter },
    ],
  } : {};

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });

  const count = await context.prisma
    .linksConnection({
      where,
    })
    .aggregate()
    .count();

  return {
    links,
    count,
  };
};

const getLink = (parent, args, context) => context.prisma.link({ id: args.id });

module.exports = {
  feed,
  getLink,
};
