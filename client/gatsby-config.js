module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'HQL',
        // This is field under which it's accessible
        fieldName: 'hql',
        // Url to query from
        url: 'http://localhost:4000',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
