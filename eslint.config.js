
import storybook from 'eslint-plugin-storybook';

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
    {
        ignores: ['dist', 'coverage', 'node_modules', '.storybook'],
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ['**/*.{ts,tsx}'],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },

        rules: {
            ...reactHooks.configs.recommended.rules,

            // Fast Refresh — предупреждение, не блокирующая ошибка
            'react-refresh/only-export-components': 'warn',

            // Слишком строго для некоторых сценариев управления состоянием
            'react-hooks/set-state-in-effect': 'warn',

            // В том числе ложные срабатывания на callback refs Floating UI
            'react-hooks/refs': 'off',

            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },

    storybook.configs['flat/recommended'],
);
