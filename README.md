# Coding and Contribution Guidelines

### Development Tools

- VS Code

<!-- settings

```
{
  "files.autoSave": "onWindowChange",
  "tailwindCSS.emmetCompletions": true,
  "emmet.triggerExpansionOnTab": true,
  "workbench.iconTheme": "material-icon-theme",
  "prettier.requireConfig": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.bracketSameLine": true,
  "prettier.jsxSingleQuote": true,
  "prettier.useEditorConfig": false,
  "prettier.withNodeModules": true,
  "explorer.confirmDelete": false,
  "prettier.enableDebugLogs": true,
  "workbench.startupEditor": "none",
  "explorer.compactFolders": false,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.tsserver.experimental.enableProjectDiagnostics": true,
  "workbench.colorTheme": "Visual Studio 2019 Dark",
  "[csharp]": {
    "editor.defaultFormatter": "ms-dotnettools.csharp"
  },
  "files.exclude": {
    "**/bin": true,
    "**/obj": true,
    "**/.vscode": true
  },
  "editor.codeActionsOnSave": [
    "source.addMissingImports"
  ],
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "vue-html": "html",
    "razor": "html",
    "plaintext": "jade"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
``` -->

#### VS Code Extensions

- Better comments
- Code Spell Checker
- IntelliCode
- Markdown Preview Enhanced
- Prettier - code Formatter
- REST Client
- Todo Tree
- ES7+ React/Redux/React-Native snippets
- ESLint
- Tailwind CSS IntelliSense
- GitLens — Git supercharged

### Programming Language

- Java Script/Type Script

### Framework and libraries

- ReactJS (Java Script Library)
- Tailwind CSS (CSS Library)
- Framer Motion (Animation Library)
- Moment (Date Utilities Library)
- Axios (Network Request Library)
- prettier-plugin-tailwindcss (For sorting tailwind classes)
- prettier

**.prettierrc**

```
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

- Command

```
npx prettier --write src
```

#### Task or Issue management - (TODO, BUG, HACK, FIXME or XXX)

- - BUG @contributor @Start:7/7/23_11:20_AM **Fix this bug** @End:7/7/23_12:30_PM
- - FIXME @contributor @Start:7/7/23_11:20_AM **Fix this issue** @End:7/7/23_12:30_PM
- - HACK @contributor @Start:7/7/23_11:20_AM **Work around** @End:7/7/23_12:30_PM
- - TODO @contributor @Start:7/7/23_11:20_AM **Handle exception** @End:7/7/23_12:30_PM
- - XXX @contributor @Start:7/7/23_11:20_AM **Not required** @End:7/7/23_12:30_PM
- - [ ] In progress - Make task to [ ] (TODO, BUG, HACK, FIXME or XXX) while working
- - [x] done - Make in progress task to [x] when work is done

#### Git Work Flows

1. Repository maintainer will create develop branch and mage with main/master branch

```
git branch develop
```

2. Contributor will create a branch for themselves from develop branch

```
git branch contributor_branch
```

3. Pick a task/issue (TODO, BUG, HACK, FIXME or XXX) then notify repository maintainer
4. Repository maintainer will assign you that task by making that task in progress ([ ] @Contributor ** Task details **)

5. Pull update from develop branch and start working

```
git pull origin develop
```

6. Before starting the task/issue add start time ([ ] @Contributor @Start:7/7/23_11:20_AM ** Task details ** )

7. Make your change and transfer your work to staging by

```
git add file_name
or
git add .
```

8. Commit your work, by providing message about what you have done

```
git commit -m "Banner Section Added"
```

9. Preferred way is adding one file at a time then provide commit message about that file.

10. Pull frequently from development branch and before pushing to branch

```
git pull origin develop
```

11. Push your work to your branch for review and inform your repository maintainer

```
git push origin contributor_branch
```

12. Repository maintainer will review your change If everything is ok then repository maintainer will marge that branch with develop branch and update your task/issue completed

```
git checkout develop
git merge contributor_branch
```

13. Tester will test every features and If everything is ok repository maintainer will marge develop branch with master branch by

```
git checkout master
git merge development
```

14. Repository maintainer will create a released version & add a TAG by

```
git tag -a v1.0 -m "v1.0 is ready for release"
git tag
git show v1.0
git push --tags origin master
```

15. If you find any bug or something need to fix then you can create a Task or Issue in TODO.todo file or in appropriate location (Follow task management)

#### Naming Convention (Give extra care when naming something)

- Folder Name (All lowercase and separated by underscore ex. public_pages)
- Class/Interface/Enum/React Component Name (PascalCase ex. HomePage.tsx)
- Function parameters should be in lowercase and separated by underscore (ex. function_parameter)
- Use camelCase for property/field names and local variables
- Function and method name should be in camelCase
- Static property/field name should be in PascalCase
- Use whole words in names when possible
- Name will describe its purpose, action and what is it used for.

<!-- #### Basic Git Commands

```
cd test_project
echo "# eCommerce-front" >> README.md
git init
git status
git add . or git add README.md
git status
git commit -m "first commit"
git status
git branch -M master
git remote add origin remote_repository_url
git push -u origin master
git status

