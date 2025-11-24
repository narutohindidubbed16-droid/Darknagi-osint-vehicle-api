export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { rc } = req.query;

  if (!rc) {
    return res.status(400).json({
      error: true,
      message: "RC number required: /api/vehicle?rc=MH04KA0151",
      source_by: "@OsintUchihaProBot"
    });
  }

  try {
    const apiKey = "demo123";
    const url =
      `https://vehicle-api-isuzu3-8895-nexusxnikhils-projects.vercel.app/api/vehicle?apikey=${apiKey}&vehical=${rc}`;

    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json({
      error: false,
      rc: rc.toUpperCase(),
      result: data,
      source_by: "@OsintUchihaProBot"
    });

  } catch (e) {
    return res.status(500).json({
      error: true,
      message: "Server error",
      details: e.message,
      source_by: "@OsintUchihaProBot"
    });
  }
}
