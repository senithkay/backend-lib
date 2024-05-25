'use client'
import PersistentDrawerLeft from "@/components/MIUI/persistDrawer";


export default function Home() {
  return (
      <PersistentDrawerLeft>
        <main className={'min-h-[80vh]'}></main>
      </PersistentDrawerLeft>

  );
}
