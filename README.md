# Vue Boilerplate

A modern, opinionated starting point for Vue.js projects with Bootstrap 5 and SCSS, created by GrantB.

## Features

- Vue 3 with `<script setup>`
- Bootstrap 5 (customizable via SCSS)
- SCSS with BEM-inspired folder structure
- Pre-configured routing and layout
- Example components and a mini style guide
- Easy customization and extension

## Project Structure

```
vue-boilerplate
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── Footer.vue
│   │   └── NavBar.vue
│   ├── scss
│   │   ├── components/
│   │   ├── global/
│   │   ├── nav/
│   │   ├── typo/
│   │   └── variables/
│   ├── views
│   │   ├── Home.vue
│   │   └── Page.vue
│   ├── App.vue
│   └── main.js
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd vue-boilerplate
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to see your application.

## Customization

- **Bootstrap overrides:** Edit `src/scss/global/global.scss` to customize Bootstrap variables before import.
- **SCSS variables:** Add or change your own variables in `src/scss/variables/variables.scss`.
- **Style guide:** Visit the `/page` route in your app for a live style guide of variables and components.

## Continuous Integration

This project includes CI/CD workflows located in `.github/workflows`. These workflows automate tasks such as linting, building, and testing your code on every push or pull request, ensuring code quality and reliability.

**Deployment:**  
When you push to the `main` branch, an automated workflow will deploy your build to your server via FTP.  
You can configure the FTP deployment settings in the workflow file under `.github/workflows`.

### Required Repository Variables

To enable FTP deployment, you must set the following repository secrets in your GitHub repository:

- `FTP_HOST` – The FTP server hostname (e.g., `ftp.example.com`)
- `FTP_USERNAME` – Your FTP username
- `FTP_PASSWORD` – Your FTP password
- `FTP_TARGET` – The target directory on your server (e.g., `/public_html/`)

#### How to Set Repository Secrets in GitHub

1. Go to your repository on GitHub.
2. Click on **Settings**.
3. In the sidebar, click **Secrets and variables** > **Actions**.
4. Click **New repository secret**.
5. Add each secret (`FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_TARGET`) with the appropriate value.

## License

This project is licensed under the MIT License.

---

Made by GrantB. Build version: 1.0.0
