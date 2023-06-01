# Codebase 

## Usefull commands

-   Generate a `.gitignore` file executing `npx gitignore node`

```
npx gitignore node
```

-   git fetch and reset

```bash
git fetch && git reset --hard origin/main
```

-    Delete `.git` local folder if needed: `rm -rf .git`
-    Create `.git` local folder: `git init`
     -    global config if needed: 
        ```
        git config --global user.name "beatlesm" 
        git config --global user.email "rj.geng@gmail.com"
        ```
-    Create a new repository on the command line 
        ```
        echo "# newrepo" >> README.md
        git init
        git add README.md
        git commit -m "first commit"
        git branch -M main
        git remote add origin git@github.com:beatlesm/newrepo.git
        git push -u origin main
        ```
-    …or push an existing repository from the command line
        ```
        git remote add origin git@github.com:beatlesm/newrepo.git
        git branch -M main
        git push -u origin main
        ```