import { FaPlay, FaHeart, FaChevronDown, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BlogHeader, Sidebar, SiteFooter, wrap } from "./components";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Massa lorem turpis lectus viverra. Nulla volutpat urna eget nisl mi, scelerisque. Fusce cursus massa ut egestas.";

const body = "text-base leading-6 text-body";
const small = "text-[12.8px] leading-5 text-body";

const socials = [FaFacebookF, FaInstagram, FaTwitter, FaYoutube];

const meta = [
  ["icon-date.png", "January 25, 2021"],
  ["icon-author.png", "Charlie Herwitz"],
  ["icon-comment.png", "50 Comment"],
];

function Comment({ img, name, size = 48 }) {
  return (
    <div className="flex gap-3">
      <img
        src={`/images/blog/${img}`}
        alt=""
        className="shrink-0 rounded-full object-cover"
        style={{ width: size, height: size }}
      />
      <div>
        <p className="text-[12.8px] font-semibold uppercase text-brand">{name}</p>
        <p className={`mt-1 ${small}`}>{lorem}</p>
        <p className="mt-1 text-[12.8px] text-body">Like · Reply · Share</p>
      </div>
    </div>
  );
}

export default function BlogPost() {
  return (
    <>
      <BlogHeader title="The snap pixel: how it works and how to install" crumb="Home/Blog/Blog details" />

      <main className={`${wrap} grid gap-12 pb-16 pt-10 xl:grid-cols-[minmax(0,1fr)_370px] xl:gap-[27px] xl:pb-[140px] xl:pt-[120px]`}>
        <article>
          <img src="/images/blog/snap-pixel.png" alt="" className="aspect-[777/300] w-full object-cover" />

          
          <div className="mt-[60px] flex flex-wrap items-center gap-x-[35px] gap-y-2 text-base font-medium uppercase text-ink">
            {meta.map(([icon, text]) => (
              <span key={text} className="flex items-center gap-2">
                <img src={`/images/blog/${icon}`} alt="" className="h-[20px] w-[20px]" />
                {text}
              </span>
            ))}
          </div>

          
          <p
            className={`mt-[55px] ${body} first-letter:float-left first-letter:mr-2 first-letter:text-[48px] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-brand`}
          >
            The Memphis Design movement is one of unlikeliest success stories in the history of design. Like so
            many artistic reactions, it began as an outlet for its creators, a way to rail against and confound
            elite sensibilities. The result was a style that was revolutionary in its time and whose spirit is a
            continual source of inspiration to this day.
          </p>
          <p className={`mt-6 ${body}`}>
            As popular and influential as Memphis Design has been over the years, it can sometimes get a bad
            rap. It is a loud, colorful style that is hard to separate from its era. And when implemented
            without care, it can make some design projects feel antiquated. On the other hand, a good designer
            can turn these sins into virtues: obnoxious retro becoming lively nostalgia.
          </p>
          <p className={`mt-10 ${body}`}>
            Memphis Design is a 1980s design aesthetic characterized by scattered, brightly colored shapes and
            lines. It typically combines circles and triangles with black-and-white graphic patterns such as
            polka dots and squiggly lines.
          </p>

          
          <div className="relative mt-[70px]">
            <img src="/images/blog/detail-video.png" alt="" className="aspect-[777/300] w-full object-cover" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand ring-8 ring-white/30">
              <FaPlay size={14} />
            </span>
          </div>

          
          <blockquote className="mt-[60px] rounded-[10px] bg-brand px-8 py-6 text-center text-base leading-6 text-white">
            Imagine you're at a party, and you're bored. You've been bored for a while—years, it feels like. You
            wonder how a party, something that is supposed to be fun, can feel like it's draining the life out
            of your very soul. As you look around the yawning faces of the guests, you realize it's going to
            take drastic measures to salvage any excitement out of this long night. So you sneak a desperate
            gulp of your drink, slip on your tinted sunglasses and leap atop of the sofa. You've sacrificed
            yourself to karaoke.
          </blockquote>

          
          <div className="mt-[60px] grid grid-cols-2 gap-[30px]">
            <img src="/images/blog/detail-esig.png" alt="" className="aspect-[740/800] w-full object-cover" />
            <img src="/images/blog/detail-pattern.png" alt="" className="aspect-[740/800] w-full object-cover" />
          </div>
          <div className="mt-[48px] grid gap-[30px] md:grid-cols-2">
            <p className={`${body} px-5`}>
              The birth of Memphis Design was a lot like this, starting with a gathering of architects and
              industrial designers in Milan, Italy in 1981. But it wasn't the party that bored the guests. It
              was the general state of design—how creativity had stagnated to become corporate and uniform.
            </p>
            <p className={`${body} px-5`}>
              Long before all this, there had been a number of fine art and design movements that precipitated
              Memphis Design, and these were likely on the guests' minds as they traced where it all had gone
              wrong. Kadinsky composition On White Kadinsky's work also likely inspired the Memphis design
              movement.
            </p>
          </div>

          
          <div className="mt-[70px] flex gap-5 rounded-[10px] bg-white p-6 shadow-[0_0_24px_rgba(35,34,51,0.1)]">
            <img
              src="/images/blog/author-charlie.png"
              alt="Charlie Herwitz"
              className="h-[96px] w-[96px] shrink-0 rounded-full object-cover"
            />
            <div>
              <h4 className="text-[20px] font-semibold uppercase leading-[30px] text-ink">Charlie Herwitz</h4>
              <p className="text-[12.8px] text-brand">UI Designer</p>
              <p className={`mt-2 ${small}`}>{lorem}</p>
              <div className="mt-3 flex">
                {socials.map((Icon, i) => (
                  <a
                    key={i}
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex h-[16px] w-[36px] items-center justify-center hover:text-brand ${
                      i > 0 ? "border-l border-[#d9d9e0]" : ""
                    } ${i === 0 ? "text-ink" : "text-ink"}`}
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          
          <section className="mt-14">
            <div className="flex items-center justify-between border-b-2 border-ink pb-2 text-[12.8px] font-semibold uppercase text-ink">
              <span>3 Comments</span>
              <span>Disqus</span>
              <span className="flex items-center gap-2">
                <img src="/images/blog/icon-gwen.png" alt="" className="h-[24px] w-auto" /> Gwen
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between text-[12.8px] uppercase text-body">
              <span className="flex items-center gap-2"><FaHeart className="text-brand" size={11} /> Recommend</span>
              <span className="flex items-center gap-2">Sort by best <FaChevronDown size={10} /></span>
            </div>
            <textarea
              placeholder="Join the discussion…"
              className="mt-4 h-[60px] w-full resize-none border border-[#e3e3ea] p-3 text-[12.8px] outline-none placeholder:text-body"
            />

            <div className="mt-6 space-y-6">
              <Comment img="ruben.png" name="Ruben Vetrovs" />
              <div className="space-y-6 pl-[60px]">
                <Comment img="wilson.png" name="Wilson Schleifer" size={40} />
                <Comment img="desirae.png" name="Desirae Geidt" size={40} />
              </div>
            </div>
          </section>
        </article>

        <Sidebar />
      </main>

      <SiteFooter />
    </>
  );
}
