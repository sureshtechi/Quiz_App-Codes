pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Cloning Git') {
            steps {
                git 'https://github.com/sureshtechi/Quiz_App-Codes.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
       
        stage('Docker image creation') {
           steps {
                echo 'Hello World'
            }
        }
    }
}
