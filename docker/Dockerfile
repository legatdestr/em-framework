FROM legatdestr/ksb-frontend
LABEL maintainer Sergey Kocketkov <legatdestr@gmail.com>

RUN http_proxy=${http_proxy} https_proxy=${https_proxy} sudo -E npm install -g webpack

RUN http_proxy=${http_proxy} https_proxy=${https_proxy} sudo -E apt install libpng12-0

RUN http_proxy=${http_proxy} https_proxy=${https_proxy} sudo -E npm install -g karma-cli

RUN http_proxy=${http_proxy} https_proxy=${https_proxy} sudo -E apt-get install build-essential chrpath libssl-dev libxft-dev libfreetype6-dev libfreetype6 libfontconfig1-dev libfontconfig1 -y

RUN http_proxy=${http_proxy} https_proxy=${https_proxy} sudo -E wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 && sudo -E tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2 -C /usr/local/share/ && sudo -E ln -s /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/

WORKDIR /app

EXPOSE 9000

CMD ["bash"]