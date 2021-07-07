---
templateKey: article-page
title: What is New in C# 9
slug: what-is-new-in-csharp-9
author: aboelkassem
authorLink: https://www.aboelkassem.me
date: 2021-07-07T19:45:58.941Z
cover: /img/csharp-9.jpg
metaTitle: What is New in C# 9
metaDescription: What's new in C# 9.0 · Record types · Init only setters ·
  Top-level statements · Pattern matching enhancements
tags:
  - c#
  - clean-code
---
# C# 9 New Features

## Init-only Setters and Type Omission with the New Keyword

Now, in C# 9 you **don't need to write return object name from a method with `new` keyword**, the C# compiler now became intelligent and return new object based on the return type of the method. For example

```csharp
public PriceDTO ConvertEntityToDto(Entity entity)
{
	return new(entity.Id, entity.Date, entity.Name, entity.Venue,
		entity.Capacity == 0? 0 : (int)(entity.Sold * 100.0 / entity.Capacity));
}
```

Now the compiler knows that it will return object `PriceDTO`, so it doesn't need to write `return new PriceDTO(.......)`.

Also, another feature is **Init-only setters**, if you want your properties is to be **immutable** you can set it only available for retrieving as `get` and the only way to set it from **the constructor** like the following

```csharp
public class PriceDTO {
	 public PriceDTO(int id, DateTimeOffset data, string name, string venue, int ticketPrice)
    {
			TicketPrice = ticketPrice;
		}

	public int TicketPrice{ get; }
}
```

but **if you want to initialize an instance** from it by giving it a value and want still be immutable? like this

```csharp
var priceDto = new PriceDTO 
{
	Id = id,
	Name= name,
	// other properties .....
}
```

So how to do that? you can do that by using **Init-only setters** by writing `init` keyword in properties instead of using `set` keyword

```csharp
public class PriceDTO {
	 public PriceDTO(int id, DateTimeOffset data, string name, string venue, int ticketPrice)
    {
			TicketPrice = ticketPrice;
		}

	public int TicketPrice{ get; init; }
}
```

which allows only to initialize the object, but after initialization, if you want to change any property, the compiler will refuse that.

## What is a record in C# 9

A record is a **new reference** **type** introduced a C# 9 that is **immutable** by design. its main purpose is to support working with immutable types without the need to write the same type of code over and over again. The compiler will generate **records** as a **class** in integrated language.

Syntax just like constructor ⇒ like the following

```csharp
public abstract record DtoBase(int Id, DateTimeOffset Date, string Name, string Venue);

// the above record syntax it is the same as the following class
// so with one line of code can save all of that

public abstract class DtoBase 
{
		public DtoBase (int id, DateTimeOffset date, string name, string venue)
    {
			Id = id;
			Date = date;
			Name = name;
			Venue = venue;
		}

	public int Id {get; init;}
	public DateTimeOffset Date {get; init;}
	public string Name {get; init;}
	public string Venue {get; init;}
}

// inherit from other record
// add your extra properties
public abstract record EventPriceDto(int Id, DateTimeOffset Date, string Name, string Venue,
	int PercentageSold, int TicketPrice)
		: DtoBase(Id, Date, Name, Venue)

// also you can modify the record default implementation like the following
// by adding to its body
public record Person(int id, string Name) {

	public override string ToString(){
		return $"Name = {name} and Id = {id}";
	}

};

// to use it you can only create instance from it just like class
var person = new Person(1, "mohamed");
// or just like that
Person person = new(1, "mohamed");
```

Some point to keep in mind while using records

- record cannot inherit from class
- record can inherit from other records

**Another feature of records and make it smart is when making equality.**

```csharp
var person1 = new Person(1, "mohamed");
var person2 = new Person(1, "mohamed");

var e = person1 == person2; // will return true.
```

**So, A record is equal to another record when the property values match AND they are of the same type.** 

Records are **immutable** and cannot change the properties inside, so what is the solution?

To solve this is to **clone** record with new properties changes you need. Like the following

```csharp
var person1 = new Person(1, "mohamed");

var person2 = person1 with { Name = "Ahmed" };
```

## Pattern Matching

 The normal switch case statement like 

```csharp
EventViewModel newViewModel;

switch (eventType)
{
	case EventType.Unkown:
		newViewModel = new EventViewModel();
		break;		
	case EventType.Conference:
		newViewModel = new ConferenceViewModel();
		break;		
	case EventType.MultiDayConference:
		newViewModel = new MultiDayConferenceViewModel();
		break;		
	case EventType.Concert:
		newViewModel = new ConcertViewModel();
		break;		
	default:
		throw new ArgumentException($"Unkown event type {eventType}");
		break;		
}
```

this case uses a pattern called the constant pattern, and it doesn't return a value. It just manipulates a declared variable.

