FROM postgres 
ENV POSTGRES_PASSWORD postgres 
ENV POSTGRES_DB tiny-cliniq 
EXPOSE 5432
COPY init.sql /docker-entrypoint-initdb.d/
