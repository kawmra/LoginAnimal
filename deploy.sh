res="res"
dist="dist"

if [ -d $dist ]; then
    rm -r $dist
fi

if [ ! -e $dist ]; then
    mkdir $dist
fi

cp index.html $dist
cp -r $res $dist

gh-pages -d $dist -m "[AUTO] Update gh-pages"