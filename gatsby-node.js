createPage({
  path: `/page2/`,
  component: path.resolve(`./src/pages/page2.jsx`),
  // The context is passed as props to the component as well
  // as into the component's GraphQL query.
  context: {
    id: `123456`,
  },
});
