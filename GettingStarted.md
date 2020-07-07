# ZenQuoter application

Sample Node.js application used during DevopsDays Amsterdam 2020 Online, as part of the GitHub Actions coding challenges.

## Running the application locally

1. Install node packages
    ```shell
    npm install
    ```

2. Set the ```BASE_URL``` environment variable to **https://devopsdaysams.azurewebsites.net/api/AddToWall**
    ```Powershell
    $env:BASE_URL="https://devopsdaysams.azurewebsites.net/api/AddToWall"
    ```
    or 
    ```bash
    export BASE_URL=https://devopsdaysams.azurewebsites.net/api/AddToWall
    ```

3. Run the application
    ```shell
    node index.js
    ```

4. Navigate to the application to add your quote to the wall

    ```http://localhost:3000/addtowall?repoUrl=<your github repo url>```

5. Display the [Zen wall](https://aka.ms/wallofzen)


## Running the application from Docker

Make sure you have Docker running locally or that your Docker client points to a Docker host.

1. Build the docker image
    ```shell
    docker build -t zenquoter .
    ```

2. Run the container and expose the app on local port 80 - specify the base url environment variable
    ```shell
    docker run -d -p 80:80 -e BASE_URL=https://devopsdaysams.azurewebsites.net/api/AddToWall zenquoter
    ```
3. Navigate to the application to add your quote to the wall

    ```http://localhost/addtowall?repoUrl=<your github repo url>```

4. Display the [Zen wall](https://aka.ms/wallofzen)
