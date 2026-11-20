import {
  FaRegCalendarAlt, FaRegUser, FaRegComment, FaPlay, FaHeart, FaChevronDown,
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
} from "react-icons/fa";
import { BlogHeader, Sidebar, SiteFooter, wrap } from "./BlogParts";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Massa lorem turpis lectus viverra. Nulla volutpat urna eget nisl mi, scelerisque. Fusce cursus massa ut egestas.";
const loremLong =
  lorem + " Ullamcorper risus tempor, ac nunc libero urna, feugiat. Nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor.";
const body = "text-[12.8px] leading-5 text-body";

const socials = [FaFacebookF, FaInstagram, FaTwitter, FaYoutube];

function Avatar({ img, size }) {
  return (
    <img src={`/images/blog/${img}`} alt="" className="shrink-0 rounded-full object-cover" style={{ width: size, height: size }} />
  );
}

function Comment({ img, name, size = 48 }) {
  return (
    <div className="flex gap-3">
      <Avatar img={img} size={size} />
      <div>
        <p className="text-[12.8px] font-semibold uppercase text-brand">{name}</p>
        <p className={`mt-1 ${body}`}>{lorem}</p>
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

          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-[12.8px] font-medium uppercase text-ink">
            <span className="flex items-center gap-2"><FaRegCalendarAlt className="text-brand" /> January 15, 2021</span>
            <span className="flex items-center gap-2"><FaRegUser className="text-brand" /> Charlie Herwitz</span>
            <span className="flex items-center gap-2"><FaRegComment className="text-brand" /> 30 Comment</span>
          </div>

          <p className={`mt-6 ${body} first-letter:float-left first-letter:mr-2 first-letter:text-[44px] first-letter:font-semibold first-letter:leading-[1] first-letter:text-brand`}>
            {loremLong}
          </p>
          <p className={`mt-4 ${body}`}>{loremLong}</p>
          <p className={`mt-4 ${body}`}>{lorem}</p>

          {/* Video */}
          <div className="relative mt-8">
            <img src="/images/blog/detail-video.png" alt="" className="aspect-[777/300] w-full object-cover" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand ring-8 ring-white/30">
              <FaPlay size={14} />
            </span>
          </div>

          {/* Purple quote */}
          <blockquote className="mt-8 bg-brand p-6 text-[12.8px] leading-5 text-white">{loremLong}</blockquote>

          {/* Two photos */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <img src="/images/blog/detail-esig.png" alt="" className="aspect-[740/800] w-full object-cover" />
            <img src="/images/blog/detail-pattern.png" alt="" className="aspect-[740/800] w-full object-cover" />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <p className={body}>{loremLong}</p>
            <p className={body}>{loremLong}</p>
          </div>

          {/* Author */}
          <div className="mt-12 flex gap-5 border-t border-[#e3e3ea] pt-10">
            <img
              src="/images/blog/author-charlie.png"
              alt="Charlie Herwitz"
              className="h-[96px] w-[96px] shrink-0 rounded-full object-cover ring-2 ring-brand ring-offset-2"
            />
            <div>
              <h4 className="text-[20px] font-semibold uppercase leading-[30px] text-ink">Charlie Herwitz</h4>
              <p className="text-[12.8px] text-body">UI Designer</p>
              <p className={`mt-2 ${body}`}>{lorem}</p>
              <div className="mt-3 flex">
                {socials.map((Icon, i) => (
                  <a
                    key={i}
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex h-[16px] w-[36px] items-center justify-center hover:text-brand ${
                      i > 0 ? "border-l border-[#d9d9e0]" : ""
                    } ${i === 0 ? "text-brand" : "text-ink"}`}
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Comments */}
          <section className="mt-14">
            <div className="flex items-center justify-between border-b-2 border-ink pb-2 text-[12.8px] font-semibold uppercase text-ink">
              <span>3 Comments</span>
              <span>Disqus</span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-brand" /> Gwen
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