**Let's try to apply a new feature which is a switch expression that does return value.** like the following.

```csharp
EventViewModel newViewModel = eventType switch 
{
	 EventType.Unkown => new EventViewModel(),
	 EventType.Conference => new ConferenceViewModel(),
	 EventType.MultiDayConference => new MultiDayConferenceViewModel(),
	 EventType.Concert => new ConcertViewModel(),
	 _ => throw new ArgumentException($"Unkown event type {eventType}")
};

// also you can write a boolean expression to see if matches this condition or not
price += e.NumberOfDays switch
{
	var days when days < 3 => price * e.NumberOfDays,
	var days when days >= 3 && days < 6 => 200,
	var days when days >= 6 => 360,

	// or you can just justify them as
		 < 3 => price * e.NumberOfDays,
		 ( >= 3 and < 6 ) => 200,
		 >= 6 => 360,
}
```

`_` mark called **discard** and will fire when none of the above checks match.

**Another feature** which applies pattern matching is if statement by using `**is`** a boolean expression like the following

```csharp
if (eventViewModel is ConferenceViewModel conf)
{
	// doing something 
	// can use `conf`
	Console.WriteLine(conf.TicketPrice);

}
else if (eventViewModel is ConcertViewModel concert)
{
	// doing something 
	// can use `concert`
	Console.WriteLine(concert.Badget);
}
```

In these if statements, if `eventViewModel` is not null and matches that type its automatically cast to `ConferenceViewModel` and put in the `conf` variable.

**Also Pattern matching with switch can apply in if statements not only switch statements like the following.**

```csharp
EventDto dto = null;

if(_eventViewModel is ConferenceViewModel conferenceViewModel)
	dto = EventMapper.ConvertConferenceViewModelToDto(vm);
if(_eventViewModel is MultiDayConferenceViewModel multiDayConferenceViewModel )
	dto = EventMapper.ConvertMultiDayConferenceViewModelToDto(vm);
if(_eventViewModel is ConcertViewModel concertViewModel )
	dto = EventMapper.ConvertConcertViewModelToDto(vm);
if(_eventViewModel is SportsGameViewModel sportsGameViewModel )
	dto = EventMapper.ConvertSportsGameViewModelToDto(vm);
if(dto == null)
	throw new ArgumentException($"Unknown entity type", nameof(_eventViewModel)),
```

will be

```csharp
EventDto dto = _eventViewModel switch
{
    MultiDayConferenceViewModel vm => EventMapper.ConvertMultiDayConferenceViewModelToDto(vm),
    ConferenceViewModel vm => EventMapper.ConvertConferenceViewModelToDto(vm),
    ConcertViewModel vm => EventMapper.ConvertConcertViewModelToDto(vm),
    SportsGameViewModel vm => EventMapper.ConvertSportsGameViewModelToDto(vm),
    not null =>
        throw new ArgumentException($"Unknown entity type", nameof(_eventViewModel)),
    null =>
        throw new ArgumentNullException(nameof(_eventViewModel))
 };
```

So, we check `_eventViewModel` matches one of these patterns. `not null` will fire if the object not null and doesn't match the above patterns.

## Function Features

Now, in C# 9 if you have a class that have a `virtual` method and you derive this class with another class and override this method, **you can change the return type to be some derived object from it**, not necessary to be the same return type. This called **covariant return types** like the following

```csharp
public class EmployeeSkills
{
  public bool CanSendEmails { get; set; }
}

public class DeveloperSkills : EmployeeSkills
{
  public bool KnowsDotNet { get; set; }
}

public class Employee
{
  public string? FirstName { get; set; }

  public virtual EmployeeSkills GetSkills()
  {
    return new EmployeeSkills { CanSendEmails = true };
  }
}

// Now you can override the method with a different return type
// but should be derived from the original type
public class Developer: Employee
{
  public override DeveloperSkills GetSkills()
  {
    return new DeveloperSkills
    {
      CanSendEmails = true,
      KnowsDotNet = true
    };
  }
}
```

## Top-level Statements

As usual, when creating a console application with c#, it will be like this

```csharp
using System;

namespace ConsoleApplciation
{
	class Solution
	{
	    static void Main(string[] args)
	    {
	        Console.WriteLine("Hello, World!");
	    }
	}
}
```

There is some ceremony needed to make this work, we need a namespace, a class, and a static method. For C# beginners that's a lot of concepts to understand for a simple application.

Now, in C# 9 it handles all of that and there is no need to write it. So the above code will simplify as the following

```csharp
System.Console.WriteLine("Hello, World");
```

And make declarations at the bottom of the code like the following

```csharp
System.Console.WriteLine("Hello, World");

SomeFunction();

var person = new Person(1, "Mohamed");

static void SomeFunction() {
	// do something
}

public class Person {

	public Person(int id, string name){
		// constructor
	}

}
```