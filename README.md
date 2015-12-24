# test

# !/bin/bash


cd /home/test/untitled
java -jar ./selenium-server-standalone-2.40.0.jar -role hub
killall -9 phantomjs
./phantomjs-1.9.7-linux-x86_64/bin/phantomjs --webdriver=5555 --webdriver-selenium-grid-hub=http://127.0.0.1:4444
mvn clean install -Dcucumber.options=" --tags @smoke" 
