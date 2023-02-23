---
title: "Bash/Shell: Get Working Directory Name"
category: "snippet"
status: "published"
tags:
    - "Bash/Shell"
date: "July 01, 2019"
---
In a Bash script, you can use the `$0` variable to get the path of the script, and then use the `dirname ` command to extract the directory name. Here's an example:

```bash
#!/bin/bash

SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"

echo "The script is located in directory: $SCRIPT_DIR"
```

In this example, `readlink -f "$0"` returns the absolute path of the script, and `dirname` extracts the directory name. The resulting directory path is stored in the `SCRIPT_DIR` variable, which can be used later in the script.

Note that this approach assumes that the script is located in the same directory as the file that contains the script. If the script is located in a different directory, you'll need to modify the `readlink` command accordingly.