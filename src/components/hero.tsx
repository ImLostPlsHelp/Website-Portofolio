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
        <div className="tech-stack container-fluid d-flex flex-column align-items-center justify-content-start mt-5 border border-primary rounded-2">
          <h3 className="text-white display-4">Tech Stack</h3>
          <div className="row">
            <div className="col">
              <p className="text-white">Javascript</p>
            </div>
            <div className="col">
              <img
                src="/bootstrap-fill.svg"
                alt=""
                width="20"
                height="20"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="text-white">Bootstrap</p>
            </div>
            <div className="col">
              <p className="text-white">React</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
