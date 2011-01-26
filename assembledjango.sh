#!/bin/sh

set -e

VERSION="1.2.4"
URL="http://www.djangoproject.com/download/$VERSION/tarball/"
TAR_FILENAME="django.tar.gz"
ZIP_FILENAME="django.zip"
DIR_NAME="Django-$VERSION"
DJANGO="django"

curl -v -L $URL > $TAR_FILENAME
tar -xvzf $TAR_FILENAME
mv $DIR_NAME $DJANGO
cd $DJANGO
zip -r ../$ZIP_FILENAME $DJANGO
cd -
rm -rf $DJANGO
rm $TAR_FILENAME