import { applyPolyfill, ReflowStrategy } from "custom-elements-hmr-polyfill";
import "./airframe-resets.css";
import "./af-foundation.css";
import "./palette.css";
import "./variables.css";
import "./af-stack.css";
import "./af-button.css";
import "./af-section.css";
import "./af-card.css";
import "./af-sidebar.css";
import "./af-footer.css";
import "./af-header.css";
import "./af-tag.css";
import "./styles.css";

import "./af-foundation.js";

// if you want to customize...
// resets the body's innerHTML, thus rerenders all elements
// but doesn't call all lifecycle methods in a standard way (less calls)
applyPolyfill(ReflowStrategy.RERENDER_INNER_HTML, 500);
