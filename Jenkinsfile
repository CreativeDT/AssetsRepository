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

        stage('Stop & Remove Docker Containers') {
            steps {
                dir("${FULL_PATH}") {
                    sh 'docker compose down || true'
                }
            }
        }

        stage('Remove Docker Images') {
            steps {
                sh 'docker image prune -af || true'
            }
        }

        stage('Docker Compose Build & Up') {
            steps {
                dir("${FULL_PATH}") {
                    sh 'docker compose up -d --build'
                }
            }
        }
    }
}
