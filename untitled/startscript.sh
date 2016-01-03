# !/bin/bash

killall -9 phantomjs

cd ~/test/untitled

java -jar ./selenium-server-standalone-2.40.0.jar -role hub & disown

./phantomjs-1.9.7-linux-x86_64/bin/phantomjs --webdriver=5555 --webdriver-selenium-grid-hub=http://127.0.0.1:4444 & disown

mvn clean install -Dcucumber.options=" --tags @smoke" 
