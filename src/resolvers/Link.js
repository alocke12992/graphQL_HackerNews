const postedBy = (parent, args, context) => context.prisma.link({ id: parent.id }).postedBy();

const votes = (parent, args, context) => context.prisma.link({ id: parent.id }).votes();

const voteCount = async (parent, args, context) => {
  const count = await context.prisma.votesConnection().aggregate().count();
  return count;
};

module.exports = {
  postedBy,
  votes,
  voteCount,
};
