import { Card, CardContent } from "@/components/ui/card";

export function PersonalNote() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="border-slate-200 bg-white">
          <CardContent className="grid gap-6 p-8 lg:grid-cols-[0.4fr_1fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">A little more about me</p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">
                Practical, global, and people-focused.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-600">
              Originally from Brazil and now based in the United States, I bring a background that combines
              technology, leadership, business ownership, and a practical problem-solving mindset. Outside
              of my technical work, I value family, learning, faith, travel, and building things that create
              real value for people.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
