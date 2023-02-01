const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-teal-700 text-white">
      <div className="grid text-center pt-3 pb-8">
        <span>
          Created By <a href="https://github.com/miftahurasidqi?tab=repositories">@miftahurasidqi</a>
        </span>
        <span className="text-lg">Copyright © {year}</span>
      </div>
    </footer>
  );
};

export default Footer;
