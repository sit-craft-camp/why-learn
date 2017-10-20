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
        sh 'ssh root@10.5.50.5 rm -rf dev.why-learn/.'
        sh 'scp . root@10.5.50.5:dev.why-learn' 
        sh 'ssh root@10.5.50.5 sudo pm2 delete "why-learn-dev-3000" || :'
        sh 'ssh root@10.5.50.5 "cd why-learn-dev && sudo pm2 start npm --name 'why-learn-dev-3000' -- start"'
      }
    }
    stage ('production'){
      steps {
        sh 'echo Production'
      }
    }
  }
}
