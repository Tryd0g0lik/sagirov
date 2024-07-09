FROM nginx:latest

RUN rn /etc/nginx/conf.d/default.conf
COPY nging.conf /etc/nginx/conf.d
COPY proxy_params /etc/nginx