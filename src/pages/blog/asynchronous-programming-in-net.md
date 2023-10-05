---
templateKey: article-page
title: Asynchronous Programming in .NET
slug: asynchronous-programming-in-dotnet
author: aboelkassem
authorLink: https://www.aboelkassem.tech
date: 2021-07-08T08:09:45.979Z
cover: /img/asychronous.png
metaTitle: Asynchronous Programming in .NET
metaDescription: What is Asynchronous Programming? ... Learn how to effectively
  apply asynchronous principles in any type of .NET application using async and
  await together with the task parallel library.
tags:
  - c#
  - clean-code
---
### **What is Asynchronous programming ?**

Imagine we have an application where user interacts with our application to load a certain file from disk. Now if the file is being rather big. So we want to indicate to our user that something's going on. The scenario will be

- **Show a loading indicator**
- Start **asynchronous operation** which mean that we can process something simultaneously to this loading time.
    - Like **read** a large CSV file from disk
    - Once file is loaded into memory, it will **Count** the rows
    - Asynchronous operation completed
- **Render** the **result** on screen
- **Remove loading indicator**

So, **Asynchronous programming** means that we can do **simultaneous processing**, meanwhile the user is doing something in our application we can go a head and do other things that don't interrupt user's workflow.

It also mean that when we are doing an asynchronous operation, we get **notified about the** **result** when that is available to us (when **the processing id done**).

### Asynchronous programming is not parallel programming

Parallel programming is generally used to conquer a bigger problem, and chop that into smaller chunks. the above scenario will be the same but will different in **read CSV file and Count the rows**

- Like **read** a large CSV file from disk
- **Process rows in parallel,** which mean will do something with each row in parallel instead of just counting the amount of rows.
- Asynchronous operation completed

We can also combine parallel programming together with asynchronous programming to make our application even better. This is done in most applications.

### **Why using Asynchronous programming**

- To avoid **unreliable applications**
- Build **faster** **applications**
- Today, all APIs and applications rely on asynchronous programming

### Applying **Asynchronous programming in .NET 4.0 using Task.Run()**

by using Task Parallel Library we can write concurrent and asynchronous code.

To do that using Class `Task` which represents an asynchronous operation for example:

```csharp
var task = Task.Run(() => {
	// do something

  // if returning something
});

task.ConfigureAwait(true)
    .GetAwaiter()
    .OnCompleted(() => 
    {
	    // do something

      // if returning something, you will find it in `task.Result;`
    });
```

You **should not** warp code that could be **synchronous** inside `Task.Run()`.

### Applying **Asynchronous programming in .NET 4.5 using Async and Await.**

async and await keywords make your code cleaner and more understandable.

For applying asynchronous operations

- **First write `async` keyword in method signature/declaration.** Which indicate the compiler that this method has the capability of running asynchronous code.
- **Second write `await` keyword in front of any task** to make sure that all the code after this is executed in a continuation when the asynchronous operation is completed.

for example

```csharp
private async Task<string> LoginAsync()
{
	await Task.Run(() => {
		Thread.Sleep(2000);
	
		return "Login Successful!";
	});
}

private async Task LoginButton_Click(object sender, RouteEventArgs )
{
		var result = await LoginAsync();

		// it will not execute this line untill the asynchronous is completed
		LoginButton.Content = result;
}
```

if you have **more than one task** and want to run them all at **the same time.** you can use `await Task.WhenAll(tasks)` method. For example

```csharp
private async Task<string> LoginAsync()
{
	var loginTask = Task.Run(() => {
		Thread.Sleep(2000);
	
		return "Login Successful!";
	});

	var logTask = Task.Delay(2000); // Log the login

	var purchaseTask = Task.Delay(1000); // Fetch purchases

	// this will execute all task at the same time, don't need to await any of them
	await Task.WhenAll(loginTask, logTask, purchaseTask);

	return loginTask.Result;
}
```

**For [ASP.NET](http://asp.NET) web applications it might be a best practice** to do `**ConfigureAwait` is `false`**, the reason for that is that it's going to become a lot **quicker**, because it **pick one of the threads in the thread pool and use whichever one is available** and not try to get back to the one is used first.

```csharp
using (var client = new HttpClient())
{
	var httpMessage = await client.GetAsync("https://blog.aboelkassem.tech/rss/").ConfigureAwait(false);

	var content = await httpMessage.Content.ReadAsStringAsync().ConfigureAwait(false);
	
	return content;
}
```

**With [ASP.NET](http://asp.NET) Core setting `ConfigureAwait` is `false` doesn't have any effects on code running.** Because there is no longer a synchronization context in [ASP.Net](http://asp.net/) Core, you no longer need to include ConfigureAwait(false) in [ASP.Net](http://asp.net/) Core, but including it does no harm.

### To do work concurrently
You start a task and hold on to the Task object that represents the work. You'll `await` each task before working with its result.

* The first step is to store the tasks for operations when they start, rather than awaiting them
* Move these tasks before awaiting invokes like the following

```csharp
    static async Task Main(string[] args)
    {
        // they will run in parallel
        Task<string> result1Task = DoWork1Async();

        Task<string> result2Task = DoWork2Async();

        // Await them now.
        Console.WriteLine(await result1Task);
        Console.WriteLine(await result2Task);

        Thread.Sleep(2000);

        var result3 = 4 + 5;
        Console.WriteLine(result3);
    }

    public static Task<string> DoWork1Async()
    {
        var result  = Task.Run(() =>
        {
            Thread.Sleep(5000);

            return "Finish work 1";
        });
        return result;
    }

    public static Task<string> DoWork2Async()
    {
        var result = Task.Run(() =>
        {
            Thread.Sleep(5000);
            return "Finish work 2";
        });

        return result;
    }
```

Next Step ⇒ read [this article](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/#start-tasks-concurrently)