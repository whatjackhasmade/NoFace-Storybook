const path = require(`path`)

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("ts-loader"),
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  })
  config.resolve.extensions.push(".ts", ".tsx")

  let rule = config.module.rules.find(
    r =>
      // it can be another rule with file loader
      // we should get only svg related
      r.test &&
      r.test.toString().includes("svg") &&
      // file-loader might be resolved to js file path so "endsWith" is not reliable enough
      r.loader &&
      r.loader.includes("file-loader")
  )
  rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  })

  config.module.rules.unshift({
    test: /\.js$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["react-app"],
        },
      },
    ],
    include: [
      path.join(path.dirname(__dirname), "node_modules/gatsby/cache-dir"),
    ],
  })

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      assets: path.join(path.dirname(__dirname), `src/assets`),
      atoms: path.join(path.dirname(__dirname), `src/components/atoms`),
      components: path.join(path.dirname(__dirname), `src/components`),
      data: path.join(path.dirname(__dirname), `src/data`),
      helpers: path.join(path.dirname(__dirname), `src/components/helpers`),
      knobs: path.join(path.dirname(__dirname), `src/data/knobs`),
      molecules: path.join(path.dirname(__dirname), `src/components/molecules`),
      organisms: path.join(path.dirname(__dirname), `src/components/organisms`),
      pages: path.join(path.dirname(__dirname), `src/components/pages`),
      particles: path.join(path.dirname(__dirname), `src/components/particles`),
      templates: path.join(path.dirname(__dirname), `src/components/templates`),
    },
  }

  return config
}
