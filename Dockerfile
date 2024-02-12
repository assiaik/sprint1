## ADDITIONAL COMMENTS SAVED FOR LATER SPRINTS
# Use the official MySQL image as the base image
#FROM mysql:latest

#Default nginx code - translates images in relation to HTML, CSS, Javascript files
#CURRENT ISSUE: We are dealing with SQL file.
FROM nginx:alpine
COPY . /usr/share/nginx/html

#The SQLfile for contents
#COPY . world.sql 

#TO RUN: 
# docker build -t html-server-image .
# docker run -d -p 8080:80 html-server-image





