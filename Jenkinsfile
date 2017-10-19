pipeline {
  agent any
  stages {
    stage ('build') {
      steps {
        sh 'yarn install'
        sh 'yarn build'
      }
    }
    stage ('test') {
      steps {
        sh 'echo Test passed'
      }
    }
    stage ('development'){
      steps {
        sh 'sudo pm2 delete "why-learn-dev-3000" || :'
        sh 'sudo pm2 start npm --name "why-learn-dev-3000" -- start'
      }
    }
    stage ('production'){
      steps {
        sh 'echo Production'
      }
    }
  }
}
