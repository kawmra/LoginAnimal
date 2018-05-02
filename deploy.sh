res="res"
dist="dist"

cp index.html $dist
cp -r $res $dist

gh-pages -d $dist -m "[AUTO] Update gh-pages"