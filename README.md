# Frontend Developer Test Task

## Objetives Achieved in the task

1. setup react router, with base layout and routes
2. property listing and seperate route for details
3. search, price sorting and bedroom filter with provided placeholder and feedback messages
4. used proper typescript syntax with no build errors
5. UI hover on property slight scale and shadow

## my apprach for this test development

1. haven't muched focused on the UI
2. used tailwindcss for minmal styling
3. tried acheived as much as I can in 2.5 hours
4. for single detail route usually there is a dedicated api endpoint which can be used to fetch details
   but there was only a single route, so I decided to used context for setting on the listing and reading the context on the detail page this way every time user clicks on propery item details gets changed and
   objective is acheived. also used hook for easy quick context consumption.
5. Maps integration would required API keys for GoogleMaps, I ran out of time so I skipped that bonus part.
6. routes for pages can also be organized in pages folder.
7. External state manager library such as zushtand or redux would be an overkill for this.
8. kept component clean and modulular for maintainability and code readability.

## how to run on local environment

clone the respository : https://github.com/salmaniz82/reactfrontend-test.git
cd reactfrontend-test
npm install : this will install all the dependencies required
npm run dev : this will spin the development server
app will be serving at : http://localhost:5173/

for build
npm run build : this will build for production deployment
npm run preview : for preview the build version
