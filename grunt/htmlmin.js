module.exports = {
	min: {
      files: [{
          expand: true,
          cwd: 'public_src/tpl/',
          src: ['*.html', '**/*.html'],
          dest: 'public/tpl/',
          ext: '.html',
          extDot: 'first'
      }]
  }
}