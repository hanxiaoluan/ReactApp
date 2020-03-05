pipeline {
    agent {
        docker {
            image 'node:12.14'
            args '-m 1G -v /home/jenkins/.ssh:/home/node/.ssh'
        }
    }
    stages {
        stage('Install') {
            steps {
                dir("${env.WORKSPACE}/react-app"){
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                dir("${env.WORKSPACE}/react-app"){
                    sh 'export NODE_OPTIONS=--max_old_space_size=1000 && npm run build'
                }
            }
        }
        stage('publish') {
            steps {
                dir("${env.WORKSPACE}/react-app"){
                    sh 'whoami'
                    sh 'scp -r build autojenkins@www.greatwebtech.cn:~/hanxiaoluan/ReactApp'
                }
            }
        }
    }
}
