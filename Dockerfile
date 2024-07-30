FROM python:3
RUN apt update && apt install -y python3-venv
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
RUN apt update && apt install -y git
RUN python3 -m venv /opt/venv && mkdir /www && \
    mkdir /www/backup && mkdir /www/backup/data && \
    mkdir /www/spacex && mkdir /www/spacex/static
WORKDIR /www
#ENV PATH="/opt/venv/bin:$PATH"
#RUN mkdir ./www/project && mkdir ./www/spacex
#RUN git clone https://github.com/Tryd0g0lik/sagirov
COPY *.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install gunicorn
COPY . .
CMD ["gunicorn", "b", "0.0.0.0:8000", "project.wsgi:application"]
