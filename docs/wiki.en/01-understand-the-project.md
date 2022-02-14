# Understand the project :

This project was born from the roots of [Flat-scheme](https://github.com/wordpress-projects-station/wp-plugin-flat-scheme) and as it is used as a basic schema, an IT boilerplate, a small framework.

It may therefore seem incomplete ... because some of its parts must be configured and connected by you. The more particular your needs are, the more obviously you will distance yourself from what you will see here.

However, it remains obvious that, to change everything, you will have to understand everything ... let's start with the basics: the main folders and files.

---

## - main folders and files

The asset includes [3 macro areas](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/tree/main/the-plugin-scheme/required) equal to sub folder:

- standard files to manage the plugin and its relative options
- the section for managing and configuring gutenberg blocks and blocks categories
- an extra area to support theme snippets

> note: if you come from the *Flat* you will understand in a second that this is a basis for a complete expansion with the necessary additions for gutenberg (which will be better treated later).

The files in the first area are the same as the *Flat*, we just changed a name and a little layout. Excluding the index, all files will in any case be enclosed in "required". For the plugin base, then ...

- **./[index.php](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/index.php)**
  It's the manager of asset. In this file we have a class that instantiates the 3 areas of the plugin by the wordpress hooks. It's easy to understand: the hook is in costructor and the file called have the "required" and the path in body.

- ./required/admin-panels/**[index_admin_panel.php](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/tree/main/the-plugin-scheme/required/admin-panels)**<br>
  ./required/admin-panels/**[wpdblib.php](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/tree/main/the-plugin-scheme/required/admin-panels)**<br>
  The first is the contents of admin page, whit the form for make your options.
  The second is required in "index_...", the first, and it's a little methods librarys for make a CRUD of wordpress database... in short: save and get all data. This first area manages what you see on the menu and the classic admin area. is the one you activate in the plugin page in wordpress. We advise you to study it better in the ultra mega simple version ... the [Flat-scheme](https://github.com/wordpress-projects-station/wp-plugin-flat-scheme) (which is identical, but easier).

- ./required/ [gutenberg-editor/....](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/tree/main/the-plugin-scheme/required/gutenberg-editor)
  
  - **css and js** contain everything that is specifically processed by gutenberg within the editor, in a dedicated area.

- **[index_gutenberg_categories.php](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/index_gutenberg_categories.php)**
  It is a wp action that contains the array that builds the categories in the gutenberg menu. You can expand the array and modify it at will, just respect the initial boilerplate. Understanding it is easy: The name of the category is _"SCHEMES"_, it is related to the plugin _"the-plugin-scheme"__. The _"scheme-blocks"_ slug will bind blocks to this construct instead. That's all.

- **[index_gutenberg_blocks.php](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/gutenberg-editor/index_gutenberg_blocks.php)**
  It is the code block that physically links the gutenberg asset to wordpress.
  
  The first part is the variables, paths and libraries that Gut needs ... Then it just calls the files one by one with wp_enqueue_script and wp_enqueue_style. *It is obvious that here you can intervene through the options saved and retrieved from the pages of the first area, the one for admin management and in the form with wpdblib.

- ./required/**theme-snippets/[index_theme_snippets.php](https://github.com/wordpress-projects-station/wp-plugin-complete-scheme/blob/main/the-plugin-scheme/required/theme-snippets/index_theme_snippets.php)** 
  Both the theme, that wordpress, and the gutenberg editor itself have continuous expansions that must be activated or deactivated via snippets. Wordpress hooks are too many to build a boilerplate suitable for every situation ... let's say we have given you an example that you need when needed. In this file, in fact, all you do is collect the snippets related to the themes and gutenberg ... but obviously nobody forbids you to build other areas in the same plugin ;)

Now you understand roughly what we did here ... you should read the files a little to get enough detail to start more complex steps.

When you're ready ... we'll talk about the system made for gutenberg.

AH ! do you feel ready then?! ok genius ... [go to the next step](./02-the-gutenberg-editor-area.md)!
