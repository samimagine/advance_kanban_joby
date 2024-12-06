import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, 'src');

const testTemplate = componentName => `
import React from 'react';
import { render, screen } from '@testing-library/react';
import ${componentName} from './${componentName}';

describe('${componentName} Component', () => {
    it('renders correctly', () => {
        render(<${componentName} />);
        // Add your assertions here
    });
});
`;

function createTestFiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);

        if (fs.statSync(fullPath).isDirectory()) {
            createTestFiles(fullPath);
        } else if (file.endsWith('.tsx') && !file.endsWith('.test.tsx')) {
            const componentName = path.basename(file, '.tsx');
            const testFilePath = path.join(dir, `${componentName}.test.tsx`);

            if (!fs.existsSync(testFilePath)) {
                fs.writeFileSync(testFilePath, testTemplate(componentName), 'utf8');
                console.log(`Test file created: ${testFilePath}`);
            }
        }
    });
}

createTestFiles(targetDir);
