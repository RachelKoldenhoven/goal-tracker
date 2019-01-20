FROM ubuntu:16.04

ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && apt-get install -y wget unzip gdebi unzip \
        fonts-liberation libappindicator3-1 libasound2 libxss1 xdg-utils \
        libasound2-data libdbusmenu-glib4 libdbusmenu-gtk3-4 libindicator3-7 \
        libnspr4 libnss3 curl openjdk-8-jdk telnet net-tools

# Install MySQL
RUN apt-get install -y mariadb-server && \
    service mysql start && \
    echo "create database goals_test;" | mysql -u root && \
    echo "create database goals;" | mysql -u root && \
    echo "show databases;" | mysql -u root && \
    echo "GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;" | mysql -u root

# Install Chrome
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg -i google-chrome-stable_current_amd64.deb && \
    google-chrome --version

# Install Chromedriver
RUN wget -q http://chromedriver.storage.googleapis.com/2.45/chromedriver_linux64.zip && \
    unzip chromedriver_linux64.zip -d /usr/bin && \
    chromedriver & \
    sleep 3 && \
    curl -d '{ "desiredCapabilities": { "caps": { "nativeEvents": false, "browserName": "chrome", "version": "", "platform": "ANY" }, "chromeOptions": { "args": ["--headless", "--disable-gpu", "--no-sandbox", "--enable-logging", "--v=1"] } } }' http://localhost:9515/session
