import InformationForm from "../app/InformationForm/InformationForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center ont-[family-name:var(--font-geist-sans)]">
      <header className="bg-[#fefefe] border flex flex-row justify-between p-6 p-16 h-full max-h-24 w-full max-w-full sticky"></header>
      <main className="bg-slate-100 items-center justify-center flex flex-col pt-2 pl-8 pr-8 max-w-md sticky h-full w-full">
        <InformationForm />
      </main>
      <footer className="bg-[#fefefe] flex justify-start pb-8 flex-col h-full items-start pl-16 sticky w-full"></footer>
    </div>
  );
}
