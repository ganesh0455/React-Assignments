------------------------
    Import and exports
------------------------

In modern JS, a function, object, component, variable (anything it can be)  are defined in one file and if you want to use it in another file we have to export and import it. That’s how those two files will be connected and we can use them.


-------------------------
        JSX
-------------------------

It is a html like syntax inside a java script file.it is a special syntax introduced by the React team.
Even Though it looks like html it is actually a Java script and behind the scenes the Babel will convert that JSX code into normal java script. Like the image below.

-------------------------
How React works
-------------------------
We can build our own custom HTML elements.this is also called Components. 
React is all about components.The components are a combination of HTML,CSS and JS.
React is a declarative approach.Which means it will not say the instructions to be added to the DOM imperatively. It will just say declaratively, which means we are declaring one particular structure of how DOM should be.
Which means we Define the desired target state(s) and now react took that (state) declarative instructions and React figured out the actual java script DOM instructions.

-------------------------
Imperative vs Declarative
-------------------------

Imperative: We are giving clear instructions and step by step instructions to the browser what DOM elements should be rendered or what elements should be appended.

Declarative: Just we are declaring how the DOM should be. We are not giving step by step clear instructions to the browser.

-------------------------
Custom Component
-------------------------

Traditionally, we create a new folder called as Components in src to keep all the main logic in that components folder.

Note: don’t try to write any main logic code in App component

Keep file names in Pascal Case, it’s not a rule , but it’s a common convention.
Note: Pascal case: Every Word of 1st letter should be in capital case
Ex: ExpenceItem

Camel Case: Except the 1st letter of 1st word , the remaining words of first letter should be in capital case.
Ex: expenceItem

-------------------------
Component: 
-------------------------
A Component in React is just a normal Java Script function.
It’s a Special kind of function, the speciality about this function is it returns the JSX(Java Script XML) at the end.
The component name should be like PascalCase.
The component is a combination of HTML,CSS,JS.

A particular component has its own task, so every component will return the JSX based upon what that component has to get the UI onto the screen.

For using that component across the whole Application we have to Export that one.

For using that Component in other components we have to import that one.Now we can use that as a custom HTML element.
Observe that that custom HTML element has started with Capital Letter, so that React could detect it is a custom component, otherwise React will confuse that whether is is normal HTML tag or Custom component.

One rule of JSX is it must return one root element, to make sure that rule we will wrap all the tags with one React element(tag).

Now that is valid, but the readability has missing, for making that readability we will wrap that with parentheses () to just say to javascript that it is also a single line and one and same thing, even though I have splitted the code into multiple lines it is one and the same thing.

---------------------------------------------------------------------------
Outputting Dynamic data and Working with Java script Expressions
---------------------------------------------------------------------------

In the above image we have only one expense item, but in an application we can track the unlimited expenses items.

The main core idea of Component is , 
Re-usability - Don’t repeat yourself 
Which means Don’t do too many things in one and same place(function), for this Split big chunks of code into multiple smaller functions.

In this image we hard coded the values of tags, due to this all expense items have the same name,date and price.

For getting dynamic data we use the JS. we should have to write java script code inside the Component and above to the return() statement and if you want to write java script expressions between the tags we have to use { }.

-------------------------------
Passing Data via props
-------------------------------

Actually to re-use the function, that function will accept the different parameters, so that that function produces different results for different inputs.

In react we call that formal parameters as Props. 

Note : Components can’t use data stored in other component.

Ex:
Component A can’t use the data which belongs to Component B directly. For accessing that data we need to use a concept called Props.

In normal HTML there are some predefined Attributes (style) , but in react for sending the props we are using our custom props by keeping the attribute names as our own suitable names.