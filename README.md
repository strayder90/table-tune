# table-tune

# Pre-install steps
Make sure you have linux system like Ubuntu or any other.

If not you can use WSL for windows and install sub-system like Ubuntu.

WSL

Install:

Open PowerShell as Administrator and run the following commands:

1. wsl --install -> This will install both WSL 2 and Ubuntu
2. wsl --set-default-version 2 -> update to version 2
3. wsl --list --verbose -> After installation, verify that WSL 2 is installed by running

You should see something like:

NAME * Ubuntu
STATE *Running
VERSION *2

# GITHUB
Make sure your git is installed and github profile is setup and ready to be used.

# Docker

Make sure you have a docker with compose

Follow the instructions to install:
    https://docs.docker.com/engine/install/ubuntu/

Verify installation:

docker --version
docker-compose --version

Check if your user has docker permissions:
groups or id -nG

Check docker daemon status (To check if the Docker service is running and if permissions are set correctly):
sudo service docker status

or for WSL:
sudo service docker status

Check docker permissions on unix socket:
ls -l /var/run/docker.sock => output should look like: srw-rw---- 1 root docker 0 Mar 9 10:30 /var/run/docker.sock
It means only root and users in the docker group can access it.

Check user permissions on docker executable:
ls -l $(which docker)
This will show the permissions of the Docker binary.

# Init table-tune

1. Clone this repo
2. Go to repo root directory
3. Run docker-compose up --build (add the -d flag if you want to run it in detached mode and prevent output from displaying)