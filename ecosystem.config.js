module.exports = {
    apps: [
      {
        name: 'nursexcel-summit-client',
        script: 'npx',
        args: 'serve out -l 30017', // Serve the static files on port 3000
        cwd: '.',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };