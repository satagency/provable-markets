# Table Implementation Guide - FINAL SOLUTION

## CRITICAL: Default Table Behavior

**ALL tables MUST follow this exact pattern. If they don't, they are WRONG.**

## Required Structure

```html
<div class="table-rows-container">
  <!-- Table Header - INSIDE scrollable container -->
  <div class="table-header">
    <div class="header-cell">Column 1</div>
    <div class="header-cell">Column 2</div>
    <!-- ... other columns ... -->
    <div class="header-cell actions-col sticky-actions">
      <span class="header-text">Actions</span>
    </div>
  </div>
  
  <!-- Table Rows - INSIDE same scrollable container -->
  <div class="table-row">
    <div class="row-cell">Data 1</div>
    <div class="row-cell">Data 2</div>
    <!-- ... other data ... -->
    <div class="row-cell actions-col sticky-actions">
      <div class="docked-actions-panel">
        <!-- Action buttons here -->
      </div>
    </div>
  </div>
</div>
```

## Required CSS

```css
/* Container with scroll */
.table-rows-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* Header - sticky to top, scrolls horizontally */
.table-header {
  display: flex;
  background-color: #161818;
  padding: 0;
  gap: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  min-width: max-content;
  position: sticky;
  top: 0;
  z-index: 20;
}

/* Base sticky actions */
.sticky-actions {
  position: sticky;
  right: 0;
  background-color: #161818 !important;
  z-index: 30;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
}

/* Header sticky actions - CRITICAL */
.table-header .sticky-actions {
  background-color: #161818 !important;
  z-index: 50;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.4);
  width: 190px !important;
  min-width: 190px !important;
  position: sticky;
  right: 0;
}

/* Row sticky actions */
.table-row .sticky-actions {
  background-color: #1A1A1A !important;
  z-index: 30;
}
```

## Behavior Requirements

1. **Header scrolls horizontally** with table content
2. **Header sticks to top** when scrolling vertically
3. **Actions column stays fixed** on right side during horizontal scroll
4. **Both vertical and horizontal scrolling** work properly

## NEVER DO THIS

❌ Header outside scrollable container
❌ Header without `position: sticky; top: 0;`
❌ Actions column without `position: sticky; right: 0;`
❌ Missing `overflow-y: auto; overflow-x: auto;` on container

## ALWAYS CHECK

Before committing any table changes:
1. Does the header scroll horizontally with content?
2. Does the header stick to the top during vertical scroll?
3. Does the actions column stay fixed on the right?
4. Do both scroll directions work properly?

If ANY of these fail, the table is broken and must be fixed.
