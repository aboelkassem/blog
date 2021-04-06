---
templateKey: article-page
title: Learn Docker
slug: learn-docker
author: aboelkassem
authorLink: https://www.aboelkassem.com
date: 2021-01-01T09:14:05.830Z
cover: /img/introduction-to-docker-2017-1-638.jpg
metaTitle: Learn Docker | Aboelkassem blog
metaDescription: Docker is a way to simplify the process of building
  application, shipping them as containers, and running them in different
  environments like development, staging and production
tags:
  - docker
  - kubernetes
  - containerization
  - web-dev
---
In this article, we will discuss the basics of Docker and containerization.\
\
Before jumping into Docker, let's look at why we need Docker and containerization?

## Table Of Contents

* Why Should Use Docker and what is the power of containerization
* What is Docker?

  * Docker Benefits for web developers
  * Docker Tools
  * Docker Architecture
  * Setting Up Your Docker Environment
  * Basic Key Commands
* Hooking The Source Code into a Container

  * The Layered File System
  * Docker Volumes
* Building Custom images with Dockerfile

  * What is Dockerfile?
  * Publish an image to Docker Hub
* Container Linking and Communicating

  * Legacy Linking
  * Container/Bridge Networks
* Docker Compose

  * docker-compose.yml File
  * Docker Compose Commands
* Overview of Kubernetes

  * What is Kubernetes
  * Run Kubernetes locally
  * Basic Kubernetes Concepts
  * Converting Docker-compose to Kubernetes
  * Basic Commands



## Why Should Use Docker and what is the power of containerization?

Have you ever tried setting up a new project on your laptop? Have you used any virtualization tool like VMware or Virtualbox to run Ubuntu on your Windows or Mac machine? If your answer to any of these questions is yes, you probably already know how much time it takes to set it up and get your **project running**. It takes a minimum of an hour or so and sometimes much more. What if I tell you that you can do both of these tasks in just 30 minutes? That’s the power of containerization, and Docker is something that will let us use that power.

So if you don’t want to put production at risk because of an untimely update or a library upgrade, you should start learning Docker right now. Besides this, there are other reasons to learn Docker, which we will look at below....

## What is Docker?

Docker is a way to simplify the process of **building application, shipping them as containers, and running** them in different environments like development, staging and production.

**Docker** runs natively on **Linux** or **Windows Server 2016 or higher** and runs on Windows box, Linux box or Mac box development machines (with a virtual machine)

Docker relies on "**images**" and "**containers**"

**Image** A **read-only template** composed of layered filesystems used to share common files and create Docker container instances. is something that's used to **build a container**, image have necessary **files** to run something on an OS and you have a framework or your database, for example Windows with [ASP.NET](http://asp.NET) Core and application Code, Image like a **blueprint of the container** but it creates a running instance of a container 

**Container** An **isolated and secured shipping container** created from an image that can be run, started, stopped, moved and deleted. Runs your application, they are actually where the live application runs or the database or caching server or whatever it may be to runs in Windows, Linux server machine.

### Docker Benefits for web developers

* **Accelerate developer onboarding** means Docker helps to set up a development environment very quickly when working with team on the same containers with different machines

![docker-benifit-1](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-benefit-1.png "docker benifit accelerate developer")

* **Eliminate App Conflicts** like having versions of frameworks which docker offer **isolated** containers and each container that contains its version

![docker-benefit-2.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-benefit-2.png "docker eliminate app conflicts")

* **Environment Consistency** like moving your code and development environment by just moving images between different environments like from development to staging or production

![docker-benefit-3.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-benefit-3.png "docker benefit of environment consistency")

* **Ship Software Faster** which makes it high productivity, quality, consistency and predictability

![docker-benefit-4.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-benefit-4.png "ship software faster")

