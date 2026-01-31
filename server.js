import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ROUTE UTAMA (INI YANG TADI BELUM ADA)
app.get("/", (req, res) => {
  res.send("YT Automation Tool is running successfully 🚀");
});

// CONTOH ROUTE GENERATE
app.post("/generate", (req, res) => {
  const { niche } = req.body;

  if (!niche) {
    return res.status(400).json({ error: "Niche is required" });
  }

  res.json({
    title: `10 Fakta Menarik Tentang ${niche}`,
    script: `Halo! Hari ini kita akan membahas tentang ${niche}. Jangan lupa subscribe!`
  });
});

// PORT WAJIB RAILWAY
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
