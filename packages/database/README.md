
<br />
<p align="center">
  <!-- <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Lerna Example - Database Package</h3>

  <p align="center">
    Hasura database sub-package
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Package

This package uses Hasura to manage a PostGres database that is exposed via a GraphQL endpoint. The metadata, migrations and seeds folders provide the structure required to set the database up and populate it with example data.


<!-- GETTING STARTED -->
## Getting Started


1. Start the database and Hasura
   
  ```sh
   yarn start
  ```

2. Open the console on port 8080 (changes made here will translate to the metadata and migrations folder)
   
  ```sh
  yarn console
  ```

3. Seed the database
   
  ```sh
   yarn add-seeds
  ```


<!-- USAGE EXAMPLES -->
## Usage

While making changes to the database structure via the Hasura console, the metadata and migrations folders will be updated. To squash these migrations to simplify version control, [use the migration squash tools](https://hasura.io/docs/1.0/graphql/core/hasura-cli/hasura_migrate_squash.html).