// Show all branch
git branch -a
// Switch to a branch
git checkout develop
// Delete the local branch
git branch -d local_branch
// Delete remote branch
git push origin --delete remote_branch
//Push the branch to the remote repository
git push origin develop

// File folder renaming issue (case sensitive)
git rm -r -f --cached .
git add --all .
``` -->

## Contributors

<table>
<tbody>
    <tr>
      <td style="border: none;"><a href='https://github.com/Newton-Mitro'><img src="https://avatars.githubusercontent.com/u/72614232?v=4" width="150px" style="border-radius: 50%;"/><br />name_on_card<br />Repo Maintainer</a></td>
      <td style="border: none;"><a href='https://github.com/rezarabbi9304'><img src="https://avatars.githubusercontent.com/u/41272375?v=4" width="150px" style="border-radius: 50%;"/><br />Reza E Rabbi<br />Asst. Software Engineer</a></td>
       <td style="border: none;"><a href='https://github.com/Israfil6347'><img src="https://avatars.githubusercontent.com/u/77684046?v=4" width="150px" style="border-radius: 50%;"/><br />Md. Israfil<br />Asst. Software Engineer</a></td>
        <td style="border: none;"><a href='https://github.com/dristeM'><img src="https://avatars.githubusercontent.com/u/116267491?s=400&u=7bb1b364041bbb11ef5214b1145694c9af5e17ae&v=4" width="150px" style="border-radius: 50%;"/><br />Driste Maria Palma<br />Asst. Software Engineer</a></td>
    </tr>
    <tr>
         <td style="border: none;"><a href='https://github.com/saifabrar17'><img src="https://avatars.githubusercontent.com/u/62766337?v=4" width="150px" style="border-radius: 50%;"/><br />Saif Abrar<br />Trainee Programmer</a></td>
         <td style="border: none;"><a href='https://github.com/User-Name'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8T3SQCW4McgFf6V50LGy6DIvto0KeMrNUA&usqp=CAU" width="150px" style="border-radius: 50%;"/><br />Hmm.. ???<br />Trainee Programmer</a></td>
         <td style="border: none;"><a href='https://github.com/User-Name'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8T3SQCW4McgFf6V50LGy6DIvto0KeMrNUA&usqp=CAU" width="150px" style="border-radius: 50%;"/><br />Hmm.. ???<br />Trainee Programmer</a></td>
          <td style="border: none;"><a href='https://github.com/User-Name'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8T3SQCW4McgFf6V50LGy6DIvto0KeMrNUA&usqp=CAU" width="150px" style="border-radius: 50%;"/><br />Hmm.. ???<br />Trainee Programmer</a></td>
    </tr>
</tbody>
</table>

## Clients

<table>
<tbody>
    <tr>
      <td style="border: none;"><a href='https://www.cccul.com/'><img src="https://www.cccul.com/wp-content/uploads/2019/09/CCCUL-1-e1567945004975.png" width="100px"/><br />Dhaka Credit <br />(The CCCUL)</a></td>
    </tr>
</tbody>
</table>
