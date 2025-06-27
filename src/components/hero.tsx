function Hero() {
  return (
    <>
      <div className="hero container-fluid d-flex flex-column pt-5">
        <div className="main-content container-fluid d-flex flex-row align-items-start justify-content-start pb-1">
          <div className="hero-text">
            <h1 className="text-white display-1">Maurits Sitinjak</h1>
            <h2 className="text-warning display-2">Fullstack Developer</h2>
          </div>
        </div>
        <div className="aside-icons container text-center">
          <aside className="hero-aside d-flex flex-column align-items-start justify-content-start">
            <div className="hero-aside-icon d-flex gap-2">
              <a
                href="https://www.linkedin.com/in/maurits-sitinjak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width="40"
                  height="40"
                  className="linkedin-icon"
                  style={{
                    filter:
                      "invert(29%) sepia(94%) saturate(1946%) hue-rotate(197deg) brightness(96%) contrast(101%)",
                  }}
                />
              </a>
              <a
                href="https://github.com/ImLostPlsHelp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/github.svg"
                  alt="GitHub"
                  width="40"
                  height="40"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </a>
            </div>
          </aside>
        </div>
        <div className="tech-stack container-fluid d-flex flex-column align-items-center justify-content-center mt-5 border border-primary rounded-2">
          <h3 className="text-white display-3">Tech Stack</h3>
          <div className="row gx-4 gy-4 w-100 d-flex justify-content-center align-items-center text-center mt-4">
            <div className="col-6 col-md-4 col-lg-3">
              <p className="text-white heading-3">Javascript</p>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <img
                src="/bootstrap-fill.svg"
                alt=""
                width="20"
                height="20"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="text-white heading-3">Bootstrap</p>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <p className="text-white heading-3">React</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
