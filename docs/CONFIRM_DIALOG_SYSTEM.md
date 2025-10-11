# Confirm Dialog System

A universal, accessible confirmation dialog system designed to replace ad-hoc popup implementations across the application.

## Overview

The Confirm Dialog System provides a standardized way to handle user confirmations for critical actions like deletions, data modifications, and other important operations. It features:

- **Centered, attention-commanding design** with backdrop blur
- **Accessibility-first** with proper ARIA attributes and keyboard navigation
- **Promise-based API** for clean async/await usage
- **Multiple variants** (danger, warning, info) with appropriate styling
- **Loading states** for async operations
- **Global state management** for consistent behavior

## Components

### ConfirmDialog.vue
The main dialog component with:
- Centered overlay with backdrop blur
- Slide-in animation with scale and translate effects
- Three variants: danger (red), warning (yellow), info (blue)
- Proper focus management and keyboard navigation
- Loading state support

### useConfirmDialog.ts
Composable providing:
- Promise-based API for easy async/await usage
- Global state management
- Convenience methods for common use cases
- Loading state control

## Usage

### Basic Usage

```vue
<template>
  <div>
    <button @click="handleDelete">Delete Item</button>
  </div>
</template>

<script setup>
import { useConfirmDialog } from '~/composables/useConfirmDialog'

const { confirmDelete } = useConfirmDialog()

const handleDelete = async () => {
  const confirmed = await confirmDelete('Important Document')
  
  if (confirmed) {
    // Perform delete operation
    console.log('Item deleted')
  }
}
</script>
```

### Custom Configuration

```vue
<script setup>
import { useConfirmDialog } from '~/composables/useConfirmDialog'

const { showDialog } = useConfirmDialog()

const handleCustomAction = async () => {
  const result = await showDialog({
    title: 'Custom Action',
    message: 'Are you sure you want to perform this custom action?',
    confirmText: 'Proceed',
    cancelText: 'Cancel',
    variant: 'warning',
    allowBackdropClose: false
  })
  
  if (result) {
    // Perform action
  }
}
</script>
```

### Async Operations with Loading

```vue
<script setup>
import { useConfirmDialog } from '~/composables/useConfirmDialog'

const { showDialog, setLoading } = useConfirmDialog()

const handleAsyncOperation = async () => {
  const confirmed = await showDialog({
    title: 'Process Data',
    message: 'This will process all pending data.',
    confirmText: 'Start',
    cancelText: 'Cancel',
    variant: 'info'
  })
  
  if (!confirmed) return
  
  // Set loading state
  setLoading(true)
  
  try {
    // Perform async operation
    await processData()
  } finally {
    setLoading(false)
  }
}
</script>
```

## API Reference

### useConfirmDialog()

Returns an object with the following methods:

#### Methods

- `showDialog(config: ConfirmDialogConfig): Promise<boolean>`
  - Shows a custom dialog with the provided configuration
  - Returns a promise that resolves to `true` if confirmed, `false` if cancelled

- `confirmDelete(itemName: string, customMessage?: string): Promise<boolean>`
  - Convenience method for delete confirmations
  - Uses danger variant with appropriate styling
  - Backdrop close disabled by default

- `confirmAction(action: string, itemName: string, customMessage?: string): Promise<boolean>`
  - Convenience method for action confirmations
  - Uses warning variant
  - Backdrop close enabled by default

- `showInfo(title: string, message: string): Promise<boolean>`
  - Convenience method for informational dialogs
  - Uses info variant
  - Only shows confirm button (no cancel)

- `setLoading(loading: boolean): void`
  - Sets the loading state of the current dialog
  - Disables buttons and shows loading spinner

- `hideDialog(): void`
  - Programmatically closes the current dialog
  - Resolves the promise with `false`

### ConfirmDialogConfig

```typescript
interface ConfirmDialogConfig {
  title: string                    // Dialog title
  message: string                  // Dialog message
  confirmText?: string            // Confirm button text (default: "Confirm")
  cancelText?: string             // Cancel button text (default: "Cancel")
  variant?: 'danger' | 'warning' | 'info'  // Dialog variant (default: "info")
  allowBackdropClose?: boolean    // Allow closing by clicking backdrop (default: true)
  confirmButtonClass?: string     // Custom CSS classes for confirm button
}
```

### Variants

- **danger**: Red styling for destructive actions (deletions, permanent changes)
- **warning**: Yellow styling for potentially risky actions (modifications, exports)
- **info**: Blue styling for informational dialogs and neutral confirmations

## Accessibility Features

- **ARIA attributes**: Proper `role="dialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`
- **Keyboard navigation**: 
  - `Escape` key closes dialog (if `allowBackdropClose` is true)
  - `Enter` key confirms action
- **Focus management**: Focus is trapped within the dialog and restored on close
- **Screen reader support**: Proper labeling and descriptions

## Animation Details

- **Backdrop**: Fade in/out with blur effect
- **Dialog**: Scale and translate animation (95% → 100% scale, translate-y-4 → 0)
- **Timing**: 300ms enter, 200ms leave transitions
- **Easing**: ease-out for enter, ease-in for leave

## Global Integration

The system is automatically registered globally via the `confirm-dialog.client.ts` plugin:

- `ConfirmDialog` component is available globally
- `useConfirmDialog` composable is provided via `$confirmDialog`
- Global state is managed automatically

## Best Practices

1. **Use appropriate variants**:
   - `danger` for destructive actions
   - `warning` for potentially risky actions
   - `info` for neutral confirmations

2. **Disable backdrop close** for critical actions:
   ```typescript
   { allowBackdropClose: false }
   ```

3. **Provide clear, actionable messages**:
   - Be specific about what will happen
   - Mention consequences when relevant
   - Use clear, concise language

4. **Handle loading states** for async operations:
   ```typescript
   setLoading(true)
   try {
     await performOperation()
   } finally {
     setLoading(false)
   }
   ```

5. **Use convenience methods** when possible:
   - `confirmDelete()` for deletions
   - `confirmAction()` for general actions
   - `showInfo()` for informational dialogs

## Migration Guide

To migrate from existing popup implementations:

1. Replace `window.confirm()` calls with `confirmDelete()` or `showDialog()`
2. Replace custom modal components with the global `ConfirmDialog`
3. Update event handlers to use async/await pattern
4. Remove custom popup CSS and JavaScript
5. Test accessibility with screen readers and keyboard navigation

## Examples

See the following files for complete examples:
- `/pages/test-confirm-dialog.vue` - Comprehensive test page
- `/components/examples/ConfirmDialogExample.vue` - Usage examples
- `/components/ui/ConfirmDialog.vue` - Component implementation
- `/composables/useConfirmDialog.ts` - Composable implementation
