# Album Browser (Angular)

This project is an **Album Browser SPA** built for **Lab 6: Routing & HTTP**. It demonstrates Angular routing, HttpClient, and a service layer using the JSONPlaceholder API.

## Features

- Multi-page SPA with Angular Router
- Albums list, album details, and photo gallery views
- CRUD-style interactions (read, update title, delete album)
- Loading states and empty states

## Tech Stack

- Angular (standalone components)
- TypeScript
- RxJS
- HTML / CSS

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Then open:

```
http://localhost:4200/
```

## Project Structure

```
src/
  app/
    components/
      home/
      about/
      albums/
      album-detail/
      album-photos/
    models/
      album.model.ts
      photo.model.ts
    services/
      album.service.ts
    app.ts
    app.html
    app.css
  styles.css
  main.ts
```

## Notes

JSONPlaceholder simulates updates and deletes, so the UI updates locally after a successful response.
