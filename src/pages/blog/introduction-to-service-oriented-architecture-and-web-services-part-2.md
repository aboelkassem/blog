---
templateKey: article-page
title: Introduction to Service-Oriented Architecture and Web Services - Part 2
slug: introduction-to-service-oriented-architecture-and-web-services-part-2
author: aboelkassem
authorLink: https://www.aboelkassem.com
date: 2021-03-24T10:27:46.928Z
cover: /img/web-services.jpg
metaTitle: SOA and Web Services | Aboelkassem Blog
metaDescription: Service-oriented Architecture is all about how to build, use,
  and combine services. Instead of building large software suites that do
  everything, service-oriented architecture is all about achieving your software
  goals by building and using services, and designing an architecture that
  supports their use.
tags:
  - web-dev
  - clean-code
  - software-engineering
  - APIs
  - software-design
  - REST
---
In [the previous article](https://blog.aboelkassem.com/blog/introduction-to-service-oriented-architecture-and-web-services-part-1), we discussed what is web services and service-oriented architecture, Also, we learn about web architecture and standards. Today, we will dive deep into web services and learn how it work, in addition to RESTful service.

## Table of Content

* Web Services
  * Introduction to Web Services
  * Service Invocation (SOAP)
  * Service Description (WSDL)
  * Service Publication and Discovery (UDDI)
  * Service Composition (BPEL)
* REST Architecture
  * Introduction to REST Services
  * Designing a REST Service
  * Introduction to Microservices

## Web Services

So in this section, you'll be looking at the standards for how web services are invoked, described, published, discovered, and composed.

### Introduction to Web Services

What is a service? A service is some functionality that is 'exposed' for use by other processes. In other words, service has an interface that can be used by some service requester. A web service, then, is functionality that is exposed and accessible using web technologies.

Before using web services, building integrated systems was a difficult task, like the following, which makes them work-intensive to implement and difficult to maintain and extend.

![web-service-1.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/web-service-1.png "web service")

But now, Enterprise Application Integration (EAI) is an enterprise-level solution for this integration problem, it uses a form of **middleware**, which is software that is located between other software and facilitates communication between them.

![web service](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/web-service-2.png "web service")

However, implementation in business to business (B2B) interactions, is not always clear for middleware. For example, identifying which business **implements or hosted** the middleware, **managing security**, and **protecting data** from outside influence can complicate B2B. So **EAI is not used for B2B interactions**.

To solve these issues, **web services** are implemented for interactions between businesses. Web services are usually implemented with a specific set of **standards** and **protocols** for implementing services over the web. Web services are defined by the World Wide Web Consortium (W3C) as “a software system designed to support interoperable machine-to-machine interaction over a network”

**Standards and Technologies that make up web services.**

* **Web Infrastructure**: Web services start with **TCP**, the networking protocol responsible for reliable connection-oriented communication. On top of that is **HTTP**, to sends information and interacts with clients.
* **Invoking (SOAP):** like the calling method in object-oriented programming, In order to use a particular service, you must invoke it in **XML** or **JSON**. Invoking in web services is done by Simple Object Access Protocol (**SOAP**), a protocol specification that is based on XML and allows services to send information to another. So systems coded in a different language and on different platforms can easily communicate.
* **Describing (WSDL)**: Services must know how to interact with each other (**documentation**), so Web Service Description Language (**WSDL**), is the standard protocol for describing the interface of a service in a machine-readable, which enable the requester to bind to this interface, Like SOAP, WSDL descriptions are written in **XML**. Binding is the act of generating the necessary code to interact with a service to be open for invoking.
* **Publishing and Discovery (UDDI):** Service providers can **publish** descriptions of their services using UDDI (Universal Description, Discovery, and Integration), So requesters can search by WSDL descriptions or other aspects of the service. Together SOAP, WSDL, UDDI are standards of web services and rely on web infrastructure.
* **Composition (WS-BPEL)**: Various standards can be built on the foundational standards, These standards usually have the **prefix WS,** such as **WS-Security** for adding security functions, or **WS-Coordination** for coordinating the activities of many services. WS-BPEL (Business Process Execution Language) which allows developers to combine existing services into new composite services.

These standardizations of how web services invoke, describe, and publish means that their internal implementation does not matter. Service requesters and services can effectively interact despite being on different platforms and in different languages. However, the commands and parameters of the standards must be supported by the service provider.

### Service Invocation (SOAP)

In web service, service providers and requester are communicated with each other through **XML messages**, based on Request-Response pattern in all interactions between web services and the software that uses those services. **SOAP** (Simple Object Access Protocol) is developed by Microsoft, which allows requester to invoke services.

Like method call in OOP, the purpose of SOAP message is to solicit an operation from remote web service, and is in an XML-formatted document. For example SOAP message like this:

![soap.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/soap.png "SOAP")

* A **header** is used to also provide contextual information like information about the client or routing information.
* The **body** contains the information that the service provider needs to determine which service to provide and the service’s input.

**Styles of SOAP messaging**

* Document Style
* RPC Style
  ![soap-1.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/soap-1.png "SOAP")

SOAP messages must be sent over transport protocol, like **HTTP** or other protocols like **SMTP** which is used for email. A SOAP message can be send using HTTP Post.

Messaging is **synchronous** if the service request **waits** for a response before continuing. A program might be left doing nothing while waiting for a response, particularly if the availability or response time of a web service is an issue.

Messaging is **asynchronous** if interactions allow the code to **keep executing**. This means that when a message returns from the service provider, the code can process it.

![soap-2.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/soap-2.png "SOAP")

**Messaging Patterns**

Four basic messaging patterns exist for SOAP. Since SOAP messages are stateless, these interactions are implemented by relating messages another way, like storing the interaction state on the client and/or the server, or by using extensions to web services like WS-Coordination.

* Request-Response: this pattern is when the requester first sends a message then receives a replay from the service provider, this is a Synchronous, which can be implemented over HTTP
  ![soap-3.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/soap-3.png "Request-Response")
* Solicit-Response: the service provider makes a request to the requester, this is often a confirmation
  ![soap](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/soap-4.png "Solicit-Response")
* One-Way: The requester sends a request to the service provider but not expect a response. Like a notification that the requester is up and running (online).
  ![soap](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/soap-5.png "One-Way")
* Notification: The service provider sends a notification to the requester without expecting a response. Event-based systems.
  ![soap](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/soap-6.png "Notification")

Some of the disadvantages include the fact that XML encoding and decoding adds overhead and does not easily accommodate some data types. These disadvantages have resulted in SOAP being superseded in many applications by methods that use HTTP more directly, such as RESTful web services.

### Service Description (WSDL)

In web services, Web Service Description Language (**WSDL**) is a standard used to describe the **interface** of a web service. This helps SOAP messages find services, and understand how to interact with services, including parameters. WSDL descriptions can be read by potential service requesters, either programmatically or by developers. WSDL was created by Microsoft, IBM, and Ariba by combining various attempts at standardization. WSDL descriptions are written in XML, and can be compared to method signatures in object-oriented programming. Like the following method signature.

```java
public BigDecimal exchangeRate(String currency1, String currency2)
```

WSDL will include, for example, **How to structure a request**, **Input parameters required**, **Data the service will output**, the location where the service requester will send SOAP messages, the transport protocol it will be sent on, and more.

**WSDL** descriptions are machine-readable, which allows the service requester to generate necessary code to interface with a service provider automatically. This process is known as **binding**, whether or not it is done automatically or by the developer. Only after binding can the service requester invoke the service using SOAP messages that they structured with the help of WSDL descriptions.

**WSDL Description**

Because web services are more complex than methods, a WSDL description needs more information. Some of the most important parts of a WSDL 2.0 descriptions are

* **Types**:  which describe the data types that are used. Developers can define abstract data types in XML. If only basic data types already available in XML are used by interactions, then this part is not needed.
* **Interfaces**: describe interfaces to the services provided in terms of what operations can be performed and in what order. The order of operations can be described by the message exchange patterns of  request-response, solicit-response, one-way, and notification. Interfaces were formally called portTypes in WSDL 1.2.

The categories used to bind **interfaces** to concrete implementations are:

* **Bindings**: which determine how the SOAP message is translated into XML, and dictate the form of the messages, as well as specifying the transport protocol on top of which the SOAP messages are sent.
* **Services**: which bring together interfaces and bindings, and assign them to **endpoints** or **ports**. These are located with URIs.

**For example:**

![wsdl.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/wsdl.png "wsdl")

WSDL provides a **robust**, **modular**, and **extensible** service description language. WSDL description enables reuse because WSDL descriptions are broken into very fine descriptions which allow for the reuse of parts of WSDL specifications in different ways. WSDL documents can also import other WSDL documents, gaining them access to data types in the imported WSDL description or to interfaces.

### Service Publication and Discovery (UDDI)

Internet is a huge place, How do you find the services you need to build your app? How do you ensure their quality? If you create a service, how can you get people to use it? So web services need to be **published** and **discovered**.

The advent of the Internet helped customers find services through **search engines**. However, it is important to advertise web services. This is known as **publishing**. The first framework for publishing was Universal Description, Discovery, and Integration (**UDDI**). 

UDDI was created in 2000 by Ariba, Microsoft, and IBM, but it is now managed by the Organization for the Advancement of Structured Information Standards (**OASIS**), which is a non-profit organization that also manages a number of other open standards. UDDI was intended to be used to specify a universal registry and broker of web services, using **XML** and **WSDL** to structure data about the web services and how they were provided.

UDDI is not tied to a specific registry, it is a standard for discovery and publishing aspects of web services. It useful standard to brining service requester and service provider together.

**How it works?**

![uddi-1.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/uddi-1.png "UDDI")

* First service providers **publish** themselves to UDD registry, Then service requester can **search** the registry by searching elements in WSDL description or other descriptions.
* After search, requester can **bind** to it using WSDL descriptions to determine messaging pattern, then **invoke** these services

**Publishing**

Publishing registers information about the service with a **UDDI registry**, which includes information about the service provider, the service itself, and various technical descriptions of the service. A uniform resource identifier (**URI**) is assigned to the service by the UDDI registry. The URI is a unique reference used to **invoke** the service.

The information that UDDI standard is contained three categories, White pages, Yellow pages, Green Pages 

![uddi-2.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/uddi-2.png "UDDI")

* White pages, where information such as the business name, a short description, contact information, and unique business identification numbers is stored.
* Yellow pages, which contain information about the service or industry that the business is in, including hierarchical information about the business. For example, exchange rates are a subset of currency services.
* Green pages, which contain the technical details of how to use the service.

**Information encapsulated in UDDI also falls into four data structures.**

* businessEntity ⇒ white pages
* businessService ⇒ yellow pages
* bindingTemplate and tModel ⇒ green pages

![uddi-3.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/uddi-3.png "UDDI")

Service providers **publish**, including adding, deleting, and modifying entries to a registry through **SOAP** messages. Operations could be `save_business`, `save_service`, `save_binding`, `save_tModel`, or delete commands for these same elements.  UDDI also specifies web services for **discovery**. These are accessed by **SOAP** messages. Commands to search for services include `find_business`, `find_service`, `find_binding`, and `find_tModel`. Information can be requested with commands such as `get_businessDetail`, `get_serviceDetail`, etc.

Once the service requester has information about the service interface, it can generate the necessary code to access the interface for the service. In other words, it can **dynamically bind** to it.

Binding can be a highly dynamic, run-time activity, although this has repercussions for a developer. **For example**, it may prevent a developer from knowing what errors might occur or what exceptions may be generated, and thus from developing robust code. Or a web service provided by a business may require contracts or agreements, which are managed by people and not programs. Consequently, service discovery is usually a design-time activity. Binding can still be automated, although this may be challenging as it would require the interface description to be completely unambiguous.

### Service Composition (BPEL)

Services can be combined, this call **composition**, like composing objects in OOP (Aggregation), A service is composed when it is **made up of other services**. Further, a service that is composed of other, lower-level services may be used to compose higher-level services. New functionality can be created by combining existing functionality, and encapsulating the new functionality as a service. However, web services are not usually compiled and run in the same physical location like objects

Instead composing services involves invoking services, like the following UML sequence diagram and Activity diagram showing that the composite service uses other services.

![BPEL](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/bpel-1.png "BPEL")

![bpel-2.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/bpel-2.png "BPEL")

Web services can easily be composed because they are accessed in similar ways. Services invoked with SOAP messages, described by WSDL, cataloged by UDDI. The goal of the standard of composing services is to not work with low-level programmatic details but at higher-level.

BPEL (Business Process Execution Language) is a standard high-level composition language for web services, WS-BPEL allows developers can compose compatible services, which can be from external sources out on the internet or internal to a company or other private organization.

**For example of both internal and external services.** you are a car manufacturer and you have a remote warehouse.

![bpel-3.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/bpel-3.png "BPEL")

BPEL supports basic operations like “if-then-else” decisions, or other logic from various program languages and wrappers. In addition to composition, web services are also associated with **coordination**. Coordination is when a process coordinates the activities of two or more services. Composition is distinguished from coordination because it exposes the collection of actions as another service.

## REST Architecture

In this section we will cover what is RESTful web service looks like and how it works, also we'll talk about microservices.

### Introduction to REST Services

REST (REpresentational State Transfer) architectural style is used in distributed applications by using HTTP to send messages to communicate between components. In general, REST is a client-server architecture based on request-response design.

The client sends a request and the server responds, but in REST, the communication is **resource-based**. Resources can be any pieces of information that are self-contained. This can include **documents**, **images**, **object** representations, etc.

![rest-1.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/rest-1.png "RESTful")

**REST constraints**

* **REST is a Client-Server Architecture**

    Server provides **services** to the client like creating or manipulating data, and Client provides users with a **user interface** to access these services. This applies separation of concerns which allows highly scalable, each they occur independently. The client can be improved to provide users with a simple and fast user interface without affecting the server, while the server can manipulate larger sets of data because it is freed from having to implement any client responsibilities.
* **REST is a Layered System**

    These layers can be used to improve performance, translate messages, and manage traffic, which helps to improve the reusability of REST web services.
* **Interactions must be Stateless**

    This means that the server **does not save information about the current client state or previous request** made by the client. Servers are only aware that the client exists when a request is made. All necessary information for the server to understand and respond to the request comes through with the request.

    This improves the performance of web services, as servers do not have to remember the current states of clients in the system. however, is that this imposes significant restrictions on the way a client and server communicate. **Every time a client sends a request to a server, it must provide and store information about its current state**. For example if authentication is needed by a server for the client to have access to data, then client side must send that authentication information in every request.
* **Clients can Cache responses**

    This means that clients can keep a local copy of a server response to use for later requests, Basically, every time a server responds to a client request, the server adds information to respond to label it as cacheable or non-cacheable. This can help improve performance by reducing the number of requests for the same resources. The server decides for the client side what information should be temporarily saved and what can be deleted after use.
* **Uniform Interface between the client and server**

    The first is that there are specific methods that can be understood. REST uses the common **HTTP methods, GET, PUT, POST, and DELETE**, to communicate different actions the client wants to perform on the resources. The second is that the resource must be identified in the request with a specific **URI**. Finally, the representations of the resources are uniform. Responses have specific headers, and the resource is written in three specific ways: **XML**, **JSON**, or **simple text.**

**REST Example of a request and response**

This is an example of a request to add coffee to an online shopping cart in the form or **XML** data, uses **PUT** method and **URI**. Response in **JSON** object. Headers include section called **cache-control** which determines if the information should be cached on the client's side

![REST](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/rest-2.png "REST Example of a request and response")

![REST](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/rest-3.png "REST Example of a request and response")

### Designing a REST Service

So we will explore **best practices to follow to create a well-designed RESTful API.** These include:

* **Use only nouns for a URI;**
* **GET methods should not alter the state of resource;**
* **Use plural nouns for a URI;**
* **Use sub-resources for relationships between resources;**
* **Use HTTP headers to specify input/output format;**
* **Provide users with filtering and paging for collections;**
* **Version the API;**
* **Provide proper HTTP status codes.**

**Use only nouns for a URI**

For example to create a server for university system with students and teachers, you can have a few URIs like this:

![rest-4.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/rest-4.png "REST Standards")

and don't use URIs based on verbs like `/GetAllTeachers` because it's not resource based.

**GET methods should not alter the state of resource**

GET methods should only **get/retrieve resources**, but not alter the state of them. Methods used to manipulate resources are PUT, POST, and DELETE. This keeps RESTful APIs consistent with other developers and easy to follow for future client applications.

**Use plural nouns for a URI**

Simplicity is key to a good API, when you're creating a service to deal with resources, its better to keep it simple when referring to resources like `/students` to get all students.

**Use sub-resources for relationships between resources**

This means that when a resource is related to another resource you can show the connection in the URI, For example

* `GET` /students/3/courses     ⇒ get all the courses of student 3
* `GET` /students/3/courses/2  ⇒ et the information on course 2 connected of student 3

**Use HTTP headers to specify input/output format**

Headers are used to specify a lot of different properties. Two headers that are very important to making APIs easier to use. Content Type and Accept Headers

* **Content-Type**: define the format of the message. (Input)
* **Accept**: defines a list of acceptable formats that can come as response. (Output)

![rest-5.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/rest-5.png "REST Reuqest and Resonse")

**Provide users with filtering and paging for collections**

When there are large data sets to parse through, good APIs provide filters to help search through the data. This is done by allowing parameters to be passed after question mark(?). For example 

* `GET` /courses?department=computing+science ⇒ return those that are in the department of computing science.
* `GET` /courses?offset=10&limit=5 ⇒ These can provide filtering and paging for APIs, making the responses quicker.

**Version the API**

Web services can be used by millions of users. **Any changes** to APIs can break existing applications or services that call the APIs. Version numbers help prevent issues and future headaches, and clearly describe where changes occurred. In the example below, “v2” is used to specify the version number. For example ⇒ `http://api.yourservice.com/v2/students/34/courses`

**Provide proper HTTP status codes**

There are many different HTTP status codes that can be returned as a response to a request, but the common is

* `200` ⇒ which means that everything is working and functioning on the server side.
* `201` ⇒ which means that a new resource has successfully been created.
* `204` ⇒ which means that a resource has successfully been deleted.

Using the correct status code during RESTful API responses can help developers understand and use APIs better.

**Example of Creating a RESTful service.**

Create a basic REST service where you can store, retrieve, and delete information about students and their courses.

First thing to thing about is the services that I should provide, so it will be ways to retrieve information about students, courses and info about which courses students are taking. These will be our `GET` APIs

![rest-6.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/rest-6.png "RESTful")

Also should able to create, update, and delete the resource

![rest-7.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/rest-7.png "REST Standards")

Next, create a resource class for a student, like following

```java
public class Student
{
    private long id;
    private String fullname;
    private String department;

    public Student(long id, String fullname, String department)
    {
        this.id = id;
        this.fullname = fullname;
        this.department = department;
    }

    public long getId()
    {
        return id;
    }
    public String getFullname()
    {
        return fullname;
    }

    // other methdos
    private void save()
    {
        // code that saves to db
    }
}
```

Next, create java file that handles the HTTP request that we planned, this can be done through many pre-build Java libraries that provide the client library to communicate with RESTful service. Java libraries like `Restlet`, `Spring`, `Jersy`, `RESTEasy` , like the following using Jersy to create post method to create a student

![rest-8.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/rest-8.png "REST Example in Java")

Once all the API methods have been written and finished, all you need to do is deploy it by using Apache or any other web server software. Now you should able to access your API by using the following URL ⇒ `http://your-ip-address/studentcourseapi/`

Now, you can test your REST service by creating your own client application that calls these URIs, or simply sending an HTTP request through the command line.

You can use **CURL tool**, which is a tool to transfer data from or to a server. Like the following curl command 

![rest-11.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/rest-11.png "API Testing using CURL Tool")

which sends an HTTP request to the server and invokes the POST API created with the JSON object containing a single student named James Dean in the department of computing science. Which also look like this.

![request](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/rest-9.png "request")

![response](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/rest-10.png "response")

### Introduction to Microservices

Before we learn about what microservices are, let's look back through time to see where the idea come from. In the early days of software development, developers made large, **monolithic** applications, these applications usually were developed by a large team, all working on the same code base. Large monolithic applications were hard to maintain and scale, Took a long time to develop, Suffered from performance issues.

To solve these issues, we introduced **SOA** (Service-Oriented Architecture) which provides principles to guide developers to break down the functionality of their monolithic enterprises into smaller more manageable, modular services. These services are loosely coupled and strictly encapsulated. Each service is intended as a tool.

**Microservices** can be thought of as a variation of SOA applied on an application scale rather than an enterprise scale. Microservice architectural style is the way of composing microservices to produce complex applications.

A **microservice** is a process that is responsible for performing a **single independent task**. A microservice typically is built to perform a specific business capability. For example, in an application, one microservice is responsible for implementing a **search feature**, another can implement a **recommendation feature**, and yet another microservice can be responsible for implementing a **rating feature** and so on. Although microservices are developed and exist independently, ultimately they are composed together to provide the overall functionality of an application.

Each microservice **doesn't obey a full layered architectural style** because microservices are composed of other microservices and are not always intended for end users, presentation and application layers may not always be present. However, usually each microservice controls and manages its own data. As result microservices applications not follow a layered architectural style.

**For example the following Online library application which compose the following microservices.**

![microservices-1.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/microservices-1.png "Microservices")

Each microservice has a well-defined interface or API that informs other microservices how they can be used and communicated with. Communication is done through standards and protocols such as HTTP and XML, JSON. REST interfaces are used to keep communication between microservices stateless. It is desirable for each request-response to be independent of any other request-response.

**Advantages of Microservices**

* **Microservices can use languages, frameworks, and architectures that are best suited to the service. This means that different microservices can use different languages, frameworks and architectures.**

  * It allows developers to create a service using the most appropriate tools for the job.
  * It provides the opportunity for developers to try out new technologies without making an application-wide commitment.
* **Microservices make applications easier to scale and maintain.**

  * A particular microservice can easily be scaled by replication. If there are multiple copies of the same microservice, then multiple requests to the original microservice can be handled in parallel. For example, a microservice responsible for processing orders could be replicated to increase the throughout of processing large volumes of orders to balance the work.
* **Microservices make applications more resilient to failure**

  * Multiple copies of the same microservice mean that if one instance of the microservice fails, the other instances can continue functioning. For the above example of processing orders, if one of the instances is no longer functional, the remaining instances continue handling the orders. the Throughput of the system might decrease if there is one less microservice instance processing, but users of the system would be unaware of the failure.
* **Microservices can be scaled and maintained independently.**

  * Microservices have loose coupling. This allows them to be scaled independently, which is important because not all microservices within an application need to scale at the same rate. For example when the application needs to be updated, repaired, or replaced, this can be done with one microservice at a time without affecting the rest of the application.
* **Microservices can be developed quickly, and deployed and maintained by a small, independent team.**

  * Because a small team is responsible for a small piece of functionality of the entire application, the team does not need to be familiar with the whole application to be able to do their jobs. Microservices can thus be developed quickly and in parallel.

**Disadvantages of Microservices**

* **Some centralized management of all microservices will be required to coordinate all the microservices.**

  * An application made up of microservices is a distributed system, that is enabled through asynchronous communication. So microservices will need to be coordinated through some central method of management, or they may become inconsistent and result in errors.
* **Transactions may span multiple microservices.**

  * Databases will likely be distributed over multiple microservices, so transactions may span multiple microservices. Again, centralized management is needed to prevent inconsistencies and errors.
* **Testing is complex.**

  * Test conditions change, which results in making it harder to test a distributed system. It can be difficult to reproduce bugs that come about from complex interactions between microservices.
* **All microservices in the application must be robust to handle failure of any other microservice.**

  * It is important to consider how an application will cope when a microservice fails, and there is no other instance of the microservice to take its place. Any other microservices in an application must be robust enough to handle any failure in a microservice.

**Using Microservices**

Microservices Architectural style is a style relevant for applications that can be broken down into a collection of tasks or business capabilities. As tasks can be separated into compartmentalized microservices, the functionality of these services can be easily composed and recomposed to suit the needs of the application. This facilitates code reuse, and keeps code understandable and manageable.

Microservices can be local, remote, or some combination of the two. They are ideal for promoting and facilitating code reuse. Also ideal for large applications. It keeps code understandable and manageable.

Messaging between microservices has an overhead cost associated with their use, no matter what communication standards and protocols (HTTP, XML, etc.) are used. Also communication between microservices is also stateless. Depending on the application, however, it may be desirable to track the behavior of a user and their interactions. Web applications can do this with **cookies**, but this potentially increases the amount of data to transfer between microservices. The overhead cost of communication must be taken into account.

**Example of Microservices.**

Imagine a web application that allows users to find nearby restaurants, place a reservation, and review a restaurant.

We can breakup this application into the following microservices:

* **A user interface microservice** that allows the user to interact with the application.
* **A restaurant catalogue microservice** that provides all restaurants in the system.
* **A restaurant reservation microservice** that places a reservation with the selected restaurant.
* **A restaurant review microservice** to access and make restaurant reviews.

Assume all communication between microservices is HTTP and REST based.

![microservices-2.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Images/microservices-2.png "Microservices")

* When a user visits the website for this application, the user interface microservice prompts the user to enter their location. Once the address is entered, the user interface microservice communicates with the restaurant catalog microservice to determine nearby restaurants. This information is communicated back to the user interface microservice, and displayed to the user.
* When a user chooses to view more details about a particular restaurant, the user interface microservice communicates with the restaurant review microservice to access the review of the restaurant. This is then displayed to the user, and it provides an option to write a review, or to place a reservation for a particular time.
* If a user decides to review the restaurant, the user interface microservice communicates the review to the restaurant review microservice so it can be saved.
* If a user decides to place a reservation, the user interface microservice communicates with the restaurant reservation microservice to inform the restaurant. This returns a confirmation message provided by the reservation microservice.

<hr>

[Edit this page in Github](https://github.com/aboelkassem/Software-and-Service-Oriented-Architecture/blob/main/README.md)