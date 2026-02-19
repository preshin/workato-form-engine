// Core components
export { default as Form } from './core/FormRenderer';
export { default as FormRenderer } from './core/FormRenderer';
export { default as FormBuilder } from './core/FormBuilder';
export { default as FormEngineProvider } from './core/FormEngineProvider';
export { FormEngineContext } from './core/FormEngineProvider';

// Custom component utilities
export { createFormComponent } from './core/createFormComponent';
export { registerComponent } from './core/registry';

// Re-export ReactComponent from formiojs for backward compatibility with
// custom components that extend it (ColorPicker, AceEditor, etc.).
// New custom components should use createFormComponent() instead.
export { default as ReactComponent } from 'formiojs/components/_classes/field/Field';

// Re-export baseEditForm for custom component settings forms
export { default as baseEditForm } from 'formiojs/components/_classes/component/Component.form';

// Form schema helpers
export { removeSubmitFormio, removeAutoFocusFormio } from './utils/helpers';

// Re-export Formio singleton for advanced usage (component registration, etc.)
export { Formio } from 'formiojs';
