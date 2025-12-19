import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "fr";

  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const finalLocale = cookieLocale || locale;

  const messages = (await import(`../../messages/${finalLocale}.json`)).default;

  return {
    locale: finalLocale,
    messages,
  };
});
