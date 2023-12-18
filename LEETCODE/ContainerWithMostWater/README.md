
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

 PASS  src/spec/math.spec.ts
 PASS  src/spec/graph-decorator.spec.ts

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        3.099 s, estimated 4 s
Ran all test suites.

```

If you get the following error message you have to delete the file in dist/spec folder. 

 FAIL  dist/spec/graph-decorator.spec.js
  ● Test suite failed to run
SyntaxError: Cannot use import statement outside a module

# References
* [TypeScript Tutorial for Beginners - Programming with Mosh](https://www.youtube.com/watch?v=d56mG7DezGs)
* [Using Decorators in Typescript - hackernoon](https://hackernoon.com/using-decorators-in-typescript)
* [How to write test cases in typescript - Mediun](https://bootcamp.uxdesign.cc/how-to-write-test-cases-in-typescript-fa7a263b7833)