default: install build
	echo "Compressed css/new.css and copy it into css/socrates.min.css which should be deployed"

install:
	npm install cssnano postcss --save-dev
	npm install --save-dev postcss-cli

build: # Compress custom css file and copy it with spectre css into socrates.min.css
	npx postcss css/new.css > css/new.min.css
	cat css/spectre.min.css > css/socrates.min.css
	cat css/new.min.css >> css/socrates.min.css

