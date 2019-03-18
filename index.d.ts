export function toast(options: Options): void;

export interface Options {
  message?: string | HTMLElement;
  type?: any;
  duration?: number;
  position?: any;
  dismissible?: boolean;
  pauseOnHover?: boolean;
  closeOnClick?: boolean;
  opacity?: number;
  animate?: ToastAnimation;
}



export interface ToastAnimation {
  in?: string;
  out?: string;
}

export function setDoc(newDoc: HTMLElement): void;
