# AtechMovieapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

# Technologies

Angular was chosen due to the fact that it is a well known technology, that suits the needs of the job both for its main target (SPA) but also for its being a light and fast framework and because I`m more confortable developing with it.

I chose bootstrap as the css framework because is a well known CSS framework, has all the grid and layout 'shortcuts' and made the layout build process easier and faster. I componentized the css files inside angular, with each component having its own css.

The executable file was generated with Electron and Electron-packager.

# Techniques

I divided the app in several minor components for easier maintenability and scalability. It is divided like this:

- Header
    - Searchbar (the top search bar)
- movies-list (container)
    - filter (the filter that changes the movies list)
    - movies unit (each movie block)
- details (details page)
    - movie cast (cast info area)
    - movie info (movie info area)

It is all routed with the ROUTES module inside the app.

The app was deployed to Heroku server as its a free and reliable nodejs web server that easily deploys our apps directly from the repository.

The app is responsible and accesible both from desktops and smartphones.

#Instructions

The app can be accessed online on the following address: https://rodmovieapp.herokuapp.com/

To download the original code, just clone the repository https://git.heroku.com/rodmovieapp.git on your computer. Later you can build it with 
- 'ng-build --prod' (production)
- 'ng-serve' (development)

The executable can be downloaded on 

