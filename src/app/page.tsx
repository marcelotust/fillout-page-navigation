import { PageNavigation } from "./components/page-navigation/PageNavigation";

export default function Home() {
  return (
    <div className='grid items-center grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <PageNavigation />
      </main>
    </div>
  );
}
