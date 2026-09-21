# 🚀 NASA Astronomy Picture of the Day

An interactive **NASA Astronomy Picture of the Day (APOD) application** that allows users to explore space by selecting a date and viewing NASA's featured content from that day. 🌌

## 📸 Project Preview

This project was created using **HTML, CSS, JavaScript, and the NASA API**.

Users can enter a date to retrieve NASA's **Astronomy Picture of the Day** for that specific date. Depending on the selected day, NASA may return either an **image or a video**, and the application dynamically displays the correct media.

## ✨ Features

- 📅 Select a date to explore NASA's Astronomy Picture of the Day
- 🔭 Retrieve data from the NASA API
- 🖼️ Display NASA images directly on the page
- 🎥 Watch NASA videos directly on the page
- 🔄 Automatically switch between image and video content
- ⚡ Dynamically update the page using JavaScript
- 🌌 Explore NASA content from different dates
- 📱 Simple and user-friendly interface

## 🛠️ Built With

- HTML
- CSS
- JavaScript
- NASA Astronomy Picture of the Day (APOD) API

## 🎯 Project Goal

The goal of this project was to build an application that communicates with an external API and uses the returned data to dynamically update the webpage.

The user enters a date, and the application sends a request to the **NASA Astronomy Picture of the Day API** to retrieve the content associated with that date.

One challenge was handling the different types of media returned by the API. Some dates contain an image, while others contain a video.

I added functionality that checks the media type and displays the correct content. When users move between image and video dates, the previous media is removed so that both do not remain displayed on the page at the same time.

## 💡 What I Learned

This project gave me more practice working with **APIs and asynchronous JavaScript** while creating an interactive webpage.

I learned how to retrieve information from an external API and use the returned data to update elements on the page.

I also gained more experience working with:

- API requests
- `fetch()`
- JSON data
- Promises
- DOM manipulation
- Event listeners
- Conditional logic
- User input
- Working with dates
- Image and video elements
- Dynamically updating content
- Handling different API responses

One of the biggest things I practiced was using **conditional logic with API data**. Since NASA's Astronomy Picture of the Day can return either an image or a video, my application checks the media type and determines which element should be displayed.

This helped me better understand how JavaScript can respond to changing data instead of assuming that every API response will have the same format.

## 🌐 API

This project uses NASA's **Astronomy Picture of the Day (APOD) API**.

The API allows the application to retrieve NASA's featured astronomy content based on the date selected by the user.

## 🚀 Running the Project

To run this project locally:

1. Clone the repository:

```bash
git clone YOUR-GITHUB-REPO-URL
```

2. Navigate into the project folder.

3. Open the project in VS Code.

4. Open `index.html` in your browser.

5. Select a date. 📅

6. Explore NASA's Astronomy Picture of the Day! 🚀🌌

---

Thanks for checking out my project! 🚀🪐✨