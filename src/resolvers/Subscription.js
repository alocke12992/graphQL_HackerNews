const newLinkSubscribe = (parent, args, context) => (
  context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
);

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => payload,
};

const newVoteSubscribe = (parent, args, context) => (
  context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
);

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => payload,
};

module.exports = {
  newLink,
  newVote,
};
