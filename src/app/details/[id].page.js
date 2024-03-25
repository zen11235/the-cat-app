// src/app/details/[id].page.js
import { useRouter } from "next/router";

export default function CatDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h2 className="text-2xl font-semibold">Kedi Detayları</h2>
      <p>Bu sayfa {id} ID'li kedinin detaylarını gösterir.</p>
    </div>
  );
}
