export default function SingerSection() {
  return (
    <section className="bg-[#f6efe6] py-12 mt-20">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold text-green-700">🎤 Special Performance</h2>
        <p className="text-gray-600 mt-2 text-lg">Live at EcoFair – Hyderabad</p>

        <video
          className="mt-6 rounded-xl w-full max-w-2xl mx-auto shadow-xl border border-green-200"
          src="/Singer.mp4"
          muted
          autoPlay
          loop
          playsInline
          controls
        ></video>

        <p className="text-gray-500 text-sm mt-3">*Tap the video for sound</p>
      </div>
    </section>
  );
}
