---
title: Capitalize the first letter in a word with Bash
category: "snippet"
status: "published"
tags:
    - "Bash/Shell"
date: "March 27, 2019"
---

To capitalize the first letter of a string in Bash, you can use a combination of string manipulation and the tr command. Here's an example:

```bash
#!/bin/bash

# Define a string
my_string="hello, world!"

# Get the first letter of the string and capitalize it
first_letter=$(echo "${my_string:0:1}" | tr '[:lower:]' '[:upper:]')

# Get the rest of the string
rest_of_string="${my_string:1}"

# Combine the first letter and the rest of the string
capitalized_string="${first_letter}${rest_of_string}"

# Print the capitalized string
echo "$capitalized_string"
```

In this example, the script defines a string called `my_string`. It then gets the first letter of the string using `${my_string:0:1}`, and uses the tr command to capitalize it. It then gets the rest of the string using `${my_string:1}`, and combines the capitalized first letter and the rest of the string using `${first_letter}${rest_of_string}`. The result is a string with the first letter capitalized.

You can modify the example to use different strings as needed. Note that this method only capitalizes the first letter of the string. If you need to capitalize the first letter of each word in the string, you can use a different approach, such as the `awk` command or a loop.

Here's an example of how you could use awk to capitalize the first letter of a string in Bash:

```bash
#!/bin/bash

# Define a string
my_string="hello, world!"

# Use awk to capitalize the first letter of the string
capitalized_string=$(echo "$my_string" | awk '{print toupper(substr($0,1,1)) substr($0,2)}')

# Print the capitalized string
echo "$capitalized_string"
```

In this script, we use the echo command to send the my_string variable to awk, which then uses the toupper() function to capitalize the first letter of the string. The substr() function is used to select the first character of the string, and substr($0,2) selects the rest of the string. The print statement then combines the capitalized first letter with the rest of the string, and the resulting value is assigned to the capitalized_string variable.

Finally, we use echo to print the capitalized string.