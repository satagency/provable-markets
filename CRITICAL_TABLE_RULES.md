# CRITICAL TABLE RULES - NEVER BREAK THESE

## 🚨 ABSOLUTE RULE: DO NOT TOUCH TABLE CSS WITHOUT EXPLICIT PERMISSION

### FORBIDDEN ACTIONS (NEVER DO THESE):

❌ **NEVER modify z-index values** in table CSS
❌ **NEVER change position properties** on sticky-actions
❌ **NEVER modify overflow properties** on table containers
❌ **NEVER restructure table HTML** without explicit approval
❌ **NEVER "improve" or "optimize" table CSS**
❌ **NEVER add new CSS properties** to existing table styles
❌ **NEVER remove existing CSS properties** from table styles

### CURRENT WORKING VALUES (DO NOT CHANGE):

```css
/* Header sticky actions - WORKING PERFECTLY */
.table-header .sticky-actions {
  background-color: #161818 !important;
  z-index: 10;  /* DO NOT CHANGE */
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.4);
}

/* Row sticky actions - WORKING PERFECTLY */
.table-row .sticky-actions {
  background-color: #1A1A1A !important;
  z-index: 5;  /* DO NOT CHANGE */
}

/* Row hover - WORKING PERFECTLY */
.table-row:hover .sticky-actions {
  background-color: #1A1A1A !important;
  z-index: 30;  /* DO NOT CHANGE */
}
```

### BEFORE MAKING ANY TABLE CHANGES:

1. **ASK PERMISSION FIRST** - "Can I modify the table CSS?"
2. **EXPLAIN EXACTLY** what you want to change and why
3. **WAIT FOR EXPLICIT APPROVAL** before touching anything
4. **IF DENIED** - do not make the change, find another solution

### EMERGENCY PROCEDURE:

If table breaks due to other changes:
1. **DO NOT try to fix it yourself**
2. **IMMEDIATELY report** what broke
3. **WAIT for instructions** on how to fix it
4. **DO NOT experiment** with CSS values

### REMEMBER:

- These tables are WORKING PERFECTLY
- Any change risks breaking the sticky action panels
- The z-index values are CRITICAL and must not be changed
- When in doubt, DON'T TOUCH IT

## CURRENT STATUS: ✅ WORKING PERFECTLY - DO NOT MODIFY
