FROM legatdestr/ksb-frontend
LABEL maintainer Sergey Kocketkov <legatdestr@gmail.com>

RUN http_proxy=${http_proxy} https_proxy=${https_proxy} sudo -E npm install -g webpack

RUN http_proxy=${http_proxy} https_proxy=${https_proxy}  sudo -E apt install libpng12-0

WORKDIR /app

EXPOSE 9000

CMD ["bash"]