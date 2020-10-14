--- See: overview.html, Requirements no. 13 ---

Your answer:

1. React.js
- I've used React.js because the recruiter asked me to :)
- The serious answer would be that it's a good frontend framework that allows you to modularize your code (by creating components for each specific code block).
- It's easy to implement two-way data binding using hooks.
- It's easy to manipuate templates by using JSX.

2. SCSS
- CSS on steroids.
- We can use nesting, variables, mixins and partials to make the code easier to read.
- Any semantic errors would be caught during build time.

I've created the project using the create-react-app toolchain as it provides some good out-of-the-box webpack configuration and adding scss support is as easy as installing the 'sass' package.

To run the app in development go into the TASK/app directory and run:
```
yarn install
yarn start
```

To build it use the following command:
```
yarn build
```

There are a lot of places where the attached code could be improved/refactored, but the provided solution should satisfy all raised points.