---
templateKey: article-page
title: " The Five Basic Object-Oriented (SOLID Principles) for Designing Software"
slug: " solid-principles-for-desiging-software"
author: aboelkassem
authorLink: https://www.aboelkassem.tech
date: 2020-07-30T11:41:53.267Z
cover: /img/solid.png
metaTitle: Solid Principles | Aboelkassem blog
metaDescription: SOLID principles are the design principles that enable us to
  manage most of the software design problems promoted by Robert C. Martin and
  introduced by Michael Feathers.
tags:
  - SOLID
  - software-design
  - software-engineering
  - c#
  - web-dev
  - clean-code
---
# Table of Contents

* Single Responsibility Principle (SRP)
* Open/Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Organizing and extending SOLID Principles into your project

# Solid-Principles

**SOLID** principles are the design principles that enable us to manage most of the software design problems promoted by Robert C. Martin and introduced by Michael Feathers.

it is a mnemonic acronym. It helps to define the five basic object-oriented design principles to make software designs more understandable, flexible, and maintainable:

1. **S**ingle Responsibility Principle
2. **O**pen-Closed Principle
3. **L**iskov Substitution Principle
4. **I**nterface Segregation Principle
5. **D**ependency Inversion Principle

## Single Responsibility Principle (SRP)

* The Code/Class/Method "do one thing and do it well"
* Uncle Bob, "There should never be more than one reason for a class to change"
* A Class or method Should have one and only one reason to change, meaning that a class should have only one job or responsible for one part of the functionality

### Examples of responsibilities of the application

every software has many responsiblities while you building it like

* Persistence (Storage)
* Logging
* Validation
* Business Logic 

![Voilatiing-Single-Responsibility-Principle.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/Voilatiing-Single-Responsibility-Principle.png "Voilatiing Single Responsibility Principle")

### Example 1 for <a href="https://github.com/ardalis/SolidSample/tree/SRP-START">the code here</a>:

Finding Responsibilities in one class that make the code difficult and longer to test one responsibility in isolation

![ex2-pro.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/ex2-pro.png "example 1 problem")

![ex2-pro-2.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/ex2-pro-2.png "example 1 problem")

**Solution after making them in different classes that now are easily tested**

