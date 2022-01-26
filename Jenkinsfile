pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Build') {
            steps {
                echo 'building the app'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'testing the app'
                sh 'npm test --passWithNoTests'
            }
        }
        stage('Deploy') {
            steps {
                echo 'deploying the app'
                sh 'node app.js'
            }
        }
        }
}
