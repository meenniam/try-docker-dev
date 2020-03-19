

    first we have to build image:

        "docker build -t {imageName}" -f {dockerfileName} {pathToDockerFile}
        example docker build -t try-multi-api dockerfile.dev .
    
    how to run docker-compose dev:

        "docker-compose -f docker-compose.yml -f docker-compose.dev.yml up" 
        (if you want to run docker deamon(run background) just add -d)

    or:

        create file {filename}.sh
        and add command above in this file 
        and then you just run:
            "sh {filename}.sh"


