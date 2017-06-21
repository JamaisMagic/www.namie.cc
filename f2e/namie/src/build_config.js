const path = require('path');

const srcRoot = path.resolve(__dirname);
const distRoot = path.resolve(__dirname, '..', '..', '..', 'static');

module.exports = {
    srcRoot: srcRoot,
    dist_root: distRoot,
    public_path_prefix: '/static',
    ASSETS_COMMON_NAME: 'assets_common',
    langs: new Set(['en', 'zh'])
};
