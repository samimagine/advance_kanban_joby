import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';

export default [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: parserTypeScript
        },
        plugins: {
            '@typescript-eslint': pluginTypeScript,
            react: pluginReact
        },
        rules: {
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            '@typescript-eslint/no-unused-vars': 'warn',
            'react/display-name': 'off'
        }
    }
];
