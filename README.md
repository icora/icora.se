# Icora

Icora is a venture company driven by entrepreneurs for entrepreneurs. We strive
to make the greatness in your business even greater by implementing experience,
funding and a global network.

http://icora.se

## How to add a new project

1. Visit the [Icora.se GitHub repository](https://github.com/icora/icora.se) and go to `_posts`.

2. Create a new file and name it `0001-01-<x>-<project-name>.md`, where `<x>` is the number of the last post + 1 and `<project-name>` is the project's name in lowercase and spaces replaced with dashes.
    
  ![](http://i.imgur.com/Ha7s0Kw.png)

3. Add project images to `assets/images/projects` with the following naming convention:

  ```
  assets/images/projects/<project_name>_full.jpg
  assets/images/projects/<project_name>_logo.png
  assets/images/projects/<project_name>_off.jpg
  ```

4. Add the following lines to the top of the file and then just start typing with markdown:

    ``` yaml
    ---
    layout: project
    title: Project name
    summary: Project description summary (no more than ~140 characters).
    slug: project_name
    segment: Project segment
    website: projectname.com
    ---
    
    The main copy of the project.
    ```

5 . Commit the new file and watch the glory on icora.se
    
  ![](http://i.imgur.com/X19CKGB.png)
