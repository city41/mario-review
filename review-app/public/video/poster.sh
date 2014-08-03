#!/bin/bash
for i in `ls *.gif`; do
  convert $i[0] ${i%%.*}-poster.png
done

