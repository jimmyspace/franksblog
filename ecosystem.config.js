module.exports = {
    apps: [
      {
        name: 'Frankblogs',
        script: './server/index.js',
        watch: true,
        env: {
            NODE_ENV: "production"
        }
      }
    ]
}