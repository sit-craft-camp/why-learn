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
        sh 'pm2 delete --name "why-learn-dev-3000" || :'
        sh 'pm2 start npm --name "why-learn-dev-3000" -- start'
      }
    }
    stage ('production'){
      steps {
        sh 'echo Production'
      }
    }
  }
}
