# sandbox-interview-questions

<img src="https://github.com/churchofscyence/resources/blob/main/banners/banner-thomas-edison.png" alt="Thomas Edison">

<a href="https://churchofscyence.github.io/sandbox-dynamic-programming/">Getting Started</a>

# Run the Project

You need to open two terminal.

In one terminal to start the lite-server:
```
(base) john@johns-MacBook-Pro ContainerWithMostWater % npm start

> starter@1.0.0 start
> lite-server
```

The second terminal to start TypeScript Compile with watch mode:

```
(base) john@johns-MacBook-Pro ContainerWithMostWater %  tsc -w
[1:20:16 PM] Starting compilation in watch mode...

[1:20:21 PM] Found 0 errors. Watching for file changes.

```


# Run the Jest Test Suite

```

(base) john@johns-MacBook-Pro ContainerWithMostWater % npm test

> starter@1.0.0 test
> jest

 PASS  src/spec/graph-decorator.spec.ts

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        3.099 s, estimated 4 s
Ran all test suites.

```

# Errors

## Mistake have two same spec files within the same project.
If you get the following error message you have to delete the file in dist/spec folder. 

 FAIL  dist/spec/graph-decorator.spec.js
  ● Test suite failed to run
SyntaxError: Cannot use import statement outside a module

## Can not find Jest package.
Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.ts(2582)
⚠ Error(TS2582)  | 
Cannot find name describe . Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.

## CORS

' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

* [How to fix cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https - CODE PROJECT](https://www.codeproject.com/Questions/1195078/How-to-fix-cross-origin-requests-are-only-supporte)     

* [How To Fix: "null has been blocked by CORS policy" Error in JavaScript AJAX - YouTube](https://www.youtube.com/watch?v=nx8E5BF0XuE)

## TypeScript Error (TS6133) - Variable declared but its value is never read.

[8:46:46 PM] File change detected. Starting incremental compilation...

src/app.ts:28:9 - error TS6133: 'result' is declared but its value is never read.

28     let result = SolutionUtil.generateCompareIndex(points);
           ~~~~~~

[8:46:46 PM] Found 1 error. Watching for file changes.

#### Code Solution       
```
// @ts-ignore
let result = SolutionUtil.generateCompareIndex(points);
```

# References
* [TypeScript Tutorial for Beginners - Programming with Mosh](https://www.youtube.com/watch?v=d56mG7DezGs)
* [Using Decorators in Typescript - hackernoon](https://hackernoon.com/using-decorators-in-typescript)
* [How to write test cases in typescript - Level Up Coding](https://bootcamp.uxdesign.cc/how-to-write-test-cases-in-typescript-fa7a263b7833)     
* [Canvas API - w3schools](https://www.w3schools.com/jsref/api_canvas.asp)          
