import { useAppContext } from "@/context/AppContext";

export function usePersona() {
  const { persona, personaDetails, setPersona } = useAppContext();
  return { persona, personaDetails, setPersona };
}
