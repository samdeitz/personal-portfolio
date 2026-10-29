# Styling preferences

- Prefer simple, readable Tailwind utilities for ordinary layouts. A simple layout should not require a large custom stylesheet or many special cases.
- Keep custom CSS small and purposeful: use it for sizing or responsive behavior that is genuinely clearer there. Do not create named CSS classes merely to wrap straightforward grid, gap, padding, or typography utilities.
- Avoid both long, cryptic utility expressions and unnecessary styling abstractions. Simplify the underlying layout rather than just moving complexity into a stylesheet.
- Parent layouts own spacing between children. Use consistent gaps for block lists, including nested blocks; individual blocks own their internal spacing, not margins separating them from neighbors.
- Use a shared divider component for horizontal story separators, with consistent color and thickness. The surrounding layout owns its spacing.
- Match the site's existing font family and visual weight. Avoid introducing unrelated fonts, arbitrary weights, or numerous one-off spacing values.
- Keep eyebrows close to the headings they describe. Project-name eyebrows must be prominent enough to identify the project immediately, rather than tiny muted metadata.

The user explicitly preferred the simplified project-story styling: ordinary layout utilities, a small stylesheet reserved for fluid headings and overview sizing, 4px eyebrow-to-heading spacing, and prominent 20px bold project names. Preserve that direction in future styling changes.
