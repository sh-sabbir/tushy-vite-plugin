module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: 'standard-with-typescript',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
            './tsconfig.eslint.json',
            './tsconfig.json',
            './tsconfig.json',
        ]
    }
}