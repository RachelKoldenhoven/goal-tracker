FROM ubuntu:16.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y wget unzip gdebi unzip fonts-liberation libappindicator3-1 libasound2 libxss1 xdg-utils \
        libasound2-data libdbusmenu-glib4 libdbusmenu-gtk3-4 libindicator3-7 libnspr4 libnss3 curl openjdk-8-jdk mysql-server \
        telnet


RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

RUN dpkg -i google-chrome-stable_current_amd64.deb

RUN wget http://chromedriver.storage.googleapis.com/2.45/chromedriver_linux64.zip && \
    unzip chromedriver_linux64.zip -d /usr/bin

RUN chromedriver & \
    curl -d '{ "desiredCapabilities": { "caps": { "nativeEvents": false, "browserName": "chrome", "version": "", "platform": "ANY" }, "chromeOptions": { "args": ["--headless", "--disable-gpu", "--no-sandbox", "--enable-logging", "--v=1"] } } }' http://localhost:9515/session
