# wsgi-testing


Simple app for testing WSGI setups + error cases.

Requires `PORT` environment variable to be set.

# running on heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# running locally

`PORT=5000 heroku local` if using the heroku CLI or `waitress-serve --port 5000 app:app` if not.

# routes

- `/` just says "Hello world"
- `/sleep/<int:seconds>` sleeps for that many seconds before returning a response
- `/infinite-loop` runs an infinite loop that uses max CPU
