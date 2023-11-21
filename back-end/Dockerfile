FROM python:3.10.11

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN pip install --upgrade pip

COPY requirements.txt /app/

RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./React_Djagno_Dschinni_Project/back-end /app/