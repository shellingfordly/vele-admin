
import router from '/@/router';

function handleError(e: Error) {
  console.error(e);
}

// page switch
export function useGoPath() {
  const { push } = router;
  function goPath(path:string) {
    if (!path) return;
    push(path).catch(handleError)
  }
  return goPath;
}
