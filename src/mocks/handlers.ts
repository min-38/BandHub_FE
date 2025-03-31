import { http, HttpResponse } from "msw";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const handlers = [
  http.post(`${baseUrl}/api/login`, () => {
    console.log("로그인");
    const responseBody = {
      id: 1,
      username: "asd",
      password: "asd",
      accessToken: "mock-access-token",
    };
    const responseOptions = {
      status: 200,
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    };
    return HttpResponse.json(responseBody, responseOptions);
  }),
  http.post(`${baseUrl}/api/logout`, () => {
    console.log("로그아웃");
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
  http.post(`${baseUrl}/api/signup`, async () => {
    console.log("회원가입");
    return HttpResponse.text(JSON.stringify("user_exists"), {
      status: 403,
    });
    // return HttpResponse.text(JSON.stringify("ok"), {
    //   headers: {
    //     "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
    //   },
    // });
  }),
];
