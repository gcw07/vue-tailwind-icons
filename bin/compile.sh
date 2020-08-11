#!/usr/bin/env bash

set -e

DIRECTORY=$(cd `dirname $0` && pwd)
RESOURCES=$DIRECTORY/../resources
COMPONENTS=$RESOURCES/components

echo "Compiling Heroicons - Outline..."

rm -f "$COMPONENTS"/heroicon-outline.txt

for FILE in $RESOURCES/heroicons/outline/*; do
  FILENAME=${FILE##*/}

  # Compile outline components...
  VUE=$COMPONENTS/tmp/heroicon-o-$(echo ${FILENAME} | cut -f 1 -d '.').vue

  cp $FILE $VUE

  ICON_NAME=$(echo ${FILENAME} | cut -f 1 -d '.')

  FIRST_LINE='<svg v-else-if="name === '\'${ICON_NAME}\''" fill="none" viewBox="0 0 24 24" stroke="currentColor">'
  sed -i '' "1s/.*/$FIRST_LINE/" $VUE

  cat $VUE >> $COMPONENTS/heroicon-outline.txt

  rm $VUE
done

echo "Compiling Heroicons - Solid..."

rm -f "$COMPONENTS"/heroicon-solid.txt

for FILE in $RESOURCES/heroicons/solid/*; do
  FILENAME=${FILE##*/}

  # Compile solid components...
  VUE=$COMPONENTS/tmp/heroicon-s-$(echo ${FILENAME} | cut -f 1 -d '.').vue

  cp $FILE $VUE

  ICON_NAME=$(echo ${FILENAME} | cut -f 1 -d '.')

  FIRST_LINE='<svg v-else-if="name === '\'${ICON_NAME}\''" fill="currentColor" viewBox="0 0 20 20">'
  sed -i '' "1s/.*/$FIRST_LINE/" $VUE

  cat $VUE >> $COMPONENTS/heroicon-solid.txt

  rm $VUE
done

echo "Compiling Zondicons..."

rm -f "$COMPONENTS"/zondicons.txt

for FILE in $RESOURCES/zondicons/*; do
  FILENAME=${FILE##*/}

  if [ "$FILENAME" == ".gitignore" ]
  then
    break
  fi

  # Compile components...
  VUE=$COMPONENTS/tmp/zondicon-$(echo ${FILENAME} | cut -f 1 -d '.').vue

  cp $FILE $VUE

  ICON_NAME=$(echo ${FILENAME} | cut -f 1 -d '.')

  FIRST_LINE='<svg v-else-if="name === '\'${ICON_NAME}\''" fill="currentColor"'
  sed -i '' "s/<svg/$FIRST_LINE/" $VUE

  cat $VUE >> $COMPONENTS/zondicons.txt

  rm $VUE
done

echo "All done!"