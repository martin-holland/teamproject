pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Build') {
            steps {
                sh 'npm build'
            }
        }
        }
        stage('Test') {
            steps {
                sh 'react-scripts test'
            }
        }
        }
}
