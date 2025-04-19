const data = [
    {
        id: 1,
        name: "Test Category"
    },
    {
        id: 2,
        name: "Another Cat"
    }
];


export function categoriesLoader() {
    // const res = await fetch("/api/dashboard");
    // if (!res.ok) {
    //   throw new Response("Failed to load dashboard", { status: res.status });
    // }
    //return res.json(); // Data will be available via useLoaderData

    return {data: data};
  }