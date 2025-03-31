/* eslint-disable import/no-anonymous-default-export */
"use server";

import { redirect } from "next/navigation";

export default async (
  prevState: { message: string | null },
  formData: FormData
) => {
  if (!formData.get("email") || !(formData.get("email") as string)?.trim()) {
    return { message: "no_email" };
  }
  if (
    !formData.get("nickname") ||
    !(formData.get("nickname") as string)?.trim()
  ) {
    return { message: "no_nickname" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      }
    );
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    return { message: null };
  }

  if (shouldRedirect) {
    redirect("/home");
  }
  return { message: null };
};
