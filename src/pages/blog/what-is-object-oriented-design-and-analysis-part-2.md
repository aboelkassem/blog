---
templateKey: article-page
title: What is Object Oriented Design and Analysis? - Part 2
slug: what-is-object-oriented-design-and-analysis-part-2
author: aboelkassem
authorLink: https://www.aboelkassem.com
date: 2020-12-17T11:20:46.056Z
cover: /img/6661.jpg
metaTitle: Object Oriented Design and Analysis | Aboelkassem Blog
metaDescription: OO Analysis and Design is a structured method for analyzing and
  designing a system by applying object-oriented concepts.
tags:
  - software-design
  - software-engineering
  - clean-code
  - object-oriented-modeling
---
In this article, we will continue explaining what we had discussed in [part 1 of Object-oriented design](https://blog.aboelkassem.com/blog/what-is-object-oriented-design-and-analysis-part-1) , so if you don't read it, I recommend reading it because it's a fully completed toutorial.

In the previous part, we discuss what is object-oriented design and why we need it, in addition to the history of the evolution of programming languages, land the four main design principles (abstraction, encapsulation, decomposition, and generalization).

Today, we will design some important concepts while designing the software and basic modeling diagrams..

## Table of Contents

* Design Principles
  * Evaluating Design Complexity
* Coupling and Cohesion
  * **Coupling**
  * Cohesion
  * **Separation of Concerns**
* Information Hiding
  * Conceptual Integrity
* Modelling Behaviour
  * Inheritance Issues
  * UML Sequence Diagrams
  * UML State Diagram
  * Model Checking

## Design Principles

### Evaluating Design Complexity

It is important to keep modules simple when you are programming,  If your design complexity exceeds what developers can mentally handle, then bugs will occur more often.

To help control this we use **Module**

* Design complexity applies to both classes and methods so we use the term called **Module** to refer to program units containing classes and methods within them.
* **Coupling** focuses on the complexity between a module and other modules.
* **Cohesion** focuses on the complexity within a module.

## Coupling and Cohesion

These two concepts help to better apply OOD principles and achieve a more manageable system, A system is a combination of various modules. If the system has a **bad design,** then modules can **only** connect to other **specific** modules and **nothing else.** A **good design** allows **any** modules to connect together **without much trouble**. In other words, in a good design, modules are **compatible** with one another and can therefore be easily **connected and re-used**

### **Coupling**

**Coupling** for a module captures the complexity of connecting the module to other modules

* If your module **is highly reliant** on other modules, say this module is **tightly coupled** to others
* If your module finds it **easy to connect** to other modules, say this module is **loosely coupled** to others, So it's important for your module to be **loose** or low not tight.

When evaluating the Coupling of the module you need to consider metrics **degree**, **ease**, and **flexibility**

* **Degree** is the number of **connections** between the module and others. With coupling, you want to keep the degree **small**, For instance, if the module needed to connect to other modules through a **few parameters or narrow interfaces,** then the degree would be small and coupling would be loose.
* **Ease** is **how obvious** are the connections between the module and others. With coupling, you want the connections to **be easy to make** without needing to understand the implementations of the other modules.
* **Flexibility** is how interchangeable the other modules are for this module. With coupling, you want the other modules **easily replaceable** **for something better** in the future.

### Cohesion

Cohesion represents the clarity of the responsibilities of a module.

* If your module performs **one task and nothing else** or has a clear purpose, your module has **high cohesion**
* If your module tries to encapsulate **more than one purpose** or has an unclear purpose, your module has **low cohesion**.

A bad design has low cohesion, if a module has more than one responsibility, it is a good idea to **split** the module.

**For example** suppose you have a class called **Sensor** that has **two purposes,** getting the humidity and get the temperature

```csharp
class Sensore
{
    public float Humidity { get; set; }
    public float Temperature { get; set; }

    public float get(int controlFlag)
    {
        switch (controlFlag)
        {
            case 0:
                return this.Humidity;
                break;
            case 1:
                return this.Temperature;
                break;
            default:
                throw new Exception("Unknown Control Flag");
        }
    }
}
```

Since the sensor class doesn't have a clear single purpose so it has **Low Cohesion**

Since it's unclear what controlling means until to read inside the method itself in order to know what values to give it which lacks ease to make the get method harder to use which call **Tightly Coupled**

To make it **loosely coupled and high cohesion** follow new design which split it to two classes each one has one purpose, and not hiding any information we don't need to break encapsulation to look inside the method

![couped-ex.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/OOD/images/couped-ex.png "example of loosely coupled")

It is important to balance between **low coupling and high cohesion** in system design. Both are necessary for a good design.

For a complex system can be distributed between the modules or within the modules

* As modules are simplified to achieve **high cohesion**, they may need to depend more on other modules thus **increase coupling.**
* As connections between modules are simplified to achieve **low coupling**, they may to need to take more responsibilities thus **lowering cohesion**

### **Separation of Concerns**

Is an ongoing process throughout the design process.

**The Concern** is a very general notion, basically, it is anything that matters in providing a solution to a problem, Which is a key idea that applies throughout object-oriented modeling and programming.

Consider a software system that solves a problem. That problem could either be simple, with a small number of subproblems or complex, with a large number of subproblems. Concepts can be abstracted from the problem space. When these abstractions are implemented in the software, it can lead to more concerns

How these abstractions are implemented in the software can lead to more concerns? Some of these concerns may involve:

* What information the implementation represents
* What it manipulates
* What gets presented at the end

Importance of separation of concerns:

* They allow you to develop and update sections of the software independently.
* Using separation of concerns also means that you do not need to know how all sections of code work in order to update a section.
* It allows changes to be made to one component without requiring a change in another.

The concerns that matter is addressed separately when applying the design principles of **abstraction, encapsulation, decomposition, and generalization**

⇒ each concept in the problem space leads to separate **abstraction** with its own relevant attributes and behaviors, these attribute and behaviors are **encapsulated** into their own section of code called class, The view of a class by the rest of the system and its implementation are separated, so that the details of implementation can change while the view through an interface can stay the same, A whole class can also be **decomposed** into multiple classes, we may recognize commonalities among classes which are then separated and **generalized** into a superclass.

**For example, The Smartphone** which focuses on two functionality of using camera and makes calls

```csharp
public class SmartPhone
{
    private byte camera;
    private byte phone;

    public SmartPhone() { … }

    public void takePhoto() { … }
    public void savePhoto() { … }
    public void cameraFlash() { … }

    public void makePhoneCall() { … }
    public void encryptOutgoingSound() { … }
    public void decipherIncomingSound() { … }
}
```

This code is **low cohesion** in SmartPhone class because we have behaviors that are not related to each other, the camera behaviors don't need to be encapsulated with the behaviors of the phone for the camera to do its job, In addition, don't offer any **modularity**, We cannot access the camera or the phone separately if we were to build another system that required only one, and we cannot replace our current camera with a different camera/different object.

So to make this class more cohesive and give each component distinctive functionalities!

Just check what our class is concerned about and separate them out, for example, SmartPhone has two concerns

* Act as a traditional phone
* Be able to use the built-in camera to take pictures

So after applied separation of concerns

![seperation-of-concerns.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/OOD/images/seperation-of-concerns.png "seperation of concerns")

```csharp
public interface ICamera 
{
	public void takePhoto();
	public void savePhoto();
	public void cameraFlash();
}

public interface IPhone
{
    public void makePhoneCall();
    public void encryptOutgoingSound();
    public void deciphereIncomingSound();
}
public class FirstGenCamera: ICamera
{
    /* Abstracted camera attributes */
}
public class TraditionalPhone : IPhone
{
    /* Abstracted phone attributes */
}

public class SmartPhone
{
    private ICamera myCamera;
    private IPhone myPhone;

    public SmartPhone(ICamera aCamera, IPhone aPhone)
    {
        this.myCamera = aCamera;
        this.myPhone = aPhone;
    }

    public void useCamera()
    {
        this.myCamera.takePhoto();
    }
    public void usePhone()
    {
        this.myPhone.makePhoneCall();
    }
}
```

So now if we want to change or swap out the camera or phone classes for something else, we don't need to touch any of the SmartPhone class's code, we just change the code to its parts.

We used separation of concerns throughout this example by separating out the general notions of camera and phone through applying **generalization** and defining two interfaces, separating out the functionality for a FirstGenCamera and TraditionalPhone by applying **abstraction** and **encapsulation**, finally by applying **decomposition** to the smartphone so the parts are separated from the whole. by applying this the code will be organized so that it only contains the code that needs it to do its job

## Information Hiding

One important thing is How to address information access? You don't need everything in your system to know about everything else. The Module should only have access to the information that it needs to do its job, we do this by applying **information hiding**

Information hiding allows modules of our system to give others the minimum amount of information needed to use them correctly and "hide" everything else. which enable developer working on a module separately without other developers needing to know the implementation details. They can use it through an interface.

In general, things that might change like **implementation details** should be **hidden**. And things that should not change like **assumptions** are revealed through **interfaces.**

**Information Hiding Through Encapsulation:** we use encapsulation to bundle attributes and behaviors into their appropriate class and expose an interface to provide access. which allows:

* Hide implementation of behaviors and only accessible through an interface of specific methods, So other classes rely on the information in these method signatures, not the implementation
* Change the implementation without changing the expected outcome

So you can hide information through the use of **Access Modifiers** which C# have 4 different levels of access **Public**, **Protected**, **Private**, and **Internal**

* **Attributes** with a **public** access modifier are accessible by **any class** in your system which means other classes can retrieve and modify the attribute. **Public Methods** are also accessible by any class in your system, but do not allow other classes to **change the implementation** of the behavior for the method, just other classes call the method and receive any output.
* **Protected** Methods and Attributes are not accessible to every class in the system, they are only available to the encapsulating **class itself, all subclasses, and within the same package/namespace**
* **Internal** Modifier The code is only accessible within its own assembly, but not from another assembly
* **Private** Attributes and methods are **not accessible** by any class other than by the **encapsulating class itself,** This means these attributes cannot be accessed directly and these methods cannot be invoked by other classes.

### Conceptual Integrity

It about creating consistent software, making decisions about how your system will be designed and implemented, so if you see multiple people working on software it would seem as only on mind guiding all the work.

**Conceptual integrity** does not mean that the developers in your team don't get to voice their opinions about the software, It's more about **everyone agreeing** to use certain design principles and conventions.

You can achieve Conceptual integrity through:

* **Communication** through adopting agile development practices like **Daily Stand-Up Meetings** and **sprint retrospectives** where team members agree to use certain libraries or methods when addressing certain issues, For example, team members can all follow a particular **naming convention**
* **Code Reviews** are systematic examinations of written code like peer review in writing, which used to **find mistakes** in the software and keep different developers consistent with each other, Developers go through the code line by line and uncover issues in each other’s code.
* Using **Design Principles** and **Design Patterns**
* Having a **well-defined design or architecture** underlying the software, While software design is associated with guiding the internal design of process running as a single process, Software Architectures describe how software running as multiple processes work together which creates organized software consistency.
* **Unifying concepts** are taking different concepts and finding commonality, For example, in the Unix OS every resource can be seen and manipulated a file, the same set of operations can be used on different types of resources.
* Having a **small group** that accepts commits to the code base, which similar to code reviews but restricts the reviews to only members of your software team to ensure the software changes follow the overall architecture and design of the software to solve any design issues and lead to consistency.

## Modeling Behaviour

### Inheritance Issues

Inheritance is a powerful design tool that can help you create clean, reusable, and maintainable software systems. But **misusing** inheritance can lead to **poor code** and that happens when creating **more problems** than they are meant to solve. 

To know that you:

* Ask yourself: "Am I using inheritance to simply share attributes or behaviors without further adding anything **special in my subclasses**?"
* If the **Liskov Substitution Principle** is broken, this principle states that a subclass can replace a superclass, if and only if the subclass does not change the functionality of the superclass.

Example for bad inheritance in java, In Stack data structure, the Java Stack class inherits from a Vector superclass. This means that the Stack class is able to return an element at a specified index, retrieve the index of an element, and even insert an element into a specific index. These are not behaviors normally expected from a stack.

**If inheritance does not suit your need**, Just using **decomposition** will be more appropriate.

For SmartPhone Example

![smartphone-ex1.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/OOD/images/smartphone-ex1.png "smart phone example")

which are not make sense for SmartPhone to inherit from the phone and then add camera methods to it. So in this case we should use decomposition to extract out the camera responsibilities and put it into their own class like this:

![smart phone example](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/OOD/images/smartphone-ex2.png "smart phone example")

Inheritance could be a difficult design principle to apply, but still a very powerful technique.

### UML Sequence Diagrams

Sequence diagrams are used to show your team how **objects** in your program **interact** with each other to complete tasks. Think it as mapping of conversation from two people/objects, it used as a planning tool before the dev team starts coding to help to determine the functions you will need.

**For example** a person wants to order a burger at local fast food restaurant,

![UMLSequence-ex1.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/OOD/images/UMLSequence-ex1.png "UML Sequence diagram example")

**Components of Sequence Diagram**

* **Boxes** are used to represent a role played by an object. The **role** is typically named after the class for the object
* **Vertical dotted lines** are known as **lifelines** to represent an object as time passes by.
* **Solid line Arrows** to show **messages** that are sent from one object to another. A short description of the message is usually included above the arrow
* **Dotted line arrows** are used to show a return of data and control back to initiating objects.
* **Small rectangles** along an object’s lifeline denote a **method activation**. You activate an object whenever an object sends, receives, or is waiting for a message.

Sequence diagrams are typically framed within a large box which show that this is **one** sequence of activities, Also Sequence diagram can contain **other sequence diagrams** within it

**For example** in changing the channel of TV by using remote control.

![UMLSequence-ex2.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/OOD/images/UMLSequence-ex2.png "UML Sequence diagram example 2")

When sequence diagrams get more complicated, you can also show **Loops** and **Alternative** processes in a sequence diagram, for the above example when the Viewer is unsure what channel to go to. and would like to surf the channels until finding a channel they like 

![UMLSequence-ex3.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/OOD/images/UMLSequence-ex3.png "UML Sequence diagram example 3")

### UML State Diagram

**A State Diagram** is a technique that you can use to describe how your system behaves and responds. When an event occurs you note how a system acts or behaves and show changes between states to determine the different events that might occur during an object's lifetime like user inputs, and how this object behaves when this event occurs like checking conditions and performing actions.

**State diagrams** can describe a single object and illustrate how that object behaves in response to a series of events in your system by imaging the changing states of an object. Also, help to find issues in your system like discovering a condition that didn't play for or help to create tests.

**State** is the way an object exists at a particular point in time, The state of an object is determined by the values of its attributes.

**For example** Car with automatic transmission can have different states like a park, reverse, neutral, and drive. When a car is in reverse it can only behave move backward, if you want it to move in a forwards direction you have to change the state of the car.

UML State Diagram components

* **Filled circle** to indicate the **start state** of the diagram.
* **Arrows** are used to represent **events** to **transition** from one state to another
* **Rounded rectangles** indicate other states which have three sections a **state name**, **state variables**, and **activities**

  * **State name** is the name of the state, it should be meaningful for the states of your object
  * **State Variables** are data relevant to the state of the object
  * **Activities** are actions that are performed in the state, there are three types for each state, **entry, exit, and do**

    * **Entry** activities are actions that occur when the state is **just entered** from another state
    * **Exit** activities are actions that occur when the state **is exited** and moves on to another.
    * **Do** activities are actions that occur **once, or multiple times**
* **Termination** represents an object being **destroyed** or the process is **completed**

**Example** of Vending machine 

![UMLState-ex.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/OOD/images/UMLState-ex.png "UML State Diagram")

### Model Checking

After using many techniques to design your system, **How do you make sure that the system you've created is correct**? you can run **tests** and see if the actual behavior matches what you expect, another technique is **model checking**

**Model checking** is a systematic **check** of your system's state model, you **check all the states** of your software and find that there are any **errors** by simulating different events that change the states and variables of your software. And notifies you of any violations of the rules.

Model checks are performed by **model checking software**. There are different types of software available for such **tests**, some of which are free and available for developers using different languages. Model checking is typically performed during **testing** of the software

Think of model checking like going through airport security, Security guards in airports know the rules of what people should have or shouldn't have to get on an airplane.

Imagine software that has a rule not to produce a **deadlock, Deadlock** is a situation where your system **cannot continue** because **two tasks are waiting for the same resource.** So your **model checker** would simulate the different states that could occur in your system and if the **deadlock** is possible, it would provide you details of the violation.

**How do you model check your software**? Model checkers generate a **State Model** from your code, A state model is an abstract state machine that can be in one of various states, the model checker then checks the state of the model conforms to behavioral properties. For example, the model checker can examine the state model for flaws like **race conditions**, exploring all the possible states of your model.

The three different phases to performing model checking :

* **The Modeling phase**: where you enter **a model description** in whatever programming language your system uses, describe the desired properties.
* **The Running phase:** this is when you **run the model checker** to see how your model conforms to the desired properties that you've written in the modeling phase.
* **The Analysis phase**: this is when you **check** if all the desired properties are satisfied and if any are violated (Counterexamples), proving information to you where to fix any problems.

Model checking helps ensure not only that software is well designed, but also that software meets desired properties and behavior, and it works as intended. There are also many ways to test your system's behaviors like **unit testing**, beta testing and simulations

<hr>

[Edit this page in Github](https://github.com/aboelkassem/Design-Patterns/blob/main/OOD/README.md)