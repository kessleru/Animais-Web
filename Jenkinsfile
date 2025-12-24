pipeline {
    agent any

    stages {
        stage('Instalar Dependências') {
            steps {
                // Instala o Webpack, Babel, ESLint e Prettier
                bat 'npm install'
            }
        }

        stage('Verificação (Lint)') {
            steps {
                // Roda o ESLint/Prettier antes da build para garantir código limpo
                bat 'npm run lint'
            }
        }

        stage('Compilação (Build)') {
            steps {
                // Executa o Webpack para gerar a pasta /dist ou /public
                echo 'Iniciando build com Webpack e Babel...'
                bat 'npm run build'
            }
        }
    }
}