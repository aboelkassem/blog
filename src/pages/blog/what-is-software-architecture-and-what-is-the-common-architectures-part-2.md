---
templateKey: article-page
title: What is Software Architecture and What is the common architectures? - Part 2
slug: what-is-software-architecture-and-what-is-the-common-architectures-part-2
author: aboelkassem
authorLink: https://www.aboelkassem.tech
date: 2021-02-24T08:57:10.742Z
cover: /img/software-architecture-2.jpg
metaTitle: Software Architecture | Aboelkassem Blog
metaDescription: Software Architecture is the fundamental design of the software
  system. It defines what elements are included in the system, what function
  each element has, how each element related to another. In plain text, it is
  the big picture (overall structure) of the whole system.
tags:
  - software-architecture
  - software-design
  - clean-code
  - web-dev
  - software-engineering
---

In[ the previous article,](https://blog.aboelkassem.tech/blog/what-is-software-architecture-and-what-is-the-common-architectures-part-1) we had discussed what is architecture, common UML diagrams, and some architectures. Today, we will continue explaining the architectures and their qualities for building any software.

## Table of Content

- Interpreter-Based Systems
- Pipe and Filter Architecture
- Event-Based Architecture
- Software Architecture in Practice.
  - Quality attributes.
  - Analyzing and Evaluating an Architecture
- Product Lines (Product Families)
  - Reference Architecture

## Interpreter-Based Systems

Systems based on interpreters (Interpreter-Based Architecture) can allow end user to write **scripts** or **rules** that access or run the **basic features** of those systems in new ways like formulas in Microsoft Excel. Which interpreters can run **scripts, macros,** and drive programmable actions specified by the user.

**Scripts** can write to automate tasks like Schedule tasks, performing repetitive actions, or complex tasks. **Macros** are an evolution of scripts and popular with GUI which records keyboard and mouse inputs so that they can be executed later, which allow users to record interactions with user interface like collecting coins in games.

**Interpreter** allows you to add functionality to a system or Extend the existing functionality of a system, by composing **pre-existing functions** together to create something new. For example, **web browser extension** is a component that adds new functionality to the browser and can customize the pages that the browser renders which this component is written and implemented by language like **Javascript** to run by an interpreter in the browser.

Having a system with a built-in interpreter is not only beneficial to **developers**, it encourages end users to implement their **own customizations**. Which the system can offer an easier language suited to the needs and thinking of the end users.

Interpreters make systems more **portable**, so they can work on platforms that the interpreter supports (languages). This is an important feature with the growth of virtual machines and virtual environments, more and more services are being hosted in the cloud, so you develop and deploy software system onto hardware that you have no control over.

Interpreters can be **slow**, spending little time to analyze the source code and use line by line translate and execute.

**Example of where interpreters are used for java programming languages.**

In Java, programs are first translated into an intermediate language that is loaded into a Java Virtual Machine (JVM), then executes the intermediate language, JVM used to optimize the intermediate instructions monitoring the frequency of the instructions. Which later translated into machine code to execute. On the next execution of the same intermediate instructions, the JVM uses **Lazy Linking** to point the program to the previous machine code translation. Instructions that are not used frequently are left for the **interpreter** of the JVM to execute.

This decreases execution time since frequency used instructions don't need to be constantly translated and the entire program doesn't need to be translated all at once. Also the JVM also provides portability to Java programs, allowing them to run on many operating environments.

## Pipe and Filter Architecture

Pipe and Filter architecture is a type of Data Flow Architecture, **Data Flow Architecture** consider a system is a series of transformation on data using a different type of operations.

A pipe and filter architecture has entities called **Filters**, which perform transformations on data input they receive. **Pipes** server as connectors for the stream of data being transformed.

**The following diagram shows the data flow in one direction**. The changes of the data are done sequentially from filter to filter.

![pipe-filter-arch-1.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/pipe-filter-arch-1.png "pipe filter architecture")

The order in which filters transform data may **change the end result**, the input of one filter is the output of another, so the order is very important. Also, it used as the text-based utilities in the Unix operating system.

**UML Component Diagram of Pipe and Filter Architecture.**

![pipe-filter-arch-2.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/pipe-filter-arch-2.png "pipe filter architecture")

**Advantages of Pipe and Filter Architecture.**

- **Ensures loose and flexible coupling of components**, because each filter runs independently, so it's only focused in its input and its output, also easy to move filter around in a system to achieve different results. Also made easily changes on individual filters without affecting other filters in the system.
- **Filters can be treated as black boxes**, users don't need to know the inner workings of each filter.
- **Reusability**, is the main advantage of this architecture, each filter can be called over and over again with different inputs.

**Disadvantages of Pipe and Filter Architecture.**

- **May reduce performance due to excessive overheads in filters**. because each filter parses the input into a data structure, do transformations and send data to another, if every filter has to do this process will cause overheads, so the performance of the system will reduce.
- **May cause filters to get overloaded with a massive amount of data to process.**
- **Cannot be used for interactive applications** because it will take time to process data depend on filters.

## Event-Based Architecture

This architectural style derives from the **Event Driven Programming paradigm**. in this style, the main elements in the system are **events**. Which can be signals, user inputs, messages, or data from other functions. Events act as **indicators of change** and **triggers**. In This paradigm **functions** can be **event generators or event consumers**. Which event generators send events, event consumers receive and process these events.

In the event-based architectural style, functions are not explicitly called. Instead, **event consumers are called based on events sent from event generators**. Event-based functions communicate between functions by **an event bus,** not with each other. Think of the event bus as the connector between all event generators and consumers in the system.

To achieve this structure, bind an event and an event consumer via an event bus. This means that each event consumer registers with the event bus to be notified of certain events, when the event bus detects an event it distributes the event to all appropriate event consumers. Like **observer design pattern** which based on this architectural style.

To implement the event bus there is one way, having a **main loop** in the system that continually listens for events, when an event is detected, the loop calls all the functions bound to that event. An event consumer will have to notify other functions when it has completed its task or to send a state change. This function will invoke other functions to run after it has completed. It does this by sending out an event to the event bus. When an event reaches the event bus, corresponding event consumers will be triggered and the next computation can take place.

**Example of Code Editor to understand this process in UML Component Diagram.**

![event-based-arch-1.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/event-based-arch-1.png "event based architecture")

Notice in this example the Build Tool, Test Tool, and Editor are all event generators and consumers. The best thing in this architecture is the event consumers don't necessarily know who is generating the events they handled, This loose coupling of functions makes the system easier to scale and evolve, adding new functionality for an existing event is as simple as registering a new event function to the event bus and add new event consumer.

In this architectural style, events and function don't occur in a predictable way, there are no guarantees of exactly when an event will be handled, how long it will take to be handled, or when an event generator will emit an event. Control flow is based on which events occur during its execution and in what order.

This style will be suitable for interactive applications, applications that rely on user input, and distributed systems that interact with other programs.

**Cookie Clicker Example to apply event-based architecture.**

“Cookie Clicker.” The goal of this game is to collect as many points as possible by clicking on an image of a cookie with your cursor. This can be done manually or by clicking on a cursor icon.

![event-based-arch-2.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/event-based-arch-2.png "event based architecture")

When Click in the cookie manually, the total points will increase by one point, The Buy Clicker icon has a functionality, it will purchase a special automatic clicker that automatically clicks the cookie at regular time intervals with 5 cookie points, thus reducing work on the user’s part to collect points.

The following Component Diagram shows the system using event-based architecture.

![event-based-arch-3.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/event-based-arch-3.png "event based architecture")

The "timer" function is an event generator, added to the system by first "buy clicker" event, registered to the event bus, that sends a timer event every five seconds, When the "timer" function emits a timer event, the event bus detects this and trigger every "Automatic clicker" function to consume this event.

## Software Architecture in Practice.

Software architecture aims to combine **software design patterns and principles** in order to define the software's **elements**, properties, and interaction with each other. If the architecture of the system is just a set of design patterns and principles, then you can determine the capabilities and the quality of the architecture based on the elements. However, this is not the case, because design patterns are good at addressing one specific technical problem but poor at addressing the wide range of business needs and concerns. So modern systems need to be able to focus on a **wide range of problems, not just technical issues.**

System architecture is more concerned with addressing the bigger picture including **functional** and **non-functional** aspects of the system. It will set guidelines for design patterns and principles in order to make the system has conceptual integrity and consistency. In addition to design patterns and principles to define **functional issues** which improve system's maintainability, reusability, and performance, but software architecture must consider **non-functional requirements** like testability, usability and availability. So software architecture addresses these qualities in addition to design patterns in order to **construct a unified system** to be qualified by how well the design addresses user experience and ease of development.

**So, How architecture be Good or Bad?** Software architecture is not good or bad. That is to say that an architectural design doesn't have qualities or it's correct that make it a "good architecture" or "bad architecture". Software architecture is designed to address a set of requirements that are used to address a problem or need. **For example**, an online web-based game will use event-based architecture over repository-based architecture in order to facilitate communications between players. Also your system will most likely use a combination of architectural designs because the modern requirements are complex and there is no architecture that is capable of all the requirements. So it's important to consider the **context** of the problem and requirements.

There are functional and non-functional requirements when designing the architecture of your system, software must address all the functional requirements but you also need to design to meet non-functional requirements as well. Non-functional requirements are not always clear or presented by your clients or stakeholders. These requirements can differ between each group, for example, the development team will care about maintainability, reusability, testability, and supportability. End users don't care about that but care about ease of use, error handling and system stability.

### Quality attributes.

**How measure an architectural design to determine if it is capable of meeting the system requirements?** It is determined by **quality attributes**. Which they are measurable properties of a system used to measure a system's design, runtime performance, and usability. For an attribute to be measurable, there needs to be an objective means of quantifying it. For example, system availability can be measured by the system’s **uptime** in some units of time.

The following table shows attributes that covered when designing a system using design patterns and principles (from the developer's perspective).

![quality-attributes-1.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/quality-attributes-1.png "quality attributes")

- **Maintainability** determines how easy systems can undergo changes like fix errors, change software elements, add new features or retire old services.
- **Reusability** allows you to take functionality or parts of a system and use it in another one. which helps to reduce reimplementing something that has already been done.
- **Flexibility** is the ability to adapt to future requirements changes in a timely and cost efficient manner.
- **Modifiability** like maintainability, it determines the ease at which your system is able to handle changes to functions, adding new functionality, or remove existing ones. Also adopting new technologies and industry standards.
- **Testability** defines testing your program from errors and bugs to be fixed before release your system.
- **Conceptual Integrity** determine which there is consistency throughout the system.

In addition to qualities to account for from a **developer’s perspective**, it is also necessary to take into consideration qualities from a **user’s perspective** in the following table.

![quality-attributes-2.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/quality-attributes-2.png "quality attributes from user perspective")

- **Availability** is measured by its **uptime** because you want to know how well it is capable of issues like system errors, high loads, or updates, and try to prevent them.
- **Interoperability** is the ability to understand interfaces and use them to exchange information under specific conditions with external systems, meaning how your system responds to other systems as outlined in the documentation. Modern system has a defined context in which it exchanges information including communication protocols, data formats and with whom allowed to exchange information.
- **Security** should be considered to prevent sensitive information to be accessible to users that are not authorized to see it. System should only provide data integrity, meaning controls who can see the data versus who can also change the data.
- **Performance** is measured by the amount of output over a period of time to produce this output after receiving input.
- **Usability** achieved by your system needs to be easy and intuitive to learn, minimize user errors, provide feedback to the user to indicate that the system has registered their actions, and make it easy to complete tasks.

**How do we go about design a high quality system?** the important matter is being **created, or choose an appropriate architectural design for your system** because architecture determines how functionality is implemented, how subsystems communicate with each other, and how end users interact with your system. If the qualities achieved by the architecture are good, it makes maintaining, supporting, and updating the system throughout its life cycle much easier.

A high-quality system does not need to be “**complex**.” An overly complex system makes it difficult and time-consuming to produce. It is good practice to try to minimize complexity in the design. If a **simpler** architecture can satisfy all the system requirements and achieve a high-quality design while needing less time and less money, it makes sense to go with that.

Having detailed and **up-to-date documentation** making it a high-quality system, Which helps record and share an architectural vision to coworkers to know how the functionality of the system is designed. The documentation keeps a design cohesive, if the architect or any of the developers leave the team.

You should use a set of **rules or guidelines** for the design process and how your system will be structured. It varies from company to company but there are general guidelines like:

- Recognizing the importance of quality attributes and prioritizing them for each system being design.
- Involving a technical lead in the design process. Although architectural design can be applied to many different technologies, involving a technical lead will help identify any implementations that may pose a challenge, which may need to be re-considered in the design.
- Taking a design approach from the perspective of the different groups of stakeholders.

You can write your own guidelines to ensure there is conceptual integrity when implementing the system like:

- Having well-defined subsystems that are assigned responsibilities based on design principles.
- Having consistent implementations of functions across the entire system.
- Having a set of rules on how resources are used as memory, bandwidth, or threads.

In summary, remember that architecture is not good or bad, it is a matter of selecting the appropriate architectural solution for your problem, it is important to involve all groups of stakeholders in the design of the system, to adopt good documentation practices, and to set rules for design and implementation

A well-designed system considers quality attributes from a developer’s perspective, which includes maintainability, reusability, flexibility, modifiability, testability, and conceptual integrity; the system should also consider attributes from a user’s perspective, which includes availability, interoperability, security, performance, and usability.

### Analyzing and Evaluating an Architecture

Software systems are designed to address the specific business needs to various stakeholders, So we need to use a methodical way of analyzing and evaluating a system's behaviors, quality attributes, and various characteristics to meet a specific set of standards.

In order to measure quality attributes, they use **quality attribute scenarios** to determine if a system is able to meet the requirements. There are two types of scenarios:

- **General scenario** is used to characterize any system
- **Concrete scenario** is used to characterize a specific system.

In the context of analyzing and evaluating architecture, you should focus on situations that are **outside of the normal execution path**. This means that scenarios involving incorrect input, heavy system loads, or potential security breaches should be prioritized highly.

**Scenario** is a system's ability to handle unexpected failures that stop from achieving specific quality attributes.

Each scenario consists of:

- **Stimulus source**: is anything that creates a stimulus, a source can be internal or external to the system like an internal timer for an internal system, or end user for the external system.
- **Stimulus**: is a condition that will cause the system to respond, conditions like internal specific error could be a buffer overflow, or external specific error could be incorrect user input.
- **Artifact**: is the part of the system that is affected by the stimulus. In large-scale systems, a stimulus should not directly affect the entire system.
- **Environment**: is the mode of the system when it is receiving a stimulus.
- **Response**: is how the artifact will behave as a result of receiving a stimulus like handling an error, recovering from a failure, updating system logs, dispatching security alerts, or changing the current environment.
- **Response Measure:** a metric used to quantify the response so that the quality attribute can be measured, like the probability of failure, response time, repair time, and average system load.

![evaluate-and-analysis-arch-1.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/evaluate-and-analysis-arch-1.png "evaluate and analysis architecture")

**Availability Quality Attribute Scenario Example**

Imagine you are addressing the availability of a system. In addition to focusing on when a system is online and behaving normally, you have to consider situations where the system becomes unavailable, and measure how long it takes to recover.

**In a general scenario**, high-level events are summarized:

![evaluate-and-analysis-arch-2.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/evaluate-and-analysis-arch-2.png "evaluate and analysis architecture")

**In a concrete scenario** that allows you to test architecture with a specific stimulus, under specific system environments, and measure how well the system can respond. For exmaple

- Availability for a web server can be measured in its ability to process requests when at resource limits or under heavy load, so you can measure a server's availability under different conditions.

![evaluate-and-analysis-arch-3.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/evaluate-and-analysis-arch-3.png "evaluate and analysis architecture")

**Architecture Trade-off Analysis Method (ATAM)**

This technique developed by Software Engineering Institute at Carnegie Mellon University, used to analyze and evaluation of the entire architecture. Which its main advantages that evaluators/architects don't need to be familiar with the architecture or the problem space.

ATAM involves three different groups of participants:

- **Evaluation Team** which has:

  - **Designers** are the ones involved with the architectural design. these follow an iterative, Hypothesis-Driven method when designing which involves analyzing requirements, creating a design, reviewing the design to see if it works.
  - **Peers** which are not involved in the design decision, but Their point-of-views helps round out the design decision.
  - **Outsiders** who external to the project or organization, helps to eliminate bias towards the project and have experience in analyzing architecture.

- **Project Decision Makers** have the authority to make project decisions, including project managers, clients, product owners, software architects, and technical leads.
- **Architecture Stakeholders** includes anyone who wants the architecture to successfully address business needs but who is not actively involved in the evaluation process, like end users, developers, and support staff.

The following diagram shows high level flow of ATAM:

![ATAM-1.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/ATAM-1.png "Architecture Trade-off Analysis Method (ATAM)")

In an ATAM, a software project is initiated when business drivers identify a need for a system to address some problem. Business drivers go hand in hand with the system architecture, which is created as the solution to the business issues. Together, business drivers and system architecture determine the quality attributes of the system, the architectural approach taken, and the design decisions that are made. These combine together to create quality attribute scenarios. Scenarios can then be analyzed, resulting in an evaluation of the system, which includes trade-offs, sensitivity points, non-risk scenarios, and risk scenarios. Since the risk scenarios have a negative impact on the quality of the system, each of them is analyzed and categorized into “risk themes".

**The ATAM process and its nine steps**

- **Present the ATAM**. The evaluation team presents the ATAM process, which includes the context for the evaluation, expectations, procedures, outputs, and address any other concerns.
- **Present the business drivers**. This project decision makers present the business problem, and the goals of the system, the system's features and requirements, project constraints, and scope.
- **Present the architecture**. The current and expected state of architecture is presented, constraints of the project that can affect the architecture such as time, cost, the difficulty of the problem, and quality expectations.
- **Identify the architectural approaches**. This is the first analysis activity that involves examining the architectural patterns that have been used in the system so far. In this step, you analyze the documentation, the notes from presentations, and ask questions to get more clarity about the system.
- **Create a quality attribute tree**. The requirements for each quality attribute are details in a utility tree. which captures all the quality-related architecturally significant requirements (**ASRs**). Which get from business drivers to utility system's quality attributes. You can insight into the system and identify the quality priorities by working with the project decision makers to refine your tree.
  ![ATAM-2.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/ATAM-2.png "Architecture Trade-off Analysis Method (ATAM)")

  ```
  To build such a tree, the overall “utility” of a system is broken down into quality attributes, which are refined into attribute refinements. **Attribute refinements** are more specific qualities of a system. Once the quality attributes have been refined, ASRs can be associated with the appropriate attribute.

  In quality attribute trees, ASRs are given priority values to denote if they are “must-haves” or not. The example above uses high (H), medium (M), and low (L) designations, but these values could differ from system to system.
  ```

- **Analyze the architectural approaches**. Using the prioritized ASRs from the utility tree, examine the architecture and determine how it addresses each ASR. this allows you to identify and document the risk and non-risk scenarios, sensitivity points, and trade-offs. Sensitivity Point can affect the quality attributes, For example, high traffic may cause an increase in the system's latency. Trade-offs occur when sacrifice one quality for improvements in another, For example, you could limit the number of concurrent users allowed on your system, this limits the system's availability but don't worry about increasing latency while the system grows up.
- **Brainstorm and prioritize scenarios**. Each group of participants creates quality attribute scenarios that are important to them, and that they would expect when using the system. Scenarios that have similar quality concerns or behaviors can be merged together. Scenarios are prioritized based on importance to each stakeholder, and the evaluation team compares the list with the prioritized ASRs in the utility tree. If the priorities of the stakeholders match closely with the priorities in the utility tree, then there is **good alignment.**
- **Re-analyze the architectural approaches**. Similar to the earlier analysis, you create a utility tree, but you will use the top five or ten scenarios prioritized in the previous step.
- **Present the result**. Finally, the results of the evaluation are compiled and presented. These risk scenarios are grouped together, and categorized into "risk themes". Risk themes help to identify which business drivers are affected. The information presented includes all architecture documents, utility trees, risk and non-risk scenarios, sensitivity points, tradeoffs, and risk themes.
  ![ATAM-3.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/ATAM-3.png "Architecture Trade-off Analysis Method (ATAM)")

Modern systems are becoming more and more complex as technology grows, and creating an architecture that can achieve all the requirements for quality attributes is becoming increasingly important. Being able to evaluate and analyze architectures helps successfully create high-quality systems.

ATAM is a common method for analyzing and evaluating architectures, especially as it does not require evaluators to have intimate knowledge of the system, and covers the viewpoints of all important stakeholders. ATAM helps minimize risks in a system by identifying them and helps architects minimize the effects of sensitivity points and be sensible about trade-offs. Also helps facilitate communication between stakeholders, Found issues with the newly discovered functionalities, elevated the role of software architecture.

## Product Lines (Product Families)

As developers work, they should always be looking for opportunities for **code re-use**. The software world is full of code re-use implemented in different ways. Such as libraries, toolkits, and engines. Which saves time for developers and gets robust solutions by reusing code. Reusing code is much faster than developing new code. Even if code has to be modified or adapted to the application, it's still faster than writing from scratch. So well-written and well-documented code are important.

**Product lines** are groupings of products that typically **share the same operating system**, which allows for a great deal of code re-use. For example, IOS is developed for a product line of iPhones, iPads, and iPod touch products.

**Product lines present several advantages:**

- **Cost**. Product lines designed with similar features allow companies to **save money** because it reduces their development costs per product. The time saved on development can be spent testing for quality attributes, such as reliability, user experience, security, and maintainability. However, less testing is needed overall per product, because code that is reused has already been tested.
- **User Experience**. If several products share characteristics, then the learning curve for customers and developers is smaller and fewer surprises. This may also drive sales of other products in the same line. Which is a key strategy of Apple company.
- **Time-to-market**. Since most software components are already made, making a new product in the product line, or refining an existing one, takes less time.

If only one or two products are being produced, it might not be worthwhile to treat them as a product line, unless there is intent to develop more products later on.

**Implementing Product Lines:**

Separate the features that stay the same from the features that are different across products.

![product-lines-1.png](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/product-lines-1.png "product lines")

\- \\*\\*Commonalities\\_\\_ like the user experience of the apple products.

- \\*\\*Variations\\_\\_ like supporting for different cellular network connections in the line of tablets, IPhones.
- \\*\\*Product-Specifics\\_\\_ like the tablets which developed specialize in reading eBooks. Its product specifics could be additional tools for managing eBooks and support for an e-ink screen

Product line development teams are generally divided into two camps:

- **Domain engineering**: is the development of the commonalities and variations. Essentially this is putting together the building blocks of the products or the infrastructure.
- **Application Engineering**: is the actual development of the product. It includes using the commonalities, deciding which variations are necessary, and integrating them into the product and developing product-specific features. This is sometimes described as “instantiating” a product. There could be several application engineering teams, one for each product.

![product lines](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/product-lines-2.png "product lines")

Separating development into domain and application engineering allows for **separate development cycles**. The domain engineering team can determine the long-term needs of the product line, evolve and test components as needed, then **release that infrastructure to the application team**. Then, the application team can develop product specific features using the infrastructure and the requirements of the product. They will develop product-specific features, decide what variations to use, and test the final product. This can be done while the domain engineering team is working on the next update of the infrastructure.

### Reference Architecture

Products in a product line likely have similar architectures, as they serve a similar purpose. Instead of creating a new architecture from scratch for each product, the product line usually has an architecture that products can build on or change. **The domain team** is generally responsible for this **reference architecture**.

**The reference architecture must:**

- be designed with respect to the needs of the software, while taking into account all current products in the product line.
- include the capacity of variation, for differences in products and to allow for future products in mind.

Because there will be differences in the product line, there are **three general techniques** to realize **variations** in a system:

- **Adaptation technique**. In this technique, the component has only one implementation, but it supplies interfaces to change or add on to it. Components can be adapted through **settings in a configuration file**, by adding new methods or by overriding existing methods
  ![product lines](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/product-lines-3.png "product lines")
- **Replacement technique**. In this technique, there could be a default component that is replaced with alternatives to realize variation. There may not even be a default; instead, there is a gap in the system, and the developers must supply one of the components.
  ![product lines](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/product-lines-4.png "product lines")
- **Extension technique.** In this technique, a common interface is provided for all the variations of the system. These variations are often called extensions, add-ons, or plugins.
  ![product lines](https://raw.githubusercontent.com/aboelkassem/Software-and-Service-Oriented-Architecture/main/Software%20Architecture/Images/product-lines-5.png "product lines")

Variations can be realized at different times. Different variations may even come in at different stages they can be formed early on, during the design or development process of the application engineering team, or they can be formed when the software is compiled and built. Similarly, variations can be realized at different times, like when the software is launched or after the software is launched, whenever they are needed.

Product lines are an efficient way to use the power of code re-use in related products, which saves time and cost. Usually, this is done by splitting development into domain engineering and Application Engineering. Product lines impose new requirements on the architecture. The reference architecture applies to all products in the product line and must handle both commonality and changes. The extra resources and the common code in product lines can be used for all kinds of goods. Like reliability, user experience, security, time-to-market, and maintainability.

<hr>

[Edit this page in Github](https://github.com/aboelkassem/Software-and-Service-Oriented-Architecture/blob/main/Software%20Architecture/README.md)
