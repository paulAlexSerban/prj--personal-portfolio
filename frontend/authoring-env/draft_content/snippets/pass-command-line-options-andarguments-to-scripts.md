---
title: "Bash/Shell: Pass Options and Arguments"
category: "snippet"
status: "draft"
tags:
    - "Bash/Shell"
date: "July 01, 2019"
---

In Bash, you can pass options to a script using the `$1`, `$2`, `$3`, etc. variables, which represent the first, second, third, and so on arguments passed to the script. You can also use the `getopts` command to parse command-line options and arguments.

Here's an example that demonstrates how to use `getopts` to read options and arguments:

```bash
#!/bin/bash

# Parse command-line options
while getopts ":u:p:" opt; do
  case $opt in
    u) username="$OPTARG"
    ;;
    p) password="$OPTARG"
    ;;
    \?) echo "Invalid option -$OPTARG" >&2
    ;;
  esac
done

# Shift the options and arguments so that $1 refers to the first non-option argument
shift $((OPTIND-1))

# Check if a non-option argument was provided
if [ -z "$1" ]; then
  echo "Error: no filename specified"
  exit 1
fi

# Print the options and arguments
echo "Username: $username"
echo "Password: $password"
echo "Filename: $1"
```

In this example, the script defines two options `-u` (username) and `-p` (password), which can be passed to the script using the syntax `script.sh -u USERNAME -p PASSWORD FILENAME`.

The `getopts` command is used to parse the options and arguments. The `while` loop reads each option and its argument (if any), and sets the corresponding variable (`$username` or `$password`). If an invalid option is passed, the script prints an error message and exits.

The `shift` command is used to shift the positional parameters, so that `$1` refers to the first non-option argument (in this case, the filename). If no filename is provided, the script prints an error message and exits.

Finally, the script prints the values of the options and arguments using echo.

## Resources
- [Beginners guide to use getops in Bash script and examples](https://www.golinuxcloud.com/bash-getopts/){target=_blank}