import BlogsUserView from '@/app/_components/Blogbanner/BlogsUserView'
export const metadata = {
    title: "Latest News & Events | Oviya MedSafe’s Insights on Drug Safety & Compliance",
    description:
      "Stay informed with Oviya MedSafe’s latest updates, industry events, and regulatory advancements in pharmacovigilance, drug safety, and global healthcare compliance.",
    keywords: [
      "pharmacovigilance news",
      "drug safety events",
      "regulatory advancements",
      "Oviya MedSafe updates",
      "pharma industry insights",
      "global compliance trends",
      "drug safety case studies",
      "healthcare innovations",
    ],
    alternates: {
      canonical: "https://oviyamedsafe.com/news",
    },
    openGraph: {
      title: "Latest News & Events | Oviya MedSafe’s Insights on Drug Safety & Compliance",
      description: "Stay informed with Oviya MedSafe’s latest updates, industry events, and regulatory advancements in pharmacovigilance, drug safety, and global healthcare compliance.",
      url: "https://www.oviyamedsafe.com/news",
      type: "website",
      images: [
        {
          url: "https://www.oviyamedsafe.com/mainlogo.png",
          width: 1200,
          height: 630,
          alt: "Oviya MedSafe Logo",
        },
      ],
    },
  };
  

const page = () => {
  return (
    <div>
        <BlogsUserView />
    </div>
  )
}

export default page