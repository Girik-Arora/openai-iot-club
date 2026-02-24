export default function LogoMarquee() {
  return (
    <div className="overflow-hidden py-12 border-y border-white/10">
      <div className="flex gap-20 animate-marquee whitespace-nowrap text-gray-400">
        <span>OpenAI</span>
        <span>NVIDIA</span>
        <span>Arduino</span>
        <span>Raspberry Pi</span>
        <span>Google AI</span>
        <span>IoT Labs</span>
        <span>Embedded Systems</span>
      </div>
    </div>
  );
}