# api.ramdafuck

This is the API of the "Ramdafuck" application, a "for-fun" project where people can post their RamdaFucks and comment on other RamdaFucks.  
You can use it with the [front-end](https://github.com/soutoigor/app.ramdafuck) application.

## Setup

clone the project:  
`git clone git@github.com:soutoigor/api.ramdafuck.git`

create `.env` file and add the environment variables as in `.env.example` file.

run docker container:  
`docker-compose up`

Now it must be showing the message **"App listening on port 8000!"** in terminal.

## Usage  

- POST - (/post)
- GET - (/post)
- PATCH - (/post/:id)

### Author
[Igor Souto](https://www.linkedin.com/in/igor-souto/)
