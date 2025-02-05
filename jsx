5/02/2025
Reacctjs:
--create element:
React.createElement()
Syntax:
React.createElement()
Type =tag name ; (h,p,div)
Props = className ,id
---ReactDOM.createRoot();
---render

Jsx:
Javascript XML is a syntax for extension with js:
It allows us to write HTML code in react
The JSX code gets compiled into JS
Babel:A tool converts HTML code into JS
-	All the html tags must be closed
-	Class=className
1)create an element by JSX
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app" > </div>
    <script type="text/babel">
    const element =<h1 className="a">Hello,JSX! </h1>
    const e=document.getElementById('app')
    const root=ReactDOM.createRoot(e)
    root.render(element)
    </script>
</body>
</html>
O/P:
Hello,JSX!

Without jsx:
<div id="app"></div>
    <script>
       
        const e=React.createElement(
            'h1' ,{id:'a'},"I am sai"
        )
        const element=document.getElementById("app")
        const root=ReactDOM.createRoot(element)
        root.render(e)
        </script>
o/p:
I am sai
Expressions:
  <div id="app"></div>
    <script type="text/babel">
    const n = 10;
    const m = <h1>React  is {n*2} times better than jsx</h1>
    const r=ReactDOM.createRoot(document.getElementById('app'))
    r.render(m);
    </script>
Conditional Rendering in JSX:
 
    <div id="app"></div>
    <script type="text/babel">
        const App = () =>{
            const isLoggedIn = true;
            return(
                <div>
                    {isLoggedIn ? (<h1>Welcome back, user!</h1>):(<h1>please logIn</h1>)}
                    {isLoggedIn && <h2>You have a new notification</h2>}
                </div>
            );
        };
        const root = ReactDOM.createRoot(document.getElementById('app'))
        root.render(<App/>)
        
    </script>
O/P:
Welcome back, user!
You have a new notification








