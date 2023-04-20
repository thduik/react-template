# Setting up react-vite-template

This project is simple running template of react app using react 17, react router 6, Vite for development and Webpack for static build for production.

This project runs with minimal configs for both Vite and Webpack.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode. Powered by Vite\

Open [http://localhost:5234] to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`



### `npm run build`

Builds the app for production to the `./dist/` folder. Powered by webpack\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Deployment

The app can be deployed via nginx with minimal additional configs

Navigate to nginx folder at /etc/nginx

`cd /etc/nginx`
`touch sites-available/{ip-address}`

paste these lines into the {ip-address} file:

server {
  listen       80;
  location / {
    proxy_pass http://localhost:5234;  
  }
    location /api {
    proxy_pass http://localhost:8800;
  }
}

`sudo ln -s /etc/nginx/sites-available/{ip-address}/etc/nginx/sites-enabled/`


Make sure in /nginx/nginx.conf has this line
￼
start nginx:
`systemctl start nginx`




