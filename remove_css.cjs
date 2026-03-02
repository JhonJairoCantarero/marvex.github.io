
const fs = require('fs');
const path = 'src/pages/index.astro';

try {
    const content = fs.readFileSync(path, 'utf8');
    // Handle CRLF or LF
    const lines = content.split(/\r?\n/);

    console.log(`Total lines: ${lines.length}`);
    console.log(`Line 91 (index 90): ${lines[90]}`);
    console.log(`Line 4685 (index 4684): ${lines[4684]}`);
    console.log(`Line 4686 (index 4685): ${lines[4685]}`);

    // We want to keep 0-90.
    // We want to skip 91-4685.
    // We want to keep 4686-end.

    // Verify if lines match expectations
    if (!lines[90].includes('<style is:global>')) {
        console.warn('Warning: Line 91 does not look like <style is:global>');
    }
    if (!lines[4684].includes('</style>')) {
        console.warn('Warning: Line 4685 does not look like </style>');
    }

    const newLines = [
        ...lines.slice(0, 91),
        ...lines.slice(4686)
    ];

    fs.writeFileSync(path, newLines.join('\n'), 'utf8');
    console.log('Successfully removed CSS block.');
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
