import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Image src="/about.jpeg" width="200" height="200" alt="avatar" />
      <div className="whitespace-pre-wrap">
        {`I am a first-year front-end developer working for a company that provides a nutritional subscription service.\nThis blog was created to post and archive development-related articles of interest.`}
      </div>
    </>
  );
}
