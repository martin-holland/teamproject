pipeline {
    agent any
    
    tools {nodejs "node"}
<<<<<<< HEAD

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
=======
    
    stages {
        stage('Build') {
            steps {
>>>>>>> d6268df57799483dd6445e1350efb1495740a0ef
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
<<<<<<< HEAD
    }
}
=======
}
>>>>>>> d6268df57799483dd6445e1350efb1495740a0ef
