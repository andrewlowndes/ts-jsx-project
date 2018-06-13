import { RenderResult } from "./RenderResult";
import { Component } from "./Component";

declare global {
  export namespace JSX {
    type IntrinsicElements = { [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K]> }
  }
}

export default class DomCreator {
  public static Fragment = Symbol('fragment');

  public static Component = Component;

  public static createFragment(children: Array<RenderResult>): DocumentFragment {
    let fragment = document.createDocumentFragment();
  
    children.forEach((child) => {
      if (child === null) {
        return;
      }
  
      const childType = typeof child;
      
      if (childType === 'string' || childType == 'number') {
        fragment.appendChild(document.createTextNode('' + child));
        return;
      }
  
      if (child instanceof Node) {
        fragment.appendChild(child);
        return;
      }
    });
  
    return fragment;
  }

  public static createElement(tagName: string | Symbol | (typeof Component) | Function, args?: { [key: string]: any }, ...children: Array<RenderResult>): Node | null {
    if (typeof tagName === 'string') {
      const dom: HTMLElement = document.createElement(tagName as keyof HTMLElementTagNameMap),
        props: Partial<HTMLElement> = args;

      if (props) {
        for (let key in props) {
          const val: any = (props as any)[key];
          
          (dom as any)[key] = val;
        }
      }
  
      if (children) {
        dom.appendChild(DomCreator.createFragment(children));
      }
  
      return dom;
    }

    if (tagName === DomCreator.Fragment) {
      return DomCreator.createFragment(children);
    }

    if (tagName.constructor) {
      const component = new (tagName as any)({...args, children: children });
    
      if (component.render) {
        return component.render();
      }

      return component;
    }
  }
}
