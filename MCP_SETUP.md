# Figma MCP (Model Context Protocol) Setup

This project uses Figma MCP to enable AI assistants to interact directly with Figma files.

## What is MCP?

Model Context Protocol (MCP) is a protocol that allows AI assistants to connect to external tools and services. With Figma MCP, you can:
- Read design files directly
- Extract design tokens and variables
- Get component information
- Export assets
- Access design documentation

## Installation

### Prerequisites
- Node.js 18+
- Figma API Token (already configured in `.env.local`)

### 1. Install Figma MCP Server

The MCP server will be automatically installed when you start Cursor IDE with the configuration. Alternatively, you can install it globally:

```bash
npm install -g figma-context-mcp
```

### 2. Configuration

The MCP configuration is located at `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "figma-context-mcp@latest"],
      "env": {
        "FIGMA_API_KEY": "${FIGMA_API_TOKEN}"
      }
    }
  }
}
```

### 3. Environment Variables

Make sure your `.env.local` has the Figma API token:

```env
FIGMA_API_TOKEN=your_figma_personal_access_token_here
NEXT_PUBLIC_FIGMA_FILE_ID=your_figma_file_id_here
NEXT_PUBLIC_FIGMA_PROJECT_ID=your_figma_project_id_here
```

**To get your Figma API Token:**
1. Go to [Figma Settings](https://www.figma.com/settings)
2. Scroll to "Personal access tokens"
3. Click "Create new token"
4. Copy the token and add to `.env.local`

**To get your Figma File ID:**
1. Open your Figma file
2. Copy the URL: `https://www.figma.com/design/FILE_ID/...`
3. The FILE_ID is the long string after `/design/`

## Usage

### In Cursor IDE

1. Open Cursor IDE
2. The MCP server will start automatically (check the MCP panel)
3. Use natural language to interact with Figma:
   - "Get the design tokens from my Figma file"
   - "Extract color variables from the current file"
   - "Show me the typography styles in the design"
   - "Export all icons from the Figma file"

### Available MCP Tools

When connected, the AI can use these tools:

- **get_file** - Retrieve file structure and nodes
- **get_node** - Get specific node details
- **get_components** - List all components
- **get_styles** - Extract style definitions
- **get_variables** - Get design tokens/variables
- **export_image** - Export images/assets
- **search_nodes** - Search within the file

## Example Prompts

```
"Get all color variables from the Figma file and convert them to CSS custom properties"

"Extract the typography scale from Figma and generate Tailwind config"

"Read the component documentation from Figma and create React components"

"Export all icon components from Figma as SVG files"

"Get the spacing tokens from Figma variables"
```

## Troubleshooting

### MCP Server Not Starting
1. Check that `FIGMA_API_TOKEN` is set in `.env.local`
2. Ensure Node.js is installed: `node --version`
3. Try reinstalling: `npm install -g figma-context-mcp`

### Authentication Errors
1. Verify your Figma API token is valid
2. Check that the token has access to the file
3. Regenerate token in Figma settings if needed

### File Access Issues
1. Ensure the Figma file is accessible (not private or restricted)
2. Verify the `NEXT_PUBLIC_FIGMA_FILE_ID` is correct
3. Check file permissions in Figma

## Resources

- [Figma Context MCP Repository](https://github.com/GLips/Figma-Context-MCP)
- [Figma REST API Documentation](https://www.figma.com/developers/api)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)

## Integration with Design Tokens

Once MCP is connected, you can sync design tokens:

1. **Extract tokens from Figma:**
   ```
   "Get all design tokens from Figma variables"
   ```

2. **Generate token files:**
   The AI will create:
   - `tokens/colors.json`
   - `tokens/typography.json`
   - `tokens/spacing.json`
   - `src/styles/design-tokens.css`

3. **Transform with Style Dictionary:**
   ```bash
   npm run build-tokens
   ```

4. **Update Tailwind config** with the new tokens

## Current Figma File

**File URL:** https://www.figma.com/design/IasfDpqUwtRZOaWQ6C5Mtn/Joo-shadcn_ui-components-with-variables---Tailwind-classes--Copy-

This file contains:
- shadcn/ui components with variables
- Tailwind CSS classes
- Design tokens
- Component documentation
