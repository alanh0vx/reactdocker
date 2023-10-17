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
