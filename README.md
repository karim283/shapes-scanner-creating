# Blob Shape Customizer and Image Tracing Tool

This project is a web-based tool that allows users to upload images, trace black lines within those images, and customize animated blob shapes. The tool enables users to see a preview of black-line shapes extracted from uploaded images and customize animated blobs by selecting shape types, colors, and animation settings.

## Table of Contents
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [HTML Structure](#html-structure)
- [CSS Styling](#css-styling)
- [JavaScript Functionality](#javascript-functionality)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [License](#license)

## Technologies Used
- **HTML5**: For structuring the web page content.
- **CSS3**: For styling and animation effects.
- **JavaScript**: For interactivity and DOM manipulation, without any external libraries.


## HTML Structure

### `index.html`
The `index.html` file is the introductory page, offering users buttons to either "scan design" or "create design" by redirecting to respective pages (`scan.html` and `start.html`). It consists of:
- **Head Section**: Specifies metadata, styles, and icon.
- **Body Section**:
  - **Header (h1)**: The main title of the page.
  - **Subheader (h4)**: Descriptive paragraph about the tool’s purpose.
  - **Buttons**: Links to other pages using `<a>` tags to navigate to either `scan.html` or `start.html`.

### `blob.html`
The `blob.html` file is for the blob shape customization tool and consists of:
- **Shape Selection**: Radio buttons to select either "Circle" or "Square."
- **Color Selection**: Options for Blue, Red, or Green colors.
- **Animation Controls**: Sliders for adjusting amplitude and frequency of the blob animation.
- **Canvas**: A canvas element for rendering animated shapes.

### `scan.html`
This page provides the user interface for the image upload, trace, and preview functionality:
- **Image Upload Section**: Contains an input field for file uploads.
- **Canvas**: Used to show the uploaded image and the traced black lines.

## CSS Styling

### `style.css` (for `index.html`)
Defines background styling, text formatting, and button styling:
- **Background Image & Overlay**: A background image fills the viewport, with an overlay to darken it, making the content readable.
- **Keyframes Animation**: `@keyframes fadeIn` animates the text headers to fade in, adding a smooth introductory effect.
- **Responsive Design**: Uses media queries to adjust font size and layout for smaller screens.

### `create.css` (for `blob.html` and `scan.html`)
Background and text styling for the blob creation and scan pages:
- **Background and Text Styling**: Maintains a dark background and white text for readability.
- **Upload and Preview Section**: Styles the two main content boxes for image upload and canvas display.
- **Canvas Settings**: Adds box shadows for the canvas elements and sets a transparent background.

## JavaScript Functionality

### `script.js` (for Shape Blob Customization in `blob.html`)
This script allows users to customize and animate a blob shape:
- **HTML Elements**: Grabs elements such as the canvas, shape, and color forms, as well as sliders for controlling animation amplitude and frequency.
- **Event Listeners**:
  - `shapeForm.addEventListener("change", ...)`: Updates the shape based on the selected radio button.
  - `colorForm.addEventListener("change", ...)`: Updates the color.
  - `amplitudeSlider.addEventListener("input", ...)` & `frequencySlider.addEventListener("input", ...)`: Adjust animation values for amplitude and frequency.
- **Animation Function (animateBlob)**:
  - Draws either a circle or square that varies over time using sinusoidal functions to create a "blob" effect.
  - Uses `ctx.shadowColor` to add a shadow, making the blob appear more three-dimensional and dynamic.
  - Calls `requestAnimationFrame(animateBlob)` to continuously animate and update the shape.

### `script2.js` (for Image Upload, Trace, and Preview in `scan.html`)
Handles image uploads, tracing, and displaying black lines only:
- **File Input Handling**: Uses the `change` event to detect file uploads, displaying the uploaded image on `uploadCanvas`. If an image file is loaded, its URL is used as the source for the `img` element to display it on the canvas.
- **Trace Black Lines (traceBlackLines function)**:
  - **Image Data Processing**: Retrieves pixel data from `uploadCanvas` and scans each pixel.
  - **Black Pixel Detection**: Checks if each pixel is black (RGB values close to 0) and draws a black dot on the `previewCanvas` if it is. This effectively outlines and reproduces only the black lines from the uploaded image on the preview canvas.

## How It Works

### Homepage (`index.html`)
The homepage presents the main introduction and navigation options, allowing users to navigate to either the **Blob Shape Customization** or **Image Upload and Trace** sections.

### Blob Shape Customization:
1. Users select the shape type (circle or square) and color (blue, red, or green).
2. Users can adjust the amplitude and frequency sliders to modify the animation settings.
3. JavaScript dynamically changes the shape appearance and re-renders the animation on the canvas.

### Image Upload and Trace:
1. Users upload an image through the image input section.
2. The `traceBlackLines` function processes the uploaded image to identify and trace black lines only.
3. The traced black lines are rendered on the preview canvas, providing a simplified, black-only representation of the uploaded image.


### Instructions to update the `README.md`:
1. Replace `your-username` in the clone URL with your actual GitHub username.
2. If you have any specific license terms, replace the license section accordingly.

This `README.md` file should provide a comprehensive overview of your project and its functionality, making it easy for others to understand and use.
