import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import "./compiler_Ch0S6Clm.mjs";
import { c as renderComponent, m as renderTemplate } from "./jsx-runtime_D07qUfjN.mjs";
import { h as InvalidComponentArgs, q as AstroError } from "./errors-data_DhXRgCZ7.mjs";
// node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
// node_modules/@keystatic/astro/internal/keystatic-astro-page.astro
var keystatic_astro_page_exports = /* @__PURE__ */ __exportAll({
	default: () => $$KeystaticAstroPage,
	file: () => $$file,
	prerender: () => false,
	url: () => void 0
});
var $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Keystatic", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "C:/Users/vrubino/Documents/portfolio/node_modules/@keystatic/astro/internal/keystatic-page.js",
		"client:component-export": "Keystatic"
	})}`;
}, "C:/Users/vrubino/Documents/portfolio/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);
var $$file = "C:/Users/vrubino/Documents/portfolio/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
// \0virtual:astro:page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro
var page = () => keystatic_astro_page_exports;
export { page };
