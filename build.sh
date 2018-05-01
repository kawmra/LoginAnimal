rm -rf dist
yarn run build
cp index.html dist/index.html
cp -r res dist/res