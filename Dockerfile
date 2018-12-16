FROM ubuntu:16.04

RUN apt-get update && apt-get install -y wget unzip

RUN wget http://chromedriver.storage.googleapis.com/2.45/chromedriver_linux64.zip && \
    unzip chromedriver_linux64.zip -d /usr/bin