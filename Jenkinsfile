pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'node calclibrary.js'
            }
        }
    }
}