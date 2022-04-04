FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app/back
COPY requirements.txt /app/back/
RUN pip install -r requirements.txt
COPY . /app/back/

RUN adduser user
USER user