import { Link } from "react-router-dom";
import { BlogHeader, Sidebar, SiteFooter, wrap } from "./components/BlogParts";

const excerpt =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Massa lorem turpis lectus viverra. Nulla volutpat urna eget nisl mi, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra, nulla volutpat urna eget.";

const posts = [
  { img: "snap-pixel.png", title: "The snap pixel: how it works and how to install" },
  { img: "womens-day.png", title: "Have brands given up on international women's day?" },
  { img: "designers.png", title: "6 designers on the brands empowering women today" },
  { img: "gillette.png", title: "Gillette launches planet kind, a slightly more sustainable line of personal care." },
  { img: "snap-pixel-2.png", title: "The snap pixel: how it works and how to install" },
];

export default function BlogList() {
  return (
    <>
      <BlogHeader title="Blog" crumb="Home/Blog" />

      <main className={`${wrap} grid gap-12 pb-16 pt-10 xl:grid-cols-[minmax(0,1fr)_370px] xl:gap-[27px] xl:pb-[140px] xl:pt-[120px]`}>
        <div>
          {posts.map((p, i) => (
            <article key={i} className="mb-14">
              <Link to="/blog/post">
                <img src={`/images/blog/${p.img}`} alt="" className="aspect-[777/300] w-full object-cover" />
              </Link>
              <h2 className="mt-8 text-[22px] font-semibold uppercase leading-[1.5] text-ink sm:text-[31.25px] sm:leading-[47px]">
                <Link to="/blog/post" className="hover:text-brand">{p.title}</Link>
              </h2>
              <p className="mt-3 text-[12.8px] leading-5 text-body">{excerpt}</p>
              <Link
                to="/blog/post"
                className="mt-4 inline-block text-[20px] font-medium uppercase leading-[30px] text-brand underline hover:text-brand-dark"
              >
                Read more
              </Link>
            </article>
          ))}

          <nav className="flex justify-center gap-5 border-t border-[#e3e3ea] pt-6 text-[12.8px] font-medium text-body">
            {[1, 2, 3, 4, 5].map((n) => (
              <a key={n} href="/blog" className={n === 1 ? "text-body" : "hover:text-brand"}>{n}</a>
            ))}
          </nav>
        </div>

        <Sidebar />
      </main>

      <SiteFooter />
    </>
  );
}