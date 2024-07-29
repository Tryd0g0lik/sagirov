FROM python:3
RUN apt update && apt install -y python3-venv
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
RUN apt update && apt install -y git
RUN python3 -m venv /opt/venv && \
    mkdir /home/backup && mkdir /home/backup/data && \
    mkdir /home/spacex && mkdir /home/spacex/static
WORKDIR /home
#ENV PATH="/opt/venv/bin:$PATH"
#RUN mkdir ./home/project && mkdir ./home/spacex
#RUN git clone https://github.com/Tryd0g0lik/sagirov
COPY *.txt /home/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install gunicorn
COPY . /home/
CMD ["gunicorn", "0.0.0.0:8000", "project.wsgi:application"]
