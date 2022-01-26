pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('build') {
            steps {
                echo 'building the app'
                sh 'node App.js'
            }
        }
        stage('test') {
            steps {
                echo 'testing the app'
            }
        }
        stage('deploy') {
            steps {
                echo 'deploying the app'
            }
        }
        }
}
