let tasks: string[] = []; // In-memory store; use DB in prod

export async function GET() {
  return Response.json({ tasks });
}

export async function POST(request: Request) {
  const { task } = await request.json();
  tasks.push(task);
  return Response.json({ success: true });
}