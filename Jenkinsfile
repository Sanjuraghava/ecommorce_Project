pipeline {
  agent any

  environment {
    PROJECT_DIR = "ecommerce-project"
  }

  stages {
    stage('Clone Repository') {
      steps {
        git credentialsId: 'Git-PAT', url: 'https://github.com/Sanjuraghava/ecommorce_Project.git', branch: 'main'
      }
    }

    stage('Build & Run Containers') {
      steps {
        sh 'docker-compose down'
        sh 'docker-compose up -d --build'
      }
    }

    stage('Verify') {
      steps {
        sh 'docker ps'
      }
    }
  }

  post {
    failure {
      echo "Build failed!"
    }
    success {
      echo "Deployed successfully: Visit http://10.196.4.211:3000"
    }
  }
}
