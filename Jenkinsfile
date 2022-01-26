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
            }
        }
        stage('Deploy') {
            steps {
                echo 'deploying the app'
            }
        }
        }
}
