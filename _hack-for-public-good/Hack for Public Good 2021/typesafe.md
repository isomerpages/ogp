---
title: Typesafe
permalink: /hackathon/2021/typesafe
third_nav_title: Hack for Public Good 2021
---


<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQz1r9EmNASnfeummp-DLLy3DuVnC4mkJO6KxLe9eB1ImsT3NUJ-MWqt1MEb3iwfmRMWoj8Yw2cTDwp/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%"  height="515" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Check out the npm package [here](https://www.npmjs.com/package/eslint-plugin-typesafe), or watch our hackathon presentation [on Youtube](https://www.youtube.com/embed/bMwZrRxlOuI)!

#### What is Typesafe
Linting rules to help JS/TS developers catch exceptions and unhandled promises!

#### Why Typesafe?
OGP engineers have built many mission-critical products that support high reliability and uptime requirements, usually using TypeScript or JavaScript. As systems become more complex, type safety becomes paramount in ensuring each new piece of code combines correctly & safely with the rest of the codebase. As a language, TypeScript offers greater type safety, but inherits many flaws from JavaScript because of its design principle to be a strict superset of the JavaScript language. This means that thrown Errors and unhandled Promise rejections exist outside the type system and cannot be caught by the compiler. Poorly-integrated code can cause a server process to crash if an error bubbled to the top of the application. TypeSafe helps prevent such scenarios by providing an ESLint linter plugin to detect and flag out code where error handling could be improved.

#### What was the biggest challenge in this project? 
Engineering was the biggest challenge. The documentation for writing ESLint plugins on eslint.org and the typescript-eslint project is lacking or nonexistent. Most of the time was spent trying to reverse-engineer the provided APIs in order to traverse and lookup references in the Abstract Syntax Tree correctly.


#### Fun facts!
**One interesting finding:**\\
The TypeScript is a strict superset of JavaScript because the TypeScript AST is also a strict superset of the JavaScript AST.

**One thing you'd have done differently:**\\
Spend more time reading code from the core ESLint repository - it would have provided greater learning and saved time.