/**
 * Подробный вывод ошибки в серверных компонентах (логи Vercel / Node).
 */
export function logServerError(scope: string, phase: string, err: unknown) {
  const prefix = `[${scope}] ${phase}`;
  if (err instanceof Error) {
    console.error(prefix, {
      name: err.name,
      message: err.message,
      stack: err.stack,
      cause: err.cause,
    });
    console.error(`${prefix} (message):`, err.message);
    if (err.stack) {
      console.error(`${prefix} (stack):`, err.stack);
    }
  } else {
    console.error(`${prefix} (non-Error):`, err);
    try {
      if (err !== null && typeof err === "object") {
        console.error(
          `${prefix} (JSON):`,
          JSON.stringify(err, Object.getOwnPropertyNames(err)),
        );
      } else {
        console.error(`${prefix} (value):`, String(err));
      }
    } catch {
      console.error(`${prefix} (String):`, String(err));
    }
  }
}
