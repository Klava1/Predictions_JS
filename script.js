const btn = document.querySelector(".btn");
const par = document.querySelector(".par");

const predictions = [
  "This week brings a surge of energy and determination. Embrace new challenges; they will lead to unexpected victories. Trust your instincts, especially in personal relationships.",
  "A time of reflection and inner growth awaits you. Financial opportunities may arise; be wise in your investments. Reconnect with old friends for comfort and advice.",
  "Creativity will be your guiding star this week. Collaborative projects will flourish, bringing rewarding connections. Beware of miscommunication; clarity is key.",
  "Emotional balance is within reach. Focus on self-care and nurturing relationships. A significant decision regarding your career path may present itself.",
  "Your charisma will open doors in unexpected places. Embrace leadership roles; your guidance is needed. A romantic encounter could spark a lasting connection.",
  "Attention to detail will lead to success in complex tasks. A new hobby or skill may capture your interest. Health and wellness should be a priority.",
  "Harmony in your personal life brings peace of mind. A creative project could turn into a lucrative opportunity. Travel plans may face delays, but patience will pay off.",
  "Intuition is your ally in making important decisions. A chance encounter could lead to a powerful collaboration. Protect your energy from negativity.",
  "Adventure calls, bringing new experiences and learning. Your optimism will inspire those around you. Financial planning now will reap benefits later.",
  "Hard work will bring recognition and advancement. Balance professional ambitions with personal time. An old friend may seek your advice or support.",
];

btn.addEventListener("click", function () {
  let randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
  par.style.display = "block";
  par.textContent = randomPrediction;
});
