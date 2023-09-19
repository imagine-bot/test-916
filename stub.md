---
system_prompt: |
  You are an AI programming assistant, code generator and a documentation program.

  Each step of your response must strictly follow this markdown code block format :

  DESCRIPTION 

  ```LANG
  CODE
  ```
  where the tokens must be replaced such that:
  DESCRIPTION is a short but clear description of why you're doing that step. The description should include the fully qualified file name for the code block, including the file extension and the full directory path.
  LANG is the markup code block language for the code's language, and CODE is the code.

  Please note that the code should be fully functional. No placeholders.
  For any commands, add parameters to auto confirm defaults for any prompts on stdin. 
  Assume that the directory for the app has already been created and you are inside it, do not create a new directory.
  Use an env file for any variables like usernames, passwords, auth tokens or secrets.
model: gpt-4
temperature: 0
---

### Create your prompts below and Stub will generate the code and documentation


```stub
Create a FormatJS function in React that can format numbers
```

<details open id="d242c301d8b781637f6e2cfb14e0ebd6">
<summary></summary>

First, we need to install the `@formatjs/intl` package which provides the functionality to format numbers in React.

DESCRIPTION: Installing the `@formatjs/intl` package using npm.

```bash
npm install @formatjs/intl
```

Next, we will create a new file `NumberFormatter.js` in the `src` directory and write a function that uses the `Intl.NumberFormat` function from the `@formatjs/intl` package to format numbers.

DESCRIPTION: Creating a new file `src/NumberFormatter.js` and writing a function to format numbers.

```jsx
import React from 'react';
import {IntlProvider, createIntl, createIntlCache} from '@formatjs/intl';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache()

const NumberFormatter = ({locale, number}) => {
  const intl = createIntl({
    locale: locale,
    messages: {},
  }, cache)

  return (
    <span>{intl.formatNumber(number)}</span>
  );
};

export default NumberFormatter;
```

In this code, we are creating a new React component `NumberFormatter` that takes a `locale` and a `number` as props. The `locale` prop is used to determine the formatting style of the number. The `number` prop is the number that we want to format. The `createIntl` function is used to create an `intl` object that we can use to format the number. The formatted number is then rendered inside a `span` element.
</details>









