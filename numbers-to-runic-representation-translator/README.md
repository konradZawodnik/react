## Install project, description of app
First of all according running app, you have to open terminal, go to directory, where you have opened that project, type `npm install` || `yarn install` to install all packages from package.json, then type `npm run build` || `yarn build`, to build app, and type `npm run start` || `yarn start` to run that app. Of course also command `npm run dev` || `yarn dev` should work, as it decribed in create-next-app. You can use `npm run dev` || `yarn dev` instead `npm run build` || `yarn build` and `npm run start` || `yarn start` if you want.
You should run that app, by opening http://localhost:3000 address.
So, when you see app, you could type digit from 1 to 9999 to get runic representation of selected digit.
Typing another digit will cause, that input will display validation error.
After typing correct digit, you could click button "Translate", you could see runic representation. Then it is possible to download that image on your computer, by clicking button "Download SVG".
I have added also some unit tests, to that app, command "npm run test" will run that tests.