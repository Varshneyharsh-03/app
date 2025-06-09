import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { username, password } = await req.json();
  return NextResponse.json({
    user: {
      username: username,
      password: password,
    },
    message: "User signed in successfully",
  });
}
