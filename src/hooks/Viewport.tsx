import { ReactNode, RefObject, createContext, createRef, useContext } from "react";

type viewportProps = {
  children: ReactNode;
}

const canvas = createRef<HTMLCanvasElement>();

export const ViewportContext = createContext<RefObject<HTMLCanvasElement>>(canvas);

export function ViewportProvider({children}: viewportProps) {
  return <ViewportContext.Provider value={canvas}>
    {children}
  </ViewportContext.Provider>;
}

export function useViewport() {
  return useContext(ViewportContext);
}