![example 1 solution with single repository](https://github.com/aboelkassem/Solid-Principles/raw/master/Screenshots/ex2-solu.png "example 1 solution with single repository")

![ex2-solu-2.png](https://github.com/aboelkassem/Solid-Principles/raw/master/Screenshots/ex2-solu-2.png "example 1 solution with single repository")

![ex2-solu-3.png](https://github.com/aboelkassem/Solid-Principles/raw/master/Screenshots/ex2-solu-3.png "example 1 solution with single repository")

### Example 2:

**Problem:**

![ex1-pro.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/ex1-pro.png "example 2 problem")

**Solution**:

![ex1-slou.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/ex1-slou.png "example 2 solution")

## Open/Closed Principle (OCP)

* Software entities(modules, classes, methods) should be open for extension but closed for modification.
* any new functionality should be done by adding new classes instead of changing an existing one

### Why Should Code be closed to modification?

* Less Likely to introduce bugs in code we don't touch
* Less Likely to break dependent code when we don't have to deploy updates
* Fewer conditionals in code that is open to extension results in simpler code
* All the attributes and behaviors are encapsulated
* Proven to be stable within your system
* Bug Fixes are ok

`closed` does not mean that changes cannot be made to a class during **development**. It happens when most of the design decisions have been **finalized** and once you have implemented **most of your system.**

### How can you predict future changes

* start concrete and modify the code the first time or two
* by the third modification, consider making the code open to extension for that axis of change

### How to Implement OCP

* adding new functionality to derived class (abstract class)
* or allow the client to access the original class with an abstract interface

### 1- Abstract Class

* first, make the base class that contains the original method abstract class and make the method abstract method don't have an implementation,
* Create class/classes inherit from this abstract class to do these abstract method in different functionality .... so now it's close for modifications and open for an extension new method

![ocp-abstract.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/ocp-abstract.png "ocp abstract diagram")

### 2- Interface

* Create an interface that contains the common method that wants to add new functionality to it
* Create class/classes implement this interface to do the different functionalities for this method

![ocp-interface.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/ocp-interface.png "ocp interface diagram")

### Other Typical Approaches to OCP

* 1- Parameters
* 2- Inheritance
* 3- Composition/ Injection

Applying these approaches to this simple code

```csharp
public class DoOneThing 
{
	public void Execute()
	{
		Console.WriteLine("Hello World.");
	}
}
```

* **Parameters**
  ![ocp-parameter.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/ocp-parameter.png "apply parameters approch for OCP")
* **Inheritance**
  ![ocp-inherit.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/ocp-inherit.png "apply inheritance approch for OCP")
* **Composition/ Injection**
  ![ocp-inject.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/ocp-inject.png "apply composition approch for OCP")

### Example OCP in Packages and Libraries in NuGet or NPM

using extension methods in C# like [this example](https://github.com/ardalis/guardclauses)

![ocp-packages.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/ocp-packages.png "example for ocp princiles")

## Liskov Substitution Principle (LSP)

* if you have class **B** inherit from class **A** then class **A** should be replaceable by class **B** without any changes/ problems
* LSP Is a Subset of Polymorphism
  ![lsp.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/lsp.png "LSP principle")

### How to Apply LSP

* Make the method in base class is **virtual**
* to override this method while used in derived class when create object

### Example

```csharp
namespace SOLID_PRINCIPLES.LSP
{
    class Program
    {
        static void Main(string[] args)
        {
            Fruit fruit = new Orange();
            Console.WriteLine(fruit.GetColor());
            fruit = new Apple();
            Console.WriteLine(fruit.GetColor());
        }
    }
    public abstract class Fruit
    {
        public abstract string GetColor();
    }
    public class Apple : Fruit
    {
        public override string GetColor()
        {
            return "Red";
        }
    }
    public class Orange : Fruit
    {
        public override string GetColor()
        {
            return "Orange";
        }
    }
}
```

### Detecting LSP Violations in your code

* Type Checking with **is** or **as** in polymorphic code

```csharp
foreach(var employee in employees)
{
   if(employee is Manager)
   {
     Helpers.PrintManager(employee as Manager);
     break;
   }
   Helpers.PrintEmployee(employee);
}
```

* null checks

```csharp
foreach(var employee in employees)
{
   if(employee == null)
   {
     Console.WriteLine("Employee not found.");
     break;
   }
   Helpers.PrintEmployee(employee);
}
```

* NotImplementException in interface implementation 

### Detecting LSP Violations in your code

* Follow the <a href="https://martinfowler.com/bliki/TellDontAsk.html">"Tell, Don't Ask"</a> Principle
* Minimize null checks with
  		- c# features
  		- Guard clauses
  		- Null Object Design Pattern
* Follow ISP and be sure to fully implement interfaces

## Interface Segregation Principle (ISP)

* uncle bob said "Clients should not be forced to depend on methods they do not use"
* Many client-specific interfaces are better than one general-purpose interface.

  * avoid fat interface so prefer small
* Client must not implement unnecessary methods

> The Interface Segregation Principle states that any classes that implement an interface, should not have "dummy" implementations. Instead you should split large interfaces into smaller generalizations.

![isp.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/isp.png "ISP principle problem")

### Detecting ISP Violations in your code

* Large Interfaces
* NotImplementedException
* Code uses just a small subset of a larger interface

### Fixing ISP Violations

* Split interface Up into smaller ones and if you need use multiple interface inheritance

### Example 1

![isp-ex1.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/isp-ex1.png "ISP Principle Example 1")

### Example 2

![isp-ex2.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/isp-ex2.png "ISP Principle Example 2 - 1")

![isp-ex2-1.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/isp-ex2-1.png "ISP Principle Example 2 - 2")

![isp-ex2-2.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/isp-ex2-2.png "ISP Principle Example 2 - 3")

## Dependency Inversion Principle (DIP)

The principle states that high-level modules should depend on high-level generalizations, and not on low-level details. This means your class should depend on Interface or Abstract class, not a concrete class. Interfaces and Abstract classes are high-level resources. A concrete class is a low-level resource. 

* High-Level Modules should not depend upon Low-Level Modules. Both should depend upon abstractions.

  * abstractions should not depend on details
  * details should depend on abstractions
    ![dpi.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/dpi.png "DIP principle")
* Applying this principle would make your code loosely coupling and highly cohesive (don't depend on low-level classes)
* **High-level Module** is the module that has business rules, more abstract, process-oriented, further from (I/O) while **Low-Level Module** is closer to (I/O) and interacts with specific external systems and hardware (keep plumbing code separate from high-level business logic)
* **Low-Level Dependencies** like **Database, File system, Email, Web APIs, Configuration** and **Clock**
* This principle name "Dependency Inversion" for studying in a book, but in actual coding called "dependency injection" like in [asp.net](http://asp.net) core that is completely depend on it and follow it
* **dependency injection (DI)** says don't create your own dependencies instead you should depend on abstractions and request those dependencies from the client. there are three methods on how to apply that

  * Constructor arguments (Prefer one because it follows [explicit dependencies principle](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles))
  * Properties injection
  * Method Constructor
* Like this design/problem that causes pain like tight coupling, low cohesive, difficult to isolate and unit test and duplicate the code
  ![dpi-ex1.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/dpi-ex1.png "DIP exmaple 1 problem")
* but the solution would be :
  ![dpi-ex1-sol.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/dpi-ex1-sol.png "DIP exmaple 1 solution")
  ![dpi-dep.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/dpi-dep.png "DIP dependencies")

So instead of the following diagram that implement low level concrete class/details which it consume a lot of work if there are any changes.
![DIP-1.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/DIP-1.png "System Without Abstractions")

Applying DIP to depend on High-Level Generalization will become like this
![DIP-2.png](https://raw.githubusercontent.com/aboelkassem/Solid-Principles/master/Screenshots/DIP-2.png "System with Abstractions")

This means that the Client is dependent on expected behaviors (high level), not on a specific implementation (low level).

## Least Knowledge Principle (Law of Demeter)

This principle states that **classes should know about and interact with a few other classes as possible**. Not every other class of the system. It reduces coupling and provides stability to your systems.

According to this design principle a method `M` of and object should only call other methods if they are:

* Encapsulated within the same object
* Encapsulated within an object that is in the parameters of `M`
* Encapsulated within an object that is instantiated inside of `M`
* Encapsulated within an object that is referenced in an instance variable of the class for `M`

All this rules of this law mean ⇒ **that a method should not invoke methods of any object that is not local.** Don't call objects that you shouldn't know about or unknown type of object don't exist in your class.

**Returned objects** from methods must be of the same type as:

* Those declared in the method parameter
* Those declared and instantiated locally in the method.
* Those declared in instance variables of the class that encapsulates the method.

Classes should know as little as possible about your system as a whole to reduce the amount of coupling and prevent unwanted effects from cascading through your entire system

## Organizing and extending SOLID Principles into your project

cause following all these principles would need too many files that focus on more classes and interfaces so do the following technique for avoiding that problem by

* **Use Folders!**

  * several folders with each folder have few classes/interfaces
  * each folder should be specified in its task by naming them appropriately, it should be pretty easy to find what you're looking
  * the default way is by **kind of thing the file** is, so might put controllers in one folder, models in another, a folder for interfaces and another for services ... etc
  * another way especially when the app is growing is to use **feature folders** by organizing your app with feature not kind of thing like an online store might have top-level folders for catalog, search and cart instead of controllers, models, views, and services...... also follow [this repo](https://github.com/ardalis/CleanArchitecture)

<hr>

[Edit this page in Github](https://github.com/aboelkassem/Solid-Principles)