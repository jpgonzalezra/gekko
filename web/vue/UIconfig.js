// This config is used in both the
// frontend as well as the web server.

// see https://github.com/askmike/gekko/blob/stable/docs/installing_gekko_on_a_server.md

const CONFIG = {
    headless: true,
    api: {
        host: '0.0.0.0',
        port: 3000,
    },
    ui: {
        ssl: false,
        host: '45.55.88.96',
        port: 3000,
        path: '/'
    }
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
