# Natural Language Processing Project

  This is the fourth project in the [Front End Web Developer Nanodegree from Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)

The project covers building an SPA (Single Page Application) making use of modern build tools, in this case, webpack. The project also covers SASS and Service Workers and using the fetch api to make asynchronous requests to the [Meaning Cloud Sentiment Analysis API](https://www.meaningcloud.com/developer/sentiment-analysis)

### Skills Demonstrated

 - Webpack
 - fetch API and Promises
 - SASS
 - Service Workers
 - Testing with the [Jest](https://jestjs.io/) Framework

Perhaps more importantly several issues were encountered with npm package version conflicts. This took several hours of Google and Stack Overflow and was a valuable lesson in perseverance.

### Deployment

The project can be viewed in production on the Heroku platform here:

https://nlp-project-mogstuff.herokuapp.com/

Deploying the app into production proved a little challenging at first as the .gitignore file excludes the .env and dist folders so this won't actually run as webpack configures the app to serve the bundled files in the /dist folder.  This was overcome by creating a new branch with these changes omitted, pushing that up to github.com, deploying the branch in Heroku, then deleting the remote branch from github.com.

#### Credits

Background Image by <a href="https://pixabay.com/users/computerizer-4588466/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2301646">Computerizer</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2301646">Pixabay</a>
