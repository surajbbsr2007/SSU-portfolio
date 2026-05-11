import { createContext, type ReactNode, useContext, useEffect, useMemo, useReducer } from "react";

type Persona = "Admin" | "Coordinator" | "Faculty" | "Auditor";
type Theme = "light" | "dark" | "system";

type State = {
  sidebarCollapsed: boolean;
  theme: Theme;
  persona: Persona;
};

type Action =
  | { type: "TOGGLE_SIDEBAR" }
  | { type: "SET_SIDEBAR"; payload: boolean }
  | { type: "SET_THEME"; payload: Theme }
  | { type: "SET_PERSONA"; payload: Persona };

const personaDetails = {
  Admin: { initials: "DA", name: "Dr. Admin", role: "Administrator" },
  Coordinator: { initials: "PC", name: "Prof. Coordinator", role: "Program Coordinator" },
  Faculty: { initials: "FS", name: "Dr. Faculty", role: "Faculty Member" },
  Auditor: { initials: "EA", name: "External Auditor", role: "Auditor" }
} as const;

const initialState: State = {
  sidebarCollapsed: false,
  theme: "light",
  persona: "Admin"
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
    case "SET_SIDEBAR":
      return { ...state, sidebarCollapsed: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_PERSONA":
      return { ...state, persona: action.payload };
    default:
      return state;
  }
}

type AppContextValue = State & {
  personaDetails: (typeof personaDetails)[Persona];
  toggleSidebar: () => void;
  setSidebarCollapsed: (value: boolean) => void;
  setTheme: (theme: Theme) => void;
  setPersona: (persona: Persona) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (value) => {
    const stored = window.localStorage.getItem("nba-sidebar-collapsed");
    return {
      ...value,
      sidebarCollapsed: stored ? stored === "true" : value.sidebarCollapsed
    };
  });

  useEffect(() => {
    window.localStorage.setItem("nba-sidebar-collapsed", String(state.sidebarCollapsed));
  }, [state.sidebarCollapsed]);

  const value = useMemo<AppContextValue>(
    () => ({
      ...state,
      personaDetails: personaDetails[state.persona],
      toggleSidebar: () => dispatch({ type: "TOGGLE_SIDEBAR" }),
      setSidebarCollapsed: (payload) => dispatch({ type: "SET_SIDEBAR", payload }),
      setTheme: (payload) => dispatch({ type: "SET_THEME", payload }),
      setPersona: (payload) => dispatch({ type: "SET_PERSONA", payload })
    }),
    [state]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const value = useContext(AppContext);
  if (!value) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return value;
}
