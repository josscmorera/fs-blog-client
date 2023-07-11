# Full Stack Blog App - Frontend

Hello there! Welcome to the frontend of my full-stack blog application.

## Current Features

1. **View Blogs:** All blogs are displayed on the main page in order of their creation date. You can sort the blogs by the latest or earliest creation date.
2. **Create Blogs:** You can create new blog posts by filling out a simple form.
3. **Update Blogs:** Each blog post can be edited by clicking on the "Edit" link on its card.
4. **Delete Blogs:** On the edit page, you can also delete the blog post.

## Tech Stack

- **React:** The frontend is built entirely with React. It's used to create and manage components and manage application state.
- **react-router-dom:** This is used to manage routing in the application, allowing for the creation of multiple pages.

## App Structure

The app is structured into several React components, each responsible for a specific part of the application:

- **App:** This is the main component of the application. It handles fetching and sorting the blogs and provides the necessary context for the child components.
- **NavBar:** This component represents the navigation bar, which includes links to the main blog page and the blog creation page.
- **Blogs:** This component displays all the blogs. It uses the BlogCard component to render each blog post.
- **BlogForm:** This component renders the form used to create new blog posts.
- **BlogEdit:** This component renders the form used to edit existing blog posts.
- **BlogCard:** This component represents a single blog post.

## Upcoming Features

I plan to add the following features to the frontend:

- **Comments:** anyone will be able to comment on blog posts.

## How to Run the App

To run this, you need to do the following:

1. Clone the repository: `git clone url`
2. Install the dependencies: `npm install`
3. Start the app: `npm start`

## Good Luck
