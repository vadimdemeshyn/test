#!/bin/bash
ps cax | grep Xvfb > /dev/null
if [ $? -eq 0 ]; then
  echo "Process is running."
else
  echo "Process is not running."
 Xvfb :1 -screen 0 1024x768x24 &
 echo "Process was launched."
fi