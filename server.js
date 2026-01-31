import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// tampilkan index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API generate script
app.post("/generate-script", async (req, res) => {
  const { niche, duration } = req.body;

  const script = `Judul: ${niche.toUpperCase()}

Hook:
Tahukah kamu tentang ${niche}? Simak sampai habis!

Isi:
Ini adalah video ${duration === "short" ? "YouTube Shorts" : "video panjang"} dengan topik ${niche}.
Konten ini cocok untuk automation channel.

Closing:
Follow untuk konten menarik lainnya!`;

  res.json({ script });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

