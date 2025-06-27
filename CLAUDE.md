# Project Instructions for Claude

## Code Quality Checks
When you have completed implementation tasks in this project, ALWAYS run the following command before finalizing:
```bash
npm run check
```

This command will:
- Run Biome linter to check for code quality issues
- Run Biome formatter to ensure consistent code formatting
- Automatically fix any issues that can be auto-fixed

## Important Notes
- This project uses Biome for both linting and formatting
- All JavaScript/TypeScript files should pass Biome checks
- The configuration is defined in biome.json