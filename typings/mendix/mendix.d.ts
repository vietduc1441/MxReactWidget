declare namespace mendix {
    namespace lib {
        /**
         * Mendix Client Object
         */
        class MxObject {
            constructor();
            get(attribute: string): any;
            getGuid(): string;
            set(attribute: string, value: any);
            addReference(attribute: string, guid: string): boolean;
            addReferences(attribute: string, guids: string[]): boolean;
            getReference(reference: string): any;
            getReferences(attribute: string): any;
            removeReferences(attribute: string, guids: string[]): boolean;
        }
        class MxContext {
            constructor();
            getTrackEntity(): string;
            getTrackId(): string;
            getTrackObject(): MxObject;
            hasTrackEntity(): boolean;
            hasTrackId(): boolean;
            hasTrackObject(): MxObject;
            setTrackEntity(entity: string): void;
            setTrackId(guid: string): void;
            setTrackObject(obj: MxObject): void;
        }
    }
}
declare module "mendix/lib/MxObject" {
    var exp: "mendix/lib/MxObject"
    export =exp;
}
declare module "mendix/lib/MxContext" {
    var exp: "mendix/lib/MxContext"
    export =exp;
}
declare module mxui {
    module dom {
        export function create(element: string, props: any, children?: HTMLDivElement): HTMLDivElement;
        export function create(element: string, props: any, ...children?: HTMLDivElement[]): HTMLDivElement;

        export function create(element: string, props: any, children1?: HTMLDivElement[], children2?: any[]): HTMLDivElement;

        export function addCss(path: string, docnullable?: Document, medianullable?: string): void;
    }
}
declare module "mxui/dom" {
    export = mxui.dom;
}
declare namespace mx {
    namespace data {
        export function get(param: any);
        export function subscribe(param: any);
        export function unsubscribe(param: any);
        export function action(param: any)
        export function create(params: any);
        export function commit(param: { mxobj: mendix.lib.MxObject, callback: (param: any) => any, error: (param: any) => any, onValidation?: (param: any) => any }, scope?: any);
        export function remove(args: any, scope?: any);
    }
    namespace ui {
        export function error(param: any)
        export function action(name: string, params: any, scope?: any);
        export function confirmation(param: { content: string, proceed: string, cancel: string, handler?: () => any });
        export function showProgress(param?: any)
        export function hideProgress(param?: any)
        export function openForm(path: any, args: any, scope?: any)
    }
}