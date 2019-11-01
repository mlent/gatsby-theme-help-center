const fs = require("fs");

const DEFAULT_OPTIONS = {
  basePath: "/"
};

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "src/data";
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Category implements Node @dontInfer {
      id: ID!
      name: String!
      description: String!
      slug: String!
      order: Int!
      url: String!
    }
  `);
};

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || DEFAULT_OPTIONS.basePath;

  createResolvers({
    Category: {
      url: {
        resolve: source => `${basePath}categories/${source.slug}`
      }
    }
  });
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || DEFAULT_OPTIONS.basePath;

  actions.createPage({
    path: basePath,
    component: require.resolve("./src/home.tsx")
  });

  const result = await graphql(`
    query {
      allCategory(sort: { fields: order, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Error loading categories", result.errors);
    return;
  }

  const categories = result.data.allCategory.nodes;

  categories.forEach(category => {
    const { id, slug } = category;

    actions.createPage({
      path: `${basePath}categories/${slug}`,
      component: require.resolve("./src/templates/category.tsx"),
      context: {
        categoryId: id
      }
    });
  });
};
