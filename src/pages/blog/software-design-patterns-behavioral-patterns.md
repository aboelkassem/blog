---
templateKey: article-page
title: "Software Design Patterns: Behavioral Patterns"
slug: design-patterns-behavioral-patterns
author: aboelkassem
authorLink: https://www.aboelkassem.com
date: 2021-01-28T14:58:08.848Z
cover: /img/behavioral-patterns.jpg
metaTitle: Behavioral Patterns | Aboelkassem blog
metaDescription: Behavioral design patterns dictate the interaction and
  assignment of responsibilities between the objects, Or in other words, they
  assist in answering "How to run a behavior in software component?"
tags:
  - design-patterns
  - clean-code
  - software-engineering
  - web-dev
  - software-design
  - c#
---
In the [previous article](https://blog.aboelkassem.com/blog/design-patterns-structural-patterns), we had discussed structural design patterns, Today, we will continue to explain the design patterns and we will discuss the Behavioral design patterns.

## Table of Contents

* Behavioral Patterns

  * Template Method Pattern
  * Chain Of Responsibility Pattern
  * State Pattern
  * Command Pattern
  * Mediator Pattern
  * Observer pattern
* MVC Pattern
* Code Smells

## Behavioral Patterns

Behavioral design patterns dictate the interaction and assignment of responsibilities between the objects, Or in other words, they assist in answering "How to run a behavior in software component?"

* Observer pattern
* Visitor Pattern
* Strategy Pattern
* Interpreter Pattern
* Template Method Pattern
* Chain Of Responsibility Pattern
* Command Pattern
* Iterator Pattern
* Mediator Pattern
* Memento Pattern
* State Pattern

### Template Method Pattern

As the name suggests, You may have used a template for writing your resume. The template would define the overall structure of the document and leave the details to be added by you.

**The template method** defines an **algorithm's steps** generally letting the implementation of some steps to subclasses. It defines the operations into Abstract class to allow subclasses override. It depends on **generalization and inheritance**

Note that the classes may choose to ignore overriding certain steps or choose to rely on the default implementation provided by the abstract class.

Think of it as another technique to use when you notice you have two separate classes with very **similar functionality and very similar order of operations**, After using generalization you can share the functionality between the classes.

**Real world example**

> Suppose we are getting some house built. The steps for building might look like

* Prepare the base of house
* Build the walls
* Add roof
* Add other floors
  The order of these steps could never be changed i.e. you can't build the roof before building the walls etc, but each of the steps could be modified for example walls can be made of wood or polyester or stone.

**Class Diagram**

![template-method-pattern-1.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/template-method-pattern-1.png "template method pattern")

**Example**

> imagine you are an executive chef, The two most popular dishes are spaghetti with tomato sauce and meatballs, and penne noodles with alfredo sauce and chicken. Both dishes have the same steps to cook like boil water, cook pasta, add the sauce and garnish etc but each one have it's own implementation depending, each dish has a different sauce, protein, and garnish

**UML Diagram**

![template-method-pattern-2.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/template-method-pattern-2.png "template method uml class diagram")

**Steps to implement it**

* **Step 1**: Define Abstract class and Template Method

```csharp
public abstract class PastaDish
{
    // The template method defines the skeleton of an algorithm.
    public void MakeRecipe()
    {
        // The fixed steps
        BoilWater();
        AddPasta();
        CookPasta();
        DrainAndPlate();
        AddSauce();
        AddProtein();
        AddGarnish();
        Console.WriteLine("==========================================");
        Console.WriteLine("The dish has prepared");
        Console.WriteLine("==========================================");
    }

    protected abstract void AddPasta();
    protected abstract void AddSauce();
    protected abstract void AddProtein();
    protected abstract void AddGarnish();

    private void BoilWater()
    {
        Console.WriteLine("Boiling Water");
    }

    private void CookPasta()
    {
        Console.WriteLine("cooking pasta");
    }

    private void DrainAndPlate()
    {
        Console.WriteLine("Draining and plating");
    }
}
```

* **Step 2**: Inherit them in concrete class

```csharp
public class SpaghettiMeatballs : PastaDish
{
    protected override void AddGarnish()
    {
        Console.WriteLine("Adding Garnish for Spaghetti dish");
    }

    protected override void AddPasta()
    {
        Console.WriteLine("Adding Pasta for Spaghetti dish");
    }

    protected override void AddProtein()
    {
        Console.WriteLine("Adding Protein for Spaghetti dish");
    }

    protected override void AddSauce()
    {
        Console.WriteLine("Adding Sauce for Spaghetti dish");
    }
}
```

```csharp
public class PennaAlfredo : PastaDish
{
    protected override void AddGarnish()
    {
        Console.WriteLine("Adding Garnish for Penna Alfraedo dish");
    }

    protected override void AddPasta()
    {
        Console.WriteLine("Adding Pasta for Penna Alfraedo dish");
    }

    protected override void AddProtein()
    {
        Console.WriteLine("Adding Protein for Penna Alfraedo dish");
    }

    protected override void AddSauce()
    {
        Console.WriteLine("Adding Sauce for Penna Alfraedo dish");
    }
}
```

* **In Main Program**

```csharp
class Program
{
    static void Main(string[] args)
    {
        PastaDish spaghettiDish = new SpaghettiMeatballs();
        spaghettiDish.MakeRecipe(); // Invoke Tempate Method

        PastaDish pennaDish = new PennaAlfredo();
        pennaDish.MakeRecipe(); // Invoke Tempate Method
    }
}
```

### Chain Of Responsibility Pattern

As the name suggests, **A chain of objects that are responsible for handling requests**, It is a series of **handler objects** that are linked together.

When a client object sends a request, the first handler in the chain will try to process it. If the handler can process the request, then the request ends with this handler. However, if the handler cannot handle the request, then the request is sent to the next handler in the chain. This process will continue until a handler can process the request. If the last handler cannot process then the request is not satisfied.

![chainOfResponsibility-1.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/chainOfResponsibility-1.png "chain of responsiblity diagram")

**How to work?** so like trying everything until something works. Each object tries to handle the request until one is able to successfully handle it like **Exception handling in programming languages**

**Where to use?** examples like setting up a lot of ways to filter the emails from spam, social media, Promotions. or Validating something

![chainOfResponsibility-2.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/chainOfResponsibility-2.png "chain of responsiblity")

**Real world example**

> For example, you have three payment methods (`A`, `B` and `C`) setup in your account; each having a different amount in it. `A` has 100 USD, `B` has 300 USD and `C` having 1000 USD and the preference for payments is chosen as `A` then `B` then `C`. You try to purchase something that is worth 210 USD. Using Chain of Responsibility, first of all account A will be checked if it can make the purchase, if yes purchase will be made and the chain will be broken. If not, request will move forward to account `B` checking for amount if yes chain will be broken otherwise the request will keep forwarding till it finds the suitable handler. Here `A`, `B` and `C` are links of the chain and the whole phenomenon is Chain of Responsibility.

**Class Diagram**

![chainOfResponsibility-3.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/chainOfResponsibility-3.png "chainOfResponsibility class diagram")

![chainOfResponsibility-4.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/chainOfResponsibility-4.png "chain of responsibility uml class diagram")

**Algorithm to solve problem if it's rules doesn't match and forgets to pass the request into the next filter, We will use `Template Method Pattern` to make sure follow this algorithm.**

* Check if rules matches
* If it matches, do something specific
* If it doesn't match, call the next filter/handler in the list

The intent of this pattern is to **avoid coupling** the sender to the receiver by giving more than object

What the benefits?

* A more extensible, object-oriented and dynamic implementation
* Easily re-arrange in what order the handlers operate
* Clear approach with single responsibility in min instead of different conditions

**Example**

> See the [example 1](https://github.com/aboelkassem/Design-Patterns/tree/main/src/DesignPattern/DesignPattern/Behavioral/ChainOfResponsibilityPattern/NoSeparationExample) of Payment Processing system in C# with no separation
>  See the [example 2](https://github.com/aboelkassem/Design-Patterns/tree/main/src/DesignPattern/DesignPattern/Behavioral/ChainOfResponsibilityPattern/SeparationExample) of Payment Processing system in C# with improvement separation

### State Pattern

**State Pattern** lets you change the behavior of a class when the state changes.

**State Pattern** mean that the objects in your code are aware of their current state. They can choose an appropriate behavior based on their current state. When their current state changes, this behavior can be changed. It is used when you need to change the behavior of an object based upon the state.

you can also you the pattern to simplify methods with long conditionals that depend on the object state.

**UML Class Diagram**

![state-pattern-1.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/state-pattern-1.png "state pattern uml diagram")

**Real World Example**

> Imagine you are using some drawing application, you choose the paint brush to draw. Now the brush changes its behavior based on the selected color i.e. if you have chosen red color it will draw in red, if blue then it will be in blue etc.

**Example**

A vending machine has several states, and specific actions based on those states, Like `Idle` when the machine stay waiting for action, `Has One Dollar` when someone entered a dollar coin to buy some thing, `Out of Stock` when the machine doesn't have any of this item. and some actions like `doRetunMoney` or `doReleaseProduct`

**State Diagram of the example**

![state-pattern-2.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/state-pattern-2.png "state diagram")

**Class Diagram of the example**

![state-pattern-3.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/state-pattern-3.png "state pattern uml class diagram")

**Steps to apply State Pattern**

* **Step 1:** define State interface

```csharp
public interface State
{
    // all potential vending machine triggers and events
    // that change the state of the object
    public void InsertDollar(VendingMachine vendingMachine);
    public void EnjectMoney(VendingMachine vendingMachine);
    public void Dispense(VendingMachine vendingMachine);
}
```

* **Step2:** Implement the state's class that implements this interface

```csharp
public class IdleState : State
{

    public void InsertDollar(VendingMachine vendingMachine)
    {
        Console.WriteLine("dollar inserted");
        vendingMachine.CurrentState = vendingMachine.HasOneDollarState;
    }

    public void EnjectMoney(VendingMachine vendingMachine)
    {
        Console.WriteLine("no money to return");
    }

    public void Dispense(VendingMachine vendingMachine)
    {
        Console.WriteLine("payment required");
    }
}

public class HasOneDollarState : State
{

    public void InsertDollar(VendingMachine vendingMachine)
    {
        Console.WriteLine("already have one dollar");

        vendingMachine.doReturnMoney();
        vendingMachine.CurrentState = vendingMachine.IdleState;
    }

    public void EnjectMoney(VendingMachine vendingMachine)
    {
        Console.WriteLine("returning money");

        vendingMachine.doReturnMoney();
        vendingMachine.CurrentState = vendingMachine.IdleState;
    }

    public void Dispense(VendingMachine vendingMachine)
    {
        Console.WriteLine("releasing product");

        if (vendingMachine.Count > 1)
        {
            vendingMachine.doReleaseProduct();
            vendingMachine.CurrentState = vendingMachine.IdleState;
        }
        else
        {
            vendingMachine.doReleaseProduct();
            vendingMachine.CurrentState = vendingMachine.OutOfStockState;
        }
    }
}

public class OutOfStockState : State
{

    public void InsertDollar(VendingMachine vendingMachine)
    {
        Console.WriteLine("sorry, there are no items in the stock");
        vendingMachine.doReturnMoney();
    }

    public void EnjectMoney(VendingMachine vendingMachine)
    {
        vendingMachine.doReturnMoney();
    }

    public void Dispense(VendingMachine vendingMachine)
    { }
}
```

* The Vending machine class will be like this

```csharp
public class VendingMachine
{
    public State IdleState { get; set; } = new IdleState();
    public State HasOneDollarState { get; set; } = new HasOneDollarState();
    public State OutOfStockState { get; set; } = new OutOfStockState();

    public State CurrentState { get; set; }
    public int Count { get; set; }

    public VendingMachine(int count)
    {
        if (count > 0)
        {
            CurrentState = IdleState;
            this.Count = count;
        }
        else
        {
            CurrentState = OutOfStockState;
            this.Count = 0;
        }
    }

    public void insertDollar() => CurrentState.InsertDollar(this);

    public void ejectMoney() => CurrentState.EnjectMoney(this);

    public void dispense() => CurrentState.Dispense(this);

    public void doReturnMoney() => Console.WriteLine("Returning money for the user");

    public void doReleaseProduct() => Console.WriteLine("Returning item product for the user");
}
```

### Command Pattern

**Command Pattern** allows you to **encapsulate actions/methods in objects**.

The usual way is Sender object call method in Receiver object to run this method. The command pattern creates a command object in between the sender and receiver. Command Pattern means creates command objects instead of normal methods

![command-pattern-1.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/command-pattern-1.png "command pattern")

The **Sender** creates a **command object**, **Invoker** invokes the command object do what it’s supposed to do. The invoker keeps track of the commands, manipulates them and invokes them.

The important thing is that the command pattern lets you **do things to request** that you wouldn't be able to do if they were simple method calls from one object to another.

Creating these requests as objects allows you to create very useful functionality in your software.

**what is the purposes of the command pattern?**

* **Store and schedule different requests.** When you use an method of another object, you can store this command objects into lists, manipulate them before they are completed, put them onto a queue.
* Allowing commands to be undone or redone like **undo or redo** edits in a document or any type in applications
  ![command-pattern-2.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/command-pattern-2.png "command pattern diagram")
  ![command-pattern-3.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/command-pattern-3.png "command pattern diagram")
  ![command-pattern-4.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/command-pattern-4.png "command pattern example")

**Real World Example**

> A generic example would be you ordering food at a restaurant. You (i.e. `Client`) ask the waiter (i.e. `Invoker`) to bring some food (i.e. `Command`) and waiter simply forwards the request to Chef (i.e. `Receiver`) who has the knowledge of what and how to cook. Another example would be you (i.e. `Client`) switching on (i.e. `Command`) the television (i.e. `Receiver`) using a remote control (`Invoker`).

**UML Class Diagram**

![command-pattern-5.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/command-pattern-5.png "command pattern uml class diagram")

* **execute():** do the work that the command is supposed to do
* **unexecute():** do the undoing the command
* **isReversible():** determines if the the command is reversible, return `true` if the command can be undone
* **Receiver Class**: deals with the actual work of completing the command

**The benefits of Command Pattern**

* **Manipulate the commands as objects not methods calls**, which enable them add more functionalities like putting commands into queues, adding an undo/redo function.
* **Decouples the objects of your software**

> For Example see [the source code](https://github.com/aboelkassem/Design-Patterns/tree/main/src/DesignPattern/DesignPattern/Behavioral/CommandPattern)

### Mediator Pattern

Mediator pattern adds a **third party object** (called *`mediator`*) to control the **interaction** between two or more objects (called `colleagues`). It helps reduce the coupling between the classes communicating with each other by encapsulating them. Because now they don't need to have the knowledge of each other's implementation.

Imagine that you want the house of the future. You want your house to change its own temperature once you have left, to brew your coffee when the alarm on your phone goes off, and to load the latest Globe and Mail news issue onto your tablet if you're home and it's Saturday morning, you keep adding more rules and more devices. Eventually you realize interactions between two objects is becoming complicated and difficult to maintain like this:

![mediator-pattern-1.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/mediator-pattern-1.png "mediator pattern")

To solve this problem and simply use mediator pattern, **In the Mediator pattern**, you will add an object that will talk to all of these other objects and coordinate their activities. Now, they all interact through the mediator. The communication between an object and the mediator is **two-way:** the object informs the mediator when something happens. Then The mediator can perform logic on these events.

![mediator-pattern-2.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/mediator-pattern-2.png "mediator pattern")

![mediator-pattern-3.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/mediator-pattern-3.png "mediator pattern")

**Real World Example**

> A general example would be when you talk to someone on your mobile phone, there is a network provider sitting between you and them and your conversation goes through it instead of being directly sent. In this case network provider is mediator.

**UML Class Diagram**

![mediator uml class diagram](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/mediator-pattern-4.png "mediator uml class diagram")

**Example**

The example will be the `chatroom` between team member `developer` and `tester`

![mediator-pattern-5.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/mediator-pattern-5.png "mediator pattern example")

* Define the mediator abstract class

```csharp
public abstract class Chatroom
{
    public abstract void Register(TeamMember member);
    public abstract void Send(string from, string message);
    // Send message to the specific objects like sending to only developers, only testers
    public abstract void SendTo<T>(string from, string message) where T : TeamMember;
}
```

* Define the Colleague abstract class that talk to the mediator

```csharp
public abstract class TeamMember
{
    public string Name { get; }
    private Chatroom chatroom;

    public TeamMember(string name)
    {
        this.Name = name;
    }

    // Set Mediator
    internal void SetChatroom(Chatroom chatroom)
    {
        this.chatroom = chatroom;
    }

    // Sending messages to mediator
    public void Send(string message)
    {
        this.chatroom.Send(this.Name, message);
    }
    // Receiving a chat message
    public virtual void Receive(string from, string message)
    {
        Console.WriteLine($"from {from}: '{message}'");
    }

    public void SendTo<T>(string message) where T : TeamMember
    {
        this.chatroom.SendTo<T>(this.Name, message);
    }
}
```

* Implement Concrete mediator

```csharp
public class TeamChatroom : Chatroom
{
    private List<TeamMember> members = new List<TeamMember>();

    // References
    // just set up/register connection between mediator and colleague 
    public override void Register(TeamMember member)
    {
        member.SetChatroom(this);
        this.members.Add(member);
    }

    // Sending this message for each members
    public override void Send(string from, string message)
    {
        this.members.ForEach(m => m.Receive(from, message));
    }

    // Register team members at once
    public void RegisterMembers(params TeamMember[] teamMembers)
    {
        foreach (var member in teamMembers)
        {
            this.Register(member);
        }
    }

    public override void SendTo<T>(string from, string message)
    {
        this.members.OfType<T>().ToList().ForEach(m => m.Receive(from, message));
    }
}
```

* Implement concrete colleagues/team members

```csharp
public class Developer : TeamMember
{
    public Developer(string name): base(name)
    {

    }

    public override void Receive(string from, string message)
    {
        Console.Write($"{this.Name} ({nameof(Developer)}) has received: ");
        base.Receive(from, message);
    }
}

public class Tester : TeamMember
{
    public Tester(string name) : base(name)
    {

    }

    public override void Receive(string from, string message)
    {
        Console.Write($"{this.Name} ({nameof(Tester)}) has received: ");
        base.Receive(from, message);
    }
}
```

* In Main program

```csharp
class Program
{
    static void Main(string[] args)
    {
        var teamChat = new TeamChatroom();

        var mohamed = new Developer("Mohamed");
        var ahmed = new Developer("Ahmed");
        var shimaa = new Tester("Shimaa");
        var sara = new Tester("Sara");

        teamChat.RegisterMembers(mohamed, ahmed, shimaa, sara);

        mohamed.Send("Hey everyone, i'm mohamed, lets get some fun");
        Console.WriteLine();
        shimaa.Send("Oh, i have found issue while i testing your app");
        Console.WriteLine();

        // developer objects will only receive this message
        ahmed.SendTo<Developer>("hey developers, i have bug i cannot fix it, anyone can help?");
    }
}
```

See [another example](https://github.com/OlufemiFowosire/PluralsightDesignPatternsPracticeCodes/tree/cf8a3d8eb5809b413c6a7419dc6943f2821902ea/Patterns/Mediator/MediatorDemo/MarkerPositions) for marker positions with WebForms

### Observer pattern

**The observer design pattern** is a pattern where a **subject** keeps a list of **observers**. Observers rely on the subject to inform them of changes to the state of the subject.

Simulate this scenario, imagine you follow a Youtube channel or blog or even Twitter, you visit them multiple times in day, you need to be active and know everything when blog posted, but what if you get bored? A better solution is when a blog posted or video uploaded the youtube or the blog notify you, so just make a subscribe, and when the video updated, the youtube will notify all the subscribers. Or in Twitter when you follow someone you are essentially asking Twitter to send you (**the observer**) tweet updates of the person (**the subject)** you followed. so in this example blog is a **`Subject`** who generates the updates, subscribers is **`Observers`** who is interested in the updates

So **subject** superclass has three methods:

* Allow a new observer to subscribe
* Allow a current observer to unsubscribe
* Notify all observers about a new blog post

So **Observer interface** which has methods that an observer can be notified to update itself.

**Real World Example**

> A good example would be the job seekers where they subscribe to some job posting site and they are notified whenever there is a matching job opportunity.

**Sequence Diagram of the example**

![observer pattern](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/observe-pattern-1.png "observer pattern sequence diagram")

**Class Diagram**

![observe-pattern-2.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/observe-pattern-2.png "observer pattern uml class diagram")

* `Observer` interface

```csharp
public interface Observer
{
    public void update();
}
```

* `Subject` Superclass code

```csharp
public class Subject
{
    private List<Observer> Observers = new List<Observer>();

    public void registerObserver(Observer observer)
    {
        Observers.Add(observer);
    }
    public void unregisterObserver(Observer observer)
    {
        Observers.Remove(observer);
    }
    public void notify()
    {
        foreach (var observer in Observers)
        {
            observer.update();
        }
    }
}
```

* `Blog` class which is subclass from `Subject`

```csharp
public class Blog : Subject
{
    public string State { get; }

		public void setStatus(String status){
	      this.status = status;
	      notify();
		 }

    // other responsibilities
}
```

* `Subscriber` class which implement `Observer` class

```csharp
public class Subscriber : Observer
{
    public void update()
    {
        // get the blog change or the changed status 
    }
}
```

## MVC Pattern

**Model, View, Controller (MVC)** patterns are a pattern that should be consider for use with **user interfaces**. MVC patterns divides the responsibilities into three parts: Model, View, Controller.

This pattern uses the **Separation of Concerns** design principle which allows your program to be modular and loosely coupled. Separating these will allow you to focus on each set of responsibilities separately.

**UML Class Diagram**

![MVC.png](https://raw.githubusercontent.com/aboelkassem/Design-Patterns/main/Images/MVC.png "Model, View, Controller (MVC)")

* **The Model:** contains the data and logic that users want to manipulate.⇒ like **Backend**
* **The View:** give a user a way to see the data of model or parts of it ⇒ like **Frontend**
* **The Controller:** responsible for handling requests from **view** and changing the **model**

In general, **Model** corresponds the entity objects, **View** corresponds interfaces to deal with users (Boundary object), Controller corresponds with receives events (Control object). **Model** can exist on its own with no views or controllers.

## Code Smells

**Anti-patterns (Code Smells)** is the patterns which has bad code. the purpose of code smells is to get out what is bad into the code, these anti-patterns exist in book [Refactoring: Improving the design of existing code by Martin Fowler](https://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0201485672).

**Refactoring** is the process of making changes to your code so that the external behaviors of the code are not changed. but the internal structure is improved. This is done by making changes to code structure and testing these changes. You just making refactoring changes when you're adding features not once code complete.

### Examples of Bad code (Code Smells)

* **Comments**

  * Comments can be an indicator of poor design. Write just effective comments
  * **The code has no Comments or code has many comments**, which having **no comments** makes it difficult for someone to understand what the code is doing. Having a **lot of comments** might get out of sync as the code changes or a **lot of comments** to explain complicated design this mean you had done bad design.
  * There are **reminder comments** in the code like "Don't forget to do this" or "if you make a change to this, make sure you update the code in this other method" are indicators of bad code.
  * **Comments are just `very useful` for documenting the APIs or documenting the reason why a particular choice of data structure or algorithm.**
* **Duplicated Code**

    is when you have code that are similar, but have slight differences. And appears in multiple places in your software.

  * This can be a **problem**, because if something needs to change, then the code needs to be updated in multiple places. This applies to adding functionalities, updating an algorithm, or fixing a bug.
  * Instead of if there are **no duplicated** and exist in one location, you having to update it in only one location and will make it easier to implement the changes and reduce the chance that you are missing a lock of code.
  * Apply "D.R.Y" or "**Don't repeat yourself**" principle
* **Long Method**

  * Having a "long method" can sometimes indicate that there is more occurring in that method than should be, or its more complex than it needs to be. Sometimes a long method is appropriate
* **Large Class**

  * Classes should not be too large, Large classes occur when more responsibilities are needed Over time, however, these responsibilities might attract more responsibilities,  class continues to get larger and larger and take more and more responsibilities.
  * Large class need a lot of comments, meaning a poor design, So to solve that **keep the class cohesive, so it does one thing well**.
* **Data Class**

  * "Data classes" are classes that contains only data and no real functionality, these classes would have getter and setter methods no much else.
  * The class must have to do more than just store data.
* **Data Clumps**

  * "Data Clumps" are group of data appearing together in the instance variables of a class, or parameters to methods. for example

  ```csharp
  // Bad code
  public void doSomething (int x, int y, int z) {
  		...
  }

  // Clean code to store these parameters as object
  public void doSomething (Point3D point) {
  		...
  }
  ```

  ```csharp
  // Bad Code
  public class Shape {
  	publc int x {get; set;}
  	publc int y {get; set;}
  	publc int z {get; set;}
  }

  // Clean code to store these parameters as object
  public class Shape {
  	publc Point3D point {get; set;}
  }
  ```
* **Long Parameter List**

  * Having a method with long parameter list can be difficult to use, which is bad, also require extensive comments to explain each of parameters does.
  * Avoid global variables.
  * To solve this, introduce all this long parameters as parameter object.
* **Divergent Change**

  * "Divergent change" occurs when you have to change a class in many different ways, for many different reasons. Like Large Class code smell, The class has many responsibilities so the changes may be in variety of ways for different reasons.
  * To avoid divergent change, It will be nice if your class only had one specific purpose to reduce the number of reasons.
  * If you find yourself changing a class in multiple ways, you should be broke the class into separate classes. Notice, **Separation of Concerns** design principles solve to code smells Large class and divergent change.
* **Shotgun Surgery**

  * A change in one place requires you to fix many other areas in the code as a result. This happen when you are trying add a features, adjust code, fix bugs or change algorithms.
  * To solve this issue, just moving methods around and organize them in a way to make sense but not in Large class code smell.
* **Feature Envy**

  * This occurs when you've a method that is more interested in the details of a class other than it's own class.
  * If you have this method that seems to like to talk a lot to another class, it may better to but it within that class.
* **Message Chains**

  * Message Chains occurs when the code has long message chains where you are calling, and get an object back, and then calling again, and getting another object.
  * Like `a.getB().getC().doSomething();` this code smell cause complexity in your design and make code harder to test independently. It also can be fine if follow Law of Demeter.
* **Primitive Obsession**

  * This occurs when you rely on the use of built-in types too much like `int`, `long`, `float`, `string` , they should only exist where possible at the lowest levels of your code.
  * Just use your own types better abstraction.
* **Speculative Generality**

  * This occurs when you make a superclass, interface or code that is not needed at the time, but you think that you may use it someday. Like doing subclasses or different implementation for it. That may not actually help the code, you just **Over-Engineering** the code.
  * With **agile development**, you want to practicing **Just in Time Design**, This means that there should be just **enough design** to take the requirements for a particular iteration to a working system. This means that all that needs to be designed for are the set of requirements chosen at the beginning of an iteration. **All other requirements in a backlog can be ignored.**
  * You don't want to spend time writing code that may never actually get used, because the software changes frequently and Clients can change their mind at any time, and drop requirements from the backlog
* **Refused Bequest**

  * This occurs when a subclass inherit something and doesn't need it, Then is it appropriate that they be subclasses of this superclass?
  * it may make sense for a stand-alone class. if only some subclasses use them, then it may be better to define those behaviors in the subclasses only