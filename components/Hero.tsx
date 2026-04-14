import Image from "next/image";

export default function Hero() {
  return (
    <main className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">FirelordArts</h1>
      <Image
        src="/images/img_9922.jpg"
        alt="Aidan"
        width={2160 / 4}
        height={2799 / 4}
      />
      <p className="mt-4 text-lg">Original handcrafted pieces</p>
    </main>
  );
}