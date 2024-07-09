FROM python
RUN apt-get update && apt-get install -y python3-venv
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
RUN apt-get update && apt-get install -y git
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
WORKDIR .
RUN git clone https://github.com/Tryd0g0lik/sagirov
WORKDIR ./sagirov

RUN mkdir /sagirov/spacex/static
RUN pip install --upgrade pip && pip install -r requirements.txt

CMD ["gunicorn", "0.0.0.0:8000", "project.wsgi:application"]
