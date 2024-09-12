# reactdocker
The project is sample reactjs web application containing api and client.
(https://devsecops.vxrl.org/)

When merging the master branch to main, the Github actions will be triggered.

- Simple react test on client app
- codeql test on the app (javascript)
- Build and push api and client docker images to docker hub
- Login to EC2 server through SSH and deploy the code from github
- Run the application by docker compose
- Run owasp zap scan, result will be sent to project issues

## Prerequisite
- Docker account
- Docker access token
- Github Access Token
- SSH private key for your server

## run the application locally
### Build the api and push to docker hub, 
```
cd api
docker build -t [your_docker_username]/reactdocker_api:latest .
docker push [your_docker_username]/reactdocker_api:latest 
          
```

### Build the client and push to docker hub, 
```
cd client
docker build -t alanh0/reactdocker_client:latest .
docker push alanh0/reactdocker_client:latest 
          
```

### run the application
```
docker compose up
```

### access the client application in browser
`http://localhost:3000/`

# Notes for deployment (manually)
## 1. Create a Deploy Key for GitHub Project
Generate an SSH key on your EC2 Ubuntu instance:

```
ssh-keygen -t ed25519 -C "your-email@example.com"
cat ~/.ssh/id_ed25519.pub
```

Add the public key to your GitHub project as a deploy key:

Go to GitHub > Your Repository > Settings > Deploy keys > Add deploy key.

Paste the public key and give it a title (e.g., "EC2 Deploy Key").

Testing SSH connection
```
ssh -i ~/.ssh/id_ed25519 -T git@github.com
```

## 2. Install Docker and Docker Compose
Update the package list and install Docker:
```
sudo apt update
sudo apt install docker.io -y
```
Install Docker Compose:
```
sudo apt install docker-compose -y
```
Add the Ubuntu user to the Docker group to avoid needing sudo for Docker commands:

```
sudo usermod -aG docker $USER
```
Log out and back in or run:
```
newgrp docker
```
## 3. Get the github project
```
git clone git@github.com:username/repo-name.git
```

## 4. Run Docker Project on Port 8080
Assume your Docker project is running on port 8080. Start your project with:

```
docker-compose up -d
```

## 5. Set Up Nginx Reverse Proxy
Install Nginx:
```
sudo apt install nginx -y
```

Create a new Nginx configuration file:

```
sudo nano /etc/nginx/sites-available/example.oxfordfriends.com
```
Add the reverse proxy configuration:
```
server {
    listen 80;
    server_name example.oxfordfriends.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
Enable the configuration:
```
sudo ln -s /etc/nginx/sites-available/example.oxfordfriends.com /etc/nginx/sites-enabled/
```
Test Nginx configuration:
```
sudo nginx -t
```

Restart Nginx:
```
sudo systemctl restart nginx
```
## 6. Set Up Let's Encrypt for SSL
Install Certbot:
```
sudo apt install certbot python3-certbot-nginx -y
```
Obtain and install the SSL certificate:
```
sudo certbot --nginx -d example.oxfordfriends.com
```
Follow the prompts to complete the SSL setup. Certbot will configure Nginx for HTTPS automatically.

Test automatic renewal:

```
sudo certbot renew --dry-run
```
