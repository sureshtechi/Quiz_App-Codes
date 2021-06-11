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
                bat '''npm install'''
            }
        }
        
        stage('Jest test'){
            steps{
                sh 'npm run test'
            }
        }
        
        stage('Docker image creation') {
            steps {
                bat '''docker login --username suresh1011 --password C274ViDd?miSZs-
                docker build . -t suresh1011/test1 --pull=true
                docker push suresh1011/test1
                '''
                echo "Completed docker image building"
            }
        }
    }
}
 
