pipeline {
    agent any
    environment {
        PORT = "85"
        DOCKERHUB_CREDENTIAL_ID = "dockerhub"
        IMAGE_NAME = "vatsalviven/devops-project"
        CONTAINER_NAME = "devops-project"
        GIT_REPO = "https://github.com/vivatsal/To-do-list.git"
        GIT_BRANCH = "main"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: "${GIT_BRANCH}", url: "${GIT_REPO}"
            }
        }
        stage('Build') {
            steps {
                script {
                    sh "sudo docker build . -t myapp"
                }
            }
        }
        stage('Deploy Docker Image') {
            steps {
                sh "sudo docker run -it -p 87:80 -d myapp"
            }
        }
    }
}
