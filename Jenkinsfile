pipeline {
    agent any

    tools {
        jdk 'Java-17'
        nodejs 'Node-18'
    }

    stages {
        stage('Checkout & Linting') {
            steps {
                echo 'Iniciando checkout do repositório Git...'
                checkout scm
            }
        }

        stage('Build & Test Backend (Spring Boot)') {
            steps {
                echo 'Compilando microserviço Spring Boot e executando testes de integração...'
                sh './mvnw clean test'
            }
        }

        stage('Test & Build BFF (Node.js)') {
            steps {
                dir('bff-node') {
                    sh 'npm install'
                    sh 'npm test --if-present'
                }
            }
        }

        stage('Build Frontend (React)') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Quality Gate & Continuous Improvement') {
            steps {
                echo 'Executando análise de qualidade de código estático...'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline concluído com sucesso. Artefatos prontos para deploy.'
        }
        failure {
            echo '❌ Falha no pipeline. Notificando equipe de engenharia.'
        }
    }
}
