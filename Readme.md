# Instructions of use
+ Go into both the frontend and backend folders and run the `npm install command`
+ Make the backend's `.env` file based on the `.env.example` file
+ Generate the db's migrations using `npx prisma migrate dev`
+ Run the backend server `npm run dev`
+ Serve the front end `ng s -o`
#### PS: The register is not implemented on the frontend side yet. so either use postman to make a user by going through the register endpoint, or comment out the use of the AuthGuard from the frontend dashboard route
