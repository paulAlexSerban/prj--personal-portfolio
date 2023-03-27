---
title: Create An Array Of Strings Out Of All Directories Inside Another Directory
category: "snippet"
status: "draft"
tags:
    - "Bash/Shell"
date: "March 28, 2019"
---

```bash
#!/bin/bash
cd "$(dirname "$0")" || exit

# Set the directory to search in
search_dir="../my_scripts"

# Find all directories inside the search directory and save them to an array
directories=($(find "${search_dir}" -mindepth 1 -maxdepth 1 -type d -exec basename {} \;))

# Loop through the array and print each directory
for dir in "${directories[@]}"; do
  echo "$dir"
done
```