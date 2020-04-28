const fs = require('fs');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const DEFAULT_OPTIONS = {
  basePath: '/',
};

// Enable resolving imports for mdx
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

// Make sure the data directory exists
exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const contentPaths = [
    path.join(program.directory, 'src/data/categories'),
    path.join(program.directory, 'src/pages'),
  ];

  contentPaths.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.info(`creating the ${dir} directory`);
      fs.mkdirSync(dir);
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    const articleSlug = `/articles${value}`;

    createNodeField({
      name: 'slug',
      node,
      value: articleSlug,
    });
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
      image: String!
    }
  `);
};

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || DEFAULT_OPTIONS.basePath;

  createResolvers({
    Category: {
      url: {
        resolve: (source) => `${basePath}categories/${source.slug}`,
      },
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || DEFAULT_OPTIONS.basePath;
  const { createPage } = actions;

  // Create the index page
  createPage({
    path: basePath,
    component: require.resolve('./src/home.tsx'),
    context: {
      basePath,
    },
  });

  const result = await graphql(`
    query {
      allCategory(sort: { fields: order, order: ASC }) {
        nodes {
          id
          slug
        }
      }
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('Error loading data to create pages', result.errors);
    return;
  }

  const categories = result.data.allCategory.nodes;
  const articles = result.data.allMdx.edges;

  // Create index pages for each help center category
  categories.forEach((category) => {
    const { id, slug } = category;

    createPage({
      path: `${basePath}categories/${slug}`,
      component: require.resolve('./src/templates/category.tsx'),
      context: {
        categoryId: id,
        basePath,
      },
    });
  });

  // Create pages for each help center article
  articles.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve('./src/templates/article.tsx'),
      context: {
        articleId: node.id,
        basePath,
      },
    });
  });
};
