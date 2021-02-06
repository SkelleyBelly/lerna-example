<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Lerna Example</h3>

  <p align="center">
    Example using Lerna to manage a monorepo that contains a database, component library, client and api service
    <!-- <br /> -->
    <!-- <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a> -->
    <!-- <br /> -->
    <br />
    <!-- <a href="https://github.com/github_username/repo_name">View Demo</a> -->
    <!-- · -->
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

An example repo created to trial out Lerna and a monorepo project structure. It includes the following:

- A component library created with Material UI, with a custom theme
- A database project that uses PostGres and Hasura to provide data via GraphQL
- A client project that uses the component library and Apollo to display data
- A node API service, that currently just returns a simple "Hello World"


### Built With

* [Lerna](https://github.com/lerna/lerna)
* [Material UI](https://material-ui.com/)
* [Hasura](https://hasura.io/)
* [Apollo](https://www.apollographql.com/)
* [GraphQL Code Generator](https://graphql-code-generator.com/)


<!-- GETTING STARTED -->
## Getting Started


1. Clone the repo
   ```sh
   git clone https://github.com/SkelleyBelly/lerna-example
   ```
2. Install root dependencies (via Yarn or NPM)
   ```sh
   npm install

   or

   yarn install
   ```

3. Bootstrap with Lerna (this installs package dependencies)
   ```sh
   npx lerna bootstrap
   ```


<!-- USAGE EXAMPLES -->
## Usage

To start all packages, run:
```sh
npx lerna start
```

To start individual packages, refer to their documentation:

* [API](./packages/api/README.md)
* [Component Library](./packages/components/README.md)
* [Client](./packages/client/README.md)
* [Database](./packages/database/README.md)

<!-- CONTACT -->
## Contact

Nathan Skelley - [website](https://www.skelleybelly.com/)

Project Link: [https://github.com/SkelleyBelly/lerna-example](https://github.com/SkelleyBelly/lerna-example)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- [contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo/network/members
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username -->