module.exports = {
    apps : [{
        name: 'atom-executor',
        script: '../node_modules/ts-node/dist/bin.js',
        args: 'start.ts',
        interpreter: 'none',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production',
        }
    }]
};