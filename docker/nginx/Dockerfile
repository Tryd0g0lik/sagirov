FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir /etc/spacex && mkdir /etc/spacex/static && \
mkdir /etc/spacex/buckup && mkdir /etc/spacex/template
COPY nginx.conf /etc/nginx/conf.d
COPY proxy_params /etc/nginx/conf.d/proxy_params
