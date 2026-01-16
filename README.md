# Importing
The idea here it to help you get started with a correctly configured project asap.

To do that, please go the [New Project page on gitlab.](https://git.afrigis.co.za/projects/new)

Then select the "Import Project" tab.

Next, select "Repo by Url".

Enter THIS project's URL: `https://git.afrigis.co.za/project-templates/vue-js-3.git`

Edit the url, and insert your gitlab username and password in the url, like so:

`https://thedude:itscoolpwd@git.afrigis.co.za/project-templates/vue-js-3.git`

Enter your new project name and description in the appropriate fields.

Click "Create Project".

## First steps after import
1. __Delete `renovate.json`__
2. Edit the `package.json` file, and change the *name* value to your desired application name.
3. Edit the `.gitlab-ci.yml` and `vite.config.js` file, change values marked with "EDIT THIS"
5. __Fill in the appropriate `README.md` contents!__ Use [this snippet](https://git.afrigis.co.za/snippets/42)
