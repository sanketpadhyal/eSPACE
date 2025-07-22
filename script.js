const apiKey = "ENTER_YOUR_API_HERE";

// 🔭 Load real-time NASA news headlines into ticker
async function loadNewsTicker() {
  try {
    const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.nasa.gov/rss/dyn/breaking_news.rss");
    const data = await res.json();

    const headlines = data.items.map(item => item.title).slice(0, 2);
    const container = document.getElementById("newsItems");

    container.innerHTML = "";
    headlines.forEach(h => {
      const span = document.createElement("span");
      span.textContent = h;
      span.style.marginRight = "60px";
      container.appendChild(span);
    });
  } catch (e) {
    console.error("NASA RSS Error:", e);
    document.getElementById("newsItems").innerHTML =
      "<span style='color:red;'>Failed to load real-time NASA news.</span>";
  }
}

// ⏳ DOM ready
document.addEventListener("DOMContentLoaded", () => {
  loadNewsTicker();
});