* **Docker Hub**: Ever imagined sharing your machine like you share the code using **GitHub**? Docker’s Docker Hub provides access to **thousands of images** that are configured with the environment so that when your code works in your machine, you can build images and share it all over the internet.
* **Continuous integration support:** Docker supports CI tools like **[Travis](https://travis-ci.com/plans)** and **[Jenkins](https://www.jenkins.io)**. Docker images can be built and tagged with specific versions and deployed anywhere

  > **Travis** is a hosted continuous integration service used to build and test
  >   software projects hosted at GitHub and Bitbucket. **Jenkins** is a free and opensource automation server. It helps automate the parts of software
  >   development related to building, testing, deploying, facilitating continuous
  >   integration, and continuous delivery

### Docker Tools

* Docker Toolbox **(Deprecated)** for Windows 7 or 8/ Mac
* [Docker CE](https://hub.docker.com/editions/community/docker-ce-desktop-windows) (Community Edition) for windows 10 or Mac

  * Provides Image and Container
  * Enable **Hyper-V** for Windows **or Hyperkit** for Mac to run VMs

### Docker Architecture

![docker-arch-1.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-arch-1.png "docker architecture")

**Docker ecosystems**

* **Docker Registry**: Docker maintains all the images in the registry and they can be pulled from the registry too
* **Docker Hub**: This is the repository for all your custom-built images. Images can be pushed and accessed from the Hub
* **Docker Client:** The CLI tool used to interact with the Docker server
* **Docker Daemon:** The Docker server process/engine responsible for pulling, pushing, and building the images. It is also used for running the container

![docker-arch-2.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-arch-2.png "docker architetcure")

### Setting Up Your Docker Environment

**Installing Docker on Mac**

* Navigate to [This link](https://hub.docker.com/editions/community/docker-ce-desktop-mac/) and download and install it.

**Installing Docker on Windows**

* Navigate to [This link](https://hub.docker.com/editions/community/docker-ce-desktop-windows) and download and install it

**Docker Kitematic Tool (usually not used much)**

![docker-kitematic.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-kitematic.png "docker kitematic")

### Basic Key Commands

```shell
$ docker pull [imag-name]    # pull images from DockerHub to your dev env like asp.net,node.js
$ docker run [imag-name]     # run the image into localhost
$ docker run -p [port-on-host:port-in-container] [image-name] # run the image into localat at sepcific port ([externalPort]:[internalPort])
$ docker images              # list your images
$ docker ps                  # list your running containers
$ docker ps -a               # list your containers
$ docker rm [containerId]    # remove the container
$ docker rmi [imageId]       # remove an Image
$ docker exec [containerId] [commands] # allow you to run this commands into running containers
$ docker logs [containerId]  # show the logs of the container
```

## Hooking The Source Code into a Container

So how do we get source code into a container?

* Create a **container volume** that points to the source code.
* Add your source code into a **custom image** that is used to create a container.

### The Layered File System

When you pulled an image that have a big size you actually pull many layers **for example**

```shell
$ docker pull nginx
Using the default tag: latest
latest: Pulling from library/nginx
b8f262c62ec6: Pull complete
e9218e8f93b1: Pull complete
7acba7289aa3: Pull complete
Digest: sha256:aeded0f2a861747f43a01cf1018cf9efe2bdd02afd57d2b11fcc7fcadc16ccd
```

As every image is built on top of Linux kernel, it has some common **dependencies** that can be **reused** by other images. Docker bundles these dependencies in one stack and these stacks are called **layers** which Docker caches these intermediate layers to speed up the image building process.

![docker-layerd-1.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-layerd-1.png "docker layerd")

![docker-layerd-2.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-layerd-2.png "docker-layerd-2")

### Docker Volumes

* **Volume** is a special type of **directory** in a **container** typically referred to as a "data volume" in which you store any types of data that could be code, log files or database files and more.
* **Volumes** can be **shared** and reused among containers which make multiple containers write the same volume and Container can have single or more volumes
* When **updating** an Image this **won't affect** to the data volume which stayed separate
* Data volumes are **persisted** even after the container is **deleted**

![docker-volumes-1.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-volumes-1.png "docker volumes")

![docker-volumes-2.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-volumes-2.png "docker volumes")

To know what benefits of volumes Suppose you run a **MySQL** database with no volume, So any data stored in that database will be lost when the container is stopped or restarted. In order to avoid data loss, you can use a **volume mount**.

Now to create a volume where Node app could write to /var/www is the container volume alias in Host area, run the following command creates **default volumes** in its paths

```shell
$ docker run -p 8080:3000 -v /var/www node # create volume in the container
$ docker inspect [containerId]             # get the info of the container
....
"Mounts":[
	{
		"Name": "d185....86459",
		"Source":"/mnt/.../var/lib/docker/volumes/d185....86459/_data", # Host location
		"Destination":"/var/www", # Volume location in container
		"Driver":"local",
		"RW":true
	}
]
....
```

**For Customizing Volumes** to writes your **own** folder path on the host which can be your source code, log files or database files, This path can be in **your machine** and the volume **read and write** to that specific area

![docker-volumes.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-volumes.png "docker volumes")

[**sourceCode_path**]: make this folder as the host mount or to put $(pwd) to make current directory is that the volume points to

$(pwd): this return the current working directory

```shell
$ docker run -p 8080:3000 -v [sourceCode_path]:/var/www node # create volume in the container but read/write into custom path when node container running
$ docker inspect [containerId]             # get the info of the container
....
"Mounts":[
	{
		"Name": "d185....86459",
		"Source":"/src", # Host location
		"Destination":"/var/www", # Volume location in container
		"Driver":"local",
		"RW":true
	}
]
....
```

```shell
$ docker rm -v [containerId]    # remove the container including it's volumes
$ docker run -it -p 80:80 -v "$(pwd):/app" -w "/app" mcr.microsoft.com/dotnet/sdk:3.1 /bin/bash
# the above command tell docker to run the container ASP.NETCore3.1 with volume linked from current directory(which run command from)
# to /app volume in the container making (-w /app) current directory to run commands from it and open the bash
```

## Building Custom images with Dockerfile

### What is Dockerfile?

Dockerfile is a text file that has **instructions** within it, This instructions build in with docker documentation to work with environment variables or **copy source code** into the image and more, **"docker build"** command compile these instructions which create file system layered and then the docker image.

![dockerfile.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/dockerfile.png "dockerfile")

Because the image can be cached to speed up future builds, If you make any changes in these instructions you need to rebuild the image

**Basic Dockerfile instructions/Commands:**

* **FROM**: like dependencies which mean where the image you build on in for example [asp.net](http://asp.net) core image, Node.js as a base filesystem, and then build your filesystem layered on the image.
* **MAINTAINER**: Just type your **name** who created and maintain this image
* **RUN**: the commands to run in these images like npm install, dotnet restore, dotnet run
* **COPY**: copy source code into the container to be ready for production
* **ENTRYPOINT**: determine the entry point for this container for example nodejs command
* **WORKDIR**: define what is the working directory is to know where this container going to run
* **EXPOSE**: determine the port that the container would then run internally
* **ENV**: define environment variables in that container like development or production
* **VOLUME**: define volumes for that container

For example of custom dockerfile for **node.js**

```dockerfile
FROM node
MAINTAINER aboelkassem

ENV NODE_ENV=production
ENV PORT=3000

COPY . /var/www   # copy the current folder directory (.) to foler (/var/www)
WORKDIR /var/www  # make this folder as working directory to run the commands from it

RUN npm install

EXPOSE $PORT
ENTRYPOINT ["npm","start"]
```

For example of dockerfile for [asp.net](http://asp.net) core **development** version

```dockerfile
FROM mcr.microsoft.com/dotnet/sdk:3.1

LABEL author="aboelkassem"

ENV DOTNET_USE_POLLING_FILE_WATCHER=1 # setup dotnet watch (mean if change in the code it restart the kestrel server)
ENV ASPNETCORE_URLS=http://*:5000 

WORKDIR /app

CMD ["/bin/bash", "-c", "dotnet restore && dotnet watch run"]
```

For multistage file and **production** version of [asp.net](http://asp.net) core

```dockerfile
# build the image
FROM mcr.microsoft.com/dotnet/sdk:3.1 as publish
WORKDIR /publish
COPY [projectName].csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish --output ./out

# build to production
FROM mcr.microsoft.com/dotnet/aspnet:3.1
LABEL author="aboelkassem"
WORKDIR /app
COPY --from=publish /publish/out .
ENV ASPNETCORE_URLS=http://*:5000 
ENTRYPOINT ["dotnet", "[projectName].dll"]
```

You can convert this **Dockerfile** into an image by using **"docker build"** command like the following

```shell
$ docker build -t <your-Username>/<imageName> .

$ docker build -t aboelkassem/foods:1.0-dev . # this will create the image from default filename: Dockerfile
$ docker build -t aboelkassem/foods:1.0-prod -f prod.Dockerfile . # this create image from different dockerfile name --filename TheNewDockerFileNmae

$ docker run -d -p 80:5000 -v "$(pwd):/app" aboelkassem/foods:1.0-dev # this will run the image
```

* **\-t** : the tag of image
* **\-d:** the detached mode that don't show logs in CMD or any information just name or simple info
* **your username:** Your docker hub account ID or username and then give it a name
* **.** : the build context or the current directory contains the DockerFile to build from

### Publish an image to docker Hub

to publish the Docker hub just like **GitHub**, just push it and commit and it simply push it to docker registry as a public repository

```shell
$ docker login
$ docker push <your-username>/<imageName>
```

## Container Linking and Communicating

When trying to use images and containers, you also need to communicate between containers for example communicate with the database server, caching server

![containers-linking.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/containers-linking.png "containers linking")

**To talk to other containers there are two ways:**

* **Use Legacy Linking** by just container **names** by creating **bridge network,** its a good option for development environment
* **Add Containers to a Custom Bridge Network** by creating an isolated network and only containers in that network communicate with each other, it a good option for multiple containers in a production environment

### Legacy Linking

this is a very simple technique where you give a container **name** and another container can link to it.

**Steps to link containers**

  1- **Run Container with a Name**

```shell
$ docker run -d --name <containerName> <image>
$ docker run -d --name my-postgres postgres
```

  2- **Link to Running Container by Name**

```shell
$ docker run -d -p <ex-port>:<in-port> --link <containerNameToLinkWith>:<containerAlais> <yourUsername>/<ImageName> # containerAlais is the alais to used internal for example database connection string
$ docker run -d -p 5000:5000 --link my-postgres:postgres aboelkassem/listify
```

  3- **Repeat For Additional Containers**

- - -

For example for linking ASP.NET Core project container with SQL Server database container

```shell
$ docker build -t aboelkassem/listify:1.0-dev .
$ docker run -d --name my-sqlserver -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=yourStrong(!)Password' -p 1433:1433 mcr.microsoft.com/mssql/server:2017-latest
$ docker run -d -p 5000:5000 --link my-sqlserver:SQLServerDB aboelkassem/listify # SQLServerDB alais will be the hostname/server to be used in ConnectionString
```

### Container/Bridge Networks

Think of linking a whole bunch of containers in a cloud or production environment, that couldn't be by naming them, because any container can talk to others by just name, so the best choice for staging or production environment is to **isolate** these running containers in the same group called **Network or bridge network,** the containers inside this isolated network can automatically communicate with each other by the **name**

![network.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/network.png "docker network")

**Steps to link containers**

1- **Create Custom Bridge Network** by giving it a name and bridge as a driver

```shell
$ docker network create --driver bridge <networkName>
$ docker network create --driver bridge iolsated_network
$ docker network inspect iolsated_network  # list info about this network like containers inside it and more
$ docker network ls # list all the networks you have, By default, Docker creates three networks
```

2- **Run Containers in the Network** by specify what isolated network to run in

```shell
$ docker run -d --net=<networkName> --name <customContainerNameToConnectBy> <imageName>
$ docker run -d --net=iolsated_network --name mongodb mongo
$ docker run -d --net=iolsated_network --name nodeapp -p 3000:3000 aboelkassem/node
```

## Docker Compose

it's a great way to automatically manage the lifecycle of your application in the development environment, Compose is a tool for defining and running multi-container Docker applications.

It very helpful in the development environment To manage different containers in the application like

* Start, stop and rebuild services(running containers)
* View status of running services and see the log output of running services

![docker-compose-1.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-compose-1.png "docker compose")

Also you can run **Microservices** like the following diagrams **running 6 services** with docker-compose in any environment production or development, each of them has it's docker configuration. And just build and run this file one time to run all these services at one command

![docker-compose-2.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-compose-2.png "example of docker compose")

**Docker Compose Workflow**

1- **Build** The Services which will create the images

2- **Start** Up Services

3- **Tear Down** Services when you are finished, stop containers or remove them 

### docker-compose.yml File

this file defines all our services like the running web servers, frameworks, databases services and caching services or others.

**Like Dockerfile build process,** Also docker-compose.yml file set the services configuration and then **build** these services to generate **images** that then we can use to create containers

![docker-compose-yml.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-compose-yml.png "docker compose yml")

It very good and easy in development environment to just give a **.yml** file just have a few basic commands, you can actually have all the images ready and convert those into running containers

**docker-compose.yml file contains:**

![docker-compose-yml-1.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-compose-yml-1.png "docker-compose-yml-example")

![docker-compose-yml-2.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/docker-compose-yml-2.png "docker compose yml example")

**In Services you can define:**

* **Build** Context like the folder can build from and what dockerfile to build that service.
* **Environment** that running these service, you can easily swap between from development to production

### Docker Compose Commands

For all services in docker-compose.yml file

```shell
$ docker-compose build          # build the services from .yml file into images
$ docker-compose images         # list images build using current .yml file
$ docker-compose up             # start these services up as running containers
$ docker-compose down           # tear these services down and remove running containers
$ docker-compose logs           # view the logs
$ docker-compose ps             # list different containers that running as services
$ docker-compose stop           # stop all the different services
$ docker-compose start          # start different services
$ docker-compose restart        # restarts all the containers of the services
$ docker-compose rm             # remove all the different services
$ docker-compose down --rmi all --volumes    # remove all the containers including the images and volumes
```

For individual service

```shell
$ docker-compose build <ServiceName>    # build specific service from .yml file into images
$ docker-compose up --no-deps <ServiceName>  # destory and recreate only this service not all dependenics containers
```

Example of docker-compose.yml file in [asp.net](http://asp.net) core and sql server

```yaml
version: '3.9'
services:
  
    web:
        build:
            context: .
            dockerfile: Dockerfile
        ports:
            - "8000:80"
        networks:
            - foods-network

    sqlserver:
        image: "mcr.microsoft.com/mssql/server:2017-latest"
        environment:
            SA_PASSWORD: "123456789"
            ACCEPT_EULA: "Y"
        networks:
            - foods-network

networks:
    foods-network:
        driver: bridge
```

## Overview of Kubernetes

Docker Compose provides a great way to get multiple containers up and running on your machine (**development environment)**, but if we need to move to the different environment like staging or production, How do your manage all of these containers in stage or production? Docker-compose have a **scaling** feature but doesn't support a **load balancer** between VMs and this not what we need in **a production environment**

So we use **Kubernetes** to provide all these features in **production environment** like

* Package up the app, provide a manifest and let it manage and handle everything for us
* Not worry about the management of containers
* Eliminate single point of failure and self-heal containers
* Have a way to scale and load balance containers
* Update containers without bringing down the application
* Have networking and persistence storage options

### What is Kubernetes

Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications, we interact with it using [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) to run commands line.

It designed for container and cluster management, and it supported by all major cloud platforms.

It provides a way to define a cluster's state using manifest files (yaml)

**Some basic features of Kubernetes**

* Service Discovery and load balancing
* Secret and Configuration management
* Automate Rollouts/Rollbacks
* Horizontal Scaling
* Storage Orchestration
* Manage workloads
* Self-healing

![cluster](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/cluster.png "kubernetes cluster")

The above diagram shows what **Cluster** means, it the process of nodes management to run containerized applications.

* **Master** who manage all these nodes/children/workers nodes
* **Node** is like VM has pods inside them
* **Pod** is a container for containers, put multiple things inside this pod

### Run Kubernetes locally

* From [Docker desktop](https://www.docker.com/products/docker-desktop) from settings>Kubernetes>Enable Kubernetes
* From [Minikube](https://github.com/kubernetes/minikube) tool

### Basic Kubernetes Concepts

* **Deployment**: the main role of Kubernetes to **describe the desired state** where convert services from .yml or .json file in Docker compose file into **Kubernetes deployment** file

  * Can be used to **replicate** pods or **add** more pods to the node
  * Support **rolling** update and **rollbacks** which are very important for **versioning** your app
* **Service**: allow you to abstract pod IP addresses from consumers, you know pods that contain containers may die if the container goes down, So Service handles this.

  * Load balances between pods

![service.png](https://raw.githubusercontent.com/aboelkassem/Learn-Docker/main/images/service.png "service")

### Converting Docker-compose to Kubernetes

you can one of these tools

* [Compose on Kubernetes](https://github.com/docker/compose-on-kubernetes) in docker desktop
* [Kompose](https://kompose.io/)

Check this [GitHub repo](https://github.com/danwahlin/codewithdandockerservices) for example

### Basic Commands

```shell
$ kubectl version                                 # get version of kubectl CLI
$ kubectl get <depyloyments| services| pods>      # get information of deployments or services or pods
$ kubectl run <giveContainerName> --image=<image> # run container into kubernetes
$ kubectl apply -f <fileName| foldername>         # apply or run all commands of .yaml file or the whole folder like .k8s into deployment
$ kubectl delete -f <fileName| folername>         # delete the deployments and clean up everything
$ kubectl port-forward <nameOfPod> 8080:80        # expose pod port into local machine
```

<hr>

[Edit this page in Github](https://github.com/aboelkassem/Learn-Docker/blob/main/README.md)