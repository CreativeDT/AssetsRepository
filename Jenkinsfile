pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/CreativeDT/AssetsRepository.git'
        WORK_DIR = '/data/ai_projects/assetsRepo'
        REPO_NAME = 'AssetsRepository'
        FULL_PATH = "${WORK_DIR}/${REPO_NAME}/${REPO_DIR}"
    }
    stages {
        stage('Clone or Pull Repo') {
            steps {
                script {
                    if (fileExists("${WORK_DIR}/${REPO_NAME}")) {
                        dir("${WORK_DIR}/${REPO_NAME}") {
                            sh '''
                                  git fetch origin prod
                                  git reset --hard origin/prod
                                '''

                        }
                    } else {
                        dir("${WORK_DIR}") {
                            sh "git clone ${REPO_URL}"
                        }
                    }
                }
            }
        }
		
		 stage('Backup Docker Images and creating Tags') {
            steps {
                dir("${FULL_PATH}") {
			withCredentials([
                    string(credentialsId: 'ACR_USER', variable: 'ACR_USERNAME'),
                    string(credentialsId: 'ACR_PASS', variable: 'ACR_PASSWORD')
                ]){
                   
		sh 'docker login dtacrstore.azurecr.io -u $ACR_USERNAME -p $ACR_PASSWORD'
		sh 'docker pull dtacrstore.azurecr.io/asset-repo:v1'
		sh 'docker tag dtacrstore.azurecr.io/asset-repo:v1 dtacrstore.azurecr.io/asset-repo:$BUILD_NUMBER'
		sh 'docker push dtacrstore.azurecr.io/asset-repo:$BUILD_NUMBER'
	}

                }
            }
        }

        stage('Stop & Remove Docker Containers') {
            steps {
                dir("${FULL_PATH}") {
                    sh 'docker-compose down'

                }
            }
        }

        stage('Remove Docker Images') {
            steps {
                sh 'docker image prune -af'
            }
        }

        stage('Docker Compose Build & Up') {
            steps {
                dir("${FULL_PATH}") {
		  sh 'docker build --build-arg BUILD_ID=$BUILD_NUMBER -t assetsrepository-frontend -f ../Dockerfile ../'
                  sh 'docker-compose up -d'
                }
            }
        }
	stage('Docker Image Push to ACR') {
            steps {
                dir("${FULL_PATH}") {
		withCredentials([
                    string(credentialsId: 'ACR_USER', variable: 'ACR_USERNAME'),
                    string(credentialsId: 'ACR_PASS', variable: 'ACR_PASSWORD')
                ]){
		sh 'docker tag assetsrepository-frontend:latest dtacrstore.azurecr.io/asset-repo:latest'
		sh 'docker push dtacrstore.azurecr.io/asset-repo:latest'
		}			
                }
            }
        }
    }
}
