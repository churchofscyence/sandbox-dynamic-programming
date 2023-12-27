const { src, dest, series } = require('gulp');

async function defaultTask() {
   console.log( 'Gulp is working!' );
}

async function copyJqueryTask() {
    return src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(dest('./lib/public/jquery/dist/'));
}

async function copyBootstrapJSTask() {
    return src('./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
    .pipe(dest('./lib/public/bootstrap/dist/'));
}

async function copyBootstrapCSSTask() {
    return src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(dest('./lib/public/bootstrap/dist/'));
}

async function copyCSSTask() {
    return src('./src/css/*.css')
    .pipe(dest('./dist/css'));
}
 
exports.default = series(  
    defaultTask, 
    copyJqueryTask, 
    copyBootstrapJSTask, 
    copyBootstrapCSSTask,
    copyCSSTask
);