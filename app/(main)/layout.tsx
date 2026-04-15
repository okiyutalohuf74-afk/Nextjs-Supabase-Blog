import { MainFooter, MainGrid, MainHeader } from "@/components/main";
import { logServerError } from "@/lib/log-server-error";
import { ReactNode } from "react";

/**
 * Сбои при рендере вложенных страниц (например app/(main)/page.tsx) часто не попадают
 * в этот catch — они обрабатываются границей ошибок Next или логируются в page.
 */
export default function MainLayout({ children }: { children: ReactNode }) {
  try {
    return (
      <>
        <MainHeader />
        <MainGrid>
          <div className="min-h-full py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl">{children}</div>
            </div>
          </div>
        </MainGrid>
        <MainFooter />
      </>
    );
  } catch (err) {
    logServerError("MainLayout", "render", err);
    throw err;
  }
}
