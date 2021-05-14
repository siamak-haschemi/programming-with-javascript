/**
 * @returns {any|undefined} Persisted state from localStorage, or 'undefined' if localStorage is empty.
 */
export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

/**
 * @param state saves the provided state in the localStorage.
 */
export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

export const deleteFromLocalStorage = () => {
  saveStateToLocalStorage(undefined);
};