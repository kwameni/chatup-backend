FROM node:24

# Installer nginx
RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*

# Copier config nginx
COPY default.conf /etc/nginx/sites-available/default

# Répertoire de travail
WORKDIR /usr/src/app

# Expose nginx
EXPOSE 80

# Démarrer nginx (tu peux ensuite lancer un serveur node en dev ou prod)
CMD service nginx start && tail -f /dev/null
