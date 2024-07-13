FROM python:3
RUN apt update && apt install -y python3-venv
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt update && apt install -y git
RUN python3 -m venv /opt/venv && mkdir frontend

#ENV PATH="/opt/venv/bin:$PATH"


RUN mkdir ./frontend/project && mkdir ./frontend/spacex
#RUN git clone https://github.com/Tryd0g0lik/sagirov
COPY *.txt .
RUN pip install --upgrade pip && \
    pip install -r requirements.txt \
    pip install gunicorn

COPY . ./frontend/spacex
WORKDIR ./frontend

CMD ["gunicorn", "0.0.0.0:8000", "project.wsgi:application"